// @flow

import * as common from './common';
import type { SetPage } from '../types';

export default ([
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
            name: 'Extras',
            items: [
              3257147585, // Embrace His Name
              1667199810, // Good Dog
              2984066626, // Splish Splash
              1625974211, // Two Enter, One Leaves
              812824526, // Take the Throne
              1422712818, // Calus's Selected
              2107367383, // Glory to the Emperor
              1422712819 // Calus's Treasured
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
              4242407217, // Calus's Elite (Shader)
              4261480750, // Covetous Emperor (Emblem)
              4242407216 // Calus's Preferred (Shader)
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
            season: 3,
            items: [
              530754878, // Luxurious Toast emote
              2925370359, // I'm Open Emote
              1057119308, // Spire Star emblem
              2331063860, // Grind Underfoot emblem
              2331063861, // Together, For Glory! emblem
              2543722796, // Praetorian Visage shader
              2543722797 // Calus's Shadow shader
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
            season: 1,
            items: [
              3373303016, // Felwinter Frost
              3373303017, // Shades of Radegast
              864505614, // Iron Wolf
              864505615 // Iron Battalion
            ]
          },
          {
            name: 'Extras',
            season: 2,
            items: [
              3681086673, // Iron Companionship Shell (Ghost shell)
              1220495181, // Iron Gallop (Sparrow)
              2924982629, // Iron Pendragon (Ship)
              2919429251, // Iron Hero Sigil (Emblem)
              3784292658 // Ironwood (Shader)
            ]
          },
          {
            name: 'Extras',
            season: 3,
            items: [
              1420718398, // Esfera Triumph
              1069214754, // Visage of Skorri
              3449099425 // Iron to Steel
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
            season: 1,
            items: [
              19962737, // Chasing Perfection
              2029506313, // You Are Worthy
              16277432, // Honors of the Nine
              16277433 // Gift of the Nine
            ]
          },
          {
            name: 'Extras',
            season: 2,
            items: [
              3327512302 // Benevolence of the Nine (Shader)
            ]
          },
          {
            name: 'Extras',
            season: 3,
            items: [
              2894506171, // Knight's Peace Shell
              1827800764, // Millennial Spadework Shell
              641129738, // Canine Rising
              1879447862, // Burningbrite Tyger
              3682795607 // Cognition of the Nine shader
            ]
          }
        ]
      },

      {
        name: 'Escalation Protocol',
        id: 'WARMIND_ESCALATION_PROTOCOL',
        description: 'Gear obtained by completing Escalation Protocol.',
        sections: [
          {
            name: 'Weapons',
            season: 3,
            items: [
              3866356643, // IKELOS_HC_v1.0.1
              1723472487, // IKELOS_SMG_v1.0.1
              1887808042, // IKELOS_SG_v1.0.1
              847450546 // IKELOS_SR_v1.0.1
            ]
          },

          {
            name: 'Hunter Armor',
            season: 3,
            items: [
              3324158902, // Abhorrent Imperative Mask
              191708423, // Abhorrent Imperative Grasps
              4138580785, // Abhorrent Imperative Vest
              3663938889, // Abhorrent Imperative Strides
              2039043276 // Abhorrent Imperative Cloak
            ]
          },
          {
            name: 'Titan Armor',
            season: 3,
            items: [
              2193087628, // Midnight Exigent Helm
              1388962117, // Midnight Exigent Gauntlets
              2462354715, // Midnight Exigent Plate
              1736188615, // Midnight Exigent Greaves
              819174194 // Midnight Exigent Mark
            ]
          },
          {
            name: 'Warlock Armor',
            season: 3,
            items: [
              1612891919, // Yuga Sundown Helmet
              3768023958, // Yuga Sundown Gloves
              4144095450, // Yuga Sundown Robes
              685439088, // Yuga Sundown Boots
              3792548907 // Yuga Sundown Bond
            ]
          },
          {
            name: 'Extras',
            season: 3,
            items: [
              2731919245, // BLOCK-Z SHELL
              3969205939, // PACIFIC DECEPTION
              4268441917, // GROUNDSWELL NULLIFIER99
              1291068165, // IKELOS Imperative emblem
              1273131836, // Apparatus Belli emblem
              4052831236, // Activate ESCALATION emblem
              2544513644, // Return TYRANT++ emblem
              3286479728 // GENOTYPENULL-ZERO shader
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
            season: 1,
            items: [
              802191383, // Total Eclipse
              1841451177, // Dead Orbit's Fate
              1841451179 // Dead Orbit Camo
            ]
          },
          {
            name: 'Extras',
            season: 2,
            items: [
              3681086672, // Deep Space Shell (Ghost)
              1220495180, // Pale Horse (Sparrow)
              2924982628, // Distant Pulsar (Ship)
              745759694, // Escape This Dead Orbit (CoO Emblem)
              1106615806 // Dead Orbit Resurrection (Shader)
            ]
          },
          {
            name: 'Extras',
            season: 3,
            items: [
              3826233802, // Rotaro 33
              738873646, // One Orbit Remains emblem
              996259007 // Dead Orbit Vision
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
            season: 1,
            items: [
              802191381, // Regency
              1206746476, // New Monarchy Diamonds
              1206746478 // New Monarchy Regalia
            ]
          },
          {
            name: 'Extras',
            season: 2,
            items: [
              3681086674, // Leonine Shell (Ghost)
              1220495182, // Leonine Courser (Sparrow)
              2924982630, // Leonine Carrack (Ship)
              745759692, // Sigil of the New Monarch (CoO Emblem)
              3366113619 // New Monarchy Succession (Shader)
            ]
          },
          {
            name: 'Extras',
            season: 3,
            items: [
              3826233803, // Trirang Tox
              1312626341, // Four Times a Ruler emblem
              2931044502 // New Monarchy Allegiance
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
            season: 1,
            items: [
              802191382, // Battle Colors
              1045633725, // War Cult Rain
              1045633727 // War Cult Camo
            ]
          },
          {
            name: 'Extras',
            season: 2,
            items: [
              3681086675, // Wars to Come Shell (Ghost)
              1220495183, // Truth Scraper (Sparrow)
              2924982631, // Bonegrip (Ship)
              745759695, // Future War Cultist (CoO Emblem)
              730976676 // War Cult Endgame (Shader)
            ]
          },
          {
            name: 'Extras',
            season: 3,
            items: [
              308384258, // G-008 Ziphopper
              414672658, // Zero Future emblem
              2296172971 // War Cult Scheme
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
        id: 'BASE_EDZ',
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
            name: 'Extras',
            items: [
              1321546045, // European Dead Zone
              2664485240, // Shadow of the Shard
              2664485241, // Red Legion Stronghold
              2664485242, // Devrim's Perch
              2664485243, // Humanity's Cradle
              3541326821, // Dead Zone Camo
              3541326820, // Kay's Command
              3541326823, // Trostland Terminus
              3921006352, // Dead Zone Foliage
              3921006355 // Dead Zone Bark
            ]
          }
        ]
      },

      {
        name: 'Echo Mesa, Io Gear',
        id: 'BASE_ECHO_MESA',
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
            name: 'Extras',
            items: [
              3451625162, // Echo Mesa
              313685908, // Taken Resurgence
              313685909, // Ignition Unsparked
              313685910, // Traveler's Departure
              313685911, // Asher's Asylum
              31953747, // Ballet Lover
              31953744, // Holy Ground
              31953746, // Traveler's Flight
              1489178153, // Echoes of Io
              1489178154 // Flowers of Io
            ]
          }
        ]
      },

      {
        name: 'New Pacific Arcology Gear',
        id: 'BASE_NEW_PACIFIC_ARCOLOGY',
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
            name: 'Extras',
            items: [
              426147374, // New Pacific Arcology
              594640136, // Hive Infestation
              594640137, // Golden Age Tarnished
              594640138, // Utopia Lost
              594640139, // Sloane's Watchtower
              3785035698, // Cargo Bay Cross
              3785035696, // New Pacific Access
              3785035697, // Solarium Yellow
              1051938196, // New Pacific Sink
              1051938199 // New Pacific Rush
            ]
          }
        ]
      },

      {
        name: 'Arcadian Valley, Nessus Gear',
        id: 'BASE_ARCADIAN_VALLEY',
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
            name: 'Extras',
            items: [
              1599898966, // Arcadian Valley
              776878384, // Fallen Pillage
              776878385, // Leviathan's Feast
              776878386, // Machine Centaur
              776878387, // Failsafe's Prison
              2484637938, // Exodus Access
              2484637936, // Jacobson's Staff
              2484637939, // Tangled Anchor
              3403116793, // Nessus Pursuit
              3403116794 // Nessus Mirage
            ]
          }
        ]
      },

      {
        name: 'Mercury Gear',
        id: 'OSIRIS_MERCURY',
        description:
          'Gear obtained by performing tasks for Brother Vance on Mercury.',
        small: false,
        sections: [
          {
            name: 'Lost Prophecy weapons',
            season: 2,
            items: [
              472169727, // Garden Progeny 1
              3991544423, // The Conqueror 2
              3285365666, // Jack Queen King 3
              161537636, // Machina Dei 4
              2091737595, // Traveler's Judgment 5
              3991544422, // Sol Pariah 6
              3285365667, // West of Sunfall 7
              161537637, // Infinite Paths 8
              3188460622, // Null Calamity 9
              1490571337, // Future Safe 10
              2248667690 // Perfect Paradox
            ]
          },
          {
            name: 'Hunter Armor',
            season: 2,
            items: [
              952071004, // Kairos Function Mask
              2348421845, // Kairos Function Grips
              2638643915, // Kairos Function Vest
              3924544055, // Kairos Function Boots
              995360226 // Kairos Function Cloak
            ]
          },
          {
            name: 'Titan Armor',
            season: 2,
            items: [
              1768175752, // Kairos Function Helm
              1115510041, // Kairos Function Gauntlets
              578519423, // Kairos Function Plate
              4007592459, // Kairos Function Greaves
              2250032270 // Kairos Function Mark
            ]
          },
          {
            name: 'Warlock Armor',
            season: 2,
            items: [
              2062911883, // Kairos Function Crown
              385169146, // Kairos Function Wraps
              2926606926, // Kairos Function Robes
              2066098484, // Kairos Function Boots
              3669055767 // Kairos Function Bond
            ]
          },
          {
            name: 'Extras',
            season: 2,
            items: [
              573576346, // Sagira's Shell
              1312472209, // Fields of Glass
              2276139500, // Infinite Possibilities
              2276139501, // Vex Convergence
              2276139502, // Vance's Temple
              2276139503, // Burning Silicon
              2939572589, // Crossroads Emblem
              4261480748, // Transit of Mercury
              2939572586, // Hero of the Infinite
              4261480749, // Prophetic Arsenal
              2939572584, // Secrets of the Vex (Emblem)
              2939572585, // Vex Destroyer (Emblem)
              2939572590, // Vex Scholar (Emblem)
              3042066428, // Kairos Black (Shader)
              3042066430, // Kairos Gold (Shader)
              3042066431, // Kairos Bronze (Shader)
              3853609171 // Mercury Prophetic (Shader)
            ]
          }
        ]
      },

      {
        name: 'Hellas Basin, Mars Gear',
        id: 'WARMIND_HELLAS_BASIN',
        description: 'Gear obtained by performing tasks for Ana Bray on Mars.',
        small: false,
        sections: [
          {
            name: 'BrayTech / Sleeper Node weapons',
            season: 3,
            items: [
              1752585070, // BrayTech Winter Wolf
              717150101, // BrayTech RWP Mk. II
              689453941, // The Frigid Jackal
              1350102270, // Niflheim Frost
              1798874854 // 18 Kelvins
            ]
          },
          {
            name: 'Weapons',
            season: 3,
            items: [
              159056377, // Requiem-45
              618554398, // Proelium FR3
              276918162, // Hagakure
              4014434381, // Kibou AR3
              541053086 // Telemachus-C
            ]
          },
          {
            name: 'Hunter Armor',
            season: 3,
            items: [
              3792294545, // BrayTech Sn0Mask
              2408846184, // BrayTech Survival Mitts
              2656719840, // BrayTech Combat Vest
              3510185410, // BrayTech Sn0Treads
              1966755869 // BrayTech Winter Cloak
            ]
          },
          {
            name: 'Titan Armor',
            season: 3,
            items: [
              1751069659, // BrayTech Sn0Helm
              3251824778, // BrayTech Thermal Grips
              1002301118, // BrayTech Iron-Heart Engine
              2291036836, // BrayTech Sn0Boots
              756282439 // BrayTech Absolute Zero Mark
            ]
          },
          {
            name: 'Warlock Armor',
            season: 3,
            items: [
              198099636, // BrayTech Researcher's Hood
              2899334605, // BrayTech Researcher's Gloves
              2556748915, // BrayTech Researcher's Robes
              3570133647, // BrayTech Researcher's Boots
              467207594 // BrayTech Researcher's Bond
            ]
          },
          {
            name: 'Extras',
            season: 3,
            items: [
              1210937132, // Hellas Basin
              842157716, // Cradle of Invention
              842157717, // Warmind's Fortress
              842157718, // Relic of the Golden Age
              842157719, // Wormslayer
              1291068172, // Specter of the Gun
              1291068170, // Cold Comfort
              1273131835, // Arctic Arsenalist
              1291068171, // Data Mine
              1273131832, // Warminded
              235397502 // Arctic Dreamscape
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
            name: 'Extras',
            season: 1,
            items: [
              2010554576, // At the Vanguard
              2010554578, // Make Us Proud
              2010554579, // Push Forward
              223308216 // Vanguard Magnus
            ]
          },
          {
            name: 'Extras',
            season: 2,
            items: [
              822835819 // Vanguard Discipline
            ]
          },
          {
            name: 'Extras',
            season: 3,
            items: [
              1887457789, // Ambrite Complex Shell
              123555424, // S-99 Bogtreader Steel
              806017499, // Zavala's Authority
              1400453406 // Vanguard Unity
            ]
          }
        ]
      },

      {
        name: 'Vanguard Research Gear',
        id: 'BASE_VANGUARD_RESEARCH_GEAR',
        description:
          'Weapons and armor obtained by assisting Ikora Rey with her research.',
        sections: [
          {
            name: 'Hunter Armor',
            season: 1,
            items: [4248632159, 4224076198, 385045066, 3741528736, 555828571]
          },
          {
            name: 'Titan Armor',
            season: 1,
            items: [4081859017, 1490387264, 2682045448, 185326970, 89175653]
          },
          {
            name: 'Warlock Armor',
            season: 1,
            items: [2615512594, 3081969019, 868792277, 1532009197, 4285708584]
          },
          {
            name: 'Extras',
            season: 1,
            items: [
              1724152706, // Red Legion Aegis
              1724152705, // Red Legion Logistics
              1724152704 // WAR Vault 5
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
            name: 'Extras',
            season: 1,
            items: [
              4242592195, // Fight Forever
              4242592192, // Give Them War
              4242592193, // One Path to Victory
              969863968, // Victorious Veteran
              3875413893 // Crucible Glory
            ]
          },
          {
            name: 'Extras',
            season: 2,
            items: [
              87646118 // Endless Glory
            ]
          },
          {
            name: 'Extras',
            season: 3,
            items: [
              29194593, // For Valor (Season 3)
              2890977363, // For Glory (Season 3)
              2361935691 // Crucible Triumph
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
            name: 'Extras',
            items: [
              3605230072, // Hakke Upgrade
              3605230074, // Omolon Upgrade
              3605230073, // SUROS Upgrade
              3605230075, // VEIST Upgrade
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
      }
    ]
  },

  {
    name: 'World Gear',
    sets: [
      {
        name: 'Hunter Specific Sets',
        id: 'BASE_WORLD_HUNTER',
        description: 'Other legendary gear obtained from Engrams.',
        small: true,
        sections: [
          {
            name: 'Weapons',
            season: 1,
            items: [1180270692] // Quickfang
          },
          {
            name: 'Dead End Cure 2.1',
            season: 1,
            items: [3125909492, 1998314509, 316000947, 2669113551, 2521426922]
          },
          {
            name: 'Errant Knight 1.0',
            season: 1,
            items: [2550994842, 493299171, 1024867629, 2414278933, 3433746208]
          },
          {
            name: 'Road Complex AA1',
            season: 1,
            items: [269552461, 922218300, 1415533220, 308026950, 2159363321]
          },
          {
            name: 'Icarus Drifter - PS4 Exclusive',
            season: 1,
            items: [155832748, 3646674533, 3066593211, 3569443559, 1847870034]
          },
          {
            name: 'Insight - PS4 Exclusive',
            season: 3,
            items: [
              1680657538, // Insight Rover Mask
              1020198891, // Insight Rover Grips
              369384485, // Insight Rover Vest
              2111956477, // Insight Rover Boots
              3786300792 // Clandestine Maneuvers
            ]
          },
          {
            name: 'Extras',
            season: 1,
            items: [
              1907674138, // Hunter's Wit
              3635192014, // Hunter's Hoard
              844563491, // Slinger's Sight
              2054118356, // Strider's Slash
              621113310 // Stalker's Shot
            ]
          }
        ]
      },

      {
        name: 'Titan Specific Sets',
        id: 'BASE_WORLD_TITAN',
        description: 'Other legendary gear obtained from Engrams.',
        small: true,
        sections: [
          {
            name: 'Weapons',
            season: 1,
            items: [1180270694] // Crown-Splitter
          },
          {
            name: 'Retro-Grade TG2',
            season: 1,
            items: [2525344810, 2530905971, 1364856221, 2265859909, 2826844112]
          },
          {
            name: 'Kerak Type 2',
            season: 1,
            items: [160388292, 107582877, 2696303651, 2048751167, 1978110490]
          },
          {
            name: 'Devastation Complex',
            season: 1,
            items: [3725654227, 1260134370, 2932121030, 3304280092, 3250112431]
          },
          {
            name: 'Terra Concord - PS4 Exclusive',
            season: 1,
            items: [690335398, 3999262583, 3291075521, 1512829977, 4073580572]
          },
          {
            name: 'Insight - PS4 Exclusive',
            season: 3,
            items: [
              1192751404, // Insight Unyielding Helm
              388625893, // Insight Unyielding Gauntlets
              2185500219, // Insight Unyielding Plate
              311394919, // Insight Unyielding Greaves
              966777042 // Anti-Hero Victory
            ]
          },
          {
            name: 'Extras',
            season: 1,
            items: [
              1907674139, // Titan's Pride
              3941202506, // Titan's Triumph
              3828080585, // Breaker's Blaze
              2967682030, // Striker's Slam
              3338748564 // Sentinel's Shove
            ]
          }
        ]
      },

      {
        name: 'Warlock Specific Sets',
        id: 'BASE_WORLD_WARLOCK',
        description: 'Other legendary gear obtained from Engrams.',
        small: true,
        sections: [
          {
            name: 'Weapons',
            season: 1,
            items: [1180270693] // Eternity's Edge
          },
          {
            name: 'Heiro Camo',
            season: 1,
            items: [2791527489, 3629447000, 3884999792, 1664611474, 2770578349]
          },
          {
            name: 'Philomath',
            season: 1,
            items: [2542514983, 489114030, 683173058, 2996649640, 373203219]
          },
          {
            name: 'High-Minded Complex',
            season: 1,
            items: [993844472, 1457647945, 410671183, 1749589787, 2082184158]
          },
          {
            name: 'Tesseract Trace - PS4 Exclusive',
            season: 1,
            items: [2811180959, 3169402598, 4092393610, 2728535008, 434243995]
          },
          {
            name: 'Insight - PS4 Exclusive',
            season: 3,
            items: [
              2905154661, // Insight Vikti Hood
              3685831476, // Insight Vikti Gloves
              731888972, // Insight Vikti Robes
              3973570110, // Insight Vikti Boots
              3430647425 // Synaptic Construct
            ]
          },
          {
            name: 'Extras',
            season: 1,
            items: [
              1907674137, // Warlock's Flight
              3564452901, // Warlock's Wisdom
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
    name: 'Holiday & Special Events',
    sets: [
      {
        name: 'The Dawning',
        id: 'OSIRIS_THE_DAWNING',
        big: false,
        sections: [
          {
            name: 'Hunter Armor',
            season: 2,
            items: [
              316740353, // Winterhart Mask
              1154659864, // Winterhart Grips
              3309556272, // Winterhart Vest
              3909352274, // Winterhart Strides
              2661272173, // Winterhart Cloak
              2661272172 // Warm Winter Cloak
            ]
          },
          {
            name: 'Titan Armor',
            season: 2,
            items: [
              3956230125, // Winterhart Helm
              779962716, // Winterhart Gauntlets
              3306267716, // Winterhart Plate
              4036178150, // Winterhart Greaves
              221164697, // Winterhart Mark
              221164696 // Quilted Winter Mark
            ]
          },
          {
            name: 'Warlock Armor',
            season: 2,
            items: [
              3734501342, // Winterhart Cover
              2538439951, // Winterhart Gloves
              270671209, // Winterhart Robes
              3154516913, // Winterhart Boots
              1584837156, // Winterhart Bond
              1584837157 // Festive Winter Bond
            ]
          },
          {
            name: 'Emotes',
            season: 2,
            items: [
              3494199208, // Giving
              367778392, // Honest Dance
              80303715, // Excited Dance
              2134318165 // Icecapade
            ]
          },
          {
            name: 'Ghosts',
            season: 2,
            items: [
              3287805175, // Dulcinea Shell
              3287805177, // Pomegranate Shell
              3287805178, // Circular Time Shell
              3287805174, // Wild Hunt Shell
              3287805183, // Infinite Hand Shell
              3287805180, // Joyous Hunt Shell
              3287805176, // Dawning Bauble Shell
              1051903593, // Dawning Bauble Shell
              1816495538, // Sweet Memories Shell
              3287805181, // Sweet Memories Shell
              1397284432, // Jasper Dawn Shell
              3287805179 // Jasper Dawn Shell
            ]
          },
          {
            name: 'Sparrows',
            season: 2,
            items: [
              3105953707, // Chill of Winter
              3105953706, // Holiday Cheer
              63024229, // Star of Dark Nights
              1423305598, // December Muse
              1423305588, // Insectus Invictus
              1423305586, // Acumen Maxer
              1423305599, // Viperdiamond
              1423305591, // Verità Scelta
              1423305587, // Subito Mk. 9
              1423305585, // Rocket-Propelled Bobsled
              3161524490, // Rupture
              1423305589, // Rupture
              1423305590, // Shimmering Iris
              3569791559, // Shimmering Iris
              1984190529, // Magikon
              1423305584 // Magikon
            ]
          },
          {
            name: 'Ships',
            season: 2,
            items: [
              317465075, // A History of Starlight
              317465074, // Cerulean Flash
              3140833552, // Dragonfly Strident
              3140833555, // Alta Clara
              3140833553, // Brilliant Narcissus
              3140833558, // Breath of Stars
              3140833556, // Winter Blade
              3177119978, // Carmina Commencing
              3140833557, // Carmina Commencing
              3140833559, // Regent Redeemer
              1602334068, // Regent Redeemer
              3140833554, // Joyfire
              3729709035 // Joyfire
            ]
          },
          {
            name: 'Extras',
            season: 2,
            items: [
              3639894194, // Light of the Dawning
              3800267415, // Dawning Hope
              3800267413, // Dawning Festiveness
              3866715933, // Dawning Warmth
              3800267414 // Dawning Brilliance
            ]
          }
        ]
      },
      {
        name: 'Crimson Days',
        id: 'OSIRIS_CRIMSON_DAYS',
        big: false,
        sections: [
          {
            name: 'Emotes',
            season: 2,
            items: [
              596833222, // Heart Sign
              4097227155, // Vengeful Dance
              3809722908, // Amour Dance
              2764644855 // Flaunting Dance
            ]
          },
          {
            name: 'Ghosts',
            season: 2,
            items: [
              263371512, // Entwining Heart Shell
              263371513, // Garland Shell
              263371515, // True Conifer Shell
              263371514, // Propulsive Heart Shell
              263371516, // Amo Ludere Shell
              263371517, // Electric Heart Shell
              263371519, // Radiant Sunflake Shell
              263371518 // Tirastrella Shell
            ]
          },
          {
            name: 'Sparrows',
            season: 2,
            items: [
              3587167050, // Undefeated
              3587167051, // Undeterred
              1623653768, // Last Love
              1623653770, // Heartbreaker
              1623653769, // First Love
              1623653771 // Battleheart
            ]
          },
          {
            name: 'Extras',
            season: 2,
            items: [
              1782320603, // Fire of the Crimson Days
              1052553863, // Crimson Passion - Bright Dust dismantle
              1052553862 // Crimson Valor - Bright Dust dismantle
            ]
          },
          {
            name: 'Weapon Ornaments',
            season: 2,
            items: [
              3373357626, // Prism for Prometheus Lens
              2433900295, // Carina Nebula for Graviton Lance
              3171649853, // Go About Your Business for Sweet Business
              669267835 // Dieselpunk for The Wardcliffe Coil
            ]
          }
        ]
      },
      common.SOLSTICE_OF_HEROES
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
