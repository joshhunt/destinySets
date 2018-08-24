import Dexie from 'dexie';

import * as destiny from 'app/lib/destiny';

const log = require('app/lib/log')('manifestData');

const oldDb = new Dexie('destinySetsCache');
oldDb.version(1).stores({
  dataCache: '&key, data'
});

oldDb.delete();

export const db = new Dexie('destinyManifest');
db.version(1).stores({
  dataCache: '&key, data'
});
db.version(2).stores({
  dataCache: '&key, data',
  manifestBlob: '&key, data',
  allData: '&key, data'
});
db.version(3).stores({
  manifestBlob: '&key, data',
  allData: '&key, data'
});

const VERSION = 'v7';

let manifestPromise;

function getManifest() {
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

        if (!data[0]) {
          throw new Error('Unable to getManifest, nothing cached');
        }

        // TODO: fail appropriately if no manifest is cached
        log('Manifest request failed, using previously cached');
        const id = data[0].split(':')[0];
        return { id, isStale: true };
      });
  }

  return manifestPromise;
}

function cleanUp(_id) {
  const id = [VERSION, _id].join(':');

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
    const key = [VERSION, id, path].join(':');

    log(`Requesting ${key}`);

    const fetchData = () => {
      const p = `${path}?id=${id}${VERSION}`;
      log(`Requesting ${p} from destiny.plumbing`);
      const url = `https://destiny.plumbing${p}`;
      return destiny.get(url).then(data => {
        db.dataCache.put({ key, data });

        resolve(data);
      });
    };

    db.dataCache
      .get(key)
      .then(cachedData => {
        if (cachedData) {
          log(`Loaded ${key} from cache`);
          resolve(cachedData.data);
        } else {
          log(`${key} is not in the cache`);
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
