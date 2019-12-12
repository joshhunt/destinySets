// @flow
import type { SetPage } from '../types';
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
              432360904, // Vigil of Heroes
              4074662489, // Vigil of Heroes
              2337221567, // Vigil of Heroes
              2671880779, // Vigil of Heroes
              3584380110 // Vigil of Heroes
            ]
          },
          {
            name: 'Titan Armor',
            season: 9,
            items: [
              1130203390, // Vigil of Heroes
              358599471, // Vigil of Heroes
              3500775049, // Vigil of Heroes
              508642129, // Vigil of Heroes
              986111044 // Vigil of Heroes
            ]
          },
          {
            name: 'Warlock Armor',
            season: 9,
            items: [
              2422319309, // Vigil of Heroes
              3074985148, // Vigil of Heroes
              3544662820, // Vigil of Heroes
              2460793798, // Vigil of Heroes
              4288492921 // Vigil of Heroes
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
              4123918087, // Wing Contender
              2070517134, // Wing Contender
              1838273186, // Wing Contender
              283188616, // Wing Contender
              1062166003 // Wing Contender
            ]
          },
          {
            name: 'Titan Armor',
            season: 9,
            items: [
              3483546829, // Wing Discipline
              4136212668, // Wing Discipline
              1722623780, // Wing Discipline
              3522021318, // Wing Discipline
              2466453881 // Wing Discipline
            ]
          },
          {
            name: 'Warlock Armor',
            season: 9,
            items: [
              874101646, // Wing Theorem
              2323865727, // Wing Theorem
              2525395257, // Wing Theorem
              1245115841, // Wing Theorem
              3839561204 // Wing Theorem
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
              // 1736897079, // Savior of the Past (Hidden until Source Confirmed)
              3603801350 // Crucible Prestige
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
              759348512, // Ancient Apocalypse Mask
              2620389105, // Ancient Apocalypse Grips
              1741396519, // Ancient Apocalypse Vest
              2451538755, // Ancient Apocalypse Strides
              2881248566 // Ancient Apocalypse Cloak
            ]
          },
          {
            name: 'Titan Armor',
            season: 9,
            items: [
              3664007718, // Ancient Apocalypse Helm
              2677967607, // Ancient Apocalypse Gauntlets
              1237661249, // Ancient Apocalypse Plate
              191535001, // Ancient Apocalypse Greaves
              2020166300 // Ancient Apocalypse Mark
            ]
          },
          {
            name: 'Warlock Armor',
            season: 9,
            items: [
              1013137701, // Ancient Apocalypse Hood
              1752237812, // Ancient Apocalypse Gloves
              3550729740, // Ancient Apocalypse Robes
              2039976446, // Ancient Apocalypse Boots
              1488486721 // Ancient Apocalypse Bond
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
            season: 9,
            items:[
              3434944005 // Point of the Stag
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
              3292445816, // Iron Truage Casque
              3756249289, // Iron Truage Grips
              1181560527, // Iron Truage Vest
              4048191131, // Iron Truage Boots
              2853073502 // Mantle of Efrideet
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
              1105558158, // Iron Truage Helm
              2555322239, // Iron Truage Gauntlets
              1313089081, // Iron Truage Plate
              1476572353, // Iron Truage Greaves
              2627255028 // Radegast's Iron Sash
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
              423204919, // Iron Truage Hood
              3791686334, // Iron Truage Gloves
              1604601714, // Iron Truage Vestments
              4211068696, // Iron Truage Legs
              2241419267 // Timur's Iron Bond
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
          }
        ]
      },
      {
        name: 'Vex Offensive & Invasions',
        id: 'year-three-vex-offensive-and-invasions',
        description: _(
          'DestinyCollectibleDefinition[4151753667].sourceString',
          'Complete seasonal activities during Season of the Undying.'
        ),
        sections: [
          {
            name: 'Weapons',
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
        name: 'The Sundial',
        id: 'year-three-the-sundial',
        description: _(
          'DestinyCollectibleDefinition[3648433278].sourceString',
          'Acquired from the Sundial activity on Mercury.'
        ),
        sections: [
          {
            name: 'Weapons',
            season: 9,
            items: [
              1251729046, // Steelfeather Repeater
              2723241847, // Patron of Lost Causes
              1289997971, // Breachlight
              1706206669, // Gallant Charge
              3850168899, // Martyr's Retribution
              946443267 // Line in the Sand
            ]
          },
          {
            name: 'Obelisk Bounties & Resonance Rank Increases',
            season: 9,
            items: [
              3393519051, // Perfect Paradox
              410996590, // Jack Queen King 3
              4149758318, // Traveler's Judgment 5
              3233390913 // Infinite Paths 8
            ]
          },
          {
            name: 'Extras',
            season: 9,
            items: [
              2422240131, // Timeswept Shell
              1736897072, // Sandswept Crusader
              1736897073, // Timeline Warrior
              980059630, // Vitrified Chronology
              980059631 // Vitrified Duality
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
            // season: "K", // Double Check
            items: [
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
            // season: "K", // Double Check
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
            // season: "K", // Double Check
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
            // season: "K", // Double Check
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
            // season: "K", // Double Check
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
            // season: "K",
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
            name: 'Nightmare Hunts',
            // season: "K",
            items: [
              298334057, // A Sibyl's Dreams
              2056256564 // Lunar Halcyon Gilt
            ]
          },
          {
            name: "Altars of Sorrow",
            // season: "K",
            itemGroups: [
              [
                2782847179, // Blasphemer (Shotgun)
                2164448701, // Apostate (Sniper Rifle)
                3067821200 // Heretic (Rocket Launcher)
              ],
              [
                3708784304, // Bane of Crota Shell (Ghost Shell)
              ]
            ]
          },
          {
            name: "'Pit of Heresy' Dungeon",
            // season: "K",
            itemGroups: [
              [
                208088207 // Premonition (Dungeon Pulse)
              ],
              [
                4023500750, // Bane of Tyrants (Ship)
                298334061, // Sanguine Static (Emblem)
                298334060, // Crimson Echoes (Emblem)
              ]
            ]
          },
          {
            name: 'Hunter Armor',
            // season: "K",
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
            // season: "K",
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
            // season: "K",
            items: [
              1528483180, // Dreambane Hood
              682780965, // Dreambane Gloves
              3692187003, // Dreambane Robes
              1030110631, // Dreambane Boots
              2048903186 // Dreambane Bond
            ]
          },
          {
            name: 'Extras',
            // season: "K",
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
                  2352138838 // Masquerader Helmet: Hunter
                ],
                [
                  1256660988, // Chthonic Mask
                  2653114997, // Chthonic Grips
                  3560184043, // Chthonic Vest
                  4229237079, // Chthonic Strides
                  2299884162 // Chthonic Cloak
                ]
            ]
          },
          {
            name: 'Titan Armor',
            season: 8,
            itemGroups: [
                [  
                  239189018 // Masquerader Helmet: Titan
                ],
                [
                  3055452222, // Pandemonic Helm 
                  2325321839, // Pandemonic Gauntlets
                  170952905, // Pandemonic Plate
                  2899925137, // Pandemonic Greaves
                  1485222020 // Pandemonic Mark
                ]
            ]
          },
          {
            name: 'Warlock Armor',
            season: 8,
            itemGroups: [
              [
                2213504923 // Masquerader Helmet: Warlock
              ],
              [
                3081047495, // Phantasmagoric Hood
                1027749710, // Phantasmagoric Gloves
                3859783010, // Phantasmagoric Robes
                3110827848, // Phantasmagoric Boots
                3508236467 // Phantasmagoric Bond
              ]
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
            name: 'Ghosts',
            season: 8,
            items: [
                3677746975, // Gensym Relic Shell
                3677746972, // Chiropteran Shell
                3677746973 // Jack-O-Shell
            ]
          },
          {
            name: 'Ghost Projections',
            season: 8,
            items: [
                3661044025, // Winged Nightmare Projection
                3661044024 // Hive-o'-lantern Projection
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
            name: 'Ships',
            season: 8,
            items: [
                3755201983 // The Desmodus
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
                3980259371, // Transmat: Looming Moon
                3980259370 // Transmat: Murder of Crows

            ]
          }
        ]
      },
      {
        name: 'The Dawning',
        id: 'year_three_the_dawning',
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
            name: 'Emotes & Finishers',
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
                1913500528 // Perfect Ten
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
      }
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
                2078915253, // Blackheart Growth
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
            name: 'Ornaments',
            season: 8,
            itemGroups: [
              [
                // 52189603, // Bad Dog (Not planned to be sold for Bright Dust)
                // 651701175, // Big Blind (Not planned to be sold for Bright Dust)
                // 3844102542, // Father of Islands (Not planned to be sold for Bright Dust)
                // 3432171457, // Heretic Robe (Not planned to be sold for Bright Dust)
                // 1360105767, // Járngreipr (Not planned to be sold for Bright Dust)
                // 1563263613, // Law of Induction (Not planned to be sold for Bright Dust)
                // 3438514430, // Peacebringer (Not planned to be sold for Bright Dust)
                // 2020179519, // Polemology (Not planned to be sold for Bright Dust)
                3093486579, // Sky/Perdition
                // 2744195002, // Third Rail (Not planned to be sold for Bright Dust)
                // 519687404, // What If (Not planned to be sold for Bright Dust)
                // 4159445096 // A Better Specimen (Not planned to be sold for Bright Dust)
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
            name: 'Emotes',
            season: 8,
            items: [
              // 3769820799, // Camping (Not planned to be sold for Bright Dust)
              3806167517, // Fireteam Fire Up
              // 3470992439, // Guitar Solo (Not planned to be sold for Bright Dust)
              2291520183, // Ninja Vanish
              // 3366702053, // Plant the Flag (Not planned to be sold for Bright Dust)
              // 2035374481, // Precise Strike (Not planned to be sold for Bright Dust)
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
            ]
          },
          {
            name: 'Finishers',
            season: 8,
            items: [
              // 2504641452, // Savage Haymaker (Not planned to be sold for Bright Dust)
              // 2504641454, // Golden Age Dropkick (Not planned to be sold for Bright Dust)
              // 2504641455 // Whirlwind (Not planned to be sold for Bright Dust)
            ]
          },
          {
            name: 'Ghosts',
            season: 8,
            items: [
              // 779216204, // Harper's Shell (Not planned to be sold for Bright Dust)
              779216202, // Lander Shell
              // 779216203, // Lion Guardant Shell (Not planned to be sold for Bright Dust)
              779216206, // Lunar Shell
              779216207, // Ophiuchus Shell
              779216200, // Propheteer Shell
              779216201 // Scarlet Swarm Shell

              // Has highResIcon but not attached to Tess

              // 779216205 // Friendly Fire Shell (Not planned to be sold for Bright Dust)
            ]
          },
          {
            name: 'Ghost Projections',
            season: 8,
            items: [
              2155593794, // Moonbound Projection
              2155593795, // Mindjack Projection
              2155593792, // Crota's Bane Projection
              2155593793 // Aeronautics of China Projection
            ]
          },
          {
            name: 'Sparrows',
            season: 8,
            items: [
              2067296769, // Blood Runner
              2067296773, // Four Degrees of Separation
              // 2067296775, // Golden Pride (Not planned to be sold for Bright Dust)
              2067296772, // Invasive Species
              2067296770 // Jotuneer
              // 2067296771, // The Regal Howl (Not planned to be sold for Bright Dust)

              // Has highResIcon but not attached to Tess

              // 2067296774, // Blast Chariot (Not planned to be sold for Bright Dust)
              // 2067296768 // Magneton Trust (Planned for a future season)
            ]
          },
          {
            name: 'Ships',
            season: 8,
            items: [
              // 4079130217, // Quality Cut (Not planned to be sold for Bright Dust)
              4079130220 // Refashioned Shapes
              // 4079130223, // The Machinoform (Not planned to be sold for Bright Dust)

              // Has highResIcon but not attached to Tess

              // 4079130218, // Arbitrage LXI (Not planned to be sold for Bright Dust)
              // 4079130219, // Cuttlebone (Not planned to be sold for Bright Dust)
              // 4079130216, // Nephilim Toaster (Not planned to be sold for Bright Dust)
              // 4079130221 // Unwilling Revolt 00-Z (Not planned to be sold for Bright Dust)
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
            name: 'Transmat Effects',
            season: 8,
            items: [
              3951356827, // Blind Clutch
              3951356826, // Harpy's Cry
              3951356824, // Nightmare Emergence
              3951356825 // Shattered Shrieker
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
              3434944005, // Point of the Stag
              4106983932, // Elatha FR4
              3622137132, // Last Hope
              1529450902, // Mos Epoch III
            ]
          }
        ]
      }
    ]
  }
]: SetPage);
