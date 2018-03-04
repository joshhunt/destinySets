const src = (url, name, fields) => ({ url, name, fields });

export default [
  src('DestinyInventoryItemDefinition', 'item', [
    'itemHash',
    'singleInitialItemHash',
    'plugItemHash',
    'previewItemOverrideHash',
    'itemList',
    'emblemHash',
    'plugHash',
    'questlineItemHash'
  ]),

  src('DestinyInventoryBucketDefinition', 'inventoryBucket', [
    'bucketHash',
    'bucketTypeHash',
    'recoveryBucketTypeHash'
  ]),

  src('DestinyItemTierTypeDefinition', 'itemTierType', ['tierTypeHash']),

  src('DestinyStatDefinition', 'stat', ['statHash', 'statTypeHash']),

  src('DestinyStatGroupDefinition', 'statGroup', ['statGroupHash']),

  src('DestinyLoreDefinition', 'lore', ['loreHash']),

  src('DestinyVendorDefinition', 'vendor', ['kioskItems', 'vendorHash']),

  src('DestinyRaceDefinition', 'race', ['raceHash']),
  src('DestinyGenderDefinition', 'gender', ['genderHash']),
  src('DestinyClassDefinition', 'class', ['classHash']),

  src('DestinyActivityModeDefinition', 'activityMode', [
    'currentActivityModeHash',
    'currentActivityModeHashes'
  ]),

  src('DestinyActivityDefinition', 'activity', [
    'activityHash',
    'currentActivityHash',
    'currentPlaylistActivityHash'
  ]),

  src('DestinyProgressionDefinition', 'progress', ['progressionHash']),

  src('DestinyDamageTypeDefinition', 'damageType', ['damageTypeHash']),

  src('DestinySandboxPerkDefinition', 'perk', ['perkHash']),

  src(
    'DestinyProgressionLevelRequirementDefinition',
    'ProgressionLevelRequirement',
    ['progressionLevelRequirementHash']
  ),

  src('DestinyItemCategoryDefinition', 'itemCategory', [
    'categoryHash',
    'itemCategoryHashes',
    'groupedCategoryHashes'
  ]),

  src('DestinySocketCategoryDefinition', 'socketCategory', [
    'socketCategoryHash'
  ]),

  src('DestinySocketTypeDefinition', 'socketType', ['socketTypeHash']),

  src('DestinyTalentGridDefinition', 'talentGrid', ['talentGridHash']),

  src('DestinyEnemyRaceDefinition', 'enemyRace', []),
  src('DestinyPlaceDefinition', 'place', []),
  src('DestinyActivityTypeDefinition', 'activityType', []),
  src('DestinyFactionDefinition', 'faction', []),
  src('DestinyVendorCategoryDefinition', 'vendorCategory', []),
  src('DestinyRewardSourceDefinition', 'rewardSource', []),
  src('DestinyMedalTierDefinition', 'medalTier', []),
  src('DestinyActivityGraphDefinition', 'activityGraph', []),
  src('DestinyBondDefinition', 'bond', []),
  src('DestinyDestinationDefinition', 'destination', []),
  src('DestinyEquipmentSlotDefinition', 'equipmentSlot', []),
  src('DestinyLocationDefinition', 'location', []),
  src('DestinyObjectiveDefinition', 'objective', [
    'objectiveHashes',
    'emblemObjectiveHash'
  ]),
  src('DestinySackRewardItemListDefinition', 'sackRewardItemList', []),
  src('DestinyMilestoneDefinition', 'milestone', []),
  src('DestinyActivityModifierDefinition', 'activityModifier', []),
  src('DestinyReportReasonCategoryDefinition', 'reportReasonCategory', []),
  src('DestinyHistoricalStatsDefinition', 'historicalStats', [])
];
