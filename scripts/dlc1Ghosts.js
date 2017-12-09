require('isomorphic-fetch');
const { flatMap, chain, forEach } = require('lodash');
const admin = require('firebase-admin');
const fs = require('fs');

const serviceAccount = require('../firebaseCreds.json');
const dlcGhosts = require('./dlc1GhostHashes');

const USE_CACHE = false;

const GHOST_TYPES = [
  'Mercury',
  'Io',
  'EDZ',
  'Crucible',
  'Titan',
  'Nessus',
  'Vanguard',
  'Strike'
];

function getDefs(defName) {
  if (USE_CACHE) {
    return getJSONFile('./scripts/data/itemDefsCache.json');
  }

  const url = `https://destiny.plumbing/en/raw/${defName}.json`;
  return fetch(url).then(r => r.json());
}

function getJSONFile(filename) {
  return new Promise((resolve, reject) => {
    fs.readFile(filename, (err, data) => {
      if (err) {
        return reject(err);
      }

      resolve(JSON.parse(data.toString()));
    });
  });
}

// Initialize the app with a service account, granting admin privileges
admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: 'https://destinysets-2.firebaseio.com'
});
const db = admin.database();

console.log('Requesting...');
const ref = db.ref('data/');

function getFirebaseData() {
  if (USE_CACHE) {
    return getJSONFile('./scripts/data/dataCache.json');
  }

  return ref.once('value').then(r => r.val());
}

Promise.all([getFirebaseData(), getDefs('DestinyInventoryItemDefinition')])
  .then(result => {
    const [data, itemDefs] = result;

    fs.writeFileSync('./scripts/data/dataCache.json', JSON.stringify(data));
    fs.writeFileSync(
      './scripts/data/itemDefsCache.json',
      JSON.stringify(itemDefs)
    );

    const ghostPlugData = chain(data)
      .values()
      .flatMap(profile => profile.ghosts)
      .filter(g => g.sockets)
      .filter(g => dlcGhosts.includes(g.itemHash))
      .groupBy(ghost => ghost.itemHash)
      .mapValues((ghostInstances, ghostHash) => {
        return chain(ghostInstances)
          .groupBy(ghost => {
            const variantKey = ghost.sockets
              .filter(s => s.plugHash)
              .map(s => s.plugHash)
              .filter(plugHash => {
                return !itemDefs[plugHash].itemCategoryHashes.includes(41); // exlucde shader
              })
              // .sort((a, b) => {
              //   return itemDefs[a].displayProperties.name.localeCompare(
              //     itemDefs[b].displayProperties.name
              //   );
              // })
              .join('|');

            if (variantKey.length < 1) {
              throw new Error('not log enough');
            }

            return variantKey;
          })
          .mapValues(l => l.length)
          .map((count, socketHashesKey) => {
            const sockets = socketHashesKey.split('|').map(Number);

            return {
              sockets,
              count
            };
          })
          .sortBy(c => c.count * -1)
          .value();
      })
      .value();

    const ghostsByPlanet = chain(ghostPlugData)
      .mapValues(values => {
        return flatMap(values, v => v.sockets);
      })
      .mapValues(sockets => {
        return chain(sockets)
          .reduce((acc, plugHash) => {
            const plug = itemDefs[plugHash];
            const name = plug.displayProperties.name.toLowerCase();

            for (var i = 0; i < GHOST_TYPES.length; i++) {
              let re = new RegExp(`\\b${GHOST_TYPES[i].toLowerCase()}\\b`);
              if (name.match(re)) {
                return [...acc, GHOST_TYPES[i]];
              }
            }

            return acc;
          }, [])
          .uniq()
          .value();
      })
      .value();

    console.log(ghostsByPlanet);

    // Log each shell and its plugs
    forEach(ghostPlugData, (plugCounts, ghostHash) => {
      const ghost = itemDefs[ghostHash];

      console.log(
        `${ghost.displayProperties.name} - ${ghostsByPlanet[ghostHash].join(
          ', '
        )} [${ghostHash}]`
      );

      plugCounts.forEach(({ sockets, count }) => {
        const socketStr = sockets
          .map(s => itemDefs[s].displayProperties.name)
          .join(', ');
        console.log(` - ${count}: ${socketStr}`);
      });
      console.log('');
    });

    fs.writeFileSync(
      './scripts/data/ghostPlugData.json',
      JSON.stringify(ghostPlugData)
    );
  })
  .catch(err => {
    console.log('got error');
    console.log(err);
  })
  .finally(() => {
    process.exit();
  });
