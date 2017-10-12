import * as firebase from 'firebase';

export default firebase.initializeApp({
  apiKey: 'AIzaSyDA_n6Ix4o6K2vW4zlFFmWk2XCzqPesDZo',
  authDomain: 'destinysets.firebaseapp.com',
  databaseURL: 'https://destinysets.firebaseio.com',
  projectId: 'destinysets',
  storageBucket: 'destinysets.appspot.com',
  messagingSenderId: '621939283066',
});

const db = firebase.database();

export function saveInventory(profileId, inventory, ghosts) {
  db.ref('profile/' + profileId).set({
    combined: inventory,
    ghosts,
  });
}
