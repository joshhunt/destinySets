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
        id: 'year-four-strikes',
        description: 'Complete necessary pursuits from Commander Zavala.',
        sections: [
          {
            name: 'Weapons',
            season: 12,
            itemGroups: [[2891672170], [4060882458]]
          },
          {
            name: 'Weapons',
            season: 13,
            itemGroups: [[4156253727, 2448907086], [1132740485]]
          },
          {
            name: 'Weapons',
            season: 14,
            itemGroups: [[], []]
          },
          {
            name: 'Nightfall: The Ordeal Weapons',
            season: 13,
            itemGroups: [
              [2633186522, 432476743, 47772649],
              [2147010335, 1481892490, 3836861464]
            ]
          },
          {
            name: 'Nightfall: The Ordeal Weapons',
            season: 14,
            itemGroups: [[], []]
          },
          {
            name: 'Hunter Armor',
            season: 12,
            items: [3977387640, 146223817, 2335208655, 438165659, 4006721630]
          },
          {
            name: 'Titan Armor',
            season: 12,
            items: [1884301546, 1465405235, 2072548445, 1200256005, 3958993808]
          },
          {
            name: 'Warlock Armor',
            season: 12,
            items: [3074679271, 1021381486, 1512386434, 3104459624, 736382419]
          },
          {
            name: 'Extras',
            season: 12,
            items: [2588647361]
          },
          {
            name: 'Extras',
            season: 13,
            items: [532530781, 4166922308]
          },
          {
            name: 'Extras',
            season: 14,
            items: []
          }
        ]
      },
      {
        name: _(
          'DestinyActivityModeDefinition[1164760504].displayProperties.name',
          'Crucible'
        ),
        id: 'year-four-crucible',
        description: 'Complete necessary pursuits from Lord Shaxx.',
        sections: [
          {
            name: 'Weapons',
            season: 12,
            itemGroups: [[2050789284], [4060882456]]
          },
          {
            name: 'Weapons',
            season: 13,
            itemGroups: [[409551876, 3473290087], [1132740487]]
          },
          {
            name: 'Weapons',
            season: 14,
            itemGroups: [[], []]
          },
          {
            name: 'Hunter Armor',
            season: 12,
            items: [1413409069, 2066074780, 886273156, 1069002790, 1630000089]
          },
          {
            name: 'Titan Armor',
            season: 12,
            items: [3991622471, 1938324686, 3601794530, 4021402824, 3250247987]
          },
          {
            name: 'Warlock Armor',
            season: 12,
            items: [1346827258, 3118064579, 539816333, 1210111349, 3414625920]
          },
          {
            name: 'Extras',
            season: 12,
            items: [1230660649]
          },
          {
            name: 'Extras',
            season: 13,
            items: [532530779, 179465689]
          },
          {
            name: 'Extras',
            season: 14,
            items: []
          }
        ]
      },
      {
        name: _(
          'DestinyActivityModeDefinition[1848252830].displayProperties.name',
          'Gambit'
        ),
        id: 'year-four-gambit',
        description: 'Complete necessary pursuits from the Drifter.',
        sections: [
          {
            name: 'Weapons',
            season: 12,
            itemGroups: [[3565520715], [4060882457]]
          },
          {
            name: 'Weapons',
            season: 13,
            itemGroups: [[1046651176, 3258665412], [1132740486]]
          },
          {
            name: 'Weapons',
            season: 14,
            itemGroups: [[], []]
          },
          {
            name: 'Hunter Armor',
            season: 12,
            items: [1207531728, 1005315489, 3570900471, 2075703443, 938218310]
          },
          {
            name: 'Titan Armor',
            season: 12,
            items: [1896287986, 2321064411, 777526069, 771104589, 3770087944]
          },
          {
            name: 'Warlock Armor',
            season: 12,
            items: [3813221631, 3747088838, 3651039338, 3730575552, 4287857019]
          },
          {
            name: 'Extras',
            season: 12,
            items: [2588647363]
          },
          {
            name: 'Extras',
            season: 13,
            items: [532530778, 117960780]
          },
          {
            name: 'Extras',
            season: 14,
            items: []
          }
        ]
      },
      {
        name: _(
          'DestinyActivityModeDefinition[1826469369].displayProperties.name',
          'Iron Banner'
        ),
        id: 'year-four-iron-banner',
        description: _(
          'DestinyCollectibleDefinition[1158218425].sourceString',
          'Complete Iron Banner matches and earn rank-up packages from Lord Saladin.'
        ),
        sections: [
          {
            name: 'Weapons',
            season: 12,
            items: [2220884262, 1641430382]
          },
          {
            name: 'Weapons',
            season: 13,
            items: [3593598010, 3717177717]
          },
          {
            name: 'Weapons',
            season: 14,
            items: []
          },
          {
            name: 'Extras',
            season: 12,
            items: [2588647362, 2532730764, 2532730765]
          },
          {
            name: 'Extras',
            season: 13,
            items: [726145097]
          },
          {
            name: 'Extras',
            season: 14,
            items: []
          }
        ]
      },
      {
        name: _(
          'DestinyActivityModeDefinition[1673724806].displayProperties.name',
          'Trials of Osiris'
        ),
        id: 'year-four-trials-of-osiris',
        description: 'Complete challenges in the Trials of Osiris.',
        sections: [
          {
            name: 'Weapons',
            season: 12,
            items: [
              3514144928,
              2386979999,
              532746994,
              276080079,
              3637570176,
              1366917989
            ]
          },
          {
            name: 'Weapons',
            season: 13,
            itemGroups: [
              [3658188704, 2351180975, 1313528549],
              [1173780905, 2527666306, 3847137620]
            ]
          },
          {
            name: 'Hunter Armor',
            season: 13,
            items: [1001798188, 197672677, 2540765499, 120441703, 1322042322]
          },
          {
            name: 'Titan Armor',
            season: 13,
            items: [1260563064, 1724366537, 2671565007, 2016308379, 48110686]
          },
          {
            name: 'Warlock Armor',
            season: 13,
            items: [4161591237, 605724052, 2304861612, 469005214, 708549601]
          },
          {
            name: 'Extras',
            season: 13,
            items: [758112594, 774879414, 2710956576, 3919943498, 647195977]
          }
        ]
      },
      {
        name: _(
          'DestinyActivityDefinition[910380154].displayProperties.name',
          'Deep Stone Crypt'
        ),
        id: 'year-four-deep-stone-crypt',
        description: _(
          'DestinyCollectibleDefinition[2273453973].sourceString',
          '"Deep Stone Crypt" raid.'
        ),
        sections: [
          {
            name: 'Weapons',
            season: 12,
            items: [
              2399110176,
              1392919471,
              3281285075,
              4248569242,
              2990047042,
              3366545721,
              4230965989
            ]
          },
          {
            name: 'Hunter Armor',
            season: 12,
            items: [893751566, 2343515647, 4001862073, 1264765761, 1021060724]
          },
          {
            name: 'Titan Armor',
            season: 12,
            items: [3015085684, 1887490701, 751162931, 2558289743, 2956588906]
          },
          {
            name: 'Warlock Armor',
            season: 12,
            items: [1462908657, 79460168, 3975122240, 756445218, 2902277629]
          },
          {
            name: 'Extras',
            season: 12,
            items: [296637832, 3102002768, 1230660644, 2357830697, 2357830696]
          }
        ]
      },
      {
        name: _(
          'DestinyActivityDefinition[910380154].displayProperties.name',
          'Vault of Glass'
        ),
        id: 'year-four-vault-of-glass',
        description: _(
          'DestinyCollectibleDefinition[2273453973].sourceString',
          '"Vault of Glass" raid.'
        ),
        sections: [
          {
            name: 'Weapons',
            season: 14,
            items: []
          },
          {
            name: 'Hunter Armor',
            season: 14,
            items: []
          },
          {
            name: 'Titan Armor',
            season: 14,
            items: []
          },
          {
            name: 'Warlock Armor',
            season: 14,
            items: []
          },
          {
            name: 'Extras',
            season: 14,
            items: []
          }
        ]
      }
    ]
  },
  {
    name: 'Seasonal Content',
    sets: [
      {
        name: 'Season 12',
        id: 'year-four-season-12',
        description: 'Complete seasonal activities from Season of the Hunt.',
        sections: [
          {
            name: 'Pursuit Weapon',
            season: 12,
            items: [4184808992]
          },
          {
            name: 'Wrathborn Hunts',
            season: 12,
            items: [1513993763, 981718087, 2714022207]
          },
          {
            name: 'Harbinger',
            season: 12,
            items: [3856705927]
          },
          {
            name: 'Extras',
            season: 12,
            items: [3677784672]
          },
          {
            name: 'Harbinger Extras',
            season: 12,
            items: [3518986339, 1230660641]
          }
        ]
      },
      {
        name: 'Season 13',
        id: 'year-four-season-13',
        description: 'Complete seasonal activities from Season of the Chosen.',
        sections: [
          {
            name: 'Pursuit Weapon',
            season: 13,
            items: [2060863616]
          },
          {
            name: 'Battlegrounds',
            season: 13,
            items: [1097616550, 3460122497, 893527433, 2496242052]
          },
          {
            name: 'Presage',
            season: 13,
            items: [3654674561]
          },
          {
            name: 'Extras',
            season: 13,
            items: [532530782, 532530777, 2962058750, 397043529, 1953632753]
          },
          {
            name: 'Presage Extras',
            season: 13,
            items: [532530783, 1249788648]
          }
        ]
      },
      {
        name: 'Season 14',
        id: 'year-four-season-14',
        description: 'Complete seasonal activities from Season of the Splicer.',
        sections: [
          {
            name: 'Pursuit Weapon',
            season: 14,
            items: []
          },
          {
            name: 'Override',
            season: 14,
            items: []
          },
          {
            name: 'Expunge',
            season: 14,
            items: []
          },
          {
            name: 'Extras',
            season: 14,
            items: []
          },
          {
            name: 'Expunge Extras',
            season: 14,
            items: []
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
          'DestinyPlaceDefinition[1729879943].displayProperties.name',
          'Rathmore Chaos, Europa'
        ),
        id: 'year-four-europa',
        description: _(
          'DestinyCollectibleDefinition[3859356069].sourceString',
          'Found exploring Europa.'
        ),
        sections: [
          {
            name: 'Weapons',
            season: 12,
            itemGroups: [
              [20935540, 2870169846, 1197486957, 4037745684, 42351395],
              [1621657423, 3512349612, 1766088024]
            ]
          },
          {
            name: 'Hunter Armor',
            season: 12,
            items: [2511757244, 3866531381, 4014508459, 1147686167, 2371224642]
          },
          {
            name: 'Titan Armor',
            season: 12,
            items: [903627726, 1928831167, 1208040825, 850081281, 2946767412]
          },
          {
            name: 'Warlock Armor',
            season: 12,
            items: [1547733991, 3789403502, 333761922, 1577514344, 3852725203]
          },
          {
            name: 'Empire Hunts',
            season: 12,
            items: [1230660640, 1230660642, 1948818058, 1948818059]
          },
          {
            name: 'Extras',
            season: 12,
            items: [3376331270, 1230660643, 3089508707, 3089508706]
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
        id: 'year-four-the-dawning',
        description: 'Earned during the seasonal Dawning event.',
        big: false,
        sections: [
          {
            name: 'Weapons',
            season: 12,
            itemGroups: [
              [1030895163],
              [
                // 1981661519,
                // 116918307
              ]
            ]
          },
          {
            name: 'Hunter Armor',
            season: 12,
            items: [3104651352, 3568351785, 2655812783, 3394362619, 74038334]
          },
          {
            name: 'Titan Armor',
            season: 12,
            items: [428862428, 1825213269, 91501643, 3401335479, 2743185250]
          },
          {
            name: 'Warlock Armor',
            season: 12,
            items: [3656766039, 2730176990, 1319520530, 3574120120, 1914761507]
          },
          {
            name: 'Emotes',
            season: 12,
            itemGroups: [
              [3269282583, 2847079604, 4090391256, 3613286014, 4772275],
              [
                // 1150304053
              ]
            ]
          },
          {
            name: 'Ghosts',
            season: 12,
            itemGroups: [
              [4088827200, 4088827201, 4088827202],
              [505272876, 505272877]
            ]
          },
          {
            name: 'Sparrows',
            season: 12,
            items: [3301342410, 3301342411, 3301342408]
          },
          {
            name: 'Ships',
            season: 12,
            items: [249784434, 472776702]
          },
          {
            name: 'Extras',
            season: 12,
            items: [1230660647, 2962058751, 2696974649, 2696974648, 912276057]
          }
        ]
      },
      {
        name: 'Guardian Games',
        id: 'year-four-guardian-games',
        description: 'Earned during the seasonal Guardian Games event.',
        big: false,
        sections: [
          {
            name: 'Weapons',
            season: 13,
            items: [
              // 3044160466
            ]
          },
          {
            name: 'Hunter Armor',
            season: 13,
            itemGroups: [
              [539974843],
              [1991946241, 2829865752, 4107663664, 1289590866, 3459379565]
            ]
          },
          {
            name: 'Titan Armor',
            season: 13,
            itemGroups: [
              [3371868783],
              [3690574071, 2763985022, 873100338, 3607928024, 1043883715]
            ]
          },
          {
            name: 'Warlock Armor',
            season: 13,
            itemGroups: [
              [3628145148],
              [2984964098, 2324505451, 4166401701, 3416263037, 3288350712]
            ]
          },
          {
            name: 'Emotes',
            season: 13,
            itemGroups: [
              [
                2532993847,
                1303706313,
                3651793541,
                838156448,
                2624974641,
                2222286218,
                411709610
              ],
              [
                // 1785547370
              ]
            ]
          },
          {
            name: 'Ghosts',
            season: 13,
            itemGroups: [
              [2991116201, 2991116200, 2991116203],
              [3216960486, 3216960487]
            ]
          },
          {
            name: 'Sparrows',
            season: 13,
            items: [1107624473, 1273354937, 1273354936]
          },
          {
            name: 'Ships',
            season: 13,
            items: [156845153, 156845152]
          },
          {
            name: 'Extras',
            season: 13,
            items: [
              532530780,
              532530769,
              3919847953,
              3446862222,
              3446862223,
              2217042834,
              2671075344
            ]
          }
        ]
      },
      common.SOLSTICE_OF_HEROES_YEAR_4
    ]
  },
  {
    name: 'Other',
    sets: [
      {
        name: _(
          'DestinyActivityDefinition[3982116234].displayProperties.name',
          'New Light'
        ),
        id: 'year-four-new-light',
        description:
          'Welcome, Guardian. Fight through the Cosmodrome to find a ship and make your escape.',
        big: false,
        sections: [
          {
            name: '"A Spark of Hope" Quest',
            season: 12,
            items: [2535664169, 2535664168, 2535664170, 2962058736]
          },
          {
            name: 'Earned While Leveling',
            season: 13,
            items: [3651075426, 3117873459]
          },
          {
            name: 'Earned While Leveling',
            season: 14,
            items: []
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
        id: 'year-four-season-passes',
        big: false,
        sections: [
          {
            name: 'Free Track',
            season: 12,
            itemGroups: [
              [3460576091, 2776503072, 2453357042],
              [4079117607, 2025716654, 1458739906, 238284968, 1148770067],
              [3887272785, 2545401128, 3351935136, 3180809346, 2279193565],
              [251310542, 1276513983, 317220729, 197764097, 2055947316]
            ]
          },
          {
            name: 'Free Track',
            season: 13,
            itemGroups: [
              [3260753130, 2121785039, 3075224551],
              [505747572, 3673119885, 3100185651, 48951631, 1010644330],
              [4003170632, 3350504921, 412014143, 1947723211, 1659172686],
              [3311198527, 3245065734, 2166974634, 2804094976, 2803792315]
            ]
          },
          {
            name: 'Free Track',
            season: 14,
            itemGroups: [[], [], [], []]
          },
          {
            name: 'Paid Track',
            season: 12,
            itemGroups: [
              [1929437677],
              [3228751873, 4066671384, 29159728, 2526396498, 3675842925],
              [209359253, 3180169828, 40620124, 391287822, 1326453713],
              [4049624016, 3847407777, 2177824503, 622828435, 3840109638],
              [
                3414847998,
                2223907273,
                629267288,
                2673955019,
                3363948245,
                1230660648,
                2086800026,
                2086800027,
                575614550
              ]
            ]
          },
          {
            name: 'Paid Track',
            season: 13,
            itemGroups: [
              [2528315727],
              [2388099734, 3592193383, 32123025, 2344999081, 2227552940],
              [4111701460, 2942529901, 1916301843, 3188871471, 251217994],
              [2365135029, 999504644, 1813208572, 2547166766, 3099145329],
              [
                2884151045,
                3886820084,
                2922021463,
                970919108,
                532530776,
                2320367075,
                2320367074,
                1955679597
              ]
            ]
          },
          {
            name: 'Paid Track',
            season: 14,
            itemGroups: [[], [], [], [], []]
          }
        ]
      },
      {
        name: _(
          'DestinyFactionDefinition[1393733616].displayProperties.name',
          'Eververse'
        ),
        id: 'year-four-eververse',
        description: 'Items sold at Eververse for Bright Dust.',
        big: false,
        sections: [
          {
            name: 'Armor',
            season: 12,
            itemGroups: [
              [1596659078, 610618967, 2930427553, 2419153785, 3712932604],
              [3482689162, 3488353491, 2980516861, 2798746917, 147537456],
              [3092145291, 1414402554, 1095842638, 3095331892, 1838291479]
            ]
          },
          {
            name: 'Armor',
            season: 13,
            itemGroups: [
              [1597467149, 2250029820, 1044330340, 1252957702, 2212617913],
              [2188215631, 48380374, 2956050458, 1260659632, 2179943275],
              [3149327402, 3154888563, 3721737629, 2889842501, 888758224]
            ]
          },
          {
            name: 'Armor',
            season: 14,
            itemGroups: [[], [], []]
          },
          {
            name: 'Ornaments',
            season: 12,
            itemGroups: [
              [
                3170445301,
                3170445300,
                3900166436,
                4258327739,
                1522454198,
                1061828070,
                396425346
              ],
              [],
              [
                // 1029444727,
                1516829881,
                // 488956963,
                2099043843,
                // 3391785621,
                740142754
              ]
            ]
          },
          {
            name: 'Ornaments',
            season: 13,
            itemGroups: [
              [
                2267660625,
                287295296,
                // 1395580616,
                568877018,
                3802742250,
                // 4074521886,
                3925195811,
                4231724739
              ],
              [],
              [
                // 3951784665,
                // 3049004864,
                // 46563601
              ]
            ]
          },
          {
            name: 'Ornaments',
            season: 14,
            itemGroups: [[], [], []]
          },
          {
            name: 'Emotes',
            season: 12,
            itemGroups: [
              [
                793331321,
                4294201950,
                3581655471,
                392758338,
                614765340,
                768261433,
                4057072771,
                1927858591,
                1021230510,
                3867067311,
                2259361757,
                // 694000234,
                // 3775013469,
                // 2990386436,
                53537405,
                4043146243
              ],
              [
                // 1636358075,
                // 3932930005,
                //3662503912
              ]
            ]
          },
          {
            name: 'Emotes',
            season: 13,
            itemGroups: [
              [
                // 122185975,
                801080977,
                2847002782,
                1733566584,
                3043004564,
                // 4099441739,

                3516475261,
                63857986,
                2662325594,
                1033800931,
                2067971469,
                293474540,
                // 633593783,

                // 4217695393,
                2517691934,
                4198587027,
                2073721669
              ],
              [
                // 848275837,
                // 4286421958,
                // 3615928434
              ]
            ]
          },
          {
            name: 'Emotes',
            season: 14,
            itemGroups: [[], []]
          },
          {
            name: 'Ghosts',
            season: 12,
            itemGroups: [
              [
                1013853352,
                1013853353,
                1013853354,
                1013853355,
                1013853356,
                1013853357
                // 1013853358
              ],
              [4022197231, 4022197230, 4022197229, 4022197228, 4022197227]
            ]
          },
          {
            name: 'Ghosts',
            season: 13,
            itemGroups: [
              [
                // 2012043037,
                2012043036,
                2012043039,
                2012043038
                // 2012043033,
                // 2012043032
              ],
              [
                3065522226,
                3065522227,
                3065522224
                // 3065522225,
                // 3065522230
              ]
            ]
          },
          {
            name: 'Ghosts',
            season: 14,
            itemGroups: [[], []]
          },
          {
            name: 'Sparrows',
            season: 12,
            items: [
              1439378676,
              1439378677,
              1439378678,
              1439378679,
              1439378672
              // 1439378674
            ]
          },
          {
            name: 'Sparrows',
            season: 13,
            items: [
              2056426001,
              2056426000,
              2056426003,
              2056426002
              // 2056426005,
              // 2056426004
            ]
          },
          {
            name: 'Sparrows',
            season: 14,
            items: []
          },
          {
            name: 'Ships',
            season: 12,
            items: [3891757416, 3891757417, 3891757418, 3891757419]
          },
          {
            name: 'Ships',
            season: 13,
            items: [
              // 1018723385,
              1018723384
              // 1018723387,
              // 1018723386,
              // 1018723389
            ]
          },
          {
            name: 'Ships',
            season: 14,
            items: []
          },
          {
            name: 'Shaders',
            season: 12,
            items: [
              1371145733,
              1371145732,
              1371145735,
              1371145734,
              1371145729,
              1371145728
            ]
          },
          {
            name: 'Shaders',
            season: 13,
            items: [1854244374, 1854244375]
          },
          {
            name: 'Shaders',
            season: 14,
            items: []
          },
          {
            name: 'Transmat Effects',
            season: 12,
            items: [2527044465, 2527044464]
          },
          {
            name: 'Transmat Effects',
            season: 13,
            items: [3182550856, 3182550857]
          },
          {
            name: 'Transmat Effects',
            season: 14,
            items: []
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
            season: 13,
            items: [3514096004, 1402766122, 2481881293, 3335343363]
          }
        ]
      }
      // {
      //   name: _(
      //     'DestinyInventoryItemDefinition[2266135479].displayProperties.name',
      //     'Eververse Engram'
      //   ),
      //   id: 'season-12-eververse-engram',
      //   description: _(
      //     'DestinyInventoryItemDefinition[2266135479].displayProperties.description',
      //     'An engram containing various Eververse ornaments, emotes, and accessories from previous Destiny 2 seasons.'
      //   ),
      //   big: false,
      //   sections: [
      //     {
      //       name: 'Ornaments',
      //       season: 12,
      //       itemGroups: [
      //         [3449188806, 432606867, 384923539],
      //         [],
      //         [
      //           929374195,
      //           2579031865,
      //           3654808012,
      //           3786758103,
      //           475012491,
      //           3778646768
      //         ]
      //       ]
      //     },
      //     {
      //       name: 'Emotes',
      //       season: 12,
      //       items: [
      //         2711683305,
      //         1194404806,
      //         208153163,
      //         300144357,
      //         1037681135,
      //         2737227933,
      //         2970231290
      //       ]
      //     },
      //     {
      //       name: 'Ghosts',
      //       season: 12,
      //       itemGroups: [
      //         [4005536858, 4005536857, 4005536856],
      //         [859004029, 859004030, 3661044024]
      //       ]
      //     },

      //     {
      //       name: 'Sparrows',
      //       season: 12,
      //       items: [4248884710, 4248884709, 4248884708]
      //     },
      //     {
      //       name: 'Ships',
      //       season: 12,
      //       items: [430387803, 430387802, 430387801]
      //     },
      //     {
      //       name: 'Shaders',
      //       season: 12,
      //       items: [3906243543, 3906243540, 3906243541]
      //     },
      //     {
      //       name: 'Transmat Effects',
      //       season: 12,
      //       items: [1378231107, 1378231104, 1378231105]
      //     }
      //   ]
      // }
    ]
  }
]: SetPage);
