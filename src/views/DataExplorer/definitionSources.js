const src = (url, name, ...fields) => ({ url, name, fields });

export const TITAN = 0;
export const HUNTER = 1;
export const WARLOCK = 2;

// itemCategoryHashes
export const CLASS_ITEMS = 49;
export const WEAPON = 1;
export const EMBLEM = 19;
export const ARMOR = 20;
export const GHOST = 39;
export const SHADER = 41;
export const SHIP = 42;
export const SPARROW = 43;
export const EMOTES = 44;
export const MODS1 = 56;
export const MODS2 = 59;
export const CLAN_BANNER = 58;

export const KINETIC_WEAPON = 2;
export const ENERGY_WEAPON = 3;
export const POWER_WEAPON = 4;

export const LEGENDARY = 4008398120;
export const EXOTIC = 2759499571;
export const UNCOMMON = 2395677314;
export const RARE = 2127292149;
export const COMMON = 3340296461;

export const XBOX = 1;
export const PLAYSTATION = 2;
export const PC_BLIZZARD = 4;
export const TIGERDEMON = 10;
export const BUNGIENEXT = 254;

export default [
  src(
    'DestinyInventoryItemDefinition',
    'Item',
    'itemHash',
    'singleInitialItemHash',
    'plugItemHash',
    'previewItemOverrideHash',
    'itemList',
    'emblemHash',
    'plugHash',
    'questlineItemHash'
  ),

  src(
    'DestinyInventoryBucketDefinition',
    'InventoryBucket',
    'bucketHash',
    'bucketTypeHash',
    'recoveryBucketTypeHash'
  ),

  src('DestinyItemTierTypeDefinition', 'ItemTierType', 'tierTypeHash'),

  src('DestinyStatDefinition', 'Stat', 'statHash', 'statTypeHash'),

  src('DestinyStatGroupDefinition', 'StatGroup', 'statGroupHash'),

  src('DestinyLoreDefinition', 'Lore', 'loreHash'),

  src('DestinyVendorDefinition', 'Vendor', 'kioskItems', 'vendorHash'),

  src('DestinyRaceDefinition', 'Race', 'raceHash'),
  src('DestinyGenderDefinition', 'Gender', 'genderHash'),
  src('DestinyClassDefinition', 'Class', 'classHash'),

  src(
    'DestinyActivityModeDefinition',
    'ActivityMode',
    'currentActivityModeHash',
    'currentActivityModeHashes'
  ),

  src(
    'DestinyActivityDefinition',
    'Activity',
    'activityHash',
    'currentActivityHash',
    'currentPlaylistActivityHash'
  ),

  src('DestinyProgressionDefinition', 'Progress', 'progressionHash'),

  src('DestinyDamageTypeDefinition', 'DamageType', 'damageTypeHash'),

  src('DestinySandboxPerkDefinition', 'Perk', 'perkHash'),

  src(
    'DestinyProgressionLevelRequirementDefinition',
    'ProgressionLevelRequirement',
    'progressionLevelRequirementHash'
  ),

  src(
    'DestinyItemCategoryDefinition',
    'ItemCategory',
    'categoryHash',
    'itemCategoryHashes',
    'groupedCategoryHashes'
  ),

  src(
    'DestinySocketCategoryDefinition',
    'SocketCategory',
    'socketCategoryHash'
  ),

  src('DestinySocketTypeDefinition', 'SocketType', 'socketTypeHash'),

  src('DestinyTalentGridDefinition', 'TalentGrid', 'talentGridHash')
];
