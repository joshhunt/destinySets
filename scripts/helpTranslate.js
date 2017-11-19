require('isomorphic-fetch');
const osTmpdir = require('os-tmpdir');
const crypto = require('crypto');
const fs = require('fs');
const path = require('path');

const tmpdir = osTmpdir();
console.log('temp dir:', tmpdir);

function get(url) {
  const hash = crypto
    .createHash('md5')
    .update(url)
    .digest('hex');

  const cachePath = path.join(tmpdir, hash);

  return new Promise((resolve, reject) => {
    fs.access(cachePath, fs.constants.R_OK | fs.constants.W_OK, err => {
      if (err) {
        // fetch file

        console.log('not in cache, fetching', url);
        fetch(url)
          .then(r => r.json())
          .then(data => {
            const jason = JSON.stringify(data);
            fs.writeFile(cachePath, jason, () => {
              resolve(data);
            });
          })
          .catch(reject);

        return;
      } else {
        // return cached
        console.log('in cache', url);
        fs.readFile(cachePath, (err, _data) => {
          if (err) {
            return reject(err);
          }
          const data = JSON.parse(_data.toString());
          resolve(data);
        });
      }
    });
  });
}

// const get = url => fetch(url).then(r => r.json());

const LANUAGES = [
  'en',
  'fr',
  'de',
  'it',
  'ja',
  'pt-br',
  'es',
  'es-mx',
  'ru',
  'pl',
  'zh-cht'
];

Promise.all(
  LANUAGES.map(lang =>
    get(
      `https://destiny.plumbing/${lang}/raw/DestinyInventoryItemDefinition.json`
    )
  )
).then(allLangs => {
  const hash = 754979844;

  allLangs.forEach((defs, index) => {
    const code = LANUAGES[index];
    const item = defs[hash];

    console.log('');
    console.log('* ' + code);
    console.log('  ' + item.displayProperties.name);
    console.log('  ' + item.displayProperties.description);
  });
});
