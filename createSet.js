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

const SET_ITEM_HASHES = [
  959144972, // Bright Engram
  1798676003, // Bright Engram
  3215463713, // Bright Engram
  3712099029, // Bright Engram
];

const ITEM_HASHES = [];

fetch('https://destiny.plumbing/2/en/raw/DestinyInventoryItemDefinition.json')
  .then(r => r.json())
  .then(itemDefs => {
    console.log('Loaded items:', Object.keys(itemDefs).length);

    let sampleItem;
    let setItems;

    if (ITEM_HASHES.length) {
      sampleItem = { displayProperties: {} };

      setItems = ITEM_HASHES.map(itemHash => itemDefs[itemHash]);
    } else {
      sampleItem = itemDefs[SET_ITEM_HASHES[0]];

      setItems = SET_ITEM_HASHES.reduce((acc, setItemHash) => {
        const setItem = itemDefs[setItemHash];

        if (!setItem) {
          console.log('Unable to find item', setItemHash);
          return acc;
        }

        if (!setItem.gearset) {
          console.log('Item has no gearset', setItemHash);
          return acc;
        }

        const items = setItem.gearset.itemList
          .map(itemHash => itemDefs[itemHash])
          .filter(Boolean);

        return acc.concat(items);
      }, []);
    }

    // console.log(sampleItem);
    // console.log(setItems);

    setItems = uniq(setItems, item => item.hash);

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
      .filter(({ items }) => {
        return items && items.length > 0;
      })
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
