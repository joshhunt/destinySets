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
        id: 'YEAR_TWO_STRIKES',
        description: _(
          'DestinyCollectibleDefinition[2589931339].sourceString',
          'Complete strikes and earn rank-up packages from Commander Zavala.'
        ),
        sections: [
          {
            name: 'Weapons',
            season: 4,
            items: [
              3040742682, // Nameless Midnight
              2009277538, // The Last Dance
              2957367743, // Toil and Trouble
              253196586, // Oath for Tomorrow
              3745990145, // Long Shadow
              4146702548 // Outrageous Fortune
            ]
          },
          {
            name: 'Weapons',
            season: 5,
            items: [
              792755504, // Nightshade
              4083045006 // Persuader
            ]
          },
          {
            name: 'Weapons',
            season: 6,
            items: [
              834081972 //  Service Revolver
            ]
          },
          {
            name: 'Hunter Armor',
            season: 4,
            items: [
              575676771, // Vigil of Heroes
              1247181362, // Vigil of Heroes
              3916064886, // Vigil of Heroes
              2072877132, // Vigil of Heroes
              3670149407 // Vigil of Heroes
            ]
          },
          {
            name: 'Titan Armor',
            season: 4,
            items: [
              1514863327, // Vigil of Heroes
              1490307366, // Vigil of Heroes
              335317194, // Vigil of Heroes
              1007759904, // Vigil of Heroes
              506100699 // Vigil of Heroes
            ]
          },
          {
            name: 'Warlock Armor',
            season: 4,
            items: [
              3213912958, // Vigil of Heroes
              2442309039, // Vigil of Heroes
              3569624585, // Vigil of Heroes
              2592351697, // Vigil of Heroes
              1054960580 // Vigil of Heroes
            ]
          },
          {
            name: 'Extras',
            season: 4,
            items: [
              2390666069, // High-Risk, High-Reward (Emblem)
              1075647353, // Vanguard Terminus (Emblem)
              2935851862, // Struck a Nerve (Emblem)
              2294983474, // Honor of the Vanguard (Emblem)
              2294983475, // Strikes of All Stripes (Emblem)
              1987790789, // After the Nightfall (Emblem)
              1263710510, // Always North (Shader)
              2788911999, // Vanguard Veteran (Shader)
              2788911998, // Vanguard Metallic (Shader)
              2788911997 // Vanguard Divide (Shader)
            ]
          },
          {
            name: 'Extras',
            season: 5,
            items: [
              912222548, // Soldier On (Emblem)
              274843196 // Vanguard Unyielding (Shader)
            ]
          },
          {
            name: 'Extras',
            season: 6,
            items: [
              3215252549 // Determination
            ]
          },
          {
            name: 'Extras',
            season: 7,
            items: [
              1661191186, // DISDAIN FOR GOLD
              2523776413, // VANGUARD STEEL
              2523776412 // VANGUARD BURNISHED STEEL
            ]
          }
        ]
      }
    ]
  }
]: SetPage);
