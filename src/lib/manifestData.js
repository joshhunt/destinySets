import Dexie from 'dexie';

import * as destiny from 'app/lib/destiny';

const log = require('app/lib/log')('db');

const oldDb = new Dexie('destinySetsCache');
oldDb.version(1).stores({
  dataCache: '&key, data',
});
oldDb.delete();

const oldDb2 = new Dexie('destinyManifest');
oldDb2.version(1).stores({
  dataCache: '&key, data',
});
oldDb2.delete();

const db = new Dexie('destinyManifest2');
db.version(1).stores({
  items: '&key, data',
  manifests: '&key, data',
});

let manifestPromise;

function getManifest() {
  // return Promise.resolve({ id: 'ae3b053c99a4838ede0db0f9340498e1' });

  if (!manifestPromise) {
    manifestPromise = destiny.get('https://destiny.plumbing/index.json');
  }

  return manifestPromise;
}

export function getItemsFromCache(queryHash) {
  return getManifest()
    .then(({ id }) => {
      const key = `${queryHash}|${id}`;
      return db.items.get(key);
    })
    .then(cachedItems => {
      return (cachedItems || {}).data || {};
    });
}

export function storeItemsInCache(queryHash, newItemDefs) {
  return Promise.all([getManifest(), getItemsFromCache(queryHash)]).then(
    ([{ id }, oldItemDefs]) => {
      const key = `${queryHash}|${id}`;
      const itemDefs = {
        ...oldItemDefs,
        ...newItemDefs,
      };

      const promise = db.items.put({ key, data: itemDefs });

      promise.then(() => {
        cleanUpCachedItems(key);
      });

      return promise;
    },
  );
}

function cleanUpCachedItems(id) {
  db.items
    .toCollection()
    .primaryKeys()
    .then(keys => {
      const toDelete = keys.filter(key => key !== id);
      toDelete.length && log(`Deleting old cached items`, toDelete);
      return db.items.bulkDelete(toDelete);
    });
}

function cleanUpCachedManifests(id) {
  db.manifests
    .toCollection()
    .primaryKeys()
    .then(keys => {
      const toDelete = keys.filter(key => !key.includes(id));
      return db.manifests.bulkDelete(toDelete);
    });
}

export function cachedGet(path, id) {
  return new Promise((resolve, reject) => {
    const key = id + path;

    const fetchData = () => {
      const url = `https://destiny.plumbing${path}?id=${id}`;
      return destiny.get(url).then(data => {
        db.manifests.put({ key, data });

        resolve(data);
      });
    };

    db.manifests
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
        cleanUpCachedManifests(id);
      });
  });
}

export function getDefinition(name, language = 'en') {
  const path = `/${language}/raw/${name}.json`;
  return getManifest().then(({ id }) => {
    return cachedGet(path, id);
  });
}
