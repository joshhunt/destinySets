// @flow

import * as common from './common';
import { section as $ } from './common';
import type { SetPage } from '../types';

export default ([
  {
    name: 'Endgame',
    sets: [
      {
        name: 'Spire of Stars, Raid Lair',
        description:
          'Gear obtained by playing the Spire of Stars raid lair and increasing your reputation with Emperor Calus.',
        sections: [
          $('Weapons', common.RAID_SOS_WEAPONS),

          $('Hunter Armor', common.RAID_SOS_ARMOR_HUNTER),
          $('Hunter Ornaments', common.RAID_SOS_ORNAMENTS_HUNTER),

          $('Titan Armor', common.RAID_SOS_ARMOR_TITAN),
          $('Titan Ornaments', common.RAID_SOS_ORNAMENTS_TITAN),

          $('Warlock Armor', common.RAID_SOS_ARMOR_WARLOCK),
          $('Warlock Ornaments', common.RAID_SOS_ORNAMENTS_WARLOCK),

          {
            name: 'Extras',
            items: [
              530754878, // Luxurious Toast emote
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
        description:
          'Weapons and armor obtained by honoring the heroes of old in the Iron Banner Crucible tournament.',
        sections: [
          {
            name: 'Weapons',
            items: common.IRONBANNER_S3_WEAPONS
          },
          {
            name: 'Hunter Ornaments',
            items: common.IRONBANNER_S3_ORNAMENTS_HUNTER
          },
          {
            name: 'Titan Ornaments',
            items: common.IRONBANNER_S3_ORNAMENTS_TITAN
          },
          {
            name: 'Warlock Ornaments',
            items: common.IRONBANNER_S3_ORNAMENTS_WARLOCK
          },
          {
            name: 'Extras',
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
        description:
          'Weapons and armor obtained by competing in the Trials of the Nine.',
        sections: [
          {
            name: 'Weapons',
            items: common.TRIALS_S3_WEAPONS
          },
          {
            name: 'Extras',
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
        description: 'Gear obtained by completing Escalation Protocol.',
        sections: [
          {
            name: 'Weapons',
            items: [
              3866356643, // IKELOS_HC_v1.0.1
              1723472487, // IKELOS_SMG_v1.0.1
              1887808042, // IKELOS_SG_v1.0.1
              847450546 // IKELOS_SR_v1.0.1
            ]
          },

          {
            name: 'Hunter Armor',
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
        description:
          'Weapons and armor obtained by working with Dead Orbit in their mission to push beyond the solar system.',
        small: true,
        sections: [
          {
            name: 'Weapons',
            items: common.FACTION_DO_S3_WEAPONS
          },
          {
            name: 'Hunter Ornaments',
            items: common.FACTION_DO_S3_ORNAMENTS_HUNTER
          },
          {
            name: 'Titan Ornaments',
            items: common.FACTION_DO_S3_ORNAMENTS_TITAN
          },
          {
            name: 'Warlock Ornaments',
            items: common.FACTION_DO_S3_ORNAMENTS_WARLOCK
          },
          {
            name: 'Extras',
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
        description:
          'Weapons and armor obtained by working with New Monarchy to strengthen the Last City.',
        small: true,
        sections: [
          {
            name: 'Weapons',
            items: common.FACTION_NM_S3_WEAPONS
          },
          {
            name: 'Hunter Ornaments',
            items: common.FACTION_NM_S3_ORNAMENTS_HUNTER
          },
          {
            name: 'Titan Ornaments',
            items: common.FACTION_NM_S3_ORNAMENTS_TITAN
          },
          {
            name: 'Warlock Ornaments',
            items: common.FACTION_NM_S3_ORNAMENTS_WARLOCK
          },
          {
            name: 'Extras',
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
        description:
          'Weapons and armor obtained by working with Future War Cult to prepare for the wars to come.',
        small: true,
        sections: [
          {
            name: 'Weapons',
            items: common.FACTION_FWC_S3_WEAPONS
          },
          {
            name: 'Hunter Ornaments',
            items: common.FACTION_FWC_S3_ORNAMENTS_HUNTER
          },
          {
            name: 'Titan Ornaments',
            items: common.FACTION_FWC_S3_ORNAMENTS_TITAN
          },
          {
            name: 'Warlock Ornaments',
            items: common.FACTION_FWC_S3_ORNAMENTS_WARLOCK
          },
          {
            name: 'Extras',
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
    name: 'Vendor',
    sets: [
      {
        name: 'Hellas Basin, Mars Gear',
        description: 'Gear obtained by performing tasks for Ana Bray on Mars.',
        small: false,
        sections: [
          {
            name: 'BrayTech / Sleeper Node weapons',
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
      },

      {
        name: 'Vanguard Tactician Gear',
        description:
          'Weapons and armor obtained by carrying out special operations for Zavala.',
        sections: [
          $('Weapons', common.VENDOR_VANGUARD_S3_WEAPONS),
          $('Hunter Ornaments', common.VENDOR_VANGUARD_S3_ORNAMENTS_HUNTER),
          $('Titan Ornaments', common.VENDOR_VANGUARD_S3_ORNAMENTS_TITAN),
          $('Warlock Ornaments', common.VENDOR_VANGUARD_S3_ORNAMENTS_WARLOCK),
          {
            name: 'Extras',
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
        name: 'Crucible Engram',
        description: 'Rewards for your efforts in the Crucible.',
        sections: [
          $('Valor Rewards', common.VENDOR_CRUCIBLE_S3_VALOR_REWARDS),
          $('Glory Rewards', common.VENDOR_CRUCIBLE_S3_GLORY_REWARDS),
          $('Hunter Ornaments', common.VENDOR_CRUCIBLE_S3_ORNAMENTS_HUNTER),
          $('Titan Ornaments', common.VENDOR_CRUCIBLE_S3_ORNAMENTS_TITAN),
          $('Warlock Ornaments', common.VENDOR_CRUCIBLE_S3_ORNAMENTS_WARLOCK),

          {
            name: 'Extras',
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
        description:
          'Weapons obtained by increasing your standing with Banshee-44, the Gunsmith.',
        sections: [
          {
            name: 'Weapons',
            items: [
              1178397318, // Agrona PR4
              1178397319, // Battle Scar
              1489452902, // Courageous Surrender
              1137768695, // Foregone Conclusion
              2544285846, // Scipio-D
              2433826056, // The Quickstep
              1159252500 // Vacuna SR4
            ]
          }
        ]
      }
    ]
  },
  {
    name: 'Holiday',
    sets: [
      {
        name: 'Solstice of Heroes',
        big: false,
        sections: [
          {
            name: 'Moments of Triumph',
            items: [
              3867275449, // The Right Choice (Moments of Triumph Ghost)
              4243004391, // Comrades in Arms (Moments of Triumph Sparrow)
              3860733295, // Eternally Triumphant (Moments of Triumph Emblem)
              3860733294 // Renewed Triumph (Moments of Triumph Emblem)
            ]
          },
          {
            name: 'Hunter Armor',
            itemGroups: [
              [
                1506728251, // Solstice Mask (Scorched)
                3007586538, // Solstice Grasps (Scorched)
                780038942, // Solstice Vest (Scorched) 
                2046798468, // Solstice Strides (Scorched)
                109666087, // Solstice Cloak (Scorched)
              ],
              [
                2065460339, // Solstice Mask (Rekindled) 
                3853434114, // Solstice Grasps (Rekindled)
                2319743206, // Solstice Vest (Rekindled)
                1644189372, // Solstice Strides (Rekindled)
                2637837647, // Solstice Cloak (Rekindled)
              ],
              [
                622966241, // Solstice Mask (Resplendent)
                1460885752, // Solstice Grasps (Resplendent)
                222565136, // Solstice Vest (Resplendent)
                3791120690, // Solstice Strides (Resplendent)
                3444687693 // Solstice Cloak (Resplendent)
              ]
            ]
          },
          {
            name: 'Titan Armor',
            itemGroups: [
              [
                1174021263, // Solstice Helm (Scorched)
                3329153302, // Solstice Gauntlets (Scorched)
                1225396570, // Solstice Plate (Scorched)
                246568432, // Solstice Greaves (Scorched)
                873850027, // Solstice Mark (Scorched)
              ],
              [
                2897466191, // Solstice Helm (Rekindled)
                757630934, // Solstice Gauntlets (Rekindled)
                1021217306, // Solstice Plate (Rekindled)
                1969910192, // Solstice Greaves (Rekindled)
                245110123, // Solstice Mark (Rekindled)
              ],
              [
                3915635973, // Solstice Helm (Resplendent)
                401345492, // Solstice Gauntlets (Resplendent)
                512463852, // Solstice Plate (Resplendent)
                647507422, // Solstice Greaves (Resplendent)
                3211222305 // Solstice Mark (Resplendent)
              ]
            ]
          },
          {
            name: 'Warlock Armor',
            itemGroups: [
              [
                2147433548, // Solstice Hood (Scorched)
                1301731333, // Solstice Gloves (Scorched)
                3101330395, // Solstice Robes (Scorched)
                1224603527, // Solstice Boots (Scorched)
                1841030642, // Solstice Bond (Scorched)
              ],
              [
                2274492816, // Solstice Hood (Rekindled)
                2030596705, // Solstice Gloves (Rekindled)
                796635575, // Solstice Robes (Rekindled)
                3525545299, // Solstice Boots (Rekindled)
                2924954886, // Solstice Bond (Rekindled)
              ],
              [
                545021994, // Solstice Hood (Resplendent)
                550583155, // Solstice Gloves (Resplendent)
                2158678429, // Solstice Robes (Resplendent)
                285537093, // Solstice Boots (Resplendent)
                3620666320 // Solstice Bond (Resplendent)
              ],
            ]
          },
          {
            name: 'Hunter Ornaments',
            itemGroups: [
              [
                3820835868, // Solstice Mask (Scorched)
                880745877, // Solstice Grasps (Scorched)
                3736041099, // Solstice Vest (Scorched)
                2922902263, // Solstice Strides (Scorched)
                2517318050, // Solstice Cloak (Scorched)
              ],
              [
                 4154821248, // Solstice Mask (Rekindled)
                1720894545, // Solstice Grasps (Rekindled)
                1632954375, // Solstice Vest (Rekindled)
                1552044323, // Solstice Strides (Rekindled)
                2814383126 // Solstice Cloak (Rekindled)
              ]
            ]
          },
          {
            name: 'Titan Ornaments',
            itemGroups: [
              [
                374780030, // Solstice Helm (Scorched)
                3898143407, // Solstice Gauntlets (Scorched)
                1860355337, // Solstice Plate (Scorched)
                4048186065, // Solstice Greaves (Scorched)
                3640658628, // Solstice Mark (Scorched)
              ],
              [
                3916608434, // Solstice Helm (Rekindled)
                87994267, // Solstice Gauntlets (Rekindled)
                3908760309, // Solstice Plate (Rekindled)
                3257562381, // Solstice Greaves (Rekindled)
                2989132488 // Solstice Mark (Rekindled)
              ]
              
              
            ]
          },
          {
            name: 'Warlock Ornaments',
            itemGroups: [
              [
                1283615405, // Solstice Hood (Scorched)
                1936281116, // Solstice Gloves (Scorched)
                2266517764, // Solstice Robes (Scorched)
                939209126, // Solstice Boots (Scorched)
                3010244697, // Solstice Bond (Scorched)
              ],
              [
                2163922573, // Solstice Hood (Rekindled)
                2816485244, // Solstice Gloves (Rekindled)
                3840083172, // Solstice Robes (Rekindled)
                1819413126, // Solstice Boots (Rekindled)
                713403449 // Solstice Bond (Rekindled)
              ]
            ]
          },
          {
            name: 'Emotes',
            items: [
              961496619, // Fishing
              3244569127, // Festival Dance
              2919938481, // Teamwork Dance
              2114877381, // Fly Dance
              396134792, // Sassy Taunt
              3672748946, // Herald Dance
              2427328578, // Alliterative Dance
              621701973, // Aggressively Affirmative
              4119095630, // Confident Strut
              1599949358 // Raise the Roof
            ]
          },
          {
            name: 'Ghosts',
            items: [
              3717471208, // Predator Sun Shell
              3717471209, // Archipelago Pitch
              980898610, // Regality Sphere Shell
              980898611, // Authorized Misconduct Shell
              980898608, // Headerstripe Shell
              980898609, // Citrine Sway Shell
              980898614, // Bankjar Shell
              980898615 // Skyfire North Shell 
            ]
          },
          {
            name: 'Sparrows',
            items: [
              4213271811, // Gray Hornet
              4213271810, // Blacklight Razor
              2298896094, // Sunspear
              2298896095, // Boltcrackle
              2298896092, // Junestinger
              2298896093, // Timberwolf
              2298896090, // Orcinus Swath
              2298896091, // Serriform 7
              2298896088 // Memorium Sol
            ]
          },
          {
            name: 'Ships',
            items: [
              682682138, // Estival Excursion
              3475074928 // Thunderwing
            ]
          },
          {
            name: 'Emblems',
            items: []
          },
          {
            name: 'Shaders',
            items: [
              3859483818, // Blazing Virtue
              3859483819 // Malachite Gold
            ]
          },
          {
            name: 'Weapon Ornaments',
            items: [
              1259278657, // Raging Lepus
              2949664689, // Gray Nitrite
              1750365155, // Beachheader VI
              2396888157 // Sudden Squall
            ]
          },
          {
            name: 'Armor Glows',
            itemGroups: [
              [
                463166592, // Arcing Arms Glow
                3507818312, // Arcing Chest Glow
                1339405989, // Arcing Class Item Glow
                3054638345, // Arcing Helmet Glow
                3835954362, // Arcing Leg Glow
              ],
              [
                873770815, // Sunlit Arms Glow
                3367964921, // Sunlit Chest Glow
                811724212, // Sunlit Class Item Glow
                4143534670, // Sunlit Helmet Glow
                4089988225, // Sunlit Leg Glow
              ],
              [
                2699000684, // Void-Tinged Arms Glow
                1702504372, // Void-Tinged Chest Glow
                2912265353, // Void-Tinged Class Item Glow
                4236468733, // Void-Tinged Helmet Glow
                3344732822, // Void-Tinged Leg Glow
              ]
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
        name: '"Insight" Armor - PS4 Exclusive',
        sections: [
          {
            name: 'Hunter armor',
            items: [
              1680657538, // Insight Rover Mask
              1020198891, // Insight Rover Grips
              369384485, // Insight Rover Vest
              2111956477, // Insight Rover Boots
              3786300792 // Clandestine Maneuvers
            ]
          },
          {
            name: 'Titan armor',
            items: [
              1192751404, // Insight Unyielding Helm
              388625893, // Insight Unyielding Gauntlets
              2185500219, // Insight Unyielding Plate
              311394919, // Insight Unyielding Greaves
              966777042 // Anti-Hero Victory
            ]
          },
          {
            name: 'Warlock armor',
            items: [
              2905154661, // Insight Vikti Hood
              3685831476, // Insight Vikti Gloves
              731888972, // Insight Vikti Robes
              3973570110, // Insight Vikti Boots
              3430647425 // Synaptic Construct
            ]
          }
        ]
      },
      {
        name: 'Eververse, Season 3',
        sections: [
          {
            name: 'Hunter Armor',
            items: [
              2089084848, // Qiao's Grin
              1886868481, // Qiao's Care
              2798295255, // Qiao's Heart
              3381714035, // Qiao's Strides
              631647398 // Qiao's Passing
            ]
          },
          {
            name: 'Titan Armor',
            items: [
              2881907522, // Hardy's Calm
              2221552043, // Hardy's Control
              4234287845, // Hardy's Journey
              3696190397, // Hardy's Steps
              2890202680 // Hardy's Orders
            ]
          },
          {
            name: 'Warlock Armor',
            items: [
              2170939813, // Mihaylova's Triumph
              2910039924, // Mihaylova's Instruments
              4141029260, // Mihaylova's Choice
              3197778558, // Mihaylova's Path
              2078786241 // Mihaylova's Tale
            ]
          },
          {
            name: 'Emotes',
            items: common.EVERVERSE_S3_EMOTES
          },
          {
            name: 'Ghosts',
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
