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
        id: 'year-four-strikes',
        description: 'Complete necessary pursuits from Commander Zavala.',
        sections: [
          {
            name: 'Weapons',
            season: 12,
            items: [2891672170]
          },
          {
            name: 'Weapons',
            season: 13,
            items: [4156253727, 2448907086]
          },
          {
            name: 'Weapons',
            season: 14,
            items: [4255586669]
          },
          {
            name: 'Weapons',
            season: 15,
            items: [378498222]
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
            itemGroups: [
              [4281371574, 1289000550, 2065081837],
              [681067419, 534775659, 852228780]
            ]
          },
          {
            name: 'Nightfall: The Ordeal Weapons',
            season: 15,
            itemGroups: [
              [1028582252, 4255171531],
              [2443900757, 1866778462]
            ]
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
            items: [2510169807, 3328204877]
          },
          {
            name: 'Extras',
            season: 15,
            items: [3292453830, 1920421334]
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
            items: [2050789284]
          },
          {
            name: 'Weapons',
            season: 13,
            items: [409551876, 3473290087]
          },
          {
            name: 'Weapons',
            season: 14,
            items: [310708513]
          },
          {
            name: 'Weapons',
            season: 15,
            items: [2496875173]
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
            items: [2510169800, 3684946776]
          },
          {
            name: 'Extras',
            season: 15,
            items: [678034719, 434183443]
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
            items: [3565520715]
          },
          {
            name: 'Weapons',
            season: 13,
            items: [1046651176, 3258665412]
          },
          {
            name: 'Weapons',
            season: 14,
            items: [875848769]
          },
          {
            name: 'Weapons',
            season: 15,
            items: [1107446438]
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
            items: [2510169801, 2926661061]
          },
          {
            name: 'Extras',
            season: 15,
            items: [3136317998, 165021790]
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
            items: [3813153080, 108221785, 852551895, 1967303408]
          },
          {
            name: 'Weapons',
            season: 15,
            items: [1076810832, 829330711]
          },
          {
            name: 'Hunter Armor',
            season: 15,
            items: [2255073244, 3651424085, 1615052875, 932578999, 4266736482]
          },
          {
            name: 'Titan Armor',
            season: 15,
            items: [3106439832, 3570243433, 2344353519, 3862185275, 3591512190]
          },
          {
            name: 'Warlock Armor',
            season: 15,
            items: [2217519207, 164221422, 1821747970, 2247299560, 1045743955]
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
            items: [3873834914]
          },
          {
            name: 'Extras',
            season: 15,
            items: [1141716966, 193842215]
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
            name: 'Weapons',
            season: 14,
            itemGroups: [[3682803680], [4023807721]]
          },
          {
            name: 'Weapons',
            season: 15,
            itemGroups: [[1399243961], [2475355656]]
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
            season: 12,
            items: [
              // 3919943498
            ]
          },
          {
            name: 'Extras',
            season: 13,
            items: [
              758112594,
              774879414,
              2710956576
              //647195977
            ]
          },
          {
            name: 'Extras',
            season: 15,
            items: [
              //3110332187
            ]
          }
        ]
      },
      {
        name: _(
          'DestinyActivityDefinition[4148187374].displayProperties.name',
          'Prophecy'
        ),
        id: 'year-four-prophecy',
        description: 'Complete encounters in the Prophecy dungeon.',
        sections: [
          {
            name: 'Weapons',
            season: 15,
            items: [
              507038823,
              2481758391,
              1476654960,
              1626503676,
              2855157553,
              3326850591
            ]
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
          'DestinyActivityDefinition[3711931140].displayProperties.name',
          'Vault of Glass'
        ),
        id: 'year-four-vault-of-glass',
        description: _(
          'DestinyCollectibleDefinition[634586904].sourceString',
          'Venus Raid'
        ),
        sections: [
          {
            name: 'Weapons',
            season: 14,
            itemGroups: [
              [
                4289226715,
                3186018373,
                2171478765,
                3197270240,
                3653573172,
                4050645223,
                471518543
              ],
              [
                690668916,
                1216319404,
                631439337,
                1987769101,
                1921159786,
                3796510434
              ]
            ]
          },
          {
            name: 'Hunter Armor',
            season: 14,
            items: [586128500, 3753500813, 1133961267, 129332559, 3339387242]
          },
          {
            name: 'Titan Armor',
            season: 14,
            items: [4029224226, 3368765451, 3890978501, 123979037, 3012927512]
          },
          {
            name: 'Warlock Armor',
            season: 14,
            items: [673599343, 3253292022, 3029386938, 170603856, 2253382795]
          },
          {
            name: 'Extras',
            season: 14,
            items: [2907216422, 2510169794, 3953403255, 2173688423, 2173688422]
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
            itemGroups: [[4184808992], [4060882458, 4060882456, 4060882457]]
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
            itemGroups: [[2060863616], [1132740485, 1132740487, 1132740486]]
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
            items: [397043529, 1953632753, 532530782, 532530777, 2962058750]
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
            name: 'Weapons',
            season: 14,
            items: [1119734784, 1621558458, 541188001, 304659313]
          },
          {
            name: 'Pursuit Weapon',
            season: 14,
            itemGroups: [[1644680957], [4226042917, 4226042919, 4226042918]]
          },
          {
            name: 'Hunter Armor',
            season: 14,
            items: [30472172, 3479737253, 3436655867, 3827066919, 1793372050]
          },
          {
            name: 'Titan Armor',
            season: 14,
            items: [4129456190, 3399325807, 3497822409, 3973929105, 517124228]
          },
          {
            name: 'Warlock Armor',
            season: 14,
            items: [1245678091, 3862902650, 2146386894, 1248864692, 2888835735]
          },
          {
            name: 'Extras',
            season: 14,
            items: [713316410, 2510169802]
          },
          {
            name: 'Expunge Extras',
            season: 14,
            items: [4015028642]
          }
        ]
      },
      {
        name: 'Season 15',
        id: 'year-four-season-15',
        description: 'Complete seasonal activities from Season of the Lost.',
        sections: [
          {
            name: 'Weapons',
            season: 15,
            items: [1833195496, 1622998472, 3472875143, 3044460004, 2066434718]
          },
          {
            name: 'Pursuit Weapon',
            season: 15,
            itemGroups: [[725408022], [2056295391, 2056295389, 2056295388]]
          },
          {
            name: 'Hunter Armor',
            season: 15,
            items: [2957532337, 1574187016, 1049436160, 2675526370, 401152189]
          },
          {
            name: 'Titan Armor',
            season: 15,
            items: [430504837, 1211181652, 2606405484, 1457343582, 1010196641]
          },
          {
            name: 'Warlock Armor',
            season: 15,
            items: [3642146012, 743529557, 2259629899, 2319651767, 616346210]
          },
          {
            name: 'Extras',
            season: 15,
            items: [
              2832223387,
              2950966011,
              2716077507,
              1141716963,
              1141716961,
              3953403254
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
      },
      {
        name: _(
          'DestinyDestinationDefinition[1449984089].displayProperties.name',
          'Eternity'
        ),
        id: 'year-four-eternity',
        description:
          'Found by completing activites from the 30th Anniversary Event and 30th Anniversary Pack.',
        sections: [
          {
            name: 'Quest Weapons',
            season: 15,
            itemGroups: [[2179048386, 1363886209], []]
          },
          {
            name: 'Xûr',
            season: 15,
            itemGroups: [
              [2768498166],
              [1400258675, 3188232450, 531444966, 978987708, 849539407],
              [1400258673],
              [925503559, 3167173070, 611486946, 955283912, 259940403],
              [925503557],
              [3089494084, 3036688669, 4157415075, 682889663, 3439221914],
              [3089494086],
              [
                3658937452,
                2646067235,
                3510467636,
                2944651291,
                3800278196,
                4198761574,
                4198761575
              ]
            ]
          },
          {
            name: "Xûr's Treasure Hoard",
            season: 15,
            itemGroups: [
              [
                3257091166,
                3257091167,
                3849810018,
                1679868061,
                2708806099,
                548958835
              ],
              [1400258674, 3188232451, 531444967, 978987709, 849539406],
              [925503558, 3167173071, 611486947, 955283913, 259940402],
              [3089494085, 3036688668, 4157415074, 682889662, 3439221915],
              [2680833851, 1615970029, 4039670779]
            ]
          },
          {
            name: "'Grasp of Avarice' Dungeon",
            season: 15,
            itemGroups: [
              [2139640995, 235827225, 4164201232, 2563012876],
              [2744480004, 2308793821, 3587911011, 337875583, 2486733914],
              [3473581026, 2771648715, 549825413, 4287863773, 3500810712],
              [1832715465, 3536211008, 2515293448, 2231150714, 4217390949],
              [983635618, 3800278197, 3800278198, 2962058737, 2716058777]
            ]
          },
          {
            name: 'Extras',
            season: 12,
            items: []
          }
        ]
      }
    ]
  },
  {
    name: 'Holiday & Special Events',
    sets: [
      eververseAndEvents.DAWNING_Y4,
      eververseAndEvents.GUARDIAN_GAMES_Y4,
      eververseAndEvents.SOLSTICE_OF_HEROES_Y4,
      eververseAndEvents.FESTIVAL_OF_THE_LOST_Y4,
      eververseAndEvents.BUNGIE_30TH_ANNIVERSARY_EVENT_Y4,
      eververseAndEvents.MOMENTS_OF_TRIUMPH_Y4
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
            itemGroups: [[603721696, 599895591, 2434225986]]
          },
          {
            name: 'Free Track',
            season: 15,
            itemGroups: [[3761898871, 1337707096, 3184681056]]
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
            itemGroups: [
              [3549553800],
              [1760291195, 3219469610, 4233075550, 1875800772, 3604279399],
              [1126055399, 3367724910, 2195981186, 1155835752, 1419977171],
              [1644764626, 2111117883, 2698389909, 519581357, 1395881448],
              [
                1066617987,
                1333212979,
                2104928736,
                3499897239,
                2510169803,
                2944573668,
                2944573669,
                895031268
              ]
            ]
          },
          {
            name: 'Paid Track',
            season: 15,
            itemGroups: [
              [1352091900],
              [2686000536, 3149804137, 411041775, 3441745979, 1658200446],
              [2706789646, 4156553727, 216800697, 3077803841, 1530966644],
              [3587311695, 1447476438, 4151048474, 2659755696, 3374941291],
              [
                831981838,
                1476747774,
                3404725755,
                1289563190,
                1141716962,
                3761187797,
                3761187796,
                528225971
              ]
            ]
          }
        ]
      },
      eververseAndEvents.EVERVERSE_Y4,
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
          },
          {
            name: 'Weapons',
            season: 14,
            itemGroups: [
              [2782325300],
              [2782325302],
              [2782325301],
              [
                2492081469,
                3556999246,
                2272470786,
                2414141462,
                217140611,
                3165547384
              ]
            ]
          },
          {
            name: 'Weapons',
            season: 15,
            items: [
              602618796,
              577528837,
              3409645497,
              6857689,
              2588048270,
              3743729616
            ]
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
