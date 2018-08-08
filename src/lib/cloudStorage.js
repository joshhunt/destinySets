import * as ls from 'app/lib/ls';
import { mapValues, pickBy, isArray } from 'lodash';
import { ready } from 'app/lib/googleDriveAuth';
import { ARMOR_MODS_ORNAMENTS } from 'app/lib/destinyEnums';

const gapi = window.gapi;

const log = require('app/lib/log')('cloudStorage');
const fileIdLog = require('app/lib/log')('cloudStorage:getFileId');

let __fileId;

const VERSION_NEW = 'new';
const VERSION_NEW_2 = 'new-2';
const VERSION_NEW_3 = 'new-3';

function makeFileName(profile) {
  const profileData = profile.data.userInfo;
  const namePrefix = window.DESTINYSETS_ENV;
  return `inventory-${namePrefix}-${profileData.membershipType}-${
    profileData.membershipId
  }.json`;
}

export function getFileId({ profile }) {
  const fileName = makeFileName(profile);
  const lsFileId = ls.getGoogleDriveInventoryFileId(fileName);
  const fileId = __fileId || lsFileId;
  if (fileId) {
    lsFileId
      ? fileIdLog('Already have fileID from localStorage of ' + fileId)
      : fileIdLog('Already have fileID of ' + fileId);

    return Promise.resolve(fileId);
  }

  fileIdLog('Inventory filename is ' + fileName);

  return gapi.client.drive.files
    .list({ spaces: 'appDataFolder' })
    .then(resp => {
      fileIdLog('Google Drive file listing', { resp });

      if (!resp.result || !resp.result.files) {
        throw new Error('Invalid file listing from Google Drive');
      }

      const files = resp.result.files;
      const file = files.find(f => f.name === fileName);

      if (file) {
        fileIdLog('Found file', file);
        return file.id;
      }

      // couldn't find the file, lets create a new one.
      fileIdLog("Didn't find file, creating new one");
      return gapi.client.drive.files
        .create({
          name: fileName,
          media: {
            mimeType: 'application/json'
          },
          parents: ['appDataFolder']
        })
        .then(file => {
          fileIdLog('Created file', file);
          return file.result.id;
        });
    })
    .then(_fileId => {
      __fileId = _fileId;
      ls.saveGoogleDriveInventoryFileId(fileName, __fileId);

      return __fileId;
    });
}

export function listVersions(profile) {
  return ready
    .then(() => getFileId(profile))
    .then(fileId => gapi.client.drive.revisions.list({ fileId }))
    .then(data => data.result.revisions);
}

export function listAppDataFiles() {
  return ready
    .then(() => gapi.client.drive.files.list({ spaces: 'appDataFolder' }))
    .then(data => data.result.files);
}

export function getRevision(revisionId, profile) {
  return ready
    .then(() => getFileId(profile))
    .then(fileId =>
      gapi.client.drive.revisions.get({
        alt: 'media',
        fileId,
        revisionId
      })
    )
    .then(({ result }) => result);
}

let queueLibPromise;
let saveQueue;

function saveInventoryWorker(job, cb) {
  const { inventory, profile, raw } = job;

  log('Saving cloud inventory', { inventory, profile });
  ls.saveCloudInventory(inventory);

  const payload = raw
    ? inventory
    : {
        version: VERSION_NEW_3,
        ...inventory
      };

  log('Saving payload', { payload });

  return ready
    .then(() => getFileId(profile))
    .then(fileId => {
      log('Saving cloud inventory with fileID', fileId);

      return gapi.client.request({
        path: `/upload/drive/v3/files/${fileId}`,
        method: 'PATCH',
        params: {
          uploadType: 'media',
          alt: 'json'
        },
        body: JSON.stringify(payload)
      });
    })
    .then(resp => {
      log('Successfully saved to Google Drive', { resp });
      cb();
    })
    .catch(err => {
      log('ERROR saving to Google Drive', err);
      cb(err);
    });
}

export function saveInventory(_inventory, profile, raw = false) {
  const inventory = {
    ..._inventory,
    inventory: pickBy(_inventory.inventory, inventoryEntry => {
      if (inventoryEntry.manuallyObtained) {
        return false;
      } else {
        return true;
      }
    })
  };

  if (!queueLibPromise) {
    log('Requesting async/queue');
    queueLibPromise = import('async/queue');
  }

  queueLibPromise.then(queueLib => {
    if (!saveQueue) {
      saveQueue = queueLib(saveInventoryWorker, 1);
    }

    log('Pushing into save queue');
    saveQueue.push({ inventory, profile, raw });
  });
}

function removeArmorOrnamentsMigration(inventory, itemDefs) {
  log('Running removeArmorOrnamentsMigration', { inventory });

  return pickBy(inventory, (value, key) => {
    const item = itemDefs[key];
    if (!item || !item.itemCategoryHashes) {
      return true;
    }

    if (item.itemCategoryHashes.includes(ARMOR_MODS_ORNAMENTS)) {
      return false;
    }

    return true;
  });
}

function normaliseInstancesData(inventory) {
  log('Running normaliseInstancesData', { inventory });
  const newInventory = mapValues(inventory, inventoryItem => {
    if (inventoryItem.instances && !isArray(inventoryItem.instances)) {
      return {
        ...inventoryItem,
        instances: [inventoryItem.instances]
      };
    }

    return inventoryItem;
  });

  return { inventory: newInventory };
}

const BLACKLISTED_LOCATIONS = ['profileKiosks', 'characterKiosks'];
function removeKioskItemsMigration({ inventory }) {
  log('Running removeKioskItemsMigration', { inventory });

  const newInventory = pickBy(inventory, (value, key) => {
    const filtered = value.instances.filter(instance => {
      return !BLACKLISTED_LOCATIONS.includes(instance.location);
    });

    return filtered.length > 0;
  });

  return { inventory: newInventory };
}

export function getInventory(profile, itemDefs) {
  return ready
    .then(() => getFileId(profile))
    .then(fileId => {
      log('Getting cloud inventory for file ID ', fileId);

      return gapi.client.drive.files.get({
        fileId: fileId,
        alt: 'media',
        fields: '*'
      });
    })
    .then(result => {
      log('Resolving cloud inventory', { result });
      const data = result.result;

      log('Data is', data);

      if (data.version === VERSION_NEW_3) {
        return data;
      }

      if (data.version === VERSION_NEW_2) {
        return removeKioskItemsMigration(
          normaliseInstancesData(data.inventory)
        );
      }

      // Check if we need to migrate from the old format to new format
      if (data.version === VERSION_NEW) {
        return normaliseInstancesData(
          removeArmorOrnamentsMigration(data.inventory, itemDefs)
        );
      }

      log('Inventory needs migrating');

      // Yup, we need to migrate
      const migratedInventory = mapValues(data, (instancesArray, itemHash) => {
        return {
          itemHash,
          obtained: true,
          instances: instancesArray.map(instance => ({
            location: instance.$location
          }))
        };
      });

      delete migratedInventory.inventory;
      delete migratedInventory.plugData;

      return removeKioskItemsMigration(
        normaliseInstancesData(
          removeArmorOrnamentsMigration(migratedInventory, itemDefs)
        )
      );
    });
}
