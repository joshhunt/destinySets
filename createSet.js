require('isomorphic-fetch');
const { groupBy, uniq } = require('lodash');
const fs = require('fs');

const WEAPON = 1;
const ARMOR = 20;

const TITAN = 0;
const HUNTER = 1;
const WARLOCK = 2;

const CLASS_TYPE = {
  [TITAN]: 'Titan',
  [HUNTER]: 'Hunter',
  [WARLOCK]: 'Warlock',
};

const SET_ITEM_HASHES = [152970995, 1034907062, 3519016320, 413219098];

fetch('https://destiny.plumbing/2/en/raw/DestinyInventoryItemDefinition.json')
  .then(r => r.json())
  .then(itemDefs => {
    const sampleItem = itemDefs[SET_ITEM_HASHES[0]];

    let setItems = SET_ITEM_HASHES.reduce((acc, setItemHash) => {
      const setItem = itemDefs[setItemHash];
      const items = setItem.gearset.itemList
        .map(itemHash => itemDefs[itemHash])
        .filter(Boolean);

      return acc.concat(items);
    }, []);

    setItems = uniq(setItems);

    const sectionItems = groupBy(setItems, item => {
      if (item.itemCategoryHashes.includes(WEAPON)) {
        return 'weapon';
      } else if (item.itemCategoryHashes.includes(ARMOR)) {
        return item.classType;
      } else {
        return 'lolidk';
      }
    });

    const sections = [
      { title: 'Weapons', items: sectionItems.weapon },
      { title: 'Hunter armor', items: sectionItems[HUNTER] },
      { title: 'Titan armor', items: sectionItems[TITAN] },
      { title: 'Warlock armor', items: sectionItems[WARLOCK] },
    ]
      .filter(({ items }) => items.length > 0)
      .map(section => {
        const items = section.items.map(item => item.hash);
        return {
          title: section.title,
          items,
        };
      });

    const set = {
      name: sampleItem.displayProperties.name,
      description: sampleItem.displayProperties.description,
      sections,
    };

    console.log(JSON.stringify(set, null, 2));

    fs.writeFileSync('./newSet.json', JSON.stringify(set, null, 2));
  });
