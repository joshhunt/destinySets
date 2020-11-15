const path = require('path');
const fs = require('fs');
const { promisify } = require('util');
const crypto = require('crypto');
const prettier = require('prettier');

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

const DSET_PRIMARY_CATEGORY_HELMET = 'Helmet';
const DSET_PRIMARY_CATEGORY_ARMS = 'Arms';
const DSET_PRIMARY_CATEGORY_CHEST = 'Chest';
const DSET_PRIMARY_CATEGORY_LEGS = 'Legs';
const DSET_PRIMARY_CATEGORY_CLASS = 'Class item';
const DSET_PRIMARY_CATEGORY_UNIVERSAL = 'Universal';

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

const matchName = (categoryName, ...displayNameRegexes) => ({
  displayNameRegexes,
  categoryName
});

const matchPlugCategory = (categoryName, ...plugCategories) => ({
  categoryName,
  plugCategories
});

const matchArtifactMods = categoryName => ({ categoryName, matchArtifactMods });

const CATEGORY_GENERAL = 'General';
const CATEGORY_SEASONAL_ARTIFACT = 'Seasonal Artifact';
const CATEGORY_AMMO_FINDER = 'Ammo Finder';
const CATEGORY_AMMO_SCAVENGER = 'Ammo Scavenger';
const CATEGORY_AMMO_RESERVES = 'Ammo Reserves';
const CATEGORY_TARGETING = 'Targeting';
const CATEGORY_DEXTERITY = 'Dexterity';
const CATEGORY_LOADERS = 'Loaders';
const CATEGORY_UNFLINCHING_AIM = 'Unflinching Aim';
const CATEGORY_SEASON_OUTLAW = 'Season of the Outlaw';
const CATEGORY_SEASON_FORGE = 'Season of the Forge';
const CATEGORY_SEASON_DRIFTER = 'Season of the Drifter';
const CATEGORY_SEASON_OPULENCE = 'Season of Opulence';
const CATEGORY_SEASON_UNDYING = 'Season of the Undying';
const CATEGORY_SEASON_DAWN = 'Season of Dawn';
const CATEGORY_SEASON_WORTHY = 'Season of the Worthy';
const CATEGORY_SEASON_ARRIVALS = 'Season of Arrivals';
const CATEGORY_DEEP_STONE_CRYPT = 'Deep Stone Crypt';

const MOD_CATEGORISER = [
  matchArtifactMods(CATEGORY_SEASONAL_ARTIFACT),
  matchPlugCategory(CATEGORY_SEASON_OUTLAW, 'enhancements.season_outlaw'),
  matchPlugCategory(CATEGORY_SEASON_FORGE, 'enhancements.season_forge'),
  matchPlugCategory(CATEGORY_SEASON_OPULENCE, 'enhancements.season_opulence'),
  matchPlugCategory(CATEGORY_SEASON_UNDYING, 'enhancements.season_maverick'),
  matchPlugCategory(CATEGORY_SEASON_DAWN, 'enhancements.season_v470'),
  matchPlugCategory(CATEGORY_SEASON_WORTHY, 'enhancements.season_v480'),
  matchPlugCategory(CATEGORY_SEASON_ARRIVALS, 'enhancements.season_v490'),
  matchPlugCategory(CATEGORY_DEEP_STONE_CRYPT, 'enhancements.raid_descent'),
  // matchPlugCategory('General', 'enhancements.v2_general'), // must be before scavenger to prevent Circuit Scavenger mod from being classed as ammo scavenger
  matchName(CATEGORY_AMMO_FINDER, /\sAmmo Finder$/g),
  matchName(CATEGORY_AMMO_SCAVENGER, /\sScavenger$/g),
  matchName(CATEGORY_AMMO_RESERVES, /\sReserves$/g),
  matchName(CATEGORY_TARGETING, /\sTargeting$/g),
  matchName(CATEGORY_DEXTERITY, /\sDexterity$/g),
  matchName(CATEGORY_LOADERS, /\sLoader$/g, /\sReloader$/g),
  matchName(CATEGORY_UNFLINCHING_AIM, /^(Enhanced )?Unflinching/g),
  matchName(CATEGORY_GENERAL, /.*/)
];

