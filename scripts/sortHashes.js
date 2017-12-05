const hashes = [];

require('isomorphic-fetch');
const {
  WEAPON,
  LEGENDARY
} = require('../src/views/DataExplorer/definitionSources');
const sortItemsIntoSections = require('../src/views/DataExplorer/sortItemsIntoSections')
  .default;

fetch('https://destiny.plumbing/en/raw/DestinyInventoryItemDefinition.json')
  .then(r => r.json())
  .then(itemDefs => {
    const weapons = Object.values(itemDefs).filter(item => {
      return (
        (item.itemCategoryHashes || []).includes(WEAPON) &&
        item.inventory.tierTypeHash === LEGENDARY &&
        item.displayProperties.name.match(/\s\d+$/)
      );
    });

    weapons.forEach(weapon => {
      console.log(`${weapon.hash}, // ${weapon.displayProperties.name}`);
    });

    console.log('\ntotal:', weapons.length);
    // const items = hashes.map(h => {
    //   if (!itemDefs[h]) {
    //     console.log('no def for hash', h);
    //   }
    //   return itemDefs[h];
    // });
    // console.log(JSON.stringify(sortItemsIntoSections(items.filter(Boolean))));
  });
