const gapi = window.gapi;

import * as ls from 'app/lib/ls';
import { ready } from 'app/lib/googleDriveAuth';

export function getInventory() {
  return new Promise((resolve, reject) => {
    const items = ls.getCloudInventory();

    setTimeout(() => {
      console.log('%cResolving cloud inventory', 'font-weight: bold', items);
      resolve(items);
    }, 1000);
  });
}

export function setInventory(inventory) {
  console.log('%cSetting cloud inventory', 'font-weight: bold', inventory);
  ls.saveCloudInventory(inventory);

  ready.then(() => {
    // Assuming Google API is authenticated
    console.log('Saving inventory to Google Drive');
    gapi.client
      .request({
        path: `/upload/drive/v3/files/inventory.json`,
        method: 'PATCH',
        params: {
          uploadType: 'media',
          alt: 'json'
        },
        body: JSON.stringify(inventory)
      })
      .then((...resp) => {
        console.log('Successfully saved to Google Drive', ...resp);
      })
      .catch(err => {
        console.error('Error saving to Google Drive');
        console.error(err);
      });
  });
}
