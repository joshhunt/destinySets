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
          'DestinyActivityModeDefinition[2394616003].displayProperties.name', // Double Check
          'Strikes' // Double Check
        ),
        id: 'year-three-strikes',
        description: _(
          'DestinyCollectibleDefinition[2589931339].sourceString', // Double Check
          'Complete strikes and earn rank-up packages from Commander Zavala.' // Double Check
        ),
        sections: [
          {
            name: 'Weapons',
            season: "K", // Double Check
            items: [
              2154059444
            ]
          },
          {
            name: 'Hunter Armor',
            season: "K", // Double Check
            items: [

            ]
          },
          {
            name: 'Titan Armor',
            season: "K", // Double Check
            items: [

            ]
          },
          {
            name: 'Warlock Armor',
            season: "K", // Double Check
            items: [

            ]
          },
          {
            name: 'Extras',
            season: "K", // Double Check
            items: [

            ]
          }
        ]
      },
      {
        name: _(
          'DestinyActivityModeDefinition[1826469369].displayProperties.name', // Double Check
          'Iron Banner' // Double Check
        ),
        id: 'year-iron-banner',
        description: _(
          'DestinyCollectibleDefinition[3008980338].sourceString', // Double Check
          'Complete Iron Banner matches and earn rank-up packages from Lord Saladin.' // Double Check
        ),
        sections: [
          {
            name: 'Weapons',
            season: 8, // Double Check
            items: [
              2154059444
            ]
          },
          {
            name: 'Hunter Armor',
            season: 8, // Double Check
            items: [

            ]
          },
          {
            name: 'Titan Armor',
            season: 8, // Double Check
            items: [

            ]
          },
          {
            name: 'Warlock Armor',
            season: 8, // Double Check
            items: [

            ]
          },
          {
            name: 'Extras',
            season: 8, // Double Check
            items: [

            ]
          }
        ]
      },
      {
        name: _(
          'DestinyActivityModeDefinition[2394616003].displayProperties.name', // Double Check
          'Vex Offensive' // Double Check
        ),
        id: 'year-vex-offensive',
        description: _(
          'DestinyCollectibleDefinition[2589931339].sourceString', // Double Check
          'Complete strikes and earn rank-up packages from Commander Zavala.' // Double Check
        ),
        sections: [
          {
            name: 'Weapons',
            season: 8, // Double Check
            items: [
              2154059444
            ]
          },
          {
            name: 'Hunter Armor',
            season: 8, // Double Check
            items: [

            ]
          },
          {
            name: 'Titan Armor',
            season: 8, // Double Check
            items: [

            ]
          },
          {
            name: 'Warlock Armor',
            season: 8, // Double Check
            items: [

            ]
          },
          {
            name: 'Extras',
            season: 8, // Double Check
            items: [

            ]
          }
        ]
      },
      {
        name: _(
          // 'DestinyActivityModeDefinition[2394616003].displayProperties.name', // Double Check
          'Garden of Salvation' // Double Check
        ),
        id: 'year-three-garden-of-salvation',
        description: _(
          'DestinyCollectibleDefinition[2948134329].sourceString', // Double Check
          '"Garden of Salvation" raid' // Double Check
        ),
        sections: [
          {
            name: 'Weapons',
            season: "K", // Double Check
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
            season: "K", // Double Check
            items: [
              1399922251, // Cowl of Righteousness
              1653741426, // Grips of Exaltation
              4177973942, // Vest of Transcendence
              2054979724, // Strides of Ascendancy 
              3549177695 // Cloak of Temptation
            ]
          },
          {
            name: 'Titan Armor',
            season: "K", // Double Check
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
            season: "K", // Double Check
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
            season: "K", // Double Check
            items: [
              298334059, // Inherent Truth
              3996862462, // Ancient Believer 
              3996862463 // Ancient Defender
            ]
          }
        ]
      },
    ]
  },
  {
    name: 'Destinations',
    sets: [
      {
        name: _(
          'DestinyPlaceDefinition[975684424].displayProperties.name', // Double Check
          'The Moon' // Double Check
        ),
        id: 'year-three-moon',
        description: _(
          'DestinyCollectibleDefinition[1350431641].sourceString', // Double Check
          'Complete activities and earn rank-up packages on the Moon.' // Double Check
        ),
        sections: [
          {
            name: 'Weapons',
            season: "K", // Double Check
            items: [
              2154059444
            ]
          },
          {
            name: 'Hunter Armor',
            season: "K", // Double Check
            items: [

            ]
          },
          {
            name: 'Titan Armor',
            season: "K", // Double Check
            items: [

            ]
          },
          {
            name: 'Warlock Armor',
            season: "K", // Double Check
            items: [

            ]
          },
          {
            name: 'Extras',
            season: "K", // Double Check
            items: [

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
        description: 'Earned during the seasonal Festival of the Lost event.', // Double Check
        sections: [
          {
            name: 'Weapons',
            season: 8, // Double Check
            items: [
              2154059444
            ]
          },
          {
            name: 'Hunter Armor',
            season: 8, // Double Check
            items: [

            ]
          },
          {
            name: 'Titan Armor',
            season: 8, // Double Check
            items: [

            ]
          },
          {
            name: 'Warlock Armor',
            season: 8, // Double Check
            items: [

            ]
          },
          {
            name: 'Masks',
            season: 8, // Double Check
            items: [

            ]
          },
          {
            name: 'Emotes',
            season: 8, // Double Check
            items: [

            ]
          },
          {
            name: 'Ghosts',
            season: 8, // Double Check
            items: [

            ]
          },
          {
            name: 'Ghost Projections',
            season: 8, // Double Check
            items: [

            ]
          },
          {
            name: 'Sparrows',
            season: 8, // Double Check
            items: [

            ]
          },
          {
            name: 'Ships',
            season: 8, // Double Check
            items: [

            ]
          },
          {
            name: 'Extras',
            season: 8, // Double Check
            items: [

            ]
          }
        ]
      },
    ]
  },
  {
    name: 'Other',
    sets: [
      {
        name: _(
          'DestinyVendorDefinition[3163810067].displayProperties.name',
          'Legendary Engram'
        ),
        description: _(
          'DestinyCollectibleDefinition[256984755].sourceString',
          'Open Legendary engrams and earn faction rank-up packages.'
        ),
        id: 'year-three-legendary-engram',
        big: false, // Double Check
        sections: [
          {
            name: 'Weapons',
            season: 4,
            items: [
              2154059444
            ]
          },
          {
            name: 'Hunter Armor',
            season: 4,
            itemGroups: [
              [

              ],
              [

              ],
              [

              ]
            ]
          },
          {
            name: 'Titan Armor',
            season: 4,
            itemGroups: [
              [

              ],
              [

              ],
              [

              ]
            ]
          },
          {
            name: 'Warlock Armor',
            season: 4,
            itemGroups: [
              [

              ],
              [

              ],
              [

              ]
            ]
          }
        ]
      },
      {
        name: _(
          'DestinyFactionDefinition[1393733616].displayProperties.name', // Double Check
          'Eververse' // Double Check
        ),
        id: 'year-three-eververse',
        description: _(
          'DestinyCollectibleDefinition[764786884].sourceString', // Double Check
          'Seasonal Bright Engrams.' // Double Check
        ),
        big: false, // Double Check
        sections: [
          {
            name: 'Armor',
            season: 8, // Double Check
            itemGroups: [
              [
                // Hunter
                2154059444
              ],
              [
                // Titan
              ],
              [
                // Warlock
              ]
            ]
          },
          {
            name: 'Ornaments',
            season: 8, // Double Check
            itemGroups: [
              [
                // Exotic Weapon
              ],
              [
                // Legendary Weapon
              ],
              [
                // Exotic Armour
              ]
            ]
          },
          {
            name: 'Emotes',
            season: 8, // Double Check
            items: [

            ]
          },
          {
            name: 'Ghosts',
            season: 8, // Double Check
            items: [

            ]
          },
          {
            name: 'Ghost Projections',
            season: 8, // Double Check
            items: [

            ]
          },
          {
            name: 'Sparrows',
            season: 8, // Double Check
            items: [

            ]
          },
          {
            name: 'Ships',
            season: 8, // Double Check
            items: [

            ]
          },
          {
            name: 'Shaders',
            season: 8, // Double Check
            items: [

            ]
          },
          {
            name: 'Transmat Effects',
            season: 8, // Double Check
            items: [

            ]
          }
        ]
      }
    ]
  }
]: SetPage);
