import collectInventory from 'app/lib/collectInventory';

let db;

let inventoryStatsPromise;

const DISPLAY_INVENTORY_STATS = window.location.search.includes(
  'inventoryStats',
);

function saveToFirebase(prefix, profileId, data) {
  const key = `${prefix}/profiles/${profileId}`;
  db.ref(key).set(data);
}

export function getInventoryStats() {
  const url = 'https://api.destiny.plumbing/inventory-stats';

  if (!DISPLAY_INVENTORY_STATS) {
    return Promise.resolve(null);
  }

  if (!inventoryStatsPromise) {
    inventoryStatsPromise = fetch(url)
      .then(r => r.json())
      .then(data => data.inventory);
  }

  return inventoryStatsPromise;
}

export function saveInventory(profile) {
  require.ensure(['firebase'], function() {
    const firebase = require('firebase');

    if (!db) {
      firebase.initializeApp({
        apiKey: 'AIzaSyDA_n6Ix4o6K2vW4zlFFmWk2XCzqPesDZo',
        authDomain: 'destinysets.firebaseapp.com',
        databaseURL: 'https://destinysets-56ee0.firebaseio.com',
        projectId: 'destinysets',
        storageBucket: 'destinysets.appspot.com',
        messagingSenderId: '621939283066',
      });

      db = firebase.database();
    }

    const profileId = profile.profile.data.userInfo.membershipId;
    const inventory = collectInventory(profile);
    // const inventoryInstances = Object.values(inventory);

    // const ghosts = flatMap(inventoryInstances, itemInventorySet => {
    //   const item = itemDefs[itemInventorySet[0].itemHash];
    //
    //   if (!(item.itemCategoryHashes && item.itemCategoryHashes.includes(39))) {
    //     return [];
    //   }
    //
    //   return itemInventorySet.map(({ itemHash, itemInstanceId, $location }) => {
    //     const sockets = profile.itemComponents.sockets.data[itemInstanceId] || {
    //       sockets: [],
    //     };
    //     return {
    //       itemHash,
    //       itemInstanceId,
    //       location: $location,
    //       sockets: sockets.sockets.filter(s => s.plugHash).map(s => ({
    //         plugHash: s.plugHash,
    //         isEnabled: s.isEnabled,
    //       })),
    //     };
    //   });
    // });

    saveToFirebase('simpleInventory', profileId, {
      data: Object.keys(inventory),
    });
  });
}
