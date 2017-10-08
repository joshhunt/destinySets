import Dexie from 'dexie';

import * as destiny from 'app/lib/destiny';

const oldDb = new Dexie('destinySetsCache');
oldDb.version(1).stores({
  dataCache: '&key, data',
});

oldDb.delete();

const db = new Dexie('destinyManifest');
db.version(1).stores({
  dataCache: '&key, data',
});

let manifestPromise;

function getManifest() {
  // return Promise.resolve({ id: 'ae3b053c99a4838ede0db0f9340498e1' });

  if (!manifestPromise) {
    manifestPromise = destiny.get('https://destiny.plumbing/2/index.json');
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
    const key = id + path;

    const fetchData = () => {
      const url = `https://destiny.plumbing/2${path}?id=${id}`;
      return destiny.get(url).then(data => {
        db.dataCache.put({ key, data });

        resolve(data);
      });
    };

    db.dataCache
      .get(key)
      .then(cachedData => {
        console.log(`Loaded ${path} from cache`);

        if (cachedData) {
          resolve(cachedData.data);
        } else {
          fetchData();
        }
      })
      .catch(err => {
        console.error('Error loading data from cache:');
        console.error(err);
        fetchData();
      })
      .finally(() => {
        cleanUp(id);
      });
  });
}

export function getDefinition(name, language = 'en') {
  const path = `/${language}/raw/${name}.json`;
  return getManifest().then(({ id }) => {
    return cachedGet(path, id);
  });
}
