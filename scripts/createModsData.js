const path = require('path');
const fs = require('fs');
const { promisify } = require('util');
const crypto = require('crypto');

const axios = require('axios');
const lodash = require('lodash');
const tempDirectory = require('temp-dir');
const result = require('dotenv').config({ path: path.resolve('./.env.local') });

const readFile = promisify(fs.readFile);
const writeFile = promisify(fs.writeFile);

const API_KEY = process.env.REACT_APP_API_KEY;

const hashString = string =>
  crypto
    .createHash('md5')
    .update(string)
    .digest('hex');

async function getDefinitions() {
  const manifestResponse = await axios.get(
    'https://www.bungie.net/Platform/Destiny2/Manifest/',
    { headers: { 'x-api-key': API_KEY } }
  );

  const definitonsPath =
    manifestResponse.data.Response.jsonWorldContentPaths.en;
  const definitionsUrl = `https://www.bungie.net${definitonsPath}`;

  const hash = hashString(definitionsUrl);

  const tempDefsPath = path.join(tempDirectory, hash);
  let tempDefs;

  try {
    const tempDefsFile = await readFile(tempDefsPath);
    console.log('have cached definitions');
    tempDefs = JSON.parse(tempDefsFile.toString());
  } catch (e) {}

  if (tempDefs) {
    return tempDefs;
  }

  console.log('requesting definitions from remote');

  const defsResponse = await axios.get(definitionsUrl, {
    headers: { 'x-api-key': API_KEY }
  });

  const defs = defsResponse.data;

  await writeFile(tempDefsPath, JSON.stringify(defs));

  return defs;
}

const CATEGORY_MODS_HELMET = 1362265421;
const CATEGORY_MODS_ARMS = 3872696960;
const CATEGORY_MODS_CHEST = 3723676689;
const CATEGORY_MODS_LEGS = 3607371986;
const CATEGORY_MODS_CLASS = 3196106184;

const ARMOR_SPECIFIC_MODS = [
  CATEGORY_MODS_HELMET,
  CATEGORY_MODS_ARMS,
  CATEGORY_MODS_CHEST,
  CATEGORY_MODS_LEGS,
  CATEGORY_MODS_CLASS
];

const DSET_PRIMARY_CATEGORY_HELMET = 'HELMET';
const DSET_PRIMARY_CATEGORY_ARMS = 'ARMS';
const DSET_PRIMARY_CATEGORY_CHEST = 'CHEST';
const DSET_PRIMARY_CATEGORY_LEGS = 'LEGS';
const DSET_PRIMARY_CATEGORY_CLASS = 'CLASS';
const DSET_PRIMARY_CATEGORY_UNIVERSAL = 'UNIVERSAL';

const CATEGORY_HASH_TO_PRIMARY_CATEGORY = {
  [CATEGORY_MODS_HELMET]: DSET_PRIMARY_CATEGORY_HELMET,
  [CATEGORY_MODS_ARMS]: DSET_PRIMARY_CATEGORY_ARMS,
  [CATEGORY_MODS_CHEST]: DSET_PRIMARY_CATEGORY_CHEST,
  [CATEGORY_MODS_LEGS]: DSET_PRIMARY_CATEGORY_LEGS,
  [CATEGORY_MODS_CLASS]: DSET_PRIMARY_CATEGORY_CLASS
};

const SORTED_ENERGY_TYPES = [
  '1198124803', // Any
  '728351493', // Arc
  '591714140', // Solar
  '4069572561' // Void
];

const SORTED_PRIMARY_CATEGORIES = [
  DSET_PRIMARY_CATEGORY_HELMET,
  DSET_PRIMARY_CATEGORY_ARMS,
  DSET_PRIMARY_CATEGORY_CHEST,
  DSET_PRIMARY_CATEGORY_LEGS,
  DSET_PRIMARY_CATEGORY_CLASS,
  DSET_PRIMARY_CATEGORY_UNIVERSAL
];

(async function run() {
  const {
    DestinyInventoryItemDefinition,
    DestinyEnergyTypeDefinition
  } = await getDefinitions();

  const allMods = lodash(DestinyInventoryItemDefinition)
    .values()
    .filter(v => v.itemCategoryHashes)
    .filter(v => v.itemCategoryHashes.includes(4104513227)) // armour mods
    .filter(v => v.plug && v.plug.energyCost) // exlude ornaments
    // .sortBy(v => v.index)
    .value();

  const groupedMods = lodash(allMods)
    .groupBy(itemDef => {
      const categoryHash = itemDef.itemCategoryHashes.find(hash =>
        ARMOR_SPECIFIC_MODS.includes(hash)
      );

      return (
        CATEGORY_HASH_TO_PRIMARY_CATEGORY[categoryHash] ||
        DSET_PRIMARY_CATEGORY_UNIVERSAL
      );
    })
    .mapValues(items =>
      lodash.groupBy(items, item => item.plug.energyCost.energyTypeHash)
    )
    .value();

  const sets = lodash(groupedMods)
    .toPairs()
    .sortBy(v => SORTED_PRIMARY_CATEGORIES.indexOf(v[0]))
    .map(([category, itemsByEnergyType]) => {
      console.log(category);

      const sections = lodash(itemsByEnergyType)
        .toPairs()
        .sortBy(v => SORTED_ENERGY_TYPES.indexOf(v[0]))
        .map(([energyTypeHash, rawItems]) => {
          const energyType = DestinyEnergyTypeDefinition[energyTypeHash];

          const itemGroups = lodash(rawItems)
            .sortBy(item => item.index)
            .groupBy(item => item.plug.plugCategoryIdentifier)
            .values()
            .map(items => items.map(i => i.hash))
            .value();

          return {
            name: energyType.displayProperties.name,
            itemGroups
          };
        })
        .value();

      return {
        name: category,
        big: category === DSET_PRIMARY_CATEGORY_UNIVERSAL,
        sections
      };
    });

  const setData = [
    {
      name: 'Armor Mods',
      sets
    }
  ];

  writeFile(
    path.resolve(path.join('.', 'src', 'setData', 'modsGenerated.json')),
    JSON.stringify(setData, null, 2)
  );
})();
