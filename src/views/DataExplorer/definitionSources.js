const src = (url, name, ...fields) => ({ url, name, fields });

export default [
  src(
    '/en/raw/DestinyInventoryItemDefinition.json',
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
    '/en/raw/DestinyInventoryBucketDefinition.json',
    'InventoryBucket',
    'bucketHash',
    'bucketTypeHash',
    'recoveryBucketTypeHash'
  ),

  src(
    '/en/raw/DestinyItemTierTypeDefinition.json',
    'ItemTierType',
    'tierTypeHash'
  ),

  src(
    '/en/raw/DestinyStatDefinition.json',
    'Stat',
    'statHash',
    // 'stats',
    'statTypeHash'
  ),

  src('/en/raw/DestinyStatGroupDefinition.json', 'StatGroup', 'statGroupHash'),

  src('/en/raw/DestinyLoreDefinition.json', 'Lore', 'loreHash'),

  src(
    '/en/raw/DestinyVendorDefinition.json',
    'Vendor',
    'kioskItems',
    'vendorHash'
  ),

  src('/en/raw/DestinyRaceDefinition.json', 'Race', 'raceHash'),
  src('/en/raw/DestinyGenderDefinition.json', 'Gender', 'genderHash'),
  src('/en/raw/DestinyClassDefinition.json', 'Class', 'classHash'),

  src(
    '/en/raw/DestinyActivityModeDefinition.json',
    'ActivityMode',
    'currentActivityModeHash',
    'currentActivityModeHashes'
  ),

  src(
    '/en/raw/DestinyActivityDefinition.json',
    'Activity',
    'activityHash',
    'currentActivityHash',
    'currentPlaylistActivityHash'
  ),

  src(
    '/en/raw/DestinyProgressionDefinition.json',
    'Progress',
    'progressionHash'
  ),

  src(
    '/en/raw/DestinyDamageTypeDefinition.json',
    'DamageType',
    'damageTypeHash'
  ),

  src('/en/raw/DestinySandboxPerkDefinition.json', 'Perk', 'perkHash'),

  src(
    '/en/raw/DestinyProgressionLevelRequirementDefinition.json',
    'ProgressionLevelRequirement',
    'progressionLevelRequirementHash'
  ),

  src(
    '/en/raw/DestinyItemCategoryDefinition.json',
    'ItemCategory',
    'categoryHash',
    'itemCategoryHashes',
    'groupedCategoryHashes'
  ),

  src(
    '/en/raw/DestinySocketCategoryDefinition.json',
    'SocketCategory',
    'socketCategoryHash'
  ),

  src(
    '/en/raw/DestinySocketTypeDefinition.json',
    'SocketType',
    'socketTypeHash'
  ),

  src(
    '/en/raw/DestinyTalentGridDefinition.json',
    'TalentGrid',
    'talentGridHash'
  ),
];
