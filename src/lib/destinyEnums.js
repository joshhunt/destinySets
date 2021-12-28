export const TITAN = 0;
export const HUNTER = 1;
export const WARLOCK = 2;
export const NO_CLASS = 3;

export const FILTER_SHOW_COLLECTED = 'showCollected';
export const FILTER_SHOW_EVERVERSE = 'showEververse';
export const FILTER_SHOW_ORNAMENTS = 'showOrnaments';
export const FILTER_SHOW_WEAPONS = 'showWeapons';
export const FILTER_SHOW_HIDDEN_SETS = 'showHiddenSets';

const testChecklists = false;

const _CHECKLIST_PROFILE_COLLECTIONS = 3393554306;
const CHECKLIST_SLEEPER_NODES = 365218222;
export const CHECKLIST_PROFILE_COLLECTIONS = testChecklists
  ? CHECKLIST_SLEEPER_NODES
  : _CHECKLIST_PROFILE_COLLECTIONS;
export const CHECKLIST_CHARACTER_COLLECTIONS = 3246761912;

export const MASTERWORK_FLAG = 4;

// itemCategoryHashes
export const CLASS_ITEMS = 49;
export const WEAPON = 1;
export const EMBLEM = 19;
export const ARMOR = 20;
export const GHOST = 39;
export const GHOST_PROJECTION = 1404791674;
export const SHADER = 41;
export const SHIP = 42;
export const SPARROW = 43;
export const EMOTES = 44;
export const MODS1 = 56;
export const MODS2 = 59;
export const CLAN_BANNER = 58;
export const DUMMIES = 3109687656;

export const WEAPON_MODS_ORNAMENTS = 3124752623;
export const ARMOR_MODS_ORNAMENTS = 1742617626;
export const ARMOR_MODS_ORNAMENTS_HUNTER = 3683250363;
export const ARMOR_MODS_ORNAMENTS_TITAN = 3229540061;
export const ARMOR_MODS_ORNAMENTS_WARLOCK = 3684181176;

export const HELMET = 45;
export const ARMS = 46;
export const CHEST = 47;
export const LEGS = 48;
export const CLASS_ITEM = 49;

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
export const PC_STEAM = 3;
export const PC_BLIZZARD = 4;
export const TIGERDEMON = 10;
export const BUNGIENEXT = 254;

export const KINETIC = 3373582085;
export const VOID = 3454344768;
export const SOLAR = 1847026933;
export const ARC = 2303181850;

export const STAT_RECOVERY = 1943323491;
export const STAT_RESILIENCE = 392767087;
export const STAT_MOBILITY = 2996146975;
export const STAT_POWER = 1935470627;

export const NUMERICAL_STATS = [4284893193, 3871231066, 2961396640];
export const STAT_BLACKLIST = [
  1480404414, // Attack
  1935470627, // Power
  3897883278, // Defense
  1501155019 // Sparrow speed, always 0
];

export const PLATFORMS = {
  [XBOX]: 'Xbox',
  [PLAYSTATION]: 'PlayStation',
  [PC_STEAM]: 'PC (Steam)',
  [PC_BLIZZARD]: 'PC (Battle.net)',
  [TIGERDEMON]: 'TigerDemon',
  [BUNGIENEXT]: 'BungieNext'
};

export const CLASSES = {
  [WARLOCK]: 'Warlock',
  [TITAN]: 'Titan',
  [HUNTER]: 'Hunter'
};
