import Dexie from 'dexie';

import * as destiny from 'app/lib/destiny';

const log = require('app/lib/log')('manifestData');

const oldDb = new Dexie('destinySetsCache');
oldDb.version(1).stores({
  dataCache: '&key, data'
});

oldDb.delete();

const db = new Dexie('destinyManifest');
db.version(1).stores({
  dataCache: '&key, data'
});

let manifestPromise;

function getManifest() {
  // return Promise.resolve({ id: 'ae3b053c99a4838ede0db0f9340498e1' });

  if (!manifestPromise) {
    manifestPromise = destiny
      .get('https://destiny.plumbing/index.json')
      .catch(() => {
        return db.dataCache.toCollection().primaryKeys();
      })
      .then(data => {
        if (data.id) {
          return data;
        }

        // TODO: fail appropraitely if no manifest is cached
        log('Manifest request failed, using previously cached');
        const id = data[0].split(':')[0];
        return { id, isStale: true };
      });
  }

  return manifestPromise;
}

function cleanUp(id) {
  db.dataCache
    .toCollection()
    .primaryKeys()
    .then(keys => {
      const toDelete = keys.filter(key => !key.includes(id));
      return db.dataCache.bulkDelete(toDelete);
    });
}

export function cachedGet(path, id) {
  return new Promise((resolve, reject) => {
    const key = [id, path].join(':');

    const fetchData = () => {
      const url = `https://destiny.plumbing${path}?id=${id}`;
      return destiny.get(url).then(data => {
        db.dataCache.put({ key, data });

        resolve(data);
      });
    };

    db.dataCache
      .get(key)
      .then(cachedData => {
        if (cachedData) {
          log(`Loaded ${path} from cache`);
          resolve(cachedData.data);
        } else {
          fetchData();
        }
      })
      .catch(err => {
        log('ERROR: Error loading data from cache');
        console.error(err);
        fetchData();
      })
      .finally(() => {
        cleanUp(id);
      });
  });
}

export function getDefinition(name, language = 'en', raw = true) {
  let path;
  if (raw) {
    path = `/${language}/raw/${name}.json`;
  } else {
    path = `/${language}/${name}.json`;
  }

  return getManifest().then(({ id }) => {
    return cachedGet(path, id);
  });
}
