// @flow
import type { SetPage } from '../types';
import * as common from './common';
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
              1098138990, // Iron Will Mask
              2547799775, // Iron Will Sleeves
              1058936857, // Iron Will Vest
              1469050017, // Iron Will Boots
              2414679508 // Iron Will Cloak
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
              1895324274, // Iron Will Helm
              2320100699, // Iron Will Gauntlets
              2536633781, // Iron Will Plate
              770140877, // Iron Will Greaves
              1234228360 // Iron Will Mark
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
              2205315921, // Iron Will Hood
              863444264, // Iron Will Gloves
              4128151712, // Iron Will Vestments
              1498852482, // Iron Will Steps
              3055410141 // Iron Will Bond
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
              557676195, // Cowl of Righteousness
              1653741426, // Grips of Exaltation
              4177973942, // Vest of Transcendence
              2054979724, // Strides of Ascendancy
              3549177695 // Cloak of Temptation
            ]
          },
          {
            name: 'Titan Armor',
            season: 8,
            items: [
              519078295, // Helm of Righteousness
              3887559710, // Gauntlets of Exaltation
              3939809874, // Plate of Transcendence
              11974904, // Greaves of Ascendancy
              281660259 // Temptation's Mark
            ]
          },
          {
            name: 'Warlock Armor',
            season: 8,
            items: [
              3001934726, // Mask of Righteousness
              2015894615, // Gloves of Exaltation
              2320830625, // Robes of Transcendence
              3824429433, // Boots of Ascendancy
              3103335676 // Temptation's Bond
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
              659922705, // Dreambane Cowl
              3571441640, // Dreambane Grips
              883769696, // Dreambane Vest
              377813570, // Dreambane Strides
              193805725 // Dreambane Cloak
            ]
          },
          {
            name: 'Titan Armor',
            season: 8,
            items: [
              272413517, // Dreambane Helm
              925079356, // Dreambane Gauntlets
              2568538788, // Dreambane Plate
              310888006, // Dreambane Greaves
              3312368889 // Dreambane Mark
            ]
          },
          {
            name: 'Warlock Armor',
            season: 8,
            items: [
              1528483180, // Dreambane Hood
              682780965, // Dreambane Gloves
              3692187003, // Dreambane Robes
              1030110631, // Dreambane Boots
              2048903186 // Dreambane Bond
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
      {
        name: 'Festival of the Lost',
        id: 'year-three-festival-of-the-lost',
        description: 'Earned during the seasonal Festival of the Lost event.',
        sections: [
          {
            name: 'Weapons',
            season: 8,
            items: [
              528834068 // Braytech Werewolf
            ]
          },
          {
            name: 'Hunter Armor',
            season: 8,
            itemGroups: [
              [
                1256660988, // Chthonic Mask
                2653114997, // Chthonic Grips
                3560184043, // Chthonic Vest
                4229237079, // Chthonic Strides
                2299884162 // Chthonic Cloak
              ],
              [
                2352138838 // Masquerader Helmet: Hunter
              ]
            ]
          },
          {
            name: 'Hunter Armor',
            season: 11,
            itemGroups: [
              [],
              [
                514561133, // Canis Luna Mask
                1633261020, // Canis Luna Grips
                1440616900, // Canis Luna Vest
                594509158, // Canis Luna Strides
                2650481177 // Canis Luna Cloak
              ]
            ]
          },
          {
            name: 'Titan Armor',
            season: 8,
            itemGroups: [
              [
                3055452222, // Pandemonic Helm
                2325321839, // Pandemonic Gauntlets
                170952905, // Pandemonic Plate
                2899925137, // Pandemonic Greaves
                1485222020 // Pandemonic Mark
              ],
              [
                239189018 // Masquerader Helmet: Titan
              ]
            ]
          },
          {
            name: 'Titan Armor',
            season: 11,
            itemGroups: [
              [],
              [
                269052681, // Chemflesh Helm
                1972548224, // Chemflesh Gauntlets
                1903259976, // Chemflesh Plate
                1050368698, // Chemflesh Greaves
                4029814949 // Chemflesh Mark
              ]
            ]
          },
          {
            name: 'Warlock Armor',
            season: 8,
            itemGroups: [
              [
                3081047495, // Phantasmagoric Hood
                1027749710, // Phantasmagoric Gloves
                3859783010, // Phantasmagoric Robes
                3110827848, // Phantasmagoric Boots
                3508236467 // Phantasmagoric Bond
              ],
              [
                2213504923 // Masquerader Helmet: Warlock
              ]
            ]
          },
          {
            name: 'Warlock Armor',
            season: 11,
            itemGroups: [
              [
                1126889172, //  Blood Lineage Cover
                4252684909, //  Blood Lineage Gloves
                1627792659, //  Blood Lineage Robes
                204059183, //  Blood Lineage Boots
                4257676106 //  Blood Lineage Bond
              ],
              []
            ]
          },
          {
            name: 'Masks',
            season: 8,
            items: [
              1201782503, // Omnigul Mask
              1201782502, // Jack-o'-Lantern Mask
              1494882400, // Hidden Swarm Mask
              1494882401, // Goblin Mask
              1494882403, // Mithrax Mask
              1494882402, // Opulent Calus Mask
              1494882406, // Drifter Mask
              1494882407 // Eris Morn Mask
            ]
          },
          {
            name: 'Masks',
            season: 11,
            items: [
              3326837142, // Associates Mask
              3326837143, // Spider Mask
              1691825972, // Fractured Traveler Mask
              1691825975, // Variks Mask
              1691825974, // Exo Stranger Mask
              1691825969, // Ana Bray Mask
              1691825968, // Wrapped Traveler Mask
              1691825973 // Bubbling Mask
            ]
          },
          {
            name: 'Emotes',
            season: 8,
            items: [
              2810182789, // Tombstone
              3531985793, // Boo
              3730248014, // Parting
              1016114126 // Bone Boogie
            ]
          },
          {
            name: 'Emotes',
            season: 11,
            itemGroups: [
              [
                3314737869, // Ghastly Durance
                2580357958, // Lunar Roar
                2024085840, // Peaceful Rest
                433582103, // By Candlelight
                1078097668, // Rueful Wail
                712123915 // Summoning Ritual
              ],
              [
                // 3846727856, // One-Inch Punch (Not planned to be sold for Bright Dust)
              ]
            ]
          },
          {
            name: 'Ghosts',
            season: 8,
            itemGroups: [
              [
                3677746975, // Gensym Relic Shell
                3677746972, // Chiropteran Shell
                3677746973 // Jack-O-Shell
              ],
              [
                3661044025, // Winged Nightmare Projection
                3661044024 // Hive-o'-lantern Projection
              ]
            ]
          },
          {
            name: 'Ghosts',
            season: 11,
            itemGroups: [
              [
                4090775747, // Hexing Shell
                2505000979 // Restless Shell
              ],
              [
                968361536, //Fanged Projection
                968361537 // Howling Projection
              ]
            ]
          },
          {
            name: 'Sparrows',
            season: 8,
            items: [
              4087530286, // Brumeswept Night
              4087530287 // The Necrobeast
            ]
          },
          {
            name: 'Sparrows',
            season: 11,
            items: [
              3721195043, // Halted Oblivion
              3948527015 // Tomb Rider
            ]
          },
          {
            name: 'Ships',
            season: 8,
            items: [
              3755201983 // The Desmodus
            ]
          },
          {
            name: 'Ships',
            season: 11,
            items: [
              558697641 // Wrap Speed
            ]
          },
          {
            name: 'Extras',
            season: 8,
            items: [
              298334048, // Sweet Dreams
              2526736328, // Dark Orbit
              1005594230, // Skele-Ghaul
              1005594231, // Basalt Toxic
              2233576420, // Fright Night
              3980259371, // Looming Moon
              3980259370 // Murder of Crows
            ]
          },
          {
            name: 'Extras',
            season: 11,
            items: [
              3639046081, // Shadehallow
              2716279146, // Bloodmane
              2716279147, // Nougat Delight
              // 373634602, // Alchemy Scorch (Never sold and has no collectible)
              810321696 // Reanimated Entrance
            ]
          }
        ]
      },
      {
        name: 'The Dawning',
        id: 'year-three-the-dawning',
        description: 'Earned during the seasonal Dawning event.',
        big: false,
        sections: [
          {
            name: 'Weapons',
            season: 9,
            itemGroups: [
              [
                1506719573 // Cold Front
              ],
              [
                3344861342, // Brumal Dawn
                3615976865, // Frostborne
                2579162237 // Wind Chill
              ]
            ]
          },
          {
            name: 'Hunter Armor',
            season: 9,
            items: [
              1018190408, // Northlight Mask
              365524697, // Northlight Grips
              55826751, // Northlight Vest
              3257710283, // Northlight Strides
              1302985294 // Northlight Cloak
            ]
          },
          {
            name: 'Titan Armor',
            season: 9,
            items: [
              3188413900, // Northlight Helm
              2342711685, // Northlight Gauntlets
              3857100891, // Northlight Plate
              2265583879, // Northlight Greaves
              2596801138 // Northlight Mark
            ]
          },
          {
            name: 'Warlock Armor',
            season: 9,
            items: [
              2551510151, // Northlight Crown
              498109198, // Northlight Gloves
              1665551138, // Northlight Robes
              3005747976, // Northlight Boots
              889443955 // Northlight Bond
            ]
          },
          {
            name: 'Emotes',
            season: 9,
            itemGroups: [
              [
                1181969391, // Card Shuffle
                3941766715, // Get That Bread
                9762701, // Graceful Spin
                595406727, // Something to Say
                2352869761 // Bust a Move
              ],
              [
                // 1913500528 // Perfect Ten (Not planned to be sold for Bright Dust)
              ]
            ]
          },
          {
            name: 'Ghosts',
            season: 9,
            itemGroups: [
              [
                76764722, // Confectionery Shell
                76764721, // Crystalline Shell
                76764720 // Winterview Shell
              ],
              [
                3390110524, // Snowflake Projection
                3390110525 // The Great Pigeon Projection
              ]
            ]
          },
          {
            name: 'Sparrows',
            season: 9,
            items: [
              1837000827, // Cardinal Directive
              1837000826, // Polar Vortex
              3981634627 // Alpine Dash
            ]
          },
          {
            name: 'Ships',
            season: 9,
            items: [
              1430140002, // Amnestia-S2
              1430140003, // Sleepless Flight
              2307306630 // Bright Spirits
            ]
          },
          {
            name: 'Extras',
            season: 9,
            items: [
              1736897080, // Gift Giver
              2118730408, // Dawning Celebration
              2118730409, // Dawning Tranquility
              466236950, // Dawning Elegance
              466236951, // Dawning Welcome
              3403347111, // Snowy Entrance
              3403347110 // Sweet Entrance
            ]
          }
        ]
      },
      {
        name: 'Crimson Days',
        id: 'year-three-crimson-days',
        description: 'Earned during the seasonal Crimson Days event.',
        big: false,
        sections: [
          {
            name: 'Emotes',
            season: 9,
            items: [
              // 1345789366 // Heartfelt Union (Not planned to be sold for Bright Dust)
            ]
          },
          {
            name: 'Ghosts',
            season: 9,
            itemGroups: [
              [
                2716406907 // Crimson Shell
              ],
              [
                4111024700 // Two of Hearts Projection
              ]
            ]
          },
          {
            name: 'Sparrows',
            season: 9,
            items: [
              1266122672, // IVC-10
              1266122673 // SVC-12
            ]
          },
          {
            name: 'Extras',
            season: 9,
            items: [
              3622268500 // In the Valley
            ]
          }
        ]
      },
      {
        name: 'Guardian Games',
        id: 'year-three-guardian-games',
        description: 'Earned during the seasonal Guardian Games event.',
        big: false,
        sections: [
          {
            name: 'Hunter Armor',
            season: 10,
            itemGroups: [
              [
                685004314, // Competitive Spirit Mask
                2922275939, // Competitive Spirit Grips
                2797445293, // Competitive Spirit Vest
                548288405, // Competitive Spirit Strides
                911356576 // Competitive Spirit Cloak
              ],
              [
                195422190 // Cunning Rivalry Cloak
              ]
            ]
          },
          {
            name: 'Titan Armor',
            season: 10,
            itemGroups: [
              [
                2449623004, // Competitive Spirit Helm
                3845973845, // Competitive Spirit Gauntlets
                2709194827, // Competitive Spirit Plate
                1127128759, // Competitive Spirit Greaves
                1065911138 // Competitive Spirit Mark
              ],
              [
                967781090 // Mighty Rivalry Mark
              ]
            ]
          },
          {
            name: 'Warlock Armor',
            season: 10,
            itemGroups: [
              [
                544720811, // Competitive Spirit Hood
                3120368538, // Competitive Spirit Gloves
                1517831918, // Competitive Spirit Robes
                547804116, // Competitive Spirit Boots
                2260280759 // Competitive Spirit Bond
              ],
              [
                3365248655 // Sage Rivalry Bond
              ]
            ]
          },
          {
            name: 'Emotes',
            season: 10,
            itemGroups: [
              [
                2201628119, // Represent
                10656656, // Torch Light
                2788609407, // Participation Trophy
                2367025562, // Hip to the Hop
                1870273657, // High Score
                1327630195, // Low Score
                213458862, // One… Two… Uh…
                2300270673 // Recognize
              ],
              [
                // 2376234856 // Shuffle and Scat (Not planned to be sold for Bright Dust)
              ]
            ]
          },
          {
            name: 'Ghosts',
            season: 10,
            itemGroups: [
              [
                2272646882, // Rival Hunter Shell
                2272646881, // Rival Titan Shell
                2272646880 // Rival Warlock Shell
              ],
              [
                1673238725, // Hunter Projection
                1673238724, // Titan Projection
                1673238727 // Warlock Projection
              ]
            ]
          },
          {
            name: 'Sparrows',
            season: 10,
            items: [
              1614326414, // Runner Up
              1614326415 // Victory Lap
            ]
          },
          {
            name: 'Ships',
            season: 10,
            items: [
              1205148160, // The Underdog
              1205148161 // Team Spirit
            ]
          },
          {
            name: 'Extras',
            season: 10,
            items: [
              1983519832, // Rivals Three
              1983519831, // Settle the Score
              2171727443, // Rivalry Whitesand
              2171727442, // Rivalry Blacksand
              2213649831, // Rivalry Resolute
              2213649830, // Rivalry Stoic
              3393212813, // Cherry Blossom Entrance
              3393212812 // Cyber Class Entrance
            ]
          }
        ]
      },
      {
        name: 'Moments of Triumph',
        id: 'year-three-moments-of-triumph',
        description: 'Earned during the 2020 Moments of Triumph event.',
        big: false,
        sections: [
          {
            name: 'Ghosts',
            season: 11,
            items: [
              3478783829 // Awakened Shell
            ]
          },
          {
            name: 'Sparrows',
            season: 11,
            items: [
              1328791939 // Resurrecting Flight
            ]
          },

          {
            name: 'Extras',
            season: 11,
            items: [
              1138508287, // Accolades on Accolades
              3605490916, // Eclipsed Void
              3622268497, // Savior / Sunset
              1138508279 // No Power in the Verse Can Stop Me
            ]
          }
        ]
      },
      common.SOLSTICE_OF_HEROES_YEAR_3
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
                4078925540, // Substitutional Alloy Mask
                4026120125, // Substitutional Alloy Grips
                1855720515, // Substitutional Alloy Vest
                2096778463, // Substitutional Alloy Strides
                1137424314 // Substitutional Alloy Cloak
              ],
              [
                2903026872, // Substitutional Alloy Helm
                2942269705, // Substitutional Alloy Gauntlets
                2468603407, // Substitutional Alloy Plate
                3192738011, // Substitutional Alloy Greaves
                3757338782 // Substitutional Alloy Mark
              ],
              [
                2690973103, // Substitutional Alloy Hood
                509561142, // Substitutional Alloy Gloves
                3166926330, // Substitutional Alloy Robes
                1721943440, // Substitutional Alloy Boots
                2815379659 // Substitutional Alloy Bond
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
                382498903, // Righteous Mask
                3750877150, // Righteous Grips
                344824594, // Righteous Vest
                299852984, // Righteous Strides
                940065571 // Righteous Cloak
              ],
              [
                238618945, // Righteous Helm
                1076538456, // Righteous Gauntlets
                1560040304, // Righteous Plate
                3406670226, // Righteous Greaves
                445618861 // Righteous Mark
              ],
              [
                1557571326, // Righteous Hood
                785967407, // Righteous Gloves
                3931361417, // Righteous Robes
                936010065, // Righteous Boots
                1416697412 // Righteous Bond
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
      {
        name: _(
          'DestinyFactionDefinition[1393733616].displayProperties.name',
          'Eververse'
        ),
        id: 'year-three-eververse',
        description: 'Items sold at Eververse for Bright Dust.',
        big: false,
        sections: [
          {
            name: 'Armor',
            season: 8,
            itemGroups: [
              [
                2523963837, // Empyrean Cartographer Mask
                986495788, // Empyrean Cartographer Grips
                3384125556, // Empyrean Cartographer Vest
                2056685398, // Empyrean Cartographer Strides
                4127955529 // Empyrean Cartographer Cloak
              ],
              [
                2727287231, // Empyrean Cartographer Helm
                2661154438, // Empyrean Cartographer Gauntlets
                926439978, // Empyrean Cartographer Plate
                2220183680, // Empyrean Cartographer Greaves
                1563257659 // Empyrean Cartographer Mark
              ],
              [
                2868013594, // Empyrean Cartographer Hood
                810317923, // Empyrean Cartographer Gloves
                2081889453, // Empyrean Cartographer Robes
                2731297685, // Empyrean Cartographer Boots
                195800736 // Empyrean Cartographer Bond
              ]
            ]
          },
          {
            name: 'Armor',
            season: 9,
            itemGroups: [
              [
                1701735222, // Virulent Mask
                2864252039, // Virulent Grips
                989383089, // Virulent Vest
                2041515209, // Virulent Strides
                3184812876 // Virulent Cloak
              ],
              [
                78334970, // Future-Facing Helm
                1849572291, // Future-Facing Gauntlets
                438532493, // Future-Facing Plate
                4236586357, // Future-Facing Greaves
                3313342080 // Future-Facing Mark
              ],
              [
                3389218555, // Wrath Trail Hood
                553429674, // Wrath Trail Gloves
                1413321694, // Wrath Trail Robes
                3504728132, // Wrath Trail Boots
                784525543 // Wrath Trail Bond
              ]
            ]
          },
          {
            name: 'Armor',
            season: 10,
            itemGroups: [
              [
                1880090831, // Luxe Visage
                4035222870, // Luxe Sleeves
                1188323994, // Luxe Vest
                952534832, // Luxe Riders
                412216811 // Luxe Cloak
              ],
              [
                2138625825, // Luxe Visor
                2934968632, // Luxe Cuffs
                74228048, // Luxe Parka
                970236274, // Luxe Treads
                3720911245 // Luxe Mark
              ],
              [
                1476085268, // Luxe Crown
                306810541, // Luxe Gloves
                3799598931, // Luxe Overcoat
                1019186287, // Luxe Soles
                1751531146 // Luxe Bond
              ]
            ]
          },
          {
            name: 'Ornaments',
            season: 8,
            itemGroups: [
              [
                52189603, // Bad Dog
                651701175, // Big Blind
                3844102542, // Father of Islands
                // 3432171457, // Heretic Robe (Not planned to be sold for Bright Dust)
                1360105767, // Járngreipr
                1563263613, // Law of Induction
                3438514430, // Peacebringer
                2020179519, // Polemology
                3093486579, // Sky/Perdition
                // 2744195002, // Third Rail (Not planned to be sold for Bright Dust)
                519687404, // What If
                4159445096 // A Better Specimen
              ],
              [
                // 1617168101, // Augury of Snakes (Not planned to be sold for Bright Dust)
                // 193028652, // Disruptive Camouflage (Not planned to be sold for Bright Dust)
                1145663134 // Great White
              ],
              [
                // 3624790844, // Eerie Breeze (Not planned to be sold for Bright Dust)
                // 331838657, // The Gate Lord (Not planned to be sold for Bright Dust)
                // 3200402431, // Bronze Carapace (Not planned to be sold for Bright Dust)
                // 1206183717, // Shock Grenadier (Not planned to be sold for Bright Dust)
                // 2406427719, // Conflux Control (Not planned to be sold for Bright Dust)
                // 3916835562 // Fènghuáng (Not planned to be sold for Bright Dust)
              ]
            ]
          },
          {
            name: 'Ornaments',
            season: 9,
            itemGroups: [
              [
                384923539, // Abyssal Scream
                432606867, // Black Death
                3449188806, // Long Live the Queen
                4115107119, // Packmaster's Command
                1869157938, // Ain't My First Rodeo
                299539105, // Violent Exorcism
                204713420, // Devil's Advocate
                171163996 // Bloodline Memorial
              ],
              [
                2319265678, // Doubt
                440770966 // Shifting Loyalties
              ],
              [
                929374195, // Mantle of Remembrance
                2579031865, // Calliope's Lullaby
                3654808012, // The Fourteenth Anamnesis
                3786758103, // Embodiment of the Warbeast
                3778646768, // Flight of the Interceptor
                475012491 // The Want of Lies and Wishes
              ]
            ]
          },
          {
            name: 'Ornaments',
            season: 10,
            itemGroups: [
              [
                2598666301, // All In
                269320354, // Blind Fury
                1409366784, // Burning Red
                1513177792, // Mercurial Affliction
                1673894252, // Splice of Life
                2482603977, // Standard Bearer
                1998569185 // Timeline Zero
                // 3547626308, // Death Comes Calling (Not planned to be sold for Bright Dust)
                // 3673548752 // Regal Deterrent (Not planned to be sold for Bright Dust)
              ],
              [
                // 4124216484, // Prized Ivory (Not planned to be sold for Bright Dust)
                1418556229, // Lord of the Hunt
                1828076537, // Necrosis
                1733242439 // Only the Penitent Pass
                // 572589482 // Blissful Ignorance (Not planned to be sold for Bright Dust)
              ],
              [
                3927691568, // Nano Redux
                879895999, // Huskcrushers
                3505404632 // Diadem of Deceit
              ]
            ]
          },
          {
            name: 'Ornaments',
            season: 11,
            itemGroups: [
              [
                3038888553, // Matterscourge
                2347594371, // Objective Reality
                1606218149, // Heated Exchange
                3697492370 // Ahead of Its Time
                // 3365127084 // Sand and Sun (Not planned to be sold for Bright Dust)
                // 584392035 // Equinox (Not planned to be sold for Bright Dust)
              ],
              [
                2549526496, // Hrafnagud (Not planned to be sold for Bright Dust)
                2779460227, // Arcturus Engine (Not planned to be sold for Bright Dust)
                1705887390 // Path to Convergence (Not planned to be sold for Bright Dust)
              ]
            ]
          },
          {
            name: 'Emotes & Finishers',
            season: 8,
            itemGroups: [
              [
                // 3769820799, // Camping (Not planned to be sold for Bright Dust)
                3806167517, // Fireteam Fire Up
                3470992439, // Guitar Solo
                2291520183, // Ninja Vanish
                // 3366702053, // Plant the Flag (Not planned to be sold for Bright Dust)
                2035374481, // Precise Strike
                // 2370712399, // Spring Showers (Not planned to be sold for Bright Dust)
                // 3105326202, // Cross-Step Shuffle (Not planned to be sold for Bright Dust)
                1188569234, // Ding
                1141309169, // Flare Gun
                1422833575, // Give Dap
                1300438173, // Happy Feet
                // 3702002191, // Be Sneaky (Not planned to be sold for Bright Dust)
                248592690, // Eat It Up
                991204036, // Make It Stop
                88498859 // Too Hot
              ],
              [
                2504641452, // Savage Haymaker
                2504641454, // Golden Age Dropkick
                2504641455 // Whirlwind
              ]
            ]
          },
          {
            name: 'Emotes & Finishers',
            season: 9,
            itemGroups: [
              [
                1749473785, // Galloping Knight
                2711683305, // Playground Ride
                710527784, // Spike
                1194404806, // Cowbell
                208153163, // Keep It Clean
                2036655792, // Origami Crane
                1037681135, // Shake It Out
                300144357, // Distracted
                2077271390, // Flashy Moves
                2737227933, // Blade Wipe
                //  1700183918, // Gunslinger's Anticipation (Not planned to be sold for Bright Dust)
                //  1944063916, // Sunbreaker's Anticipation (Not planned to be sold for Bright Dust)
                //  340413553, // Dawnblade's Anticipation (Not planned to be sold for Bright Dust)
                //  1931729143, // Nightstalker's Respite (Not planned to be sold for Bright Dust)
                //  430068245, // Sentinel's Respite (Not planned to be sold for Bright Dust)
                //  3302119490 // Voidwalker's Respite (Not planned to be sold for Bright Dust)
                2970231290, // Face Palm
                4138096633 // Guardian, Bye!
              ],
              [
                //  1395929128, // Clock Cleaner (Not planned to be sold for Bright Dust)
                885220736 // Fist of Fury
                //  3643356340, // Flash Kick (Not planned to be sold for Bright Dust)
                //  1294248797, // Sure Shot (Not planned to be sold for Bright Dust)
                //  3474738931, // Nail on the Head (Not planned to be sold for Bright Dust)
                //  1492613344 // En Garde (Not planned to be sold for Bright Dust)
              ]
            ]
          },
          {
            name: 'Emotes',
            season: 10,
            itemGroups: [
              [
                1706261957, // ANOTHER!
                2007350539, // Carry The Load
                4273833730, // Feline Fancy
                2082339998, // Hit the Bag
                2737290434, // Master Chef
                // 2836141137, // Blinding Imagery (Not planned to be sold for Bright Dust)
                // 3394806033, // Masterful Flow (Not planned to be sold for Bright Dust)
                // 2032032009, // Up High, Down Low (Not planned to be sold for Bright Dust)
                666690120, // Big Red Button
                2203539122, // Don Shades
                2270918090, // I Surrender!
                3245326556, // Infinity Cubes
                3736949607, // Taunt and Flaunt
                2144724879, // Patty Cake
                1942988696, // Shoulder Hug
                1032515587, // Whisper Sweet Nothings
                3973089432, // All Right, Let's GO!
                1897766356 // Hand Cannon Vogue
              ],
              [
                // 1429730445, // I Am the Boss Now (Not planned to be sold for Bright Dust)
                // 1475990252, // Gladiator's Bladerush (Not planned to be sold for Bright Dust)
                // 777541286 // Energy Overload (Not planned to be sold for Bright Dust)
                // 529541453, // This… Is… TRIALS! (Not planned to be sold for Bright Dust)
                // 1516635053, // Crackling Flourish (Not planned to be sold for Bright Dust)
                // 3141315153, // Thunderclap (Not planned to be sold for Bright Dust)
                // 1491605562, // Stormbreaker (Not planned to be sold for Bright Dust)
              ]
            ]
          },
          {
            name: 'Emotes',
            season: 11,
            itemGroups: [
              [
                2837446538, // A Sour Taste
                484425890, // Dawn of Invention
                1872362630, // Dubious Correlation
                3358915164, // Commanding Presence
                2449520393, // Grasping Thoughts
                391087589, // Elegant Twirl
                4015309571, // Fluid Dance
                1426984386, // Leggy Dance
                964709622, // Study Time
                3615496977, // Wacky Inflation
                3793695881, // Pumping Up
                2850533948, // Air Riff
                346333546, // Fencing Salute
                3462529885, // Sign of Approval
                3086378545, // Miniscule Melody
                2161809809, // Eager Beaver
                1163621614 // Victory Shout
              ],
              [
                // 2167929971, // Set and Spike (Not planned to be sold for Bright Dust)
                // 2902950991, // Aerial Snap Kick (Not planned to be sold for Bright Dust)
                // 659427429, // Overhead Heel Crush (Not planned to be sold for Bright Dust)
                // 1447853644, // Slice and Dice (Not planned to be sold for Bright Dust)
                // 697327226, // Bulwark Hurl (Not planned to be sold for Bright Dust)
                // 3401563735 // Nova Pulse (Not planned to be sold for Bright Dust)
              ]
            ]
          },
          {
            name: 'Ghosts',
            season: 8,
            itemGroups: [
              [
                // 779216204, // Harper's Shell (Not planned to be sold for Bright Dust)
                779216202, // Lander Shell
                779216203, // Lion Guardant Shell
                779216206, // Lunar Shell
                779216207, // Ophiuchus Shell
                779216200, // Propheteer Shell
                779216201 // Scarlet Swarm Shell

                // Has highResIcon but not attached to Tess

                // 779216205 // Friendly Fire Shell (Not planned to be sold for Bright Dust)
              ],
              [
                2155593794, // Moonbound Projection
                2155593795, // Mindjack Projection
                2155593792, // Crota's Bane Projection
                2155593793 // Aeronautics of China Projection
              ]
            ]
          },
          {
            name: 'Ghosts',
            season: 9,
            itemGroups: [
              [
                4005536856, // Lampion Shell
                4005536857, // Omolon Shell
                4005536858, // Tex Mechanica Shell
                4005536859, // Veist Shell
                4005536860, // Simulation Shell
                4005536861, // Phalanx Shell
                4005536862 // Traitor Primus Shell
              ],
              [
                859004031, // Lantern Projection
                859004030, // Red Legion Projection
                859004029, // Saint-14 Projection
                859004028, // Colossus Helmet Projection
                859004027 // XIV Projection
              ]
            ]
          },
          {
            name: 'Ghosts',
            season: 10,
            itemGroups: [
              [
                1090082587, // Orbweaver Shell
                1090082586, // Seraph Shell
                1090082585, // CLVS-241 Shell
                // 1090082584, // Almost Mighty Shell (Not planned to be sold for Bright Dust)
                1090082591, // Constricting Shell
                1090082590, // CamNav-TTN Shell
                1090082589 // Nucleus Shell
              ],
              [
                4149534912, // Cover of the Exile Projection
                4149534916, // Rasputin Projection
                4149534917, // Trials of Osiris Projection
                4149534918, // Hood of the Exile Projection
                4149534919 // Helm of the Exile Projection
              ]
            ]
          },
          {
            name: 'Ghosts',
            season: 11,
            itemGroups: [
              [
                3398078487, // August Shell
                3398078485, // Canopus Shell
                3398078482, // Adonis Shell
                3398078483 // Multiband Shell

                // 2764545753 // Empathic Shell (Not planned to be sold for Bright Dust)
              ],
              [
                2062815065, // Sterling Arbor Projection
                2062815064, // Tetrahedron Projection
                2062815067, // Ennead Projection
                2062815066, // Daito Projection
                2062815069 // Depository Projection
              ]
            ]
          },
          {
            name: 'Sparrows',
            season: 8,
            items: [
              2067296769, // Blood Runner
              2067296773, // Four Degrees of Separation
              2067296775, // Golden Pride
              2067296772, // Invasive Species
              2067296770 // Jotuneer
              // 2067296771, // The Regal Howl (Not planned to be sold for Bright Dust)

              // Has highResIcon but not attached to Tess

              // 2067296774, // Blast Chariot (Not planned to be sold for Bright Dust)
              // 2067296768 // Magneton Trust (Planned for a future season)
            ]
          },
          {
            name: 'Sparrows',
            season: 9,
            items: [
              4248884708, // Tip of the Spear
              4248884709, // Ash Angel
              4248884710, // The Ram
              4248884711, // Perennial Velocity
              4248884704, // Viper-4s
              4248884705, // Spur of the Moment
              4248884706 // Motive Force
            ]
          },
          {
            name: 'Sparrows',
            season: 10,
            items: [
              // 144819303, // The Blockbuster (Not planned to be sold for Bright Dust)
              144819302, // Magneton Thrust
              144819301, // Nightmare Stalker
              144819300, // Lunatic's Legacy
              // 144819299, // Residual Trace (Not planned to be sold for Bright Dust)
              144819298, // Immoderate Splendor
              144819297, // Urban Commander
              144819296 // Haute Bliss
            ]
          },
          {
            name: 'Sparrows',
            season: 11,
            items: [
              // 406589946 // Photocycle (Not planned to be sold for Bright Dust)
              406589947, // Galvanic Fork
              406589944, // Canopus Trireme
              406589945, // Adonis Blue
              406589950, // SK-1 Multiband Rover
              406589948 // August Courser
              // 406589949 // Cryptomnesia (Not planned to be sold for Bright Dust)
            ]
          },
          {
            name: 'Ships',
            season: 8,
            items: [
              4079130217, // Quality Cut
              4079130220, // Refashioned Shapes
              4079130223 // The Machinoform

              // Has highResIcon but not attached to Tess

              // 4079130218, // Arbitrage LXI (Not planned to be sold for Bright Dust)
              // 4079130219, // Cuttlebone (Not planned to be sold for Bright Dust)
              // 4079130216, // Nephilim Toaster (Not planned to be sold for Bright Dust)
              // 4079130221 // Unwilling Revolt 00-Z (Not planned to be sold for Bright Dust)
            ]
          },
          {
            name: 'Ships',
            season: 9,
            items: [
              430387801, // Chrysopelea-S
              430387802, // The Prod
              430387803, // Tachyon-4
              430387804 // Saint's Invocation
            ]
          },
          {
            name: 'Ships',
            season: 10,
            items: [
              3528646495, // Obsidian Wings
              3528646494, // Waking Nightmare
              // 3528646493, // NS81 Reprisal Sprint (Not planned to be sold for Bright Dust)
              3528646492, // Solar Sails
              3528646491 // Arrow of Time
              // 3528646490, // Knucklebug (Not planned to be sold for Bright Dust)
              // 3528646489 // Saint's Vocation (Not planned to be sold for Bright Dust)
            ]
          },
          {
            name: 'Ships',
            season: 11,
            items: [
              2266588630, // Rimskipper Sling
              2266588631, // The Pallbearer
              2266588628, // Callisto Lancer
              2266588629, // VG-17 Flying Fortress
              2266588626, // Velocimancer
              2266588627 // Canopus Wing
              // 2266588624, // Cuttlebone (Not planned to be sold for Bright Dust)
            ]
          },
          {
            name: 'Shaders',
            season: 8,
            items: [
              3818755494, // Bruised Blush
              3818755495, // Chitin Slate
              3818755493, // Iridescent Coral
              3818755490, // Jungle Viper
              3818755492, // Oiled Gunmetal
              3818755491 // Polished Sea Stone
            ]
          },
          {
            name: 'Shaders',
            season: 9,
            items: [
              3906243541, // Welded Brass
              3906243540, // Grayscale Undergrowth
              3906243543, // Circadian Chill
              3906243542 // Byzantium Lotus
            ]
          },
          {
            name: 'Shaders',
            season: 10,
            items: [
              2885393052, // Golden Age Wine
              2885393053, // Vibrant Medusa
              2885393054, // Coppertone Patina
              2885393055 // Neopop Wave
            ]
          },
          {
            name: 'Shaders',
            season: 11,
            items: [
              1046971211, // Butterbark
              1046971210, // Biolume
              1046971209, // Jacarina
              1046971208 // Gloamstrife
            ]
          },
          {
            name: 'Transmat Effects',
            season: 8,
            items: [
              3951356827, // Blind Clutch
              3951356826, // Harpy's Cry
              3951356824, // Nightmare Emergence
              3951356825 // Shattered Shrieker
            ]
          },
          {
            name: 'Transmat Effects',
            season: 9,
            items: [
              1378231105, // Cabal Shield Breaker
              1378231104, // Box of Tricks
              1378231107, // Vex Gate Arrival
              1378231106 // Up in Smoke
            ]
          },
          {
            name: 'Transmat Effects',
            season: 10,
            items: [
              3545885626, // Warsat Arrival
              3545885627, // Cabal Entrance
              3545885625 // SIVA Emergence
            ]
          },
          {
            name: 'Transmat Effects',
            season: 11,
            items: [
              1729618707, // Daito Capsule Entrance
              1729618706 //Champion Entrance
            ]
          }
        ]
      },
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
