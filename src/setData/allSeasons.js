// @flow

import * as common from './common';
import type { SetPage } from '../types';

export default ([
  {
    name: 'Holiday',
    sets: [common.SOLSTICE_OF_HEROES]
  },
  {
    name: 'Endgame',
    sets: [
      {
        name: 'Leviathan Raid',
        id: 'ALL_SEASONS_LEVIATHAN_RAID',
        description:
          'Gear obtained by playing the Leviathan raid and increasing your reputation with Emperor Calus.',
        sections: [
          {
            name: 'Weapons',
            season: 1,
            items: common.RAID_LEVIATHAN_WEAPONS
          },
          {
            name: 'Armor',
            season: 1,
            itemGroups: [
              common.RAID_LEVIATHAN_ARMOR_HUNTER,
              common.RAID_LEVIATHAN_ARMOR_TITAN,
              common.RAID_LEVIATHAN_ARMOR_WARLOCK
            ]
          },
          {
            name: 'Armor - Prestige Mode',
            season: 1,
            itemGroups: [
              common.RAID_LEVIATHAN_ARMOR_PRESTIGE_HUNTER,
              common.RAID_LEVIATHAN_ARMOR_PRESTIGE_TITAN,
              common.RAID_LEVIATHAN_ARMOR_PRESTIGE_WARLOCK
            ]
          },
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
          }
        ]
      },

      {
        name: 'Eater of Worlds, Raid Lair',
        id: 'ALL_SEASONS_EATER_OF_WORLDS',
        description:
          'Gear obtained by playing the Eater of Worlds raid lair and increasing your reputation with Emperor Calus.',
        sections: [
          {
            name: 'Weapons',
            season: 2,
            items: common.RAID_EOW_WEAPONS
          },
          {
            name: 'Armor',
            season: 2,
            itemGroups: [
              common.RAID_EOW_ARMOR_HUNTER,
              common.RAID_EOW_ARMOR_TITAN,
              common.RAID_EOW_ARMOR_WARLOCK
            ]
          },
          {
            name: 'Ornaments',
            season: 2,
            itemGroups: [
              common.RAID_EOW_ORNAMENTS_HUNTER,
              common.RAID_EOW_ORNAMENTS_TITAN,
              common.RAID_EOW_ORNAMENTS_WARLOCK
            ]
          },
          {
            name: 'Extras',
            items: [
              113124080, // Contender's Shell (Ghost)
              4261480751, // Emperor's Envy (Emblem)
              4261480750 // Covetous Emperor (Emblem)
            ]
          }
        ]
      },

      {
        name: 'Spire of Stars, Raid Lair',
        id: 'ALL_SEASONS_SPIRE_OF_STARS',
        description:
          'Gear obtained by playing the Spire of Stars raid lair and increasing your reputation with Emperor Calus.',
        sections: [
          {
            name: 'Weapons',
            season: 3,
            items: common.RAID_SOS_WEAPONS
          },
          {
            name: 'Armor',
            season: 3,
            itemGroups: [
              common.RAID_SOS_ARMOR_HUNTER,
              common.RAID_SOS_ARMOR_TITAN,
              common.RAID_SOS_ARMOR_WARLOCK
            ]
          },
          {
            name: 'Ornaments',
            season: 3,
            itemGroups: [
              common.RAID_SOS_ORNAMENTS_HUNTER,
              common.RAID_SOS_ORNAMENTS_TITAN,
              common.RAID_SOS_ORNAMENTS_WARLOCK
            ]
          },
          {
            name: 'Extras',
            items: [
              530754878, // Luxurious Toast emote
              2925370359, // I'm Open Emote
              1057119308, // Spire Star emblem
              2331063860, // Grind Underfoot emblem
              2331063861 // Together, For Glory! emblem
            ]
          }
        ]
      },

      {
        name: 'Iron Banner',
        id: 'ALL_SEASONS_IRON_BANNER',
        description:
          'Weapons and armor obtained by honoring the heroes of old in the Iron Banner Crucible tournament.',
        sections: [
          {
            name: 'Weapons',
            season: 1,
            items: common.IRONBANNER_S1_WEAPONS
          },
          {
            name: 'Weapons',
            season: 2,
            items: common.IRONBANNER_S2_WEAPONS
          },
          {
            name: 'Weapons',
            season: 3,
            items: common.IRONBANNER_S3_WEAPONS
          },
          {
            name: 'Armor',
            season: 1,
            itemGroups: [
              common.IRONBANNER_S1_ARMOR_HUNTER,
              common.IRONBANNER_S1_ARMOR_TITAN,
              common.IRONBANNER_S1_ARMOR_WARLOCK
            ]
          },
          {
            name: 'Ornaments',
            season: 2,
            itemGroups: [
              common.IRONBANNER_S2_ORNAMENTS_HUNTER,
              common.IRONBANNER_S2_ORNAMENTS_TITAN,
              common.IRONBANNER_S2_ORNAMENTS_WARLOCK
            ]
          },
          {
            name: 'Ornaments',
            season: 3,
            itemGroups: [
              common.IRONBANNER_S3_ORNAMENTS_HUNTER,
              common.IRONBANNER_S3_ORNAMENTS_TITAN,
              common.IRONBANNER_S3_ORNAMENTS_WARLOCK
            ]
          },
          {
            name: 'Extras',
            items: [
              3373303016, // Felwinter Frost
              3373303017, // Shades of Radegast
              3681086673, // Iron Companionship Shell (Ghost shell)
              1220495181, // Iron Gallop (Sparrow)
              2924982629, // Iron Pendragon (Ship)
              2919429251, // Iron Hero Sigil (Emblem)
              1420718398, // Esfera Triumph
              1069214754 // Visage of Skorri
            ]
          }
        ]
      },

      {
        name: 'Trials of the Nine',
        id: 'ALL_SEASONS_TRIALS_OF_THE_NINE',
        description:
          'Weapons and armor obtained by competing in the Trials of the Nine.',
        sections: [
          {
            name: 'Weapons',
            season: 1,
            items: common.TRIALS_S1_WEAPONS
          },
          {
            name: 'Weapons',
            season: 2,
            items: common.TRIALS_S2_WEAPONS
          },
          {
            name: 'Weapons',
            season: 3,
            items: common.TRIALS_S3_WEAPONS
          },
          {
            name: 'Armor',
            season: 1,
            itemGroups: [
              common.TRIALS_S1_ARMOR_HUNTER,
              common.TRIALS_S1_ARMOR_TITAN,
              common.TRIALS_S1_ARMOR_WARLOCK
            ]
          },

          {
            name: 'Armor - Flawless',
            season: 1,
            itemGroups: [
              common.TRIALS_S1_ARMOR_FLAWLESS_HUNTER,
              common.TRIALS_S1_ARMOR_FLAWLESS_TITAN,
              common.TRIALS_S1_ARMOR_FLAWLESS_WARLOCK
            ]
          },

          {
            name: 'Ornaments',
            season: 2,
            itemGroups: [
              common.TRIALS_S2_ORNAMENTS_HUNTER,
              common.TRIALS_S2_ORNAMENTS_TITAN,
              common.TRIALS_S2_ORNAMENTS_WARLOCK
            ]
          },

          {
            name: 'Ornaments - Flawless',
            season: 2,
            itemGroups: [
              common.TRIALS_S2_ORNAMENTS_FLAWLESS_HUNTER,
              common.TRIALS_S2_ORNAMENTS_FLAWLESS_TITAN,
              common.TRIALS_S2_ORNAMENTS_FLAWLESS_WARLOCK
            ]
          },

          {
            name: 'Extras',
            items: [
              19962737, // Chasing Perfection
              2029506313, // You Are Worthy
              2894506171, // Knight's Peace Shell
              1827800764, // Millennial Spadework Shell
              641129738, // Canine Rising
              1879447862 // Burningbrite Tyger
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
        id: 'ALL_SEASONS_DEAD_ORBIT_ARSENAL',
        description:
          'Weapons and armor obtained by working with Dead Orbit in their mission to push beyond the solar system.',
        sections: [
          {
            name: 'Weapons',
            season: 1,
            items: common.FACTION_DO_S1_WEAPONS
          },
          {
            name: 'Weapons',
            season: 2,
            items: common.FACTION_DO_S2_WEAPONS
          },
          {
            name: 'Weapons',
            season: 3,
            items: common.FACTION_DO_S3_WEAPONS
          },
          {
            name: 'Armor',
            season: 1,
            itemGroups: [
              common.FACTION_DO_S1_ARMOR_HUNTER,
              common.FACTION_DO_S1_ARMOR_TITAN,
              common.FACTION_DO_S1_ARMOR_WARLOCK
            ]
          },
          {
            name: 'Ornaments',
            season: 2,
            itemGroups: [
              common.FACTION_DO_S2_ORNAMENTS_HUNTER,
              common.FACTION_DO_S2_ORNAMENTS_TITAN,
              common.FACTION_DO_S2_ORNAMENTS_WARLOCK
            ]
          },
          {
            name: 'Ornaments',
            season: 3,
            itemGroups: [
              common.FACTION_DO_S3_ORNAMENTS_HUNTER,
              common.FACTION_DO_S3_ORNAMENTS_TITAN,
              common.FACTION_DO_S3_ORNAMENTS_WARLOCK
            ]
          },
          {
            name: 'Extras',
            items: [
              802191383, // Total Eclipse
              3681086672, // Deep Space Shell (Ghost)
              1220495180, // Pale Horse (Sparrow)
              2924982628, // Distant Pulsar (Ship)
              745759694, // Escape This Dead Orbit (CoO Emblem)
              3826233802, // Rotaro 33
              738873646 // One Orbit Remains (Warmind emblem)
            ]
          }
        ]
      },
      {
        name: 'New Monarchy Arsenal',
        id: 'ALL_SEASONS_NEW_MONARCHY_ARSENAL',
        description:
          'Weapons and armor obtained by working with New Monarchy to strengthen the Last City.',
        sections: [
          {
            name: 'Weapons',
            season: 1,
            items: common.FACTION_NM_S1_WEAPONS
          },
          {
            name: 'Weapons',
            season: 2,
            items: common.FACTION_NM_S2_WEAPONS
          },
          {
            name: 'Weapons',
            season: 3,
            items: common.FACTION_NM_S3_WEAPONS
          },
          {
            name: 'Armor',
            season: 1,
            itemGroups: [
              common.FACTION_NM_S1_ARMOR_HUNTER,
              common.FACTION_NM_S1_ARMOR_TITAN,
              common.FACTION_NM_S1_ARMOR_WARLOCK
            ]
          },
          {
            name: 'Ornaments',
            season: 2,
            itemGroups: [
              common.FACTION_NM_S2_ORNAMENTS_HUNTER,
              common.FACTION_NM_S2_ORNAMENTS_TITAN,
              common.FACTION_NM_S2_ORNAMENTS_WARLOCK
            ]
          },
          {
            name: 'Ornaments',
            season: 3,
            itemGroups: [
              common.FACTION_NM_S3_ORNAMENTS_HUNTER,
              common.FACTION_NM_S3_ORNAMENTS_TITAN,
              common.FACTION_NM_S3_ORNAMENTS_WARLOCK
            ]
          },
          {
            name: 'Extras',
            items: [
              802191381, // Regency
              3681086674, // Leonine Shell (Ghost)
              1220495182, // Leonine Courser (Sparrow)
              2924982630, // Leonine Carrack (Ship)
              745759692, // Sigil of the New Monarch (CoO Emblem)
              3826233803, // Trirang Tox
              1312626341 // Four Times a Ruler (Warmind Emblem)
            ]
          }
        ]
      },
      {
        name: 'Future War Cult Arsenal',
        id: 'ALL_SEASONS_FUTURE_WAR_CULT_ARSENAL',
        description:
          'Weapons and armor obtained by working with Future War Cult to prepare for the wars to come.',
        sections: [
          {
            name: 'Weapons',
            season: 1,
            items: common.FACTION_FWC_S1_WEAPONS
          },
          {
            name: 'Weapons',
            season: 2,
            items: common.FACTION_FWC_S2_WEAPONS
          },
          {
            name: 'Weapons',
            season: 3,
            items: common.FACTION_FWC_S3_WEAPONS
          },
          {
            name: 'Armor',
            season: 1,
            itemGroups: [
              common.FACTION_FWC_S1_ARMOR_HUNTER,
              common.FACTION_FWC_S1_ARMOR_TITAN,
              common.FACTION_FWC_S1_ARMOR_WARLOCK
            ]
          },
          {
            name: 'Ornaments',
            season: 2,
            itemGroups: [
              common.FACTION_FWC_S2_ORNAMENTS_HUNTER,
              common.FACTION_FWC_S2_ORNAMENTS_TITAN,
              common.FACTION_FWC_S2_ORNAMENTS_WARLOCK
            ]
          },
          {
            name: 'Ornaments',
            season: 3,
            itemGroups: [
              common.FACTION_FWC_S3_ORNAMENTS_HUNTER,
              common.FACTION_FWC_S3_ORNAMENTS_TITAN,
              common.FACTION_FWC_S3_ORNAMENTS_WARLOCK
            ]
          },
          {
            name: 'Extras',
            items: [
              802191382, // Battle Colors
              3681086675, // Wars to Come Shell (Ghost)
              1220495183, // Truth Scraper (Sparrow)
              2924982631, // Bonegrip (Ship)
              745759695, // Future War Cultist (CoO Emblem)
              308384258, // G-008 Ziphopper
              414672658 // Zero Future (Warmind Emblem)
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
        id: 'ALL_SEASONS_VANGUARD_TACTICIAN_GEAR',
        description:
          'Weapons and armor obtained by carrying out special operations for Zavala.',
        sections: [
          {
            name: 'Weapons',
            season: 1,
            items: common.VENDOR_VANGUARD_S1_WEAPONS
          },
          {
            name: 'Weapons',
            season: 2,
            items: common.VENDOR_VANGUARD_S2_WEAPONS
          },

          {
            name: 'Weapons',
            season: 3,
            items: common.VENDOR_VANGUARD_S3_WEAPONS
          },
          {
            name: 'Armor',
            season: 1,
            itemGroups: [
              common.VENDOR_VANGUARD_S1_ARMOR_HUNTER,
              common.VENDOR_VANGUARD_S1_ARMOR_TITAN,
              common.VENDOR_VANGUARD_S1_ARMOR_WARLOCK
            ]
          },
          {
            name: 'Ornaments',
            season: 2,
            itemGroups: [
              common.VENDOR_VANGUARD_S2_ORNAMENTS_HUNTER,
              common.VENDOR_VANGUARD_S2_ORNAMENTS_TITAN,
              common.VENDOR_VANGUARD_S2_ORNAMENTS_WARLOCK
            ]
          },
          {
            name: 'Ornaments',
            season: 3,
            itemGroups: [
              common.VENDOR_VANGUARD_S3_ORNAMENTS_HUNTER,
              common.VENDOR_VANGUARD_S3_ORNAMENTS_TITAN,
              common.VENDOR_VANGUARD_S3_ORNAMENTS_WARLOCK
            ]
          },
          {
            name: 'Emblems',
            items: [
              2010554576, // At the Vanguard
              2010554578, // Make Us Proud
              2010554579 // Push Forward
            ]
          }
        ]
      },
      {
        name: 'Crucible Engram',
        id: 'ALL_SEASONS_CRUCIBLE_ENGRAM',
        description: 'Rewards for your efforts in the Crucible.',
        sections: [
          {
            name: 'Weapons',
            season: 1,
            items: common.VENDOR_CRUCIBLE_S1_WEAPONS
          },
          {
            name: 'Weapons',
            season: 2,
            items: common.VENDOR_CRUCIBLE_S2_WEAPONS
          },
          {
            name: 'Valor Rewards',
            season: 3,
            items: common.VENDOR_CRUCIBLE_S3_VALOR_REWARDS
          },
          {
            name: 'Glory Rewards',
            season: 3,
            items: common.VENDOR_CRUCIBLE_S3_GLORY_REWARDS
          },
          {
            name: 'Armor',
            season: 1,
            itemGroups: [
              common.VENDOR_CRUCIBLE_S1_ARMOR_HUNTER,
              common.VENDOR_CRUCIBLE_S1_ARMOR_TITAN,
              common.VENDOR_CRUCIBLE_S1_ARMOR_WARLOCK
            ]
          },
          {
            name: 'Ornaments',
            season: 2,
            itemGroups: [
              common.VENDOR_CRUCIBLE_S2_ORNAMENTS_HUNTER,
              common.VENDOR_CRUCIBLE_S2_ORNAMENTS_TITAN,
              common.VENDOR_CRUCIBLE_S2_ORNAMENTS_WARLOCK
            ]
          },
          {
            name: 'Ornaments',
            season: 3,
            itemGroups: [
              common.VENDOR_CRUCIBLE_S3_ORNAMENTS_HUNTER,
              common.VENDOR_CRUCIBLE_S3_ORNAMENTS_TITAN,
              common.VENDOR_CRUCIBLE_S3_ORNAMENTS_WARLOCK
            ]
          },
          {
            name: 'Emblems',
            items: [
              4242592195, // Fight Forever
              4242592192, // Give Them War
              4242592193, // One Path to Victory
              969863968 // Victorious Veteran
            ]
          }
        ]
      },
      {
        name: 'Gunsmith Arsenal',
        id: 'ALL_SEASONS_GUNSMITH_ARSENAL',
        description:
          'Weapons obtained by increasing your standing with Banshee-44, the Gunsmith.',
        sections: [
          {
            name: 'Weapons',
            season: 1,
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
            name: 'Weapons',
            season: 2,
            items: [
              2414612776, // New City
              3216383791, // Home for the Lost
              2295941920, // Belfry Bounty
              2414612777, // Atalanta-D
              1411084669, // Zenobia-D
              2812672357, // Eulogy SI4
              2149166938, // Classical-42
              3920811074, // Medley-45
              2295941921, // Maestro-46
              228424224, // Impromptu-49
              3434629515, // Metronome-52
              2149166939, // Countess SA/2
              3005879472, // Conjecture TSc
              2812672356, // Vertical Orbit QSm
              3005879473, // Crooked Fang-4fr
              4105447486, // Nox Veneris II
              4105447487, // Elatha FR4
              4213221671 // Sunrise GL4
            ]
          },
          {
            name: 'Weapons',
            season: 3,
            items: [
              1178397318, // Agrona PR4
              1178397319, // Battle Scar
              1489452902, // Courageous Surrender
              1137768695, // Foregone Conclusion
              2544285846, // Scipio-D
              2433826056, // The Quickstep
              1159252500 // Vacuna SR4
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
          }
        ]
      }
    ]
  },
  {
    name: 'Other',
    sets: [
      {
        name: 'Eververse',
        id: 'ALL_SEASONS_EVERVERSE',
        big: true,
        sections: [
          {
            name: 'Armor',
            season: 1,
            itemGroups: [
              [
                1869779952, // Mask of Optimacy
                1625986881, // Arms of Optimacy
                369186071, // Vest of Optimacy
                2696374963, // Legs of Optimacy
                2497505510 // Cloak of Optimacy
              ],
              [
                1638376198, // Helm of Optimacy
                652336087, // Arms of Optimacy
                415074081, // Plate of Optimacy
                2460870905, // Legs of Optimacy
                1197579132 // Mark of Optimacy
              ],
              [
                2956899553, // Hood of Optimacy
                3794819064, // Arms of Optimacy
                199852048, // Robes of Optimacy
                1830086706, // Legs of Optimacy
                3421974605 // Bond of Optimacy
              ]
            ]
          },
          {
            name: 'Armor',
            season: 2,
            itemGroups: [
              [
                2277597261, // Omega Mechanos Mask
                2930263100, // Omega Mechanos Grasps
                3203735972, // Omega Mechanos Vest
                2316071750, // Omega Mechanos Strides
                3947566073 // Omega Mechanos Cloak
              ],
              [
                3838590505, // Omega Mechanos Helm
                1629999520, // Omega Mechanos Gauntlets
                2574287336, // Omega Mechanos Plate
                324939098, // Omega Mechanos Greaves
                4276384709 // Omega Mechanos Mark
              ],
              [
                903593458, // Omega Mechanos Crown
                1328369883, // Omega Mechanos Gloves
                153589813, // Omega Mechanos Robes
                4073377357, // Omega Mechanos Boots
                3146151688 // Omega Mechanos Bond
              ]
            ]
          },
          {
            name: 'Armor',
            season: 3,
            itemGroups: [
              [
                2089084848, // Qiao's Grin
                1886868481, // Qiao's Care
                2798295255, // Qiao's Heart
                3381714035, // Qiao's Strides
                631647398 // Qiao's Passing
              ],
              [
                2881907522, // Hardy's Calm
                2221552043, // Hardy's Control
                4234287845, // Hardy's Journey
                3696190397, // Hardy's Steps
                2890202680 // Hardy's Orders
              ],
              [
                2170939813, // Mihaylova's Triumph
                2910039924, // Mihaylova's Instruments
                4141029260, // Mihaylova's Choice
                3197778558, // Mihaylova's Path
                2078786241 // Mihaylova's Tale
              ]
            ]
          },
          {
            name: 'Emotes',
            season: 1,
            items: common.EVERVERSE_S1_EMOTES
          },
          {
            name: 'Emotes',
            season: 2,
            items: common.EVERVERSE_S2_EMOTES
          },
          {
            name: 'Emotes',
            season: 3,
            items: common.EVERVERSE_S3_EMOTES
          },
          {
            name: 'Ghosts',
            season: 1,
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
            name: 'Ghosts',
            season: 2,
            items: [
              1558857470, // Star Map Shell
              1558857471, // Cosmos Shell
              1558857468, // Fast Lane Shell
              1558857469, // Fire Victorious Shell
              1558857466, // Electronica Shell
              1271045315, // Flaming Arrow Shell
              1271045314, // Unearthly Koi Shell
              1271045313, // Commanding Star Shell
              1271045312, // Gray Tiger Shell
              1271045319, // Dolphin Wave Shell
              1271045318, // Triumphal Shell
              1271045317, // Infinite Blue Shell
              1271045316, // Garter Snake Shell
              1271045323, // Abacus Shell
              1271045322, // Symphonic Shell
              89965910, // Kaleidoscope Shell
              89965911, // In Fine Omnium Shell
              89965908, // Captaincy Shell
              89965909, // Precious Metals Shell
              89965906, // Viceroy Shell
              89965907, // Upward Climber Shell
              89965904, // Pintail Ghost
              89965905, // Iris Map Shell
              89965918, // Orchid Shell
              89965919 // Yellowspear Shell
            ]
          },
          {
            name: 'Ghosts',
            season: 3,
            items: [
              3075308678, // Skyline Flipside Shell
              3075308672, // Bursting Wisdom Shell
              1748063012, // Palm of Gold Shell
              1748063015, // Waiting Cask Shell
              631626576, // Orcasong Shell
              631626578, // Copperhead Supremacy Shell
              631626579, // Blaster Box
              631626580, // Speckled Giallo Shell
              631626582, // Riveted Majesty Shell
              631626583 // Open Orchid Shell
            ]
          },
          {
            name: 'Sparrows',
            season: 1,
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
            name: 'Sparrows',
            season: 2,
            items: [
              3081894946, // SV-112 Predator
              3081894947, // Concentric Dawn
              3081894944, // Curse of Foresight
              3610177557, // Avalon Courser
              3610177556, // Angel Lazuli
              3610177559, // Twintail Locust
              3610177558, // Soul Sylph
              3610177553, // Striped Abandon
              3610177552, // Solaris Celestina
              3610177555, // Twinfang
              3610177554, // Data Stream
              3610177565, // Lunaria Lumina
              3610177564, // Cavalcade
              3538153292, // Directoria Sagitta
              3538153293, // Arondight
              3538153294, // Oculus Angulon
              3538153295, // Ridgerunner Rex
              3538153288, // Tropidon V
              3538153289, // Velos Knight
              3538153290, // Annabel Lee
              3538153291, // Marbled Orb Weaver
              3538153284, // Solo Stand
              3538153285, // Sharklight
              3588486149, // Aldebaran
              3588486148, // Machina Macro
              3588486151, // Frago Junium
              3588486150 // Vox Imperative
            ]
          },
          {
            name: 'Sparrows',
            season: 3,
            items: [
              777818278, // Eon Drive
              777818276, // Vespulaser
              777818274, // Azure Azazyel
              256118668, // Andes Peakhunter
              2351197436, // Glam Toboggan
              2351197437, // Sickle Skiff
              2351197438, // Mindbarge
              2351197439, // Fiery Phoenician
              2351197433, // Mad Son of Seychelles
              2351197434, // Alton's Ambush
              2351197435 // Flychaplain
            ]
          },
          {
            name: 'Ships',
            season: 1,
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
            name: 'Ships',
            season: 2,
            items: [
              292872936, // Sails of Osiris
              292872937, // Saint-14's Gray Pigeon
              292872938, // Kabr's Glass Aegis
              292872939, // Asher Mir's One-Way Ticket
              292872940, // Ikora's Resolve
              292872941, // The Sundaresh Experiment 13-R
              530012781, // Star Scion
              530012780, // Galactic Hum
              530012783, // Arrowhawk
              530012782, // Dragonquin
              530012777, // Nebula Bloom
              530012776, // Rubente Dextra
              530012779, // Andromeda Gleaming
              530012778, // Edge of the Worlds
              530012773, // Sailing Shield
              530012772, // Armcoat
              658724916, // Mainsail Royal
              658724917, // Bassanio
              658724918, // Spun Sidhe
              658724919, // Neverfall
              658724912, // Antonio
              658724913, // Runereed
              658724914, // Wanderlonging
              658724915, // Infinite Visage
              658724924, // Hardtop Regent
              658724925, // Amethystine
              709057677 // Fantail Regent
            ]
          },
          {
            name: 'Ships',
            season: 3,
            items: [
              1748147690, // Lost Legend
              1748147691, // Shadow Trespass
              1748147688, // Holborn's Splint
              3101966172, // Currus Gloriae XLII
              3101966166, // Jadewyrm XLIV
              1833943242, // Fleet Ska IX
              1833943243, // Vor Pyl VIII
              1833943240, // Ampulance LXXX
              1833943246, // Kolla Mauler IX
              1833943247, // Pitfall Souter E5D
              1833943245 // Dusk Harrier
            ]
          },
          {
            name: 'Shaders',
            season: 1,
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
          },
          {
            name: 'Shaders',
            season: 2,
            items: [
              2395477994, // Mettalic Sunrise
              2395477996, // Precursor Vex Chrome
              2395477997, // Desert of Gold
              2395477998, // Descendant Vex Chrome
              2395477999 // Mercury Vex Chrome
            ]
          },
          {
            name: 'Shaders',
            season: 3,
            items: [
              1017491633, // Molten Bronze
              1017491632, // Mars Sunset
              1017491635, // Cargulo Bristle
              1017491634, // Ancient Republic
              1017491637, // Petiolora Growth
              1017491636 // Buffer Overflow
            ]
          }
        ]
      }
    ]
  }
]: SetPage);
