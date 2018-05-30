// @flow

import * as common from './common';
import type { SetPage } from '../types';

export default ([
  {
    name: 'Endgame',
    sets: [
      {
        name: 'Leviathan Raid',
        description:
          'Ornaments and collectables obtained by completing challenges in The Leviathan',
        sections: [
          {
            name: 'Hunter Ornaments',
            items: [
              215292674, // Praetorian Ornament
              3849801323, // Praetorian Ornament
              385347493, // Praetorian Ornament
              646591613, // Praetorian Ornament
              3802263800 // Praetorian Ornament
            ]
          },
          {
            name: 'Titan Ornaments',
            items: [
              3188290238, // Praetorian Ornament
              2458159855, // Praetorian Ornament
              17582153, // Praetorian Ornament
              3032763153, // Praetorian Ornament
              1331851268 // Praetorian Ornament
            ]
          },
          {
            name: 'Warlock Ornaments',
            items: [
              3909176373, // Praetorian Ornament
              2543545988, // Praetorian Ornament
              3439095932, // Praetorian Ornament
              4091208110, // Praetorian Ornament
              430065393 // Praetorian Ornament
            ]
          }
        ]
      },

      {
        name: 'Spire of Stars, Raid Lair',
        description:
          'Gear obtained by playing the Spire of Stars raid lair and increasing your reputation with Emperor Calus.',
        sections: [
          {
            name: 'Weapons',
            items: [
              2084611899, // Last of the Legion
              4288031461 // The Emperor's Envy
            ]
          },

          {
            name: 'Hunter Armor',
            items: [
              3440648382, // Equitis Shade Cowl
              2710517999, // Equitis Shade Grips
              2933666377, // Equitis Shade Rig
              3285121297, // Equitis Shade Boots
              4247935492 // Equitis Shade Cloak
            ]
          },
          {
            name: 'Titan Armor',
            items: [
              855363300, // Turris Shade Helm
              802557885, // Turris Shade Gauntlets
              4135228483, // Turris Shade Plate
              3168183519, // Turris Shade Greaves
              3416932282 // Turris Shade Mark
            ]
          },
          {
            name: 'Warlock Armor',
            items: [
              1675393889, // Insigne Shade Cover
              2513313400, // Insigne Shade Gloves
              1296628624, // Insigne Shade Robes
              548581042, // Insigne Shade Boots
              223783885 // Insigne Shade Bond
            ]
          },
          {
            name: 'Extras',
            items: [
              530754878, // Luxurious Toast emote
              1057119308, // Spire Star emblem
              2331063860, // Grind Underfoot emblem
              2331063861, // Together, For Glory! emblem
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
          {
            name: 'Weapons',
            items: [
              819358961, // Spoiler Alert
              1720373217, // The Permanent Truth
              1940885628, // Archimedes Truth
              2171006181 // Service Revolver
            ]
          },
          {
            name: 'Hunter Ornaments',
            items: [
              301260156, // Steadfast Hunter Ornament
              1697714165, // Steadfast Hunter Ornament
              2933221739, // Steadfast Hunter Ornament
              3273836247, // Steadfast Hunter Ornament
              1672921858 // Steadfast Hunter Ornament
            ]
          },
          {
            name: 'Titan Ornaments',
            items: [
              2170065560, // Steadfast Titan Ornament
              2633869161, // Steadfast Titan Ornament
              2942643951, // Steadfast Titan Ornament
              2925811003, // Steadfast Titan Ornament
              4189802622 // Steadfast Titan Ornament
            ]
          },
          {
            name: 'Warlock Ornaments',
            items: [
              4075989867, // Steadfast Warlock Ornament
              2398247002, // Steadfast Warlock Ornament
              547716782, // Steadfast Warlock Ornament
              3654718868, // Steadfast Warlock Ornament
              865811319 // Steadfast Warlock Ornament
            ]
          },
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
          {
            name: 'Valor Rewards',
            items: [
              3529780349, // The Marine
              1642781471, // Alchemical Dawn Shell
              2525626415 // True Valor (Season 3)
            ]
          },
          {
            name: 'Glory Rewards',
            items: [
              2611861926, // Imminent Storm
              4041111172, // The Button
              191996029, // Redrix's Claymore
              3190698551, // Wishbringer
              2516883975, // Glory and Grandeur
              2182330181 // True Glory (Season 3)
            ]
          },
          {
            name: 'Hunter Ornaments',
            items: [
              738275137, // Fire-Forged Hunter Head Ornament
              1576194648, // Fire-Forged Hunter Arms Ornament
              1058022768, // Fire-Forged Hunter Chest Ornament
              3906326418, // Fire-Forged Hunter Leg Ornament
              4238568621 // Fire-Forged Hunter Cloak Ornament
            ]
          },
          {
            name: 'Titan Ornaments',
            items: [
              1217364045, // Fire-Forged Titan Head Ornament
              1870029884, // Fire-Forged Titan Arm Ornament
              1131512228, // Fire-Forged Titan Chest Ornament
              1255838534, // Fire-Forged Titan Leg Ornament
              1875342329 // Fire-Forged Titan Mark Ornament
            ]
          },
          {
            name: 'Warlock Ornaments',
            items: [
              3999699118, // Fire-Forged Warlock Head Ornament
              730038303, // Fire-Forged Warlock Arm Ornament
              699889753, // Fire-Forged Warlock Chest Ornament
              3946152673, // Fire-Forged Warlock Leg Ornament
              2438616340 // Fire-Forged Warlock Bond Ornament
            ]
          },

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
            items: []
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
