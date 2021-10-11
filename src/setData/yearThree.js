// @flow
import type { SetPage } from '../types';
// import * as common from './common';
import * as eververseAndEvents from './common/eververseAndEvents';
import { i18nDefinitionString as _ } from './utils';

export default ([
  {
    name: 'Activities',
    sets: [
      {
        name: _(
          'DestinyActivityModeDefinition[2394616003].displayProperties.name',
          'Strikes'
        ),
        id: 'year-three-strikes',
        description: 'Complete necessary pursuits from Commander Zavala.',
        sections: [
          {
            name: 'Weapons',
            season: 8,
            items: [
              847329160 // Edgewise
            ]
          },
          {
            name: 'Weapons',
            season: 9,
            items: [
              805677041 // Buzzard
            ]
          },
          {
            name: 'Hunter Armor',
            season: 9,
            items: [
              // 432360904, // Vigil of Heroes (Doesn't have related collectible)
              // 4074662489, // Vigil of Heroes (Doesn't have related collectible)
              // 2337221567, // Vigil of Heroes (Doesn't have related collectible)
              // 2671880779, // Vigil of Heroes (Doesn't have related collectible)
              // 3584380110 // Vigil of Heroes (Doesn't have related collectible)
            ]
          },
          {
            name: 'Hunter Armor',
            season: 10,
            items: [
              // 1953621386, // The Took Offense (Doesn't have related collectible)
              // 1959285715, // The Took Offense (Doesn't have related collectible)
              // 946526461, // The Took Offense (Doesn't have related collectible)
              // 1269679141, // The Took Offense (Doesn't have related collectible)
              // 2408514352 // The Took Offense (Doesn't have related collectible)
            ]
          },
          {
            name: 'Titan Armor',
            season: 9,
            items: [
              // 1130203390, // Vigil of Heroes (Doesn't have related collectible)
              // 358599471, // Vigil of Heroes (Doesn't have related collectible)
              // 3500775049, // Vigil of Heroes (Doesn't have related collectible)
              // 508642129, // Vigil of Heroes (Doesn't have related collectible)
              // 986111044 // Vigil of Heroes (Doesn't have related collectible)
            ]
          },
          {
            name: 'Titan Armor',
            season: 10,
            items: [
              // 4038429998, // The Shelter in Place (Doesn't have related collectible)
              // 768769183, // The Shelter in Place (Doesn't have related collectible)
              // 1276048857, // The Shelter in Place (Doesn't have related collectible)
              // 3984883553, // The Shelter in Place (Doesn't have related collectible)
              // 3014775444 // Mark of Shelter (Doesn't have related collectible)
            ]
          },
          {
            name: 'Warlock Armor',
            season: 9,
            items: [
              // 2422319309 // Vigil of Heroes (Doesn't have related collectible)
              // 3074985148, // Vigil of Heroes (Doesn't have related collectible)
              // 3544662820, // Vigil of Heroes (Doesn't have related collectible)
              // 2460793798, // Vigil of Heroes (Doesn't have related collectible)
              // 4288492921 // Vigil of Heroes (Doesn't have related collectible)
            ]
          },
          {
            name: 'Warlock Armor',
            season: 10,
            items: [
              // 1702245537, // Xenos Vale IV (Doesn't have related collectible)
              // 2498588344, // Xenos Vale IV (Doesn't have related collectible)
              // 2454114768, // Xenos Vale IV (Doesn't have related collectible)
              // 533855986, // Xenos Vale IV (Doesn't have related collectible)
              // 1805830669 // Xenos Vale Bond (Doesn't have related collectible)
            ]
          },
          {
            name: 'Extras',
            season: 8,
            items: [
              1655929400, // The Ordeal
              298334049, // Timeless Vigil
              2058800852, // Vanguard Stratosphere
              2058800853 // Vanguard Angelos
            ]
          },
          {
            name: 'Extras',
            season: 9,
            items: [
              1736897078, // Tactician
              3373970267 // Vanguard Nightbeam
            ]
          },
          {
            name: 'Extras',
            season: 10,
            items: [
              1983519833, // Strike Operator
              4286955050 // Vanguard Flashfire
            ]
          },
          {
            name: 'Extras',
            season: 11,
            items: [
              1138508273, // Strike at the Heart
              1514974385 // Vanguard Marshal
            ]
          }
        ]
      },
      {
        name: _(
          'DestinyActivityModeDefinition[1164760504].displayProperties.name',
          'Crucible'
        ),
        id: 'year-three-crucible',
        description: 'Complete necessary pursuits from Lord Shaxx.',
        sections: [
          {
            name: 'Weapons',
            season: 8,
            items: [
              3535742959 // Randy's Throwing Knife
            ]
          },
          {
            name: 'Weapons',
            season: 9,
            items: [
              2697058914 // Komodo-4FR
            ]
          },
          {
            name: 'Hunter Armor',
            season: 9,
            items: [
              // 4123918087, // Wing Contender (Doesn't have related collectible)
              // 2070517134, // Wing Contender (Doesn't have related collectible)
              // 1838273186, // Wing Contender (Doesn't have related collectible)
              // 283188616, // Wing Contender (Doesn't have related collectible)
              // 1062166003 // Wing Contender (Doesn't have related collectible)
            ]
          },
          {
            name: 'Hunter Armor',
            season: 10,
            items: [
              // 2094233929, // Swordflight 4.1 (Doesn't have related collectible)
              // 3797729472, // Swordflight 4.1 (Doesn't have related collectible)
              // 2680535688, // Swordflight 4.1 (Doesn't have related collectible)
              // 2492669178, // Swordflight 4.1 (Doesn't have related collectible)
              // 87665893 // Binary Phoenix Cloak (Doesn't have related collectible)
            ]
          },
          {
            name: 'Titan Armor',
            season: 9,
            items: [
              // 3483546829, // Wing Discipline (Doesn't have related collectible)
              // 4136212668, // Wing Discipline (Doesn't have related collectible)
              // 1722623780, // Wing Discipline (Doesn't have related collectible)
              // 3522021318, // Wing Discipline (Doesn't have related collectible)
              // 2466453881 // Wing Discipline (Doesn't have related collectible)
            ]
          },
          {
            name: 'Titan Armor',
            season: 10,
            items: [
              // 1727248109, // Phoenix Strife Type 0  (Doesn't have related collectible)
              // 2845947996, // Phoenix Strife Type 0  (Doesn't have related collectible)
              // 2674680132, // Phoenix Strife Type 0  (Doesn't have related collectible)
              // 1807196134, // Phoenix Strife Type 0  (Doesn't have related collectible)
              // 3884544409 // Binary Phoenix Mark (Doesn't have related collectible)
            ]
          },
          {
            name: 'Warlock Armor',
            season: 9,
            items: [
              // 874101646, // Wing Theorem (Doesn't have related collectible)
              // 2323865727, // Wing Theorem (Doesn't have related collectible)
              // 2525395257, // Wing Theorem (Doesn't have related collectible)
              // 1245115841, // Wing Theorem (Doesn't have related collectible)
              // 3839561204 // Wing Theorem (Doesn't have related collectible)
            ]
          },
          {
            name: 'Warlock Armor',
            season: 10,
            items: [
              // 1299272338, // Ankaa Seeker IV (Doesn't have related collectible)
              // 1765728763, // Ankaa Seeker IV (Doesn't have related collectible)
              // 852430165, // Ankaa Seeker IV (Doesn't have related collectible)
              // 215768941, // Ankaa Seeker IV (Doesn't have related collectible)
              // 4269346472 // Binary Phoenix Bond (Doesn't have related collectible)
            ]
          },
          {
            name: 'Extras',
            season: 8,
            items: [
              3219975799, // Honorable Duelist Shell
              298334062, // Burnished Blade
              1392223753, // Crucible Lazurite
              1392223752 // Crucible Vermillion
            ]
          },
          {
            name: 'Extras',
            season: 9,
            items: [
              1736897075, // No Quarter
              3603801350 // Crucible Prestige
            ]
          },
          {
            name: 'Extras',
            season: 10,
            items: [
              1983519836, // Settled Differences
              2811768631 // Crucible Peppermint
            ]
          },
          {
            name: 'Extras',
            season: 11,
            items: [
              1138508274, // Settled Differences
              2378905788 // Carminica
            ]
          }
        ]
      },
      {
        name: _(
          'DestinyActivityModeDefinition[1848252830].displayProperties.name',
          'Gambit'
        ),
        id: 'year-three-gambit',
        description: 'Complete necessary pursuits from the Drifter.',
        sections: [
          {
            name: 'Weapons',
            season: 8,
            items: [
              4227181568 // Exit Strategy
            ]
          },
          {
            name: 'Weapons',
            season: 9,
            items: [
              838556752 // Python
            ]
          },
          {
            name: 'Hunter Armor',
            season: 9,
            items: [
              // 759348512, // Ancient Apocalypse Mask (Doesn't have related collectible)
              // 2620389105, // Ancient Apocalypse Grips (Doesn't have related collectible)
              // 1741396519, // Ancient Apocalypse Vest (Doesn't have related collectible)
              // 2451538755, // Ancient Apocalypse Strides (Doesn't have related collectible)
              // 2881248566 // Ancient Apocalypse Cloak (Doesn't have related collectible)
            ]
          },
          {
            name: 'Hunter Armor',
            season: 10,
            items: [
              // 230878649, // Ancient Apocalypse Mask (Doesn't have related collectible)
              // 127018032, // Ancient Apocalypse Grips (Doesn't have related collectible)
              // 2728668760, // Ancient Apocalypse Vest (Doesn't have related collectible)
              // 485653258, // Ancient Apocalypse Strides (Doesn't have related collectible)
              // 1548620661 // Ancient Apocalypse Cloak (Doesn't have related collectible)
            ]
          },
          {
            name: 'Titan Armor',
            season: 9,
            items: [
              // 3664007718, // Ancient Apocalypse Helm (Doesn't have related collectible)
              // 2677967607, // Ancient Apocalypse Gauntlets (Doesn't have related collectible)
              // 1237661249, // Ancient Apocalypse Plate (Doesn't have related collectible)
              // 191535001, // Ancient Apocalypse Greaves (Doesn't have related collectible)
              // 2020166300 // Ancient Apocalypse Mark (Doesn't have related collectible)
            ]
          },
          {
            name: 'Titan Armor',
            season: 10,
            items: [
              // 2512196373, // Ancient Apocalypse Helm (Doesn't have related collectible)
              // 1188039652, // Ancient Apocalypse Gauntlets (Doesn't have related collectible)
              // 2518527196, // Ancient Apocalypse Plate (Doesn't have related collectible)
              // 2694124942, // Ancient Apocalypse Greaves (Doesn't have related collectible)
              // 3804360785  // Ancient Apocalypse Mark (Doesn't have related collectible)
            ]
          },
          {
            name: 'Warlock Armor',
            season: 9,
            items: [
              // 1013137701, // Ancient Apocalypse Hood (Doesn't have related collectible)
              // 1752237812, // Ancient Apocalypse Gloves (Doesn't have related collectible)
              // 3550729740, // Ancient Apocalypse Robes (Doesn't have related collectible)
              // 2039976446, // Ancient Apocalypse Boots (Doesn't have related collectible)
              // 1488486721 // Ancient Apocalypse Bond (Doesn't have related collectible)
            ]
          },
          {
            name: 'Warlock Armor',
            season: 10,
            items: [
              // 4255727106, // Ancient Apocalypse Hood (Doesn't have related collectible)
              // 3595268459, // Ancient Apocalypse Gloves (Doesn't have related collectible)
              // 887818405, // Ancient Apocalypse Robes (Doesn't have related collectible)
              // 392058749, // Ancient Apocalypse Boots (Doesn't have related collectible)
              // 9767416 // Ancient Apocalypse Bond (Doesn't have related collectible)
            ]
          },
          {
            name: 'Extras',
            season: 8,
            items: [
              1714370697, // Living Vestige
              1359616732, // Gambit Emerald
              1359616733 // Gambit Celadon
            ]
          },
          {
            name: 'Extras',
            season: 9,
            items: [
              1736897076, // Team Player
              2173837803 // Gambit Jadestone
            ]
          },
          {
            name: 'Extras',
            season: 10,
            items: [
              1983519835, // Fifteen Holding, Fifteen Down
              2207282210 // Raw Idocrase
            ]
          },
          {
            name: 'Extras',
            season: 11,
            items: [
              1138508275, // Long-Boy Special
              2590008185 // Ruin Wreath
            ]
          }
        ]
      },
      {
        name: _(
          'DestinyActivityModeDefinition[1826469369].displayProperties.name',
          'Iron Banner'
        ),
        id: 'year-three-iron-banner',
        description: _(
          'DestinyCollectibleDefinition[1158218425].sourceString',
          'Complete Iron Banner matches and earn rank-up packages from Lord Saladin.'
        ),
        sections: [
          {
            name: 'Weapons',
            season: 10,
            items: [
              3434944005 // Point of the Stag
            ]
          },
          {
            name: 'Weapons',
            season: 11,
            items: [
              1690783811, // The Forward Path
              65611680 // The Fool's Remedy
            ]
          },
          {
            name: 'Hunter Armor',
            season: 8,
            items: [
              2399134521, // Iron Will Mask
              2295273904, // Iron Will Sleeves
              2509940440, // Iron Will Vest
              2653909130, // Iron Will Boots
              1329892341 // Iron Will Cloak
            ]
          },
          {
            name: 'Hunter Armor',
            season: 9,
            items: [
              // 3292445816, // Iron Truage Casque (Doesn't have related collectible)
              // 3756249289, // Iron Truage Grips (Doesn't have related collectible)
              // 1181560527, // Iron Truage Vest (Doesn't have related collectible)
              // 4048191131, // Iron Truage Boots (Doesn't have related collectible)
              // 2853073502 // Mantle of Efrideet (Doesn't have related collectible)
            ]
          },
          {
            name: 'Hunter Armor',
            season: 10,
            items: [
              // 2845071512, // Iron Remembrance Casque (Doesn't have related collectible)
              // 3308875113, // Iron Remembrance Grips (Doesn't have related collectible)
              // 92135663, // Iron Remembrance Vest (Doesn't have related collectible)
              // 3600816955, // Iron Remembrance Strides (Doesn't have related collectible)
              // 1339294334 // Cloak of Remembrance (Doesn't have related collectible)
            ]
          },
          {
            name: 'Titan Armor',
            season: 8,
            items: [
              2105414511, // Iron Will Helm
              390139894, // Iron Will Gauntlets
              230314682, // Iron Will Plate
              1602419024, // Iron Will Greaves
              3749277835 // Iron Will Mark
            ]
          },
          {
            name: 'Titan Armor',
            season: 9,
            items: [
              // 1105558158, // Iron Truage Helm (Doesn't have related collectible)
              // 2555322239, // Iron Truage Gauntlets (Doesn't have related collectible)
              // 1313089081, // Iron Truage Plate (Doesn't have related collectible)
              // 1476572353, // Iron Truage Greaves (Doesn't have related collectible)
              // 2627255028 // Radegast's Iron Sash (Doesn't have related collectible)
            ]
          },
          {
            name: 'Titan Armor',
            season: 10,
            items: [
              // 1882457108, // Iron Remembrance Helm (Doesn't have related collectible)
              // 713182381, // Iron Remembrance Gauntlets (Doesn't have related collectible)
              // 63725907, // Iron Remembrance Plate (Doesn't have related collectible)
              // 1425558127, // Iron Remembrance Greaves (Doesn't have related collectible)
              // 2310625418 // Mark of Remembrance (Doesn't have related collectible)
            ]
          },
          {
            name: 'Warlock Armor',
            season: 8,
            items: [
              3598520298, // Iron Will Hood
              3179623987, // Iron Will Gloves
              1412970845, // Iron Will Vestments
              2914474757, // Iron Will Steps
              3299416208 // Iron Will Bond
            ]
          },
          {
            name: 'Warlock Armor',
            season: 9,
            items: [
              // 423204919, // Iron Truage Hood (Doesn't have related collectible)
              // 3791686334, // Iron Truage Gloves (Doesn't have related collectible)
              // 1604601714, // Iron Truage Vestments (Doesn't have related collectible)
              // 4211068696, // Iron Truage Legs (Doesn't have related collectible)
              // 2241419267 // Timur's Iron Bond (Doesn't have related collectible)
            ]
          },
          {
            name: 'Warlock Armor',
            season: 10,
            items: [
              // 2758933481, // Iron Remembrance Hood (Doesn't have related collectible)
              // 167461728, // Iron Remembrance Gloves (Doesn't have related collectible)
              // 2614190248, // Iron Remembrance Vestments (Doesn't have related collectible)
              // 3115791898, // Iron Remembrance Legs (Doesn't have related collectible)
              // 21320325 // Bond of Remembrance (Doesn't have related collectible)
            ]
          },
          {
            name: 'Extras',
            season: 8,
            items: [
              677674547, // Flying Foundry
              3340102521, // Iron Mossbone
              3340102520 // Iron Oxide
            ]
          },
          {
            name: 'Extras',
            season: 9,
            items: [
              1736897077, // Iron in the Fire
              2982947772 // Iron Fuchsite
            ]
          },
          {
            name: 'Extras',
            season: 10,
            items: [
              1983519834, // Cast Iron
              1385647483 // Iron Precious
            ]
          },
          {
            name: 'Extras',
            season: 11,
            items: [
              1138508272, // Light Unbridled
              3176983014 // Iron Vendetta
            ]
          }
        ]
      },
      {
        name: _(
          'DestinyActivityModeDefinition[1673724806].displayProperties.name',
          'Trials of Osiris'
        ),
        id: 'year-three-trials-of-osiris',
        description: 'Complete challenges in the Trials of Osiris.',
        sections: [
          {
            name: 'Weapons',
            season: 10,
            items: [
              2478792241, // The Scholar
              1697682876, // Astral Horizon
              3164743584, // Eye of Sol
              1907698332, // The Summoner
              679281855, // Exile's Curse
              958384347 // Tomorrow's Answer
            ]
          },
          {
            name: 'Hunter Armor',
            season: 10,
            items: [
              3275117874, // Cover of the Exile
              3741471003, // Grips of the Exile
              938618741, // Vest of the Exile
              2616071821, // Boots of the Exile
              18990920 // Cloak of the Exile
            ]
          },
          {
            name: 'Titan Armor',
            season: 10,
            items: [
              435339366, // Helm of the Exile
              3702689847, // Gauntlets of the Exile
              1127943297, // Plate of the Exile
              791799769, // Greaves of the Exile
              2376585692 // Mark of the Exile
            ]
          },
          {
            name: 'Warlock Armor',
            season: 10,
            items: [
              1637326795, // Hood of the Exile
              3829990714, // Gloves of the Exile
              2883045518, // Robe of the Exile
              1215952756, // Legs of the Exile
              3201140055 // Bond of the Exile
            ]
          },
          {
            name: 'Extras',
            season: 10,
            items: [
              3892999872, // Lantern Shell
              3224184260, // Resurrection's Guide
              1983519830, // Hardened by Trial
              2071635914, // Light for the Lost
              2071635915 // Flawless Empyrean
            ]
          }
        ]
      },
      {
        name: _(
          'DestinyActivityModeDefinition[2659723068].displayProperties.name',
          'Garden of Salvation'
        ),
        id: 'year-three-garden-of-salvation',
        description: _(
          'DestinyCollectibleDefinition[2948134329].sourceString',
          '"Garden of Salvation" raid'
        ),
        sections: [
          {
            name: 'Weapons',
            season: 8,
            items: [
              4103414242, // Divinity
              3385326721, // Reckless Oracle
              2408405461, // Sacred Provenance
              48643186, // Ancient Gospel
              4095896073, // Accrued Redemption
              4020742303, // Prophet of Doom
              2209003210, // Zealot's Reward
              3454326177 // Omniscient Eye
            ]
          },
          {
            name: 'Hunter Armor',
            season: 8,
            items: [
              407842012, // Cowl of Righteousness
              1804192853, // Grips of Exaltation
              210208587, // Vest of Transcendence
              3380315063, // Strides of Ascendancy
              2861892194 // Cloak of Temptation
            ]
          },
          {
            name: 'Titan Armor',
            season: 8,
            items: [
              959087754, // Helm of Righteousness
              964752083, // Gauntlets of Exaltation
              3876398589, // Plate of Transcendence
              275145509, // Greaves of Ascendancy
              1043419184 // Temptation's Mark
            ]
          },
          {
            name: 'Warlock Armor',
            season: 8,
            items: [
              2367878193, // Mask of Righteousness
              984532872, // Gloves of Exaltation
              1789501056, // Robes of Transcendence
              2085872226, // Boots of Ascendancy
              1141217085 // Temptation's Bond
            ]
          },
          {
            name: 'Extras',
            season: 8,
            items: [
              298334059, // Inherent Truth
              3996862462, // Ancient Believer
              3996862463 // Ancient Defender
            ]
          }
        ]
      }
    ]
  },
  {
    name: 'Seasonal Content',
    sets: [
      {
        name: 'Season 8',
        id: 'year-three-season-8',
        description:
          'Complete seasonal activities during Season of the Undying.',
        sections: [
          {
            name: 'Vex Offensive/Invasions & Ikora Bounty Weapons',
            season: 8,
            items: [
              2314999489, // Imperative
              1167153950, // Adhortative
              2138599001, // Optative
              2663204025 // Subjunctive
            ]
          },
          {
            name: 'Extras',
            season: 8,
            items: [
              1714370696 // Pushing Down Daisies
            ]
          }
        ]
      },
      {
        name: 'Season 9',
        id: 'year-three-season-9',
        description: 'Complete seasonal activities during Season of Dawn.',
        sections: [
          {
            name: 'Active Obilisk Link & Frame Weapons',
            season: 9,
            itemGroups: [
              [
                1706206669, // Gallant Charge
                3233390913 // Infinite Paths 8
              ],
              [
                3850168899, // Martyr's Retribution
                946443267 // Line in the Sand
              ],
              [
                2723241847, // Patron of Lost Causes
                4149758318 // Traveler's Judgment 5
              ],
              [
                1289997971, // Breachlight
                1251729046 // Steelfeather Repeater
              ]
            ]
          },
          {
            name: 'Obelisk Frames & Resonance Rank Increases',
            season: 9,
            items: [
              3393519051, // Perfect Paradox
              410996590 // Jack Queen King 3
            ]
          },
          {
            name: 'Empyrean Foundation',
            season: 9,
            items: [
              1736897081, // Restorative Light
              2266613161 // Lighthouse Sun
            ]
          },
          {
            name: 'Extras',
            season: 9,
            items: [
              2422240131, // Timeswept Shell
              1736897072, // Sandswept Crusader
              1736897073, // Timeline Warrior
              1736897079, // Savior of the Past
              980059631, // Vitrified Duality
              980059630 // Vitrified Chronology
            ]
          }
        ]
      },
      {
        name: 'Season 10',
        id: 'year-three-season-10',
        description:
          'Complete seasonal activities during Season of the Worthy.',
        sections: [
          {
            name: 'Seraph Weapon Frames',
            season: 10,
            items: [
              1561006927, // Seventh Seraph Carbine
              3937866388, // Seventh Seraph SI-2
              3037520408, // Seventh Seraph Officer Revolver
              2582755344 // Seventh Seraph SAW
            ]
          },
          {
            name: 'Extras',
            season: 10,
            items: [
              3508741484, // Absalom Knife
              1983519839, // Knight of the Old Guard
              1983519838, // Seraph's Wings
              737170668, // Midnight Exigent
              737170669 // Valkyrie Zero
            ]
          }
        ]
      },
      {
        name: 'Season 11',
        id: 'year-three-season-11',
        description: 'Complete seasonal activities during Season of Arrivals.',
        sections: [
          {
            name: 'Contact Weapons',
            season: 11,
            items: [
              3143732432, // False Promises
              211938782, // Whispering Slab
              607191995, // Hollow Words
              3616586446, // First In, Last Out
              1253087083, // IKELOS_SR_v1.0.2
              2222560548, // IKELOS_SMG_v1.0.2
              407621213, // Berenger's Memory
              35794111 // Temptation's Hook
            ]
          },
          {
            name: 'Prophecy Dungeon Weapons',
            season: 11,
            items: [
              1200824700, // IKELOS_HC_v1.0.2
              1096206669, // IKELOS_SG_v1.0.2
              1271343896, // Widow's Bite
              2742490609, // Death Adder
              3669616453, // Hoosegow
              3629968765 // Negative Space
            ]
          },
          {
            name: 'Prophecy Dungeon Hunter Armor',
            season: 11,
            itemGroups: [
              [
                2623956730, // Moonfang-X7 Mask
                100226755, // Moonfang-X7 Grips
                4121885325, // Moonfang-X7 Rig
                2487240821, // Moonfang-X7 Strides
                2701727616 // Moonfang-X7 Cloak
              ],
              [
                3075372781, // Flowing Cowl (CODA)
                4194072668, // Flowing Grips (CODA)
                508076356, // Flowing Vest (CODA)
                3155320806, // Flowing Boots (CODA)
                1717940633 // Cloak Judgment (CODA)
              ]
            ]
          },
          {
            name: 'Prophecy Dungeon Titan Armor',
            season: 11,
            itemGroups: [
              [
                2234240008, // Moonfang-X7 Helm
                1581574297, // Moonfang-X7 Gauntlets
                1571337215, // Moonfang-X7 Chassis
                178689419, // Moonfang-X7 Greaves
                3242850062 // Moonfang-X7 Mark
              ],
              [
                3976073347, // Crushing Helm (CODA)
                818644818, // Crushing Guard (CODA)
                2570653206, // Crushing Plate (CODA)
                1219883244, // Crushing Greaves (CODA)
                1900280383 // Mark Judgment (CODA)
              ]
            ]
          },
          {
            name: 'Prophecy Dungeon Warlock Armor',
            season: 11,
            itemGroups: [
              [
                2288398391, // Moonfang-X7 Crown
                1361912510, // Moonfang-X7 Gloves
                1658294130, // Moonfang-X7 Robe
                1781294872, // Moonfang-X7 Boots
                2295111683 // Moonfang-X7 Bond
              ],
              [
                2602907742, // Channeling Cowl (CODA)
                1406846351, // Channeling Wraps (CODA)
                1652467433, // Channeling Robes (CODA)
                2022923313, // Channeling Treads (CODA)
                2966633380 // Bond Judgment (CODA)
              ]
            ]
          },
          {
            name: 'Contact Extras',
            season: 11,
            items: [
              1138508278, // Point of Contact
              4115783783, // Envious Touch
              4115783782 // Dark Omolon
            ]
          },
          {
            name: 'Prophecy Dungeon Extras',
            season: 11,
            items: [
              1138508276, // Prophetic Visionary
              732682038, // Cottontail Shell
              2232750624 // Of Ten Suns
            ]
          },
          {
            name: 'Prismatic Recaster Extras',
            season: 11,
            items: [
              577493531 // Enneagon
            ]
          },
          {
            name: 'End-of-Season Event Extras',
            season: 11,
            items: [
              3401308133 // Calamity Protocol
            ]
          }
        ]
      }
    ]
  },
  {
    name: 'Destinations',
    sets: [
      {
        name: _(
          'DestinyPlaceDefinition[3325508439].displayProperties.name',
          'The Moon'
        ),
        id: 'year-three-moon',
        description: _(
          'DestinyCollectibleDefinition[1310958655].sourceString',
          'Found by exploring the Moon.'
        ),
        sections: [
          {
            name: 'Weapons',
            season: 8,
            items: [
              2723909519, // Arc Logic
              3924212056, // Loud Lullaby
              4277547616, // Every Waking Moment
              1016668089, // One Small Step
              2931957300, // Dream Breaker
              1645386487, // Tranquility
              3870811754, // Night Terror
              3690523502, // Love and Death
              3325778512 // A Fine Memorial
            ]
          },
          {
            name: 'Hunter Armor',
            season: 8,
            items: [
              1496857121, // Dreambane Cowl
              2293199928, // Dreambane Grips
              3434445392, // Dreambane Vest
              328467570, // Dreambane Strides
              2786161293 // Dreambane Cloak
            ]
          },
          {
            name: 'Titan Armor',
            season: 8,
            items: [
              2813078109, // Dreambane Helm
              1699964364, // Dreambane Gauntlets
              175015316, // Dreambane Plate
              2345799798, // Dreambane Greaves
              1343302889 // Dreambane Mark
            ]
          },
          {
            name: 'Warlock Armor',
            season: 8,
            items: [
              1721938300, // Dreambane Hood
              3118392309, // Dreambane Gloves
              4235863403, // Dreambane Robes
              399547095, // Dreambane Boots
              2975563522 // Dreambane Bond
            ]
          },
          {
            name: 'Altars of Sorrow',
            season: 8,
            itemGroups: [
              [
                2782847179, // Blasphemer (Shotgun)
                2164448701, // Apostate (Sniper Rifle)
                3067821200 // Heretic (Rocket Launcher)
              ],
              [
                3708784304 // Bane of Crota Shell (Ghost Shell)
              ]
            ]
          },
          {
            name: 'Nightmare Hunts',
            season: 8,
            items: [
              298334057, // A Sibyl's Dreams
              2056256564 // Lunar Halcyon Gilt
            ]
          },
          {
            name: "'Pit of Heresy' Dungeon",
            season: 8,
            itemGroups: [
              [
                208088207 // Premonition (Dungeon Pulse)
              ],
              [
                4023500750, // Bane of Tyrants (Ship)
                298334061, // Sanguine Static (Emblem)
                298334060 // Crimson Echoes (Emblem)
              ]
            ]
          },
          {
            name: 'Extras',
            season: 8,
            items: [
              1272828316, // Moonshot Shell
              3382260610, // Moonrider One
              672488948, // The Third Tide
              1714370698, // Orbital Cartographer
              298334056, // Lunar Memoriam
              2056256565 // Lunar Gloom
            ]
          }
        ]
      }
    ]
  },
  {
    name: 'Holiday & Special Events',
    sets: [
      eververseAndEvents.FESTIVAL_OF_THE_LOST_Y3,
      eververseAndEvents.DAWNING_Y3,
      eververseAndEvents.CRIMSON_DAYS_Y3,
      eververseAndEvents.GUARDIAN_GAMES_Y3,
      eververseAndEvents.MOMENTS_OF_TRIUMPH_Y3,
      eververseAndEvents.SOLSTICE_OF_HEROES_Y3
    ]
  },
  {
    name: 'Other',
    sets: [
      {
        name: _(
          'DestinyPresentationNodeDefinition[3110685926].displayProperties.name',
          'Season Pass'
        ),
        description:
          'Free Track is available to all Destiny 2 Players. Paid Track is available to owners of the current Season Pass.',
        id: 'year-three-season-passes',
        big: false,
        sections: [
          {
            name: 'Free Track',
            season: 8,
            itemGroups: [
              [
                3524313097, // Eriana's Vow
                1952163498, // Pluperfect
                3369545945 // Temporal Clause
              ],
              [
                4070722289, // Substitutional Alloy Mask
                2687273800, // Substitutional Alloy Grips
                2657028416, // Substitutional Alloy Vest
                3364258850, // Substitutional Alloy Strides
                1584183805 // Substitutional Alloy Cloak
              ],
              [
                695795213, // Substitutional Alloy Helm
                1348357884, // Substitutional Alloy Gauntlets
                2742760292, // Substitutional Alloy Plate
                351285766, // Substitutional Alloy Greaves
                3911047865 // Substitutional Alloy Mark
              ],
              [
                377757362, // Substitutional Alloy Hood
                844110491, // Substitutional Alloy Gloves
                3680920565, // Substitutional Alloy Robes
                4013678605, // Substitutional Alloy Boots
                2761292744 // Substitutional Alloy Bond
              ]
            ]
          },
          {
            name: 'Free Track',
            season: 9,
            itemGroups: [
              [
                4017959782, // Symmetry
                1289324202, // Pyroclastic Flow
                4166221755 // Trophy Hunter
              ],
              [
                3931166610, // Righteous Mask
                102655739, // Righteous Grips
                648899669, // Righteous Vest
                2847663213, // Righteous Strides
                4065815976 // Righteous Cloak
              ],
              [
                3491384606, // Righteous Helm
                2761357391, // Righteous Gauntlets
                3091683497, // Righteous Plate
                3335857649, // Righteous Greaves
                577019492 // Righteous Mark
              ],
              [
                1259643537, // Righteous Hood
                4171162472, // Righteous Gloves
                4200580064, // Righteous Robes
                977534402, // Righteous Boots
                3510616093 // Righteous Bond
              ]
            ]
          },
          {
            name: 'Free Track',
            season: 10,
            itemGroups: [
              [
                776191470, // Tommy's Matchbook
                766323545, // Seventh Seraph VY-7
                1821724780 // Seventh Seraph CQC-12
              ],
              [
                2234841490, // Seventh Seraph Cowl
                2701297915, // Seventh Seraph Grips
                4224643669, // Seventh Seraph Vest
                1151338093, // Seventh Seraph Strides
                3346592680 // Seventh Seraph Cloak
              ],
              [
                2021231310, // Seventh Seraph Helmet
                3046434751, // Seventh Seraph Gauntlets
                630719097, // Seventh Seraph Plate
                1967684865, // Seventh Seraph Greaves
                2369445684 // Seventh Seraph Mark
              ],
              [
                1790943181, // Seventh Seraph Hood
                2443609020, // Seventh Seraph Gloves
                2503153700, // Seventh Seraph Robes
                1829417670, // Seventh Seraph Boots
                3246983801 // Seventh Seraph Bond
              ]
            ]
          },
          {
            name: 'Free Track',
            season: 11,
            itemGroups: [
              [
                2357297366, // Witherhoard
                614426548, // Falling Guillotine
                1216130969 // Cold Denial
              ],
              [
                3097544525, // Holdfast Mask
                3750210364, // Holdfast Grips
                2930001572, // Holdfast Vest
                3136019014, // Holdfast Strides
                3673831673 // Holdfast Cloak
              ],
              [
                1214477175, // Holdfast Helm
                287888126, // Holdfast Gauntlets
                1585947570, // Holdfast Plate
                1131831128, // Holdfast Greaves
                1756730947 // Holdfast Mark
              ],
              [
                1173249516, // Holdfast Cover
                327547301, // Holdfast Gloves
                119457531, // Holdfast Robes
                674876967, // Holdfast Boots
                2771141010 // Holdfast Bond
              ]
            ]
          },
          {
            name: 'Paid Track',
            season: 8,
            itemGroups: [
              [
                2939609184, // For Wei
                3562520053, // They Had Built
                1576402082 // Let the Future Narrow
              ],
              [
                1650573830, // Phenotype Plasticity Mask
                3569117172, // Phenotype Plasticity Gloves
                1035752481, // Phenotype Plasticity Vest
                3856855806, // Phenotype Plasticity Boots
                1818257532 // Phenotype Plasticity Cloak
              ],
              [
                2040228420, // Phenotype Plasticity Helm
                1987423005, // Phenotype Plasticity Gauntlets
                2210147491, // Phenotype Plasticity Plate
                3928591295, // Phenotype Plasticity Greaves
                1491954330 // Phenotype Plasticity Mark
              ],
              [
                2830017061, // Phenotype Plasticity Hood
                3569117172, // Phenotype Plasticity Gloves
                1313704204, // Phenotype Plasticity Robes
                3856855806, // Phenotype Plasticity Boots
                3546428481 // Phenotype Plasticity Bond
              ],
              [
                448266921, // Clash of Swords
                825357415, // Belgian Flying Kick
                1457434304, // Never Live It Down
                298334063, // Trailblazer
                3448612595, // Night's Chill
                3448612594, // First Frost
                2078915253 // Blackheart Growth
              ]
            ]
          },
          {
            name: 'Paid Track',
            season: 9,
            itemGroups: [
              [
                2066724468, // Skyline Constellation
                2416805974, // Meteoric Descent
                1249781195 // Zaroff's Prized Longbore
              ],
              [
                90191153, // Virtuous Mask
                3001813128, // Virtuous Grips
                3004625280, // Virtuous Vest
                4103152482, // Virtuous Strides
                2356341309 // Virtuous Cloak
              ],
              [
                3324052357, // Virtuous Helm
                4104729172, // Virtuous Gauntlets
                474951532, // Virtuous Plate
                55923806, // Virtuous Greaves
                3173709985 // Virtuous Mark
              ],
              [
                752572736, // Virtuous Hood
                2613613329, // Virtuous Gloves
                2861849799, // Virtuous Robes
                2020305635, // Virtuous Boots
                3577347542 // Virtuous Bond
              ],
              [
                4191932814, // Pigeon Feed
                1362221859, // Coin Trick
                4140860253, // The Kellbreaker
                2512921531, // Saintly Shell
                1736897074, // Dawn Chaser
                1402284586, // Gunmetal Marigold
                1402284587, // Regal Medallion
                1693097638 // Defiant Vexsplosion
              ]
            ]
          },
          {
            name: 'Paid Track',
            season: 10,
            itemGroups: [
              [
                859354675, // The Chopper
                4166195598, // Tyrant's Lash
                341869371 // Tyrant's Cudgel
              ],
              [
                3578708308, // Valkyrian Mask
                2409536749, // Valkyrian Grips
                4015910035, // Valkyrian Vest
                2655878319, // Valkyrian Strides
                2350826186 // Valkyrian Cloak
              ],
              [
                1969707994, // Valkyrian Helm
                4165402915, // Valkyrian Gauntlets
                1173448301, // Valkyrian Plate
                2257449557, // Valkyrian Greaves
                4048361056 // Valkyrian Mark
              ],
              [
                178211227, // Valkyrian Hood
                1637492810, // Valkyrian Gloves
                4293660542, // Valkyrian Robes
                293824100, // Valkyrian Boots
                3623287559 // Valkyrian Bond
              ],
              [
                3263140403, // None Shall Pass
                1269179840, // Valkyrian Impaler
                1661778308, // Seventh Seraph Vector
                3030850318, // Tatarstan
                1983519837, // Emblem of the Worthy
                2471702601, // Silver Tactical
                2471702600, // Darkwater Froth
                3922035879 // Big Red Entrance
              ]
            ]
          },
          {
            name: 'Paid Track',
            season: 11,
            itemGroups: [
              [
                609666430, // White Collar Crime
                2801311442, // Riptide
                3103387299 // Dark Waters
              ],
              [
                3971891703, // Siegebreak Mask
                3045302654, // Siegebreak Grips
                2574956338, // Siegebreak Vest
                3889245656, // Siegebreak Strides
                2745739715 // Siegebreak Cloak
              ],
              [
                2884709491, // Siegebreak Helm
                377715970, // Siegebreak Gauntlets
                1764669670, // Siegebreak Plate
                2463438524, // Siegebreak Greaves
                2082764111 // Siegebreak Mark
              ],
              [
                1034893694, // Siegebreak Cover
                263289775, // Siegebreak Gloves
                1598189577, // Siegebreak Jacket
                413332433, // Siegebreak Boots
                3378492868 // Siegebreak Bond
              ],
              [
                772166226, // Nurturing Nature
                3594816059, // Revolution Blade
                372702809, // Last Bastion Shell
                1901005163, // Warden's Wailer
                1138508277, // Edge of Arrival
                51755992, // Throne of Soot
                51755993, // Horizons Beyond
                4104235240 // Traveler Entrance
              ]
            ]
          }
        ]
      },
      eververseAndEvents.EVERVERSE_Y3,
      {
        name: _(
          'DestinyVendorDefinition[3163810067].displayProperties.name',
          'Legendary Engrams'
        ),
        id: 'year-three-legendary-engram',
        description: _(
          'DestinyCollectibleDefinition[4273799635].sourceString',
          'Open Legendary engrams and earn faction rank-up packages.'
        ),
        big: false,
        sections: [
          {
            name: 'Weapons',
            season: 9,
            items: [
              3569802112, // The Old Fashioned
              1807343361, // Hawthorne's Field-Forged Shotgun
              3863882743, // Uriel's Gift
              4106983932, // Elatha FR4
              3622137132, // Last Hope
              1529450902 // Mos Epoch III
            ]
          },
          {
            name: 'Weapons',
            season: 10,
            items: [
              2742838701, // Dire Promise
              1786797708, // Escape Velocity
              2807687156, // Distant Tumulus
              2742838700, // True Prophecy
              1723380073, // Enigma's Draw
              3055192515, // Timelines' Vertex
              1162247618, // Jian 7 Rifle
              2257180473, // Interference VI
              2857348871 // Honor's Edge
            ]
          },
          {
            name: 'Weapons',
            season: 11,
            items: [
              1835747805, // Nature of the Beast
              1946491241 // Truthteller
            ]
          }
        ]
      }
    ]
  }
]: SetPage);
