// @flow

import * as common from './common';
import { section } from './common';
import type { SetPage } from '../types';

export default ([
  {
    name: 'Endgame',
    sets: [
      {
        name: 'Leviathan Raid',
        description:
          'Gear obtained by playing the Leviathan raid and increasing your reputation with Emperor Calus.',
        sections: [
          section('Weapons', common.RAID_LEVIATHAN_WEAPONS),

          section('Hunter Armor', common.RAID_LEVIATHAN_ARMOR_HUNTER),
          section(
            'Hunter Armor - Prestige Mode',
            common.RAID_LEVIATHAN_ARMOR_PRESTIGE_HUNTER
          ),

          section('Titan Armor', common.RAID_LEVIATHAN_ARMOR_TITAN),
          section(
            'Titan Armor - Prestige Mode',
            common.RAID_LEVIATHAN_ARMOR_PRESTIGE_TITAN
          ),

          section('Warlock Armor', common.RAID_LEVIATHAN_ARMOR_WARLOCK),
          section(
            'Warlock Armor - Prestige Mode',
            common.RAID_LEVIATHAN_ARMOR_PRESTIGE_WARLOCK
          ),

          {
            name: 'Emblems',
            items: [
              3257147585, // Embrace His Name
              2107367383, // Glory to the Emperor
              1667199810, // Good Dog
              2984066626, // Splish Splash
              1625974211, // Two Enter, One Leaves
              812824526 // Take the Throne
            ]
          },
          {
            name: 'Shaders',
            items: [
              1422712818, // Calus's Selected
              1422712819 // Calus's Treasured
            ]
          }
        ]
      },

      {
        name: 'Iron Banner',
        description:
          'Weapons and armor obtained by honoring the heroes of old in the Iron Banner Crucible tournament.',
        sections: [
          {
            name: 'Weapons',
            items: common.IRONBANNER_S1_WEAPONS
          },
          {
            name: 'Hunter Armor',
            items: common.IRONBANNER_S1_ARMOR_HUNTER
          },
          {
            name: 'Titan Armor',
            items: common.IRONBANNER_S1_ARMOR_TITAN
          },
          {
            name: 'Warlock Armor',
            items: common.IRONBANNER_S1_ARMOR_WARLOCK
          },
          {
            name: 'Emblems',
            items: [
              3373303016, // Felwinter Frost
              3373303017 // Shades of Radegast
            ]
          },
          {
            name: 'Shaders',
            items: [
              864505614, // Iron Wolf
              864505615 // Iron Battalion
            ]
          }
        ]
      },

      {
        name: 'Trials of the Nine',
        description:
          'Weapons and armor obtained by competing in the Trials of the Nine.',
        sections: [
          {
            name: 'Weapons',
            items: common.TRIALS_S1_WEAPONS
          },
          {
            name: 'Hunter Armor',
            items: common.TRIALS_S1_ARMOR_HUNTER
          },
          {
            name: 'Hunter Armor - Flawless',
            items: common.TRIALS_S1_ARMOR_FLAWLESS_HUNTER
          },
          {
            name: 'Titan Armor',
            items: common.TRIALS_S1_ARMOR_TITAN
          },
          {
            name: 'Titan Armor - Flawless',
            items: common.TRIALS_S1_ARMOR_FLAWLESS_TITAN
          },
          {
            name: 'Warlock Armor',
            items: common.TRIALS_S1_ARMOR_WARLOCK
          },
          {
            name: 'Warlock Armor - Flawless',
            items: common.TRIALS_S1_ARMOR_FLAWLESS_WARLOCK
          },
          {
            name: 'Emblems',
            items: [
              19962737, // Chasing Perfection
              2029506313 // You Are Worthy
            ]
          },
          {
            name: 'Shaders',
            items: [
              16277432, // Honors of the Nine
              16277433 // Gift of the Nine
            ]
          }
        ]
      }
    ]
  },
  {
    name: 'Faction Rally',
    sets: [
      {
        name: 'Dead Orbit Arsenal',
        description:
          'Weapons and armor obtained by working with Dead Orbit in their mission to push beyond the solar system.',
        small: true,
        sections: [
          {
            name: 'Weapons',
            items: common.FACTION_DO_S1_WEAPONS
          },
          {
            name: 'Hunter Armor',
            items: common.FACTION_DO_S1_ARMOR_HUNTER
          },
          {
            name: 'Titan Armor',
            items: common.FACTION_DO_S1_ARMOR_TITAN
          },
          {
            name: 'Warlock Armor',
            items: common.FACTION_DO_S1_ARMOR_WARLOCK
          },
          {
            name: 'Emblems',
            items: [
              802191383 // Total Eclipse
            ]
          },
          {
            name: 'Shaders',
            items: [
              1841451177, // Dead Orbit's Fate
              1841451179 // Dead Orbit Camo
            ]
          }
        ]
      },
      {
        name: 'New Monarchy Arsenal',
        description:
          'Weapons and armor obtained by working with New Monarchy to strengthen the Last City.',
        small: true,
        sections: [
          {
            name: 'Weapons',
            items: common.FACTION_NM_S1_WEAPONS
          },
          {
            name: 'Hunter Armor',
            items: common.FACTION_NM_S1_ARMOR_HUNTER
          },
          {
            name: 'Titan Armor',
            items: common.FACTION_NM_S1_ARMOR_TITAN
          },
          {
            name: 'Warlock Armor',
            items: common.FACTION_NM_S1_ARMOR_WARLOCK
          },
          {
            name: 'Emblems',
            items: [
              802191381 // Regency
            ]
          },
          {
            name: 'Shaders',
            items: [
              1206746476, // New Monarchy Diamonds
              1206746478 // New Monarchy Regalia
            ]
          }
        ]
      },
      {
        name: 'Future War Cult Arsenal',
        description:
          'Weapons and armor obtained by working with Future War Cult to prepare for the wars to come.',
        small: true,
        sections: [
          {
            name: 'Weapons',
            items: common.FACTION_FWC_S1_WEAPONS
          },
          {
            name: 'Hunter Armor',
            items: common.FACTION_FWC_S1_ARMOR_HUNTER
          },
          {
            name: 'Titan Armor',
            items: common.FACTION_FWC_S1_ARMOR_TITAN
          },
          {
            name: 'Warlock Armor',
            items: common.FACTION_FWC_S1_ARMOR_WARLOCK
          },
          {
            name: 'Emblems',
            items: [
              802191382 // Battle Colors
            ]
          },
          {
            name: 'Shaders',
            items: [
              1045633725, // War Cult Rain
              1045633727 // War Cult Camo
            ]
          }
        ]
      }
    ]
  },
  {
    name: 'Planetary Sets',
    sets: [
      {
        name: 'European Dead Zone Gear',
        description:
          'Weapons and armor obtained by performing tasks for Devrim Kay in the EDZ.',
        small: false,
        sections: [
          {
            name: 'Weapons',
            items: [
              3762467078,
              1885753222,
              2145476620,
              1911843789,
              1513927138,
              287042893,
              731147177,
              2502422772,
              1983332560,
              3312073054,
              1291586825 // Eystein-D
            ]
          },
          {
            name: 'Hunter Armor',
            items: [3973359167, 3907226374, 2729740202, 3466255616, 3366557883]
          },
          {
            name: 'Titan Armor',
            items: [3080875433, 872284448, 10307688, 3862191322, 1712405061]
          },
          {
            name: 'Warlock Armor',
            items: [3764013786, 1664741411, 2724176749, 4051755349, 1304122208]
          },
          {
            name: 'Emblems',
            items: [
              1321546045, // European Dead Zone
              2664485240, // Shadow of the Shard
              2664485241, // Red Legion Stronghold
              2664485242, // Devrim's Perch
              2664485243, // Humanity's Cradle
              3541326821, // Dead Zone Camo
              3541326820, // Kay's Command
              3541326823 // Trostland Terminus
            ]
          },
          {
            name: 'Shaders',
            items: [
              3921006352, // Dead Zone Foliage
              3921006355 // Dead Zone Bark
            ]
          }
        ]
      },

      {
        name: 'Echo Mesa, Io Gear',
        description:
          'Weapons and armor obtained by performing tasks for Asher Mir on Io.',
        small: false,
        sections: [
          {
            name: 'Weapons',
            items: [
              3762467079,
              1911843788,
              731147179,
              287042894,
              3312073055,
              2502422775,
              417474226,
              1983332562,
              2517599010
            ]
          },
          {
            name: 'Hunter Armor',
            items: [2715114534, 1729074423, 1085797441, 3537609113, 1868302492]
          },
          {
            name: 'Titan Armor',
            items: [1370341044, 4071576013, 2523633779, 447407759, 434092458]
          },
          {
            name: 'Warlock Armor',
            items: [1554079989, 229923140, 3388454204, 2160569198, 845354673]
          },
          {
            name: 'Emblems',
            items: [
              3451625162, // Echo Mesa
              313685908, // Taken Resurgence
              313685909, // Ignition Unsparked
              313685910, // Traveler's Departure
              313685911, // Asher's Asylum
              31953747, // Ballet Lover
              31953744, // Holy Ground
              31953746 // Traveler's Flight
            ]
          },
          {
            name: 'Shaders',
            items: [
              1489178153, // Echoes of Io
              1489178154 // Flowers of Io
            ]
          }
        ]
      },

      {
        name: 'New Pacific Arcology Gear',
        description:
          'Weapons and armor obtained by performing tasks for Sloane on Titan.',
        small: false,
        sections: [
          {
            name: 'Weapons',
            items: [
              3762467077,
              1885753223,

              2145476623,
              1911843790,

              2700862856,
              3312073052,

              1513927136,
              287042892,

              2502422774,
              417474224,
              515224227
            ]
          },
          {
            name: 'Hunter Armor',
            items: [1607012852, 479417869, 2380978355, 1150216911, 291437034]
          },
          {
            name: 'Titan Armor',
            items: [2930137294, 3955340735, 1847610489, 2876590849, 3586337076]
          },
          {
            name: 'Warlock Armor',
            items: [2575848725, 1251692004, 2400621276, 2757777294, 3686454865]
          },
          {
            name: 'Emblems',
            items: [
              426147374, // New Pacific Arcology
              594640136, // Hive Infestation
              594640137, // Golden Age Tarnished
              594640138, // Utopia Lost
              594640139, // Sloane's Watchtower
              3785035698, // Cargo Bay Cross
              3785035696, // New Pacific Access
              3785035697 // Solarium Yellow
            ]
          },
          {
            name: 'Shaders',
            items: [
              1051938196, // New Pacific Sink
              1051938199 // New Pacific Rush
            ]
          }
        ]
      },

      {
        name: 'Arcadian Valley, Nessus Gear',
        description:
          'Weapons and armor obtained by performing tasks for Failsafe on Nessus.',
        small: false,
        sections: [
          {
            name: 'Weapons',
            items: [
              3762467076,
              1885753220,
              2145476622,
              1911843791,
              1513927139,
              2700862858,
              3312073053,
              2502422773,
              417474225,
              1983332561,
              2535939781
            ]
          },
          {
            name: 'Hunter Armor',
            items: [3026265798, 2423003287, 2462524641, 3807183801, 3669590332]
          },
          {
            name: 'Titan Armor',
            items: [1010733668, 957928253, 177493699, 3323553887, 3754164794]
          },
          {
            name: 'Warlock Armor',
            items: [2811068561, 1427620200, 2359639520, 2528959426, 1669675549]
          },
          {
            name: 'Emblems',
            items: [
              1599898966, // Arcadian Valley
              776878384, // Fallen Pillage
              776878385, // Leviathan's Feast
              776878386, // Machine Centaur
              776878387, // Failsafe's Prison
              2484637938, // Exodus Access
              2484637936, // Jacobson's Staff
              2484637939 // Tangled Anchor
            ]
          },
          {
            name: 'Shaders',
            items: [
              3403116793, // Nessus Pursuit
              3403116794 // Nessus Mirage
            ]
          }
        ]
      }
    ]
  },

  {
    name: 'Vendor',
    sets: [
      {
        name: 'Vanguard Tactician Gear',
        description:
          'Weapons and armor obtained by carrying out special operations for Zavala.',
        sections: [
          {
            name: 'Weapons',
            items: [
              1644162710, // Origin Story
              1960218487, // Nameless Midnight
              1200414607, // The Showrunner
              3582424018, // Deadpan Delivery
              3967155859, // The Last Dance
              1351035691, // Daedalus Code
              339163900, // Nightshade
              137879537, // Curtain Call
              2290863050, // Persuader
              3445437901, // Main Ingredient
              2168486467 // Wicked Sister
            ]
          },

          {
            name: 'Hunter Armor',
            items: [3198744410, 1099472035, 406401261, 3486485973, 3281314016]
          },

          {
            name: 'Titan Armor',
            items: [3873435116, 3027732901, 1667528443, 3375062567, 24244626]
          },

          {
            name: 'Warlock Armor',
            items: [1540376513, 2378296024, 34846448, 413460498, 3215392301]
          },
          {
            name: 'Emblems',
            items: [
              2010554576, // At the Vanguard
              2010554578, // Make Us Proud
              2010554579 // Push Forward
            ]
          },
          {
            name: 'Shaders',
            items: [
              223308216 // Vanguard Magnus
            ]
          },
          {
            name: 'Achievement Emblems - Strikes',
            items: [
              2390666069, // High-Risk, High-Reward
              3115055261, // Gather Your Fireteam
              481345527 // Mentor of Light
            ]
          }
        ]
      },

      {
        name: 'Vanguard Research Gear',
        description:
          'Weapons and armor obtained by assisting Ikora Rey with her research.',
        sections: [
          {
            name: 'Hunter Armor',
            items: [4248632159, 4224076198, 385045066, 3741528736, 555828571]
          },
          {
            name: 'Titan Armor',
            items: [4081859017, 1490387264, 2682045448, 185326970, 89175653]
          },
          {
            name: 'Warlock Armor',
            items: [2615512594, 3081969019, 868792277, 1532009197, 4285708584]
          },
          {
            name: 'Emblems',
            items: [
              1724152706, // Red Legion Aegis
              1724152705, // Red Legion Logistics
              1724152704 // WAR Vault 5
            ]
          },
          {
            name: 'Achievement Emblems - The Red War Story',
            items: [
              3635192014, // Hunter's Hoard
              3941202506, // Titan's Triumph
              3564452901 // Warlock's Wisdom
            ]
          }
        ]
      },

      {
        name: 'Crucible Engram',
        description: 'Rewards for your efforts in the Crucible.',
        sections: [
          {
            name: 'Weapons',
            items: [
              3336215727, // Martyr's Make
              4193877020, // Does Not Compute
              1048266744, // Better Devils
              1325579289, // Retrofuturist
              962412079, // Last Perdition
              4174481098, // Steel Sybil Z-14
              2660862359, // Gentleman Vagabond
              1773600468, // Critical Sass
              2621637518 // Play of the Game
            ]
          },
          {
            name: 'Hunter Armor',
            items: [3223280471, 2296691422, 2718495762, 3140634552, 3313736739]
          },
          {
            name: 'Titan Armor',
            items: [2191401041, 849529384, 2815422368, 1484937602, 1742680797]
          },
          {
            name: 'Warlock Armor',
            items: [1764274932, 636679949, 1333087155, 1307478991, 3538513130]
          },
          {
            name: 'Emblems',
            items: [
              4242592195, // Fight Forever
              4242592192, // Give Them War
              4242592193, // One Path to Victory
              969863968 // Victorious Veteran
            ]
          },
          {
            name: 'Shaders',
            items: [
              3875413893 // Crucible Glory
            ]
          }
        ]
      },

      {
        name: 'Gunsmith Arsenal',
        description:
          'Weapons obtained by increasing your standing with Banshee-44, the Gunsmith.',
        sections: [
          {
            name: 'Weapons',
            items: [
              3778520451, // Galliard-42
              3778520450, // Halfdan-D
              273396910, // Frontier Justice
              925326393, // Manannan SR4
              925326392, // Tango-45
              925326394, // Black Scorpion-4sr
              3860697510, // Imset HC4
              3860697508, // Minuet-42
              1533499360, // Athelflad-D
              1533499361, // Etana SI4
              1533499362, // Urchin-3si
              566976652, // Resonance-42
              566976653, // Antiope-D
              566976654, // Phosphorus MG4
              339343291, // Cadenza-43
              339343290, // Nergal PR4
              3748713779, // Morrigan-D
              3748713778, // Pentatonic-48
              3666954562, // Veleda-D
              3666954561, // Copperhead-4sn
              3666954563, // Elegy-49
              2703340117, // Somerled-D
              2398848320, // Erentil FR4
              896923850, // Acantha-D
              3778520449 // Jiangshi AR4
            ]
          },
          {
            name: 'Emblems',
            items: [
              3605230072, // Hakke Upgrade
              3605230074, // Omolon Upgrade
              3605230073, // SUROS Upgrade
              3605230075 // VEIST Upgrade
            ]
          },
          {
            name: 'Shaders',
            items: [
              346878928, // VEIST Fieldscale
              346878930, // VEIST Poison
              700322568, // Omolon Meteor
              700322570, // Omolon Camo
              2307426896, // SUROS Tone
              2307426898, // SUROS Modular
              2737886288, // Häkke History
              2737886290 // Häkke Camo
            ]
          }
        ]
      },
      {
        name: 'Flashpoint Gear',
        description: "Gear from Cayde-6's weekly Flashpoint.",
        sections: [
          {
            name: 'Emblems - Flashpoint High Value Targets',
            items: [
              1173929375, // C-T-A-T-O-D-L
              1173929374 // Gone Hunting
            ]
          },
          {
            name: 'Emblems - Cayde-6 Treasure Chests',
            items: [
              1409726989, // Arcology Interface
              1409726986, // Ace of Spade
              1409726979, // Against the Dark
              1409726990, // Coordinate Mathematics
              1409726985, // Ghost Board
              1409726987, // Jade Rabbit Redux
              1409726991, // Spark of the Machine
              1409726988, // Try the Special
              1409726984, // Telstar Graphics
              1409726978 // Way of the Wolf
            ]
          },
          {
            name: 'Achievement Emblems - Public Spaces',
            items: [
              3010885351 // Rally the Flag
            ]
          }
        ]
      }
    ]
  },

  {
    name: 'World Gear',
    sets: [
      {
        name: 'Hunter Specific Sets',
        description: 'Other legendary gear obtained from Engrams.',
        small: true,
        sections: [
          {
            name: 'Weapons',
            items: [1180270692] // Quickfang
          },
          {
            name: 'Dead End Cure 2.1',
            items: [3125909492, 1998314509, 316000947, 2669113551, 2521426922]
          },
          {
            name: 'Errant Knight 1.0',
            items: [2550994842, 493299171, 1024867629, 2414278933, 3433746208]
          },
          {
            name: 'Road Complex AA1',
            items: [269552461, 922218300, 1415533220, 308026950, 2159363321]
          },
          {
            name: 'Icarus Drifter - PS4 Exclusive',
            items: [155832748, 3646674533, 3066593211, 3569443559, 1847870034]
          },
          {
            name: 'Emblems',
            items: [
              1907674138, // Hunter's Wit
              844563491, // Slinger's Sight
              2054118356, // Strider's Slash
              621113310 // Stalker's Shot
            ]
          }
        ]
      },

      {
        name: 'Titan Specific Sets',
        description: 'Other legendary gear obtained from Engrams.',
        small: true,
        sections: [
          {
            name: 'Weapons',
            items: [1180270694] // Crown-Splitter
          },
          {
            name: 'Retro-Grade TG2',
            items: [2525344810, 2530905971, 1364856221, 2265859909, 2826844112]
          },
          {
            name: 'Kerak Type 2',
            items: [160388292, 107582877, 2696303651, 2048751167, 1978110490]
          },
          {
            name: 'Devastation Complex',
            items: [3725654227, 1260134370, 2932121030, 3304280092, 3250112431]
          },
          {
            name: 'Terra Concord - PS4 Exclusive',
            items: [690335398, 3999262583, 3291075521, 1512829977, 4073580572]
          },
          {
            name: 'Emblems',
            items: [
              1907674139, // Titan's Pride
              3828080585, // Breaker's Blaze
              2967682030, // Striker's Slam
              3338748564 // Sentinel's Shove
            ]
          }
        ]
      },

      {
        name: 'Warlock Specific Sets',
        description: 'Other legendary gear obtained from Engrams.',
        small: true,
        sections: [
          {
            name: 'Weapons',
            items: [1180270693] // Eternity's Edge
          },
          {
            name: 'Heiro Camo',
            items: [2791527489, 3629447000, 3884999792, 1664611474, 2770578349]
          },
          {
            name: 'Philomath',
            items: [2542514983, 489114030, 683173058, 2996649640, 373203219]
          },
          {
            name: 'High-Minded Complex',
            items: [993844472, 1457647945, 410671183, 1749589787, 2082184158]
          },
          {
            name: 'Tesseract Trace - PS4 Exclusive',
            items: [2811180959, 3169402598, 4092393610, 2728535008, 434243995]
          },
          {
            name: 'Emblems',
            items: [
              1907674137, // Warlock's Flight
              1530147650, // Blade's Blast
              3778092977, // Storm's Surge
              46275857 // Walker's Warp
            ]
          }
        ]
      }
    ]
  },
  {
    name: 'Other',
    sets: [
      {
        name: 'Promotional Emblems',
        description:
          'Emblems obtained from live events, promotional give aways, and D1 Veteran rewards.',
        sections: [
          {
            name: 'Bundled with Products',
            items: [
              1940590817, // Emperor's Shadows
              1940590822, // Resonant Chord
              4182480233, // Planet of Peace
              4132147349, // Meridian of Destiny
              4182480232, // Brick by Brick
              4182480234, // Cutting Edge
              4132147351, // Recurrent Resplendence
              4182480235, // Hellspawn
              1940590825, // Sonic Simulation
              1940590823, // Carrhae
              4132147353 // Heart of the City
            ]
          },
          {
            name: 'Bungie Store',
            items: [
              4132147344, // Stand Together
              4132147348, // Darkest Day
              4132147345, // Heretic
              1940590824, // Tchaikovsky Admirer
              4132147347 // Day of Seven
            ]
          },
          {
            name: 'Comic',
            items: [
              1940590820 // The Visionary
            ]
          },
          {
            name: 'D1 Veteran',
            // description: 'Acknowledging acheivements from Destiny 1',
            items: [
              4077939641, // Lore Scholar
              4077939647, // Laurel Triumphant
              4077939646, // Laurea Prima II
              4077939645, // Slayer of Oryx
              4077939644, // Heard the Call
              4077939643, // Young Wolf
              4077939642 // Saladin's Pride
            ]
          },
          {
            name: 'Forums',
            items: [
              4182480225, // Symposium Shield
              4182480239 // Vigilant Console
            ]
          },
          {
            name: 'Refer-A-Friend',
            items: [
              4132147352 // The Consensus
            ]
          },
          {
            name: 'Special Events',
            items: [
              1940590816, // The First Wave
              1940590821, // Confluence of Light
              4182480224, // Lens of Fate
              4182480236 // Sign of Mutual Combat
            ]
          },
          {
            name: 'Trial Version',
            items: [
              2537840254 // A Guardian Rises
            ]
          }
        ]
      },
      {
        name: 'Eververse, Season 1',
        big: true,
        sections: [
          {
            name: 'Hunter Armor',
            items: [
              1869779952, // Mask of Optimacy
              1625986881, // Arms of Optimacy
              369186071, // Vest of Optimacy
              2696374963, // Legs of Optimacy
              2497505510 // Cloak of Optimacy
            ]
          },
          {
            name: 'Titan Armor',
            items: [
              1638376198, // Helm of Optimacy
              652336087, // Arms of Optimacy
              415074081, // Plate of Optimacy
              2460870905, // Legs of Optimacy
              1197579132 // Mark of Optimacy
            ]
          },
          {
            name: 'Warlock Armor',
            items: [
              2956899553, // Hood of Optimacy
              3794819064, // Arms of Optimacy
              199852048, // Robes of Optimacy
              1830086706, // Legs of Optimacy
              3421974605 // Bond of Optimacy
            ]
          },
          {
            name: 'Emotes',
            items: common.EVERVERSE_S1_EMOTES
          },
          {
            name: 'Ghosts',
            items: [
              2833999140, // Lambda Shell
              2833999141, // Avalon Shell
              2833999142, // Tower Shell
              2833999143, // Blue Moon Shell
              2833999136, // Number Two Shell
              2833999137, // Starfire Shell
              2833999138, // Jagged Shell
              2833999139, // Kingfisher Shell
              2833999148, // Graylight Shell
              2833999149, // Heraldic Shell
              261110023, // Half-Submerged Shell
              261110022, // Interchange Shell
              261110024, // Bold Shell
              261110025, // Two of Diamonds Shell
              261110026, // Honeycomb Shell
              261110027, // Titan Shell
              261110028, // Lotus Shell
              261110030, // Warlock Shell
              261110031, // Hunter Shell
              261110029, // Competitive Shell
              277887714, // Crescent Shell
              277887715, // Hemisphere Shell
              277887712, // Aggressive Shell
              277887713, // Twilight Shell
              277887718 // Vertical Shell
            ]
          },
          {
            name: 'Sparrows',
            items: [
              807458183, // Vanishing Point
              807458182, // Dinas Emrys
              807458181, // Hastilude
              3889183914, // Fast Track
              3889183915, // Crucible Courser
              3889183912, // Athwart the Void
              3889183913, // Aeon Plume
              3889183918, // Wavechaser
              3889183919, // Soul Velocity
              3889183916, // Angel Bloom
              3889183917, // Speedpunk
              3889183906, // Chronoglass
              3889183907, // Wind Shrike
              2546958593, // October Dash
              2546958592, // Sagittarius
              2546958594, // Telluride
              2546958597, // Skedaddle
              2546958596, // Lunadove
              2546958599, // Hightail
              2546958598, // Wave-Maker
              904825093, // Wayfarer Delta
              904825092, // Wayfarer Tri
              904825094, // Warbird
              904825089, // Hyperion
              904825088 // Dead-End Pro
            ]
          },
          {
            name: 'Ships',
            items: [
              2503134037, // Eriana's Vengeance
              838210459, // Symmetry Flight
              4209989368, // Takanome Wings
              96858972, // Ego and Squid
              3213307847, // The Bandwagon
              1104161649, // Rose and Bone
              2503134032, // BreakPoint
              2503134038, // Cardinal One
              2503134039, // Talon Blue
              2503134036, // Shadowed Dawn
              2503134042, // Helios Strain
              838210457, // Imprint
              838210456, // Alessa
              4209989372, // Dead Fall
              4209989373, // Sojourner
              4209989370, // Captain Nemo
              4209989371, // Alexandria
              4209989369, // Absolute/MN
              4209989366, // Amplitude/PT
              96858973, // Ordinate/VD
              4209989367, // Cartesian/KO
              3213307843, // Leonid MV
              3213307842, // Zenith SV
              3213307845, // Eos Rapture
              3213307844, // Space-Age Lancelot
              3213307846, // Spectral Gain
              3213307849, // Verona Mesh
              3213307848 // High Line
            ]
          },
          {
            name: 'Shaders',
            items: [
              1284563760, // Häkke History Polish
              1284563761, // SUROS Modular Shine
              1284563762, // Omolon Meteor Gloss
              1284563763, // VEIST Poison Shimmer
              1284563764, // Noble Constant Red
              1284563765, // Vanguard Magnus Gloss
              1284563766, // Frumious Blue
              1284563767, // Midnight Talons
              1284563774, // Tarnished Copper
              1284563775, // Xenosilver
              3205869472, // Golden Trace
              3205869473, // Monochromatic
              3205869474, // Cerulean Divide
              3205869475, // Nebula Rose
              3205869476, // Metro Shift
              3205869477, // Dawn and Dusk
              3205869478, // Arctic Pearl
              3205869479, // Watermelon
              3205869484, // Indigo Matrix
              3205869485 // Bumblebee
            ]
          }
        ]
      }
    ]
  }
]: SetPage);
