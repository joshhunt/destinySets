require('isomorphic-fetch');
const _ = require('lodash');

fetch('https://destiny.plumbing/2/en/raw/DestinyInventoryItemDefinition.json')
  .then(r => r.json())
  .then(itemDefs => {
    _.forEach(itemDefs, item => {
      if (item && item.sourceData && item.sourceData.exclusive !== 0) {
        console.log(item.hash, item.displayProperties.name);
      }
    });
  });
