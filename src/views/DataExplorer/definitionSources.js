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

  src('DestinyTalentGridDefinition', 'TalentGrid', 'talentGridHash'),
];