const CATERGORY_DISPLAY_ORDER = [
  CATEGORY_GENERAL,
  CATEGORY_SEASONAL_ARTIFACT,
  CATEGORY_AMMO_FINDER,
  CATEGORY_AMMO_SCAVENGER,
  CATEGORY_AMMO_RESERVES,
  CATEGORY_TARGETING,
  CATEGORY_DEXTERITY,
  CATEGORY_LOADERS,
  CATEGORY_UNFLINCHING_AIM,
  CATEGORY_SEASON_OUTLAW,
  CATEGORY_SEASON_FORGE,
  CATEGORY_SEASON_DRIFTER,
  CATEGORY_SEASON_OPULENCE,
  CATEGORY_SEASON_UNDYING,
  CATEGORY_SEASON_DAWN,
  CATEGORY_SEASON_WORTHY,
  CATEGORY_SEASON_ARRIVALS,
  CATEGORY_DEEP_STONE_CRYPT
];

const collectRewardsFromArtifacts = DestinyArtifactDefinition => {
  return lodash(DestinyArtifactDefinition)
    .values()
    .flatMap(artifact => artifact.tiers)
    .flatMap(tier => tier.items)
    .map(item => item.itemHash)
    .value();
};

const categoriseMod = (item, { artifactMods }) => {
  const matchedCategory = MOD_CATEGORISER.find(category => {
    // Match by item name
    if (category.displayNameRegexes) {
      return category.displayNameRegexes.find(re => {
        return item.displayProperties.name.match(re);
      });
    }

    // Match by plugCategoryIdentifier
    if (category.plugCategories) {
      return category.plugCategories.find(plugCategory => {
        return item.plug.plugCategoryIdentifier === plugCategory;
      });
    }

    if (category.matchArtifactMods) {
      return artifactMods.includes(item.hash);
    }
  });

  if (!matchedCategory) {
    return item.plug.plugCategoryIdentifier;
    // throw new Error(
    //   `Unable to match category for item hash ${item.hash}`
    // );
  }

  return matchedCategory.categoryName;
};

function prettySetData(setData, DestinyInventoryItemDefinition) {
  let setDataJson = JSON.stringify(setData, null, 2);

  setDataJson = setDataJson.replace(/(\d+),?$/gm, (match, hash) => {
    const item = hash && DestinyInventoryItemDefinition[hash];

    if (!item) {
      return match;
    }

    return `${match} // ${item.displayProperties.name}`;
  });

  const setDataFileSource = `// This file is generated by the createModsData.js script.
  // Do not manually make changes to this file because they will be overridden
  // This file uses a custom data structure specific to the Mods page

  export default (${setDataJson})
  `;

  return prettier.format(setDataFileSource, { parser: 'babel' });
}

(async function run() {
  const {
    DestinyInventoryItemDefinition,
    DestinyEnergyTypeDefinition,
    DestinyArtifactDefinition
  } = await getDefinitions();

  console.log('Recieved definitions');
  console.log('Finding mods');

  const artifactMods = collectRewardsFromArtifacts(DestinyArtifactDefinition);

  const allMods = lodash(DestinyInventoryItemDefinition)
    .values()
    .filter(v => v.itemCategoryHashes)
    .filter(v => v.displayProperties)
    .filter(v => !v.displayProperties.description.includes('deprecated'))
    .filter(v => v.itemCategoryHashes.includes(4104513227)) // armour mods
    .filter(v => v.plug && v.plug.energyCost) // exclude ornaments
    .value();

  console.log('Grouping mods');

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

  console.log('Creating sets');

  const sets = lodash(groupedMods)
    .toPairs()
    .sortBy(v => SORTED_PRIMARY_CATEGORIES.indexOf(v[0]))
    .map(([category, itemsByEnergyType]) => {
      const sections = lodash(itemsByEnergyType)
        .toPairs()
        .sortBy(v => SORTED_ENERGY_TYPES.indexOf(v[0]))
        .map(([energyTypeHash, rawItems]) => {
          const energyType = DestinyEnergyTypeDefinition[energyTypeHash];

          const groups = lodash(rawItems)
            .sortBy(item => item.index)
            .groupBy(item => categoriseMod(item, { artifactMods }))
            .mapValues(items => items.map(i => i.hash))
            .toPairs()
            .map(([name, items]) => ({ name, items }))
            .sortBy(group => CATERGORY_DISPLAY_ORDER.indexOf(group.name))
            .value();

          const itemGroups = groups.map(g => g.items);

          return {
            name: energyType.displayProperties.name,
            nameHash: parseInt(energyTypeHash, 10),
            itemGroups,
            groups
          };
        })
        .value();

      return {
        name: category,
        big: category === DSET_PRIMARY_CATEGORY_UNIVERSAL,
        sections
      };
    });

  const dataPath = path.join('.', 'src', 'setData', 'modsGenerated.js');
  const setData = [{ name: 'Armor Mods', sets }];
  const toExport = prettySetData(setData, DestinyInventoryItemDefinition);

  console.log('Writing to file', dataPath);
  writeFile(path.resolve(dataPath), toExport);
})();
