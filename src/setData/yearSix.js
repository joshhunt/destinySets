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
        id: 'year-six-strikes',
        description: 'Complete necessary pursuits from Commander Zavala.',
        sections: [
          {
            name: 'Weapons',
            season: 20,
            items: [996109059 //NAMELESS MIDNIGHT
          ]
          },
          {
            name: 'Nightfall: The Ordeal Weapons',
            season: 20,
            itemGroups: [
              [927835311], //Buzzard
              [2811487832] //Adept
            ]
          },
          {
            name: 'Extras',
            season: 20,
            items: [2410801793, 1340943743, 2906365668] //In Order of Rank Rewards. Shader, Projection, Ritual Ornament
          }
        ]
      },
      {
        name: _(
          'DestinyActivityModeDefinition[1164760504].displayProperties.name',
          'Crucible'
        ),
        id: 'year-six-crucible',
        description: 'Complete necessary pursuits from Lord Shaxx.',
        sections: [
          {
            name: 'Weapons',
            season: 20,
            items: [3110377595] //AUTUMN WIND 
          },
          {
            name: 'Extras',
            season: 20,
            items: [3041031340, 613634302, 2906365670] //In Order of Rank Rewards. Shader, Projection, Ritual Ornament
          }
        ]
      },
      {
        name: _(
          'DestinyActivityModeDefinition[1848252830].displayProperties.name',
          'Gambit'
        ),
        id: 'year-six-gambit',
        description: 'Complete necessary pursuits from the Drifter.',
        sections: [
          {
            name: 'Weapons',
            season: 20,
            items: [2850664015] //TRUST
          },
          {
            name: 'Extras',
            season: 20,
            items: [817683657, 2319817047, 2906365671] //In Order of Rank Rewards. Shader, Projection, Ritual Ornament
          }
        ]
      },
      {
        name: _(
          'DestinyActivityModeDefinition[1826469369].displayProperties.name',
          'Iron Banner'
        ),
        id: 'year-six-iron-banner',
        description: _(
          'DestinyCollectibleDefinition[1158218425].sourceString',
          'Complete Iron Banner matches and earn rank-up packages from Lord Saladin.'
        ),
        sections: [
          {
            name: 'Weapons',
            season: 20,
            items: [62937067] //JORUM'S CLAW
          },
          {
            name: 'Extras',
            season: 17,
            items: [908153539, 2235726550] //Emblem, Shader
          }
        ]
      },
      {
        name: _(
          'DestinyActivityModeDefinition[1673724806].displayProperties.name',
          'Trials of Osiris'
        ),
        id: 'year-six-trials-of-osiris',
        description: 'Complete challenges in the Trials of Osiris.',
        sections: [
          {
            name: 'Weapons',
            season: 20, 
            itemGroups: [[4039572196], [3193598749]] //Immortal, Adept Version
          }
        ]
      },
      {
        name: 'The Lightfall Campaign',
        id: 'year-six-lightfall-campaign',
        description: _(
          'DestinyCollectibleDefinition[2825706382].sourceString',
          'The Lightfall campaign'
        ),
        big: false,
        sections: [
          {
            name: 'Post campaign Exotics',
            season: 20,
            items: [3121540812, 3118061004, 449318888]
          },
          {
            name: 'Extras',
            season: 20,
            items: [908153537] //SANCTUARY OF NEFELE
          }
        ]
      },
      {
        name: 'Legend and Master Lost Sectors',
        id: 'year-six-lost-sectors',
        description: 'Solo Legend and Master Lost Sectors',
        big: false,
        sections: [
          {
            name: 'Armor',
            season: 20,
            itemGroups: [
              [192896783, 2390471904], //Hunter
              [3316517958, 3637722482], //Titan
              [3831935023, 2463947681] //Warlock
            ]
          }
        ]
      },
      {
        name: _(
          'DestinyActivityDefinition[2906950631].displayProperties.name',
          'Root of Nightmares'
        ),
        id: 'year-six-root-of-nightmares',
        description: _(
          'DestinyCollectibleDefinition[3070552038].sourceString',
          'Root of Nightmares raid'
        ),
        sections: [
          {
            name: 'Weapons',
            season: 20,
            itemGroups: [
              [
                3371017761, //CONDITIONAL FINALITY
                2972949637, //KORAXIS'S DISTRESS
                1471212226, //ACASIA'S DEJECTION
                135029084, //NESSA'S OBLATION
                231031173, //MYKEL'S REVERENCE
                484515708, //RUFUS'S FURY
                1491665733 //BRIAR'S CONTEMPT (ADEPT)
              ],
              [
                495442100, //KORAXIS'S DISTRESS (ADEPT)
                3493494807, //ACASIA'S DEJECTION (ADEPT)
                522366885, //NESSA'S OBLATION (ADEPT)
                1986287028, //MYKEL'S REVERENCE (ADEPT)
                484515708, //RUFUS'S FURY (ADEPT)
                2890082420 //BRIAR'S CONTEMPT (ADEPT)
              ]
            ]
          },
          {
            name: 'Hunter Armor',
            season: 20,
            items: [3810243376, 3608027009, 2787963735, 807905267, 621315878]
          },
          {
            name: 'Titan Armor',
            season: 20,
            items: [3475635982, 630432767, 824228793, 3846650177, 2138394740]
          },
          {
            name: 'Warlock Armor',
            season: 20,
            items: [4123705451, 2445962586, 2597227950, 3702434452, 2915322487]
          },
          {
            name: 'Extras',
            season: 20,
            items: [3403636746, 3287231362, 56137739, 56137738, 908153540]
          }
        ]
      },
    ]
  },
  {
    name: 'Seasonal Content',
    sets: [
      {
        name: 'Season 20',
        id: 'year-six-season-20',
        description: 'Complete seasonal activities from Season of Defiance.',
        sections: [
          {
            name: 'Pursuit Weapon',
            season: 20,
            itemGroups: [[3001205424], [2906365668, 2906365670, 2906365671]]
          },
          {
            name: 'Weapons',
            season: 20,
            items: [2508948099, 268260372, 268260373, 1720503118, 45643573, 392008588]
          },
          {
            name: 'Hunter Armor',
            season: 20,
            items: [2598029856, 164103153, 3995603239, 4290220099, 840487990]
          },
          {
            name: 'Titan Armor',
            season: 20,
            items: [1089162050, 428806571, 3312368357, 1903444925, 1968283192]
          },
          {
            name: 'Warlock Armor',
            season: 20,
            items: [3056490591, 3031934630, 988330314, 2549387168, 1159113819]
          },
          {
            name: '//NODE.OVRD.AVALON//',
            season: 20,
            items: [2012273462, 908153538]
          },
          {
            name: 'Extras',  //Any other Rewards that are obtainable in seasonal triumphs or Questprogression
            season: 20,
            items: [
              3250490362,
              908153542,
              1217115270
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
          'DestinyPlaceDefinition[2244580325].displayProperties.name',
          'Neomuna, Neptune'
        ),
        id: 'year-six-neomuna',
        description: _(
          'DestinyCollectibleDefinition[3257565710].sourceString',
          'Found by exploring Neomuna'
        ),
        sections: [
          {
            name: 'Weapons',
            season: 20,
            items: [297296830, 1526296434, 1994645182]
          },
          {
            name: 'Hunter Armor',
            season: 20,
            items: [1451723779, 2589262546, 1017542806, 2990500972, 347169983]
          },
          {
            name: 'Titan Armor',
            season: 20,
            items: [231118249, 2317494560, 2609397864, 1012434138, 16527941]
          },
          {
            name: 'Warlock Armor',
            season: 20,
            items: [2832296494, 3857602975, 535551193, 2778750049, 2274277780]
          },
          {
            name: 'Terminal Overload',
            season: 20,
            items: [
              811403305, //SYNCHRONIC ROULETTE 
              2573900604, //BASSO OSTINATO
              2187717691 //CIRCULAR LOGIC
            ]
          },
          {
            name: 'Nimbus Quest Rewards',
            season: 20,
            items: [2034215657, 3920310144, 1289796511, 3635821806, 1311684613]
          },
          {
            name: 'Extras',
            season: 20,
            items: [1781477733] //SCINTILLANT TRAJECTORY
          }
        ]
      }
    ]
  },
  //{
  //  name: 'Holiday & Special Events',
  //  sets: [eververseAndEvents.GUARDIAN_GAMES_Y6] //add missing events later on in the year
  //},
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
            season: 20,
            items: [3659414143, 1720503118, 45643573]
          },
          {
            name: 'Paid Track',
            season: 20,
            itemGroups: [
              [863074675], //exotic ornament 
              [1667089639, 3908759150, 1189447810, 1696869992, 413443795], //armor ornament hunter
              [3951182691, 327719986, 2740317814, 1153415756, 2494402335], //armor ornament titan
              [1115408366, 2565069151, 1576044441, 1486319393, 2931787092], //armor ornament warlock
              [                                                            //extras like emblems, shaders, transmat
                3683636136,
                135598935,
                772855992,
                2178429339,
                3683636137,
                3195333832,
                1490914249,
                3376699138,
                2626902095
              ]
            ]
          },
        ]
      },
      eververseAndEvents.EVERVERSE_Y6,
      {
        name: _(
          'DestinyVendorDefinition[3163810067].displayProperties.name',
          'Legendary Engrams'
        ),
        id: 'year-six-legendary-engram',
        description: _(
          'DestinyCollectibleDefinition[4273799635].sourceString',
          'Open Legendary engrams and earn faction rank-up packages.'
        ),
        big: false,
        sections: [
          {
            name: 'Weapons',
            season: 20,
            items: [
              2099894368,
              5159537,
              2673925403,
              355382946,
              1606497639,
              664109750,
              867154247,
              1456017061
            ]
          }
        ]
      }
    ]
  }
]: SetPage);
