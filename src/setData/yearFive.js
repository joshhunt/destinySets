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
        id: 'year-five-strikes',
        description: 'Complete necessary pursuits from Commander Zavala.',
        sections: [
          {
            name: 'Weapons',
            season: 16,
            items: [2821430069]
          },
          {
            name: 'Weapons',
            season: 17,
            items: [2591241074]
          },
          {
            name: 'Weapons',
            season: 18,
            items: [2671639706]
          },
          {
            name: 'Nightfall: The Ordeal Weapons',
            season: 16,
            itemGroups: [
              [435216110, 3355385170],
              [1135050595, 1387987271]
            ]
          },
          {
            name: 'Nightfall: The Ordeal Weapons',
            season: 17,
            itemGroups: [
              [575830664, 216983039],
              [2006308129, 1924276978]
            ]
          },
          {
            name: 'Nightfall: The Ordeal Weapons',
            season: 18,
            itemGroups: [
              [40394833, 1094005544],
              [2378101424, 912150785]
            ]
          },
          {
            name: 'Hunter Armor',
            season: 16,
            items: [4076604385, 619556600, 469333264, 2949791538, 3691455821]
          },
          {
            name: 'Titan Armor',
            season: 16,
            items: [1537128821, 212971972, 2999584444, 2143618030, 456484913]
          },
          {
            name: 'Warlock Armor',
            season: 16,
            items: [3611754012, 671664021, 1080431755, 2713820407, 4156676002]
          },
          {
            name: 'Extras',
            season: 16,
            items: [503394676, 1619668808]
          },
          {
            name: 'Extras',
            season: 17,
            items: [3624264409, 1453926847]
          },
          {
            name: 'Extras',
            season: 17,
            items: [2199880738, 1902811978]
          }
        ]
      },
      {
        name: _(
          'DestinyActivityModeDefinition[1164760504].displayProperties.name',
          'Crucible'
        ),
        id: 'year-five-crucible',
        description: 'Complete necessary pursuits from Lord Shaxx.',
        sections: [
          {
            name: 'Weapons',
            season: 16,
            items: [2888266564]
          },
          {
            name: 'Weapons',
            season: 17,
            items: [2715240478]
          },
          {
            name: 'Weapons',
            season: 18,
            items: [2988121501]
          },
          {
            name: 'Hunter Armor',
            season: 16,
            items: [1767106452, 597831725, 2969535443, 1310207471, 921467658]
          },
          {
            name: 'Titan Armor',
            season: 16,
            items: [2102025592, 2565829065, 2478547407, 2857770907, 4150060382]
          },
          {
            name: 'Warlock Armor',
            season: 16,
            items: [1259299553, 2097219064, 3261819408, 132486706, 2188974669]
          },
          {
            name: 'Extras',
            season: 16,
            items: [4048492909, 233502397]
          },
          {
            name: 'Extras',
            season: 17,
            items: [2088009808, 247978378]
          },
          {
            name: 'Extras',
            season: 18,
            items: [4078150875, 1443620695]
          }
        ]
      },
      {
        name: _(
          'DestinyActivityModeDefinition[1848252830].displayProperties.name',
          'Gambit'
        ),
        id: 'year-five-gambit',
        description: 'Complete necessary pursuits from the Drifter.',
        sections: [
          {
            name: 'Weapons',
            season: 16,
            items: [1788603939]
          },
          {
            name: 'Weapons',
            season: 17,
            items: [3738678140]
          },
          {
            name: 'Weapons',
            season: 18,
            items: [1141927949]
          },
          {
            name: 'Hunter Armor',
            season: 16,
            items: [2381337281, 3219256792, 3934586864, 1254421266, 2820165421]
          },
          {
            name: 'Titan Armor',
            season: 16,
            items: [371726421, 3342536996, 1740888860, 978215630, 3451283089]
          },
          {
            name: 'Warlock Armor',
            season: 16,
            items: [4291183556, 4238378141, 959484195, 1884579135, 241291034]
          },
          {
            name: 'Extras',
            season: 16,
            items: [537464956, 2342965008]
          },
          {
            name: 'Extras',
            season: 17,
            items: [1677618961, 776125535]
          },
          {
            name: 'Extras',
            season: 18,
            items: [227203906, 2102881346]
          }
        ]
      },
      {
        name: _(
          'DestinyActivityModeDefinition[1826469369].displayProperties.name',
          'Iron Banner'
        ),
        id: 'year-five-iron-banner',
        description: _(
          'DestinyCollectibleDefinition[1158218425].sourceString',
          'Complete Iron Banner matches and earn rank-up packages from Lord Saladin.'
        ),
        sections: [
          {
            name: 'Weapons',
            season: 16,
            items: [1141547457, 1796949035]
          },
          {
            name: 'Weapons',
            season: 17,
            items: [2488587246, 1999697514]
          },
          {
            name: 'Weapons',
            season: 18,
            items: [1532276803, 4009352833]
          },
          {
            name: 'Extras',
            season: 17,
            items: [383734238, 987236624]
          },
          {
            name: 'Extras',
            season: 18,
            items: [1141716966, 572069851]
          }
        ]
      },
      {
        name: _(
          'DestinyActivityModeDefinition[1673724806].displayProperties.name',
          'Trials of Osiris'
        ),
        id: 'year-five-trials-of-osiris',
        description: 'Complete challenges in the Trials of Osiris.',
        sections: [
          {
            name: 'Weapons',
            season: 16,
            itemGroups: [[2638190703], [3245493570]]
          },
          {
            name: 'Weapons',
            season: 17,
            itemGroups: [
              [2345794502, 933455006],
              [2405619467, 2002522739]
            ]
          },
          {
            name: 'Weapons',
            season: 18,
            itemGroups: [
              [1574601402, 2185327324],
              [711889599, 2307365]
            ]
          },
          {
            name: 'Hunter Armor',
            season: 17,
            items: [868732497, 3821828136, 2355943840, 162269058, 1283202269]
          },
          {
            name: 'Titan Armor',
            season: 17,
            items: [486861531, 1987616650, 2627533758, 1026828708, 2381515079]
          },
          {
            name: 'Warlock Armor',
            season: 17,
            items: [2612856746, 2618417907, 124944413, 2353371845, 1586932304]
          },
          {
            name: 'Extras',
            season: 17,
            items: [1554105351, 3262125707, 4279814045, 383734233, 3854366006]
          }
        ]
      },
      {
        name: 'The Witch Queen Campaign',
        id: 'year-five-witch-queen-campaign',
        description: _(
          'DestinyCollectibleDefinition[2825706382].sourceString',
          'The Witch Queen campaign'
        ),
        big: false,
        sections: [
          {
            name: 'Weapons',
            season: 16,
            items: [2607304614, 2595497736, 3175851496]
          },
          {
            name: 'Extras',
            season: 16,
            items: [787024997]
          }
        ]
      },
      {
        name: 'Legend and Master Lost Sectors',
        id: 'year-five-lost-sectors',
        description: 'Solo Legend and Master Lost Sectors',
        big: false,
        sections: [
          {
            name: 'Armor',
            season: 16,
            itemGroups: [
              [1703551922, 2169905051],
              [3316517958, 1322544481],
              [3259193988, 511888814]
            ]
          },
          {
            name: 'Armor',
            season: 17,
            itemGroups: [[3453042252], [1443166262], [1624882687]]
          },
          {
            name: 'Armor',
            season: 18,
            itemGroups: [[461841403], [1703598057], [1849149215]]
          }
        ]
      },
      {
        name: _(
          'DestinyActivityDefinition[2823159265].displayProperties.name',
          'Duality'
        ),
        id: 'year-five-duality',
        description: 'Complete encounters in the Duality dungeon.',
        sections: [
          {
            name: 'Weapons',
            season: 17,
            itemGroups: [
              [3664831848],
              [
                1780464822,
                3000847393,
                2026087437,
                2263839058,
                3652506829,
                2194955522
              ]
            ]
          },
          {
            name: 'Hunter Armor',
            season: 17,
            items: [3262689948, 322599957, 4289018379, 2364756343, 3070295330]
          },
          {
            name: 'Titan Armor',
            season: 17,
            items: [2610749098, 2616310259, 3570529565, 2351264197, 737550160]
          },
          {
            name: 'Warlock Armor',
            season: 17,
            items: [630469185, 1468388696, 561897072, 3798520466, 3742442925]
          },
          {
            name: 'Extras',
            season: 17,
            items: [488052106, 383734239, 383734232]
          }
        ]
      },
      {
        name: _(
          'DestinyActivityDefinition[2906950631].displayProperties.name',
          'Vow of the Disciple'
        ),
        id: 'year-five-vow-of-the-disciple',
        description: _(
          'DestinyCollectibleDefinition[3070552038].sourceString',
          'Vow of the Disciple raid'
        ),
        sections: [
          {
            name: 'Weapons',
            season: 16,
            itemGroups: [
              [
                3505113722,
                3428521585,
                3886416794,
                613334176,
                768621510,
                2534546147,
                999767358
              ],
              [
                786352912,
                1941816543,
                4038592169,
                2943293195,
                1466006054,
                2886339027
              ]
            ]
          },
          {
            name: 'Hunter Armor',
            season: 16,
            items: [1649346047, 1583213254, 3487540074, 1566699968, 4124357755]
          },
          {
            name: 'Titan Armor',
            season: 16,
            items: [362541459, 2150515362, 1627640710, 365727964, 2370089583]
          },
          {
            name: 'Warlock Armor',
            season: 16,
            items: [2316722050, 1656263403, 3300312357, 2748020989, 2422261368]
          },
          {
            name: 'Extras',
            season: 16,
            items: [522693977, 3645278673, 787024996, 1782474706, 1782474707]
          }
        ]
      },
      {
        name: _(
          'DestinyActivityDefinition[1374392663].displayProperties.name',
          'King\'s Fall'
        ),
        id: 'year-five-kings-fall',
        description: _(
          'DestinyCollectibleDefinition[2100640553].sourceString',
          'King\'s Fall raid'
        ),
        sections: [
          {
            name: 'Weapons',
            season: 18,
            itemGroups: [
              [
                1802135586,
                2221264583,
                3228096719,
                3969066556,
                431721920,
                1937552980,
                1321506184
              ],
              [
                3407395594,
                3503019618,
                3904516037,
                291092617,
                1184692845,
                3248429089
              ]
            ]
          },
          {
            name: 'Hunter Armor',
            season: 18,
            items: [1656833637, 2437510452, 169689932, 2725249086, 2868448385]
          },
          {
            name: 'Titan Armor',
            season: 18,
            items: [26254737, 2937773672, 1066132704, 4039112898, 376168733]
          },
          {
            name: 'Warlock Armor',
            season: 18,
            items: [1537426592, 3398467185, 3921733799, 3229616835, 766618550]
          },
          {
            name: 'Extras',
            season: 18,
            items: [3889064943, 528682407, 866034301, 983194593, 983194592]
          }
        ]
      }
    ]
  },
  {
    name: 'Seasonal Content',
    sets: [
      {
        name: 'Season 16',
        id: 'year-five-season-16',
        description: 'Complete seasonal activities from Season of the Risen.',
        sections: [
          {
            name: 'Pursuit Weapon',
            season: 16,
            itemGroups: [[3216652511], [2814111720, 2814111722, 2814111723]]
          },
          {
            name: 'Weapons',
            season: 16,
            items: [1248372789, 232928045, 4096943616, 1572896086]
          },
          {
            name: 'Hunter Armor',
            season: 16,
            items: [2516879931, 4017738218, 4144240158, 3056950148, 3473867303]
          },
          {
            name: 'Titan Armor',
            season: 16,
            items: [2240729575, 187431790, 438108034, 2270509928, 3957071315]
          },
          {
            name: 'Warlock Armor',
            season: 16,
            items: [849255710, 119228495, 3465627817, 693728753, 950963812]
          },
          {
            name: 'Vox Obscura',
            season: 16,
            items: [2812324401, 1112018949]
          },
          {
            name: 'Extras',
            season: 16,
            items: [
              1049640809,
              2235731789,
              787024998
              // 787024993
            ]
          }
        ]
      },
      {
        name: 'Season 17',
        id: 'year-five-season-17',
        description: 'Complete seasonal activities from Season of the Haunted.',
        sections: [
          {
            name: 'Pursuit Weapon',
            season: 17,
            itemGroups: [[3105930175], [1842527158, 1842527156, 1842527157]]
          },
          {
            name: 'Weapons',
            season: 17,
            items: [1366394399, 2323544076, 254636484, 1959650777]
          },
          {
            name: 'The Derelict Leviathan Weapons',
            season: 17,
            items: [3055790362, 2490988246, 502356570, 3107853529]
          },
          {
            name: 'Hunter Armor',
            season: 17,
            items: [1285042454, 2489136103, 29154321, 1241941801, 2224584236]
          },
          {
            name: 'Titan Armor',
            season: 17,
            items: [527342912, 2388383505, 2288543943, 1795075811, 3004041686]
          },
          {
            name: 'Warlock Armor',
            season: 17,
            items: [217647949, 870313788, 1972851364, 256122438, 2716681465]
          },
          {
            name: 'Extras',
            season: 17,
            items: [3692900164, 2912094496, 2032249948, 383734236]
          }
        ]
      },
      {
        name: 'Season 18',
        id: 'year-five-season-18',
        description: 'Complete seasonal activities from Season of Plunder.',
        sections: [
          {
            name: 'Pursuit Weapon',
            season: 18,
            itemGroups: [[616582330], [3964346177, 3964346179, 3964346178]]
          },
          {
            name: 'Weapons',
            season: 18,
            items: [2531963421, 1509167284, 2218569744, 1298815317, 1184309824, 820890091]
          },
          {
            name: 'Hunter Armor',
            season: 18,
            items: [1095145125, 1834245236, 92499596, 2121983870, 2325223873]
          },
          {
            name: 'Titan Armor',
            season: 18,
            items: [859087913, 2945464224, 130618344, 1640403802, 1832715717]
          },
          {
            name: 'Warlock Armor',
            season: 18,
            items: [738153648, 535937281, 3833868247, 2030782835, 1667220390]
          },
          {
            name: 'Extras',
            season: 18,
            items: [2213418427, 4252635431, 982950671, 866034303]
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
          'DestinyPlaceDefinition[2244580325].displayProperties.name',
          'Court of Savathûn, Throne World'
        ),
        id: 'year-five-throne-world',
        description: _(
          'DestinyCollectibleDefinition[3257565710].sourceString',
          'Found by exploring the Throne World'
        ),
        sections: [
          {
            name: 'Weapons',
            season: 16,
            items: [297296830, 1526296434, 1994645182]
          },
          {
            name: 'Hunter Armor',
            season: 16,
            items: [3316852407, 2390366526, 1660918514, 2809748888, 2297736067]
          },
          {
            name: 'Titan Armor',
            season: 16,
            items: [2126560579, 2798065170, 1320143318, 3199406764, 649770495]
          },
          {
            name: 'Warlock Armor',
            season: 16,
            items: [1795262004, 201529677, 4115572467, 872328719, 2026031146]
          },
          {
            name: 'Wellspring',
            season: 16,
            items: [
              927567426,
              1399109800,
              3865728990,
              2721157927,
              3499782248,
              816686753
            ]
          },
          {
            name: 'The Enclave',
            season: 16,
            items: [542203595, 2535142413, 14194600]
          },
          {
            name: 'Extras',
            season: 16,
            items: [528474811, 2641682052]
          }
        ]
      }
    ]
  },
  {
    name: 'Holiday & Special Events',
    sets: [eververseAndEvents.GUARDIAN_GAMES_Y5, eververseAndEvents.SOLSTICE_Y5, eververseAndEvents.FESTIVAL_OF_THE_LOST_Y5]
  },
  {
    name: 'Other',
    sets: [
      {
        name: 'Earned While Leveling',
        id: 'year-five-rare-armor',
        description: 'Earn these armor pieces while leveling.',
        big: false,
        sections: [
          {
            name: 'Armor',
            season: 16,
            itemGroups: [
              [2891906302, 2120302383, 502477449, 2270345041, 2282780740],
              [2474203178, 2479764339, 2229615005, 2214718277, 3691602896],
              [4172753441, 674128952, 3783871056, 3004363890, 3135586957]
            ]
          }
        ]
      },
      {
        name: _(
          'DestinyPresentationNodeDefinition[3110685926].displayProperties.name',
          'Season Pass'
        ),
        description:
          'Free Track is available to all Destiny 2 Players. Paid Track is available to owners of the current Season Pass.',
        id: 'year-five-season-passes',
        big: false,
        sections: [
          {
            name: 'Free Track',
            season: 16,
            items: [1763584999, 2097055732, 4067556514]
          },
          {
            name: 'Free Track',
            season: 17,
            items: [1234150730, 2778013407, 1478986057]
          },
          {
            name: 'Free Track',
            season: 18,
            items: [374573733, 1298815317, 820890091]
          },
          {
            name: 'Paid Track',
            season: 16,
            itemGroups: [
              [682653408],
              [2246957026, 1545024715, 141592453, 3061239773, 3092577752],
              [3600144112, 3356351041, 1921240599, 131771827, 4049560038],
              [1055855089, 3967373896, 3141291584, 349391650, 2068446973],
              [
                339904227,
                3157549001,
                2082826653,
                1337054696,
                2073952954,
                997314999,
                997314998,
                2425962977
              ]
            ]
          },
          {
            name: 'Paid Track',
            season: 17,
            itemGroups: [
              [1934353448],
              [1819090317, 2471652988, 2311637476, 1474580870, 3479925049],
              [3022208769, 3860128280, 2691634736, 2319853394, 2043350637],
              [443668396, 3934510181, 3100242363, 3857279207, 1881519186],
              [
                2989179500,
                493352427,
                2523952013,
                634549439,
                2027044330,
                3816300537,
                3195867806,
                3195867807,
                467976170
              ]
            ]
          },
          {
            name: 'Paid Track',
            season: 18,
            itemGroups: [
              [1879832548],
              [3646077812, 2518482829, 1637920051, 3189281871, 3843346026],
              [853974266, 2625211587, 3783523469, 717258357, 2363365760],
              [3138802235, 344693226, 1375858206, 3678872452, 705485351],
              [
                823286729,
                382975121,
                1561622944,
                1302968378,
                3861400487,
                3607696740,
                2639800745,
                2639800744,
                3851215879
              ]
            ]
          }
        ]
      },
      eververseAndEvents.EVERVERSE_Y5,
      {
        name: _(
          'DestinyVendorDefinition[3163810067].displayProperties.name',
          'Legendary Engrams'
        ),
        id: 'year-five-legendary-engram',
        description: _(
          'DestinyCollectibleDefinition[4273799635].sourceString',
          'Open Legendary engrams and earn faction rank-up packages.'
        ),
        big: false,
        sections: [
          {
            name: 'Weapons',
            season: 16,
            items: [
              2852052802,
              1019000888,
              2342054803,
              2856514843,
              372697604,
              3341893443,
              1687353095,
              4225322581,
              4114929480,
              2233545123,
              3568377122,
              3489657138
            ]
          },
          {
            name: 'Weapons',
            season: 17,
            items: [4019668921, 1601177201, 2513965917, 617501162]
          },
          {
            name: 'Weapons',
            season: 18,
            items: [1916287826, 4100775158, 2119346509, 1911060537]
          }
        ]
      }
    ]
  }
]: SetPage);
