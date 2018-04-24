import * as ls from 'app/lib/ls';
import { mapValues, pickBy } from 'lodash';
import { ready } from 'app/lib/googleDriveAuth';
import { ARMOR_MODS_ORNAMENTS } from 'app/lib/destinyEnums';

const gapi = window.gapi;

const log = require('app/lib/log')('cloudStorage');
const fileIdLog = require('app/lib/log')('cloudStorage:getFileId');

let __fileId;

const VERSION_NEW = 'new';
const VERSION_NEW_2 = 'new-2';

function getFileId({ profile }) {
  const lsFileId = ls.getGoogleDriveInventoryFileId();
  const fileId = __fileId || lsFileId;
  if (fileId) {
    lsFileId
      ? fileIdLog('Already have fileID from localStorage of ' + fileId)
      : fileIdLog('Already have fileID of ' + fileId);

    return Promise.resolve(fileId);
  }

  const profileData = profile.data.userInfo;
  const namePrefix =
    localStorage.googleDriveInventoryNamePrefix || window.DESTINYSETS_ENV;
  const fileName = `inventory-${namePrefix}-${profileData.membershipType}-${
    profileData.membershipId
  }.json`;

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
      ls.saveGoogleDriveInventoryFileId(__fileId);
      return __fileId;
    });
}

export function setInventory(inventory, profile) {
  log('Setting cloud inventory', { inventory, profile });
  ls.saveCloudInventory(inventory);

  const payload = {
    version: VERSION_NEW_2,
    inventory
  };

  log('Payload to save is', { payload });

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
    })
    .catch(err => {
      log('ERROR saving to Google Drive', err);
    });
}

function removeArmorOrnamentsMigration(inventory, itemDefs) {
  log('Running removeArmorOrnamentsMigration');

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

      if (data.version === VERSION_NEW_2) {
        return data.inventory;
      }

      // Check if we need to migrate from the old format to new format
      if (data.version === VERSION_NEW) {
        log('Inventory is VERSION_NEW');
        return removeArmorOrnamentsMigration(data.inventory, itemDefs);
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

      return removeArmorOrnamentsMigration(migratedInventory);
    });
}
