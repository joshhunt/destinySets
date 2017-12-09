import { flatMap } from 'lodash';
import collectInventory from 'app/lib/collectInventory';

let db;

function saveInventoryToFirebase(profileId, ghosts) {
  db.ref('data/' + profileId).set({
    ghosts
  });
}

export function saveInventory(profile, itemDefs) {
  require.ensure(['firebase'], function() {
    const firebase = require('firebase');

    if (!db) {
      firebase.initializeApp({
        apiKey: 'AIzaSyDA_n6Ix4o6K2vW4zlFFmWk2XCzqPesDZo',
        authDomain: 'destinysets.firebaseapp.com',
        databaseURL: 'https://destinysets-2.firebaseio.com',
        projectId: 'destinysets',
        storageBucket: 'destinysets.appspot.com',
        messagingSenderId: '621939283066'
      });

      db = firebase.database();
    }

    const profileId = profile.profile.data.userInfo.membershipId;
    const inventoryInstances = Object.values(collectInventory(profile));

    const ghosts = flatMap(inventoryInstances, itemInventorySet => {
      const item = itemDefs[itemInventorySet[0].itemHash];

      if (!(item.itemCategoryHashes && item.itemCategoryHashes.includes(39))) {
        return [];
      }

      return itemInventorySet.map(({ itemHash, itemInstanceId, $location }) => {
        const sockets = profile.itemComponents.sockets.data[itemInstanceId] || {
          sockets: []
        };
        return {
          itemHash,
          itemInstanceId,
          location: $location,
          sockets: sockets.sockets.filter(s => s.plugHash).map(s => ({
            plugHash: s.plugHash,
            isEnabled: s.isEnabled
          }))
        };
      });
    });

    saveInventoryToFirebase(profileId, ghosts);
  });
}
