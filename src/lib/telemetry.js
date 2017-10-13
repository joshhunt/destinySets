import * as firebase from 'firebase';

import * as destiny from 'app/lib/destiny';

const GHOST_BUCKET = 4023194814;

export default firebase.initializeApp({
  apiKey: 'AIzaSyDA_n6Ix4o6K2vW4zlFFmWk2XCzqPesDZo',
  authDomain: 'destinysets.firebaseapp.com',
  databaseURL: 'https://destinysets.firebaseio.com',
  projectId: 'destinysets',
  storageBucket: 'destinysets.appspot.com',
  messagingSenderId: '621939283066',
});

const db = firebase.database();

function saveInventoryToFirebase(profileId, inventory, ghosts) {
  db.ref('profile/' + profileId).set({
    combined: inventory,
    ghosts,
  });
}

export function saveInventory(profile, inventory) {
  const profileId = profile.profile.data.userInfo.membershipId;
  const ghosts = destiny
    .collectItemsFromProfile(this.profile, true)
    .filter(item => item.bucketHash === GHOST_BUCKET) // dodgy way to get all ghosts
    .map(item => {
      return {
        itemHash: item.itemHash,
        itemInstanceId: item.itemInstanceId,
        sockets: item.$sockets.sockets.map(s => s.plugHash).filter(Boolean),
      };
    });

  try {
    saveInventoryToFirebase(profileId, inventory, ghosts);
  } catch (e) {
    console.error('Error with inventory telemetry');
    console.error(e);
  }
}
