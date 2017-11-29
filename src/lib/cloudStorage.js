const gapi = window.gapi;

import * as ls from 'app/lib/ls';
import { ready } from 'app/lib/googleDriveAuth';

const FILE_NAME = 'inventory.json';
let __fileId;

function getFileId() {
  const fileId = __fileId; // || ls.getGoogleDriveInventoryFileId();
  if (fileId) {
    console.info('[FILE ID] Already have fileId', fileId);
    return Promise.resolve(fileId);
  }

  const fileName = FILE_NAME;

  return gapi.client.drive.files
    .list({ spaces: 'appDataFolder' })
    .then(resp => {
      console.log('[FILE ID] resp', resp);
      if (!resp.result || !resp.result.files) {
        throw new Error('Invalid file listing from Google Drive');
      }

      const files = resp.result.files;
      const file = files.find(f => f.name === fileName);

      if (file) {
        console.info('[FILE ID] Found file', file);
        return file.id;
      }

      // couldn't find the file, lets create a new one.
      console.info("[FILE ID] Couldn't find the file, lets create a new one.");
      return gapi.client.drive.files
        .create({
          name: fileName,
          media: {
            mimeType: 'application/json'
          },
          parents: ['appDataFolder']
        })
        .then(file => {
          console.log('created file:', file);
          return file.result.id;
        });
    })
    .then(_fileId => {
      __fileId = _fileId;
      ls.saveGoogleDriveInventoryFileId(__fileId);
      return __fileId;
    });
}

export function setInventory(inventory) {
  console.log('%cSetting cloud inventory', 'font-weight: bold', inventory);
  ls.saveCloudInventory(inventory);

  return ready
    .then(() => getFileId())
    .then(fileId => {
      console.log(
        `%cSaving inventory to Google Drive ID ${fileId}`,
        'font-weight: bold'
      );
      return gapi.client.request({
        path: `/upload/drive/v3/files/${fileId}`,
        method: 'PATCH',
        params: {
          uploadType: 'media',
          alt: 'json'
        },
        body: JSON.stringify(inventory)
      });
    })
    .then((...resp) => {
      console.log('Successfully saved to Google Drive', ...resp);
    })
    .catch(err => {
      console.error('Error saving to Google Drive');
      console.error(err);
    });
}

export function getInventory() {
  return ready
    .then(() => getFileId())
    .then(fileId => {
      console.log('[GET INVENTORY] Fetching file ID', fileId);
      return gapi.client.drive.files.get({
        fileId: fileId,
        alt: 'media',
        fields: '*'
      });
    })
    .then(result => {
      console.log('[GET INVENTORY] Resolving inventoryFile', result);
      return result.result;
    });
}
