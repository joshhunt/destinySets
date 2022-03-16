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
            name: 'Nightfall: The Ordeal Weapons',
            season: 16,
            itemGroups: [
              [435216110, 3355385170],
              [1135050595, 1387987271]
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
            name: 'Vox Obscura',
            season: 16,
            items: [2812324401, 1112018949]
          },
          {
            name: 'Extras',
            season: 16,
            items: [1049640809, 2235731789, 787024998, 787024993]
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
    sets: [eververseAndEvents.GUARDIAN_GAMES_Y5]
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
            name: 'Paid Track',
            season: 16,
            itemGroups: [
              [2516879931, 4017738218, 4144240158, 3056950148, 3473867303],
              [2246957026, 1545024715, 141592453, 3061239773, 3092577752],
              [2240729575, 187431790, 438108034, 2270509928, 3957071315],
              [3600144112, 3356351041, 1921240599, 131771827, 4049560038],
              [849255710, 119228495, 3465627817, 693728753, 950963812],
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
          }
        ]
      }
    ]
  }
]: SetPage);
