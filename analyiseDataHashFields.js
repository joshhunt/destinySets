require('isomorphic-fetch');
const { walkObject } = require('walk-object');

const seen = [];
const list = [];

(async function() {
  fetch('https://destiny.plumbing/2/en/raw/DestinyInventoryItemDefinition.json')
    .then(r => r.json())
    .then(data => {
      console.log(Object.keys(data).length, 'items');

      walkObject(data, ({ value, location, isLeaf }) => {
        const key = location[location.length - 1];

        if (
          key.toLowerCase &&
          key.toLowerCase().includes('hash') &&
          !seen.includes(key)
        ) {
          seen.push(key);
          list.push({ key, location });
        }
      });

      console.log('. ');
      console.log(' .');
      list.forEach(({ key, location }) => {
        console.log(key, '\t' + location.join('.'));
      });
    });
})();
