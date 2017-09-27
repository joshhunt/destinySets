require('isomorphic-fetch');
const _ = require('lodash');

fetch('https://destiny.plumbing/2/en/raw/DestinyInventoryItemDefinition.json')
  .then(r => r.json())
  .then(itemDefs => {
    _.forEach(itemDefs, item => {
      if (
        item &&
        item.inventory &&
        item.inventory.stackUniqueLabel &&
        item.inventory.stackUniqueLabel.includes('raid')
      ) {
        console.log('');
        console.log(item.hash, item.displayProperties.name);
        console.log(item.inventory.stackUniqueLabel);
      }
    });
  });
