import * as ls from 'app/lib/ls';

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
}
