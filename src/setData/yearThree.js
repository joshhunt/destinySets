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
            season: "4", // Double Check
            items: [

            ]
          },
          {
            name: 'Hunter Armor',
            season: 4, // Double Check
            items: [

            ]
          },
          {
            name: 'Titan Armor',
            season: 4, // Double Check
            items: [

            ]
          },
          {
            name: 'Warlock Armor',
            season: 4, // Double Check
            items: [

            ]
          },
          {
            name: 'Extras',
            season: 4, // Double Check
            items: [

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
    ]
  }
]: SetPage);
