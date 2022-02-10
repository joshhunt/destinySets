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
            items: []
          },

          {
            name: 'Nightfall: The Ordeal Weapons',
            season: 16,
            itemGroups: [[], []]
          },
          {
            name: 'Hunter Armor',
            season: 16,
            items: []
          },
          {
            name: 'Titan Armor',
            season: 16,
            items: []
          },
          {
            name: 'Warlock Armor',
            season: 16,
            items: []
          },
          {
            name: 'Extras',
            season: 16,
            items: []
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
            items: []
          },
          {
            name: 'Hunter Armor',
            season: 16,
            items: []
          },
          {
            name: 'Titan Armor',
            season: 16,
            items: []
          },
          {
            name: 'Warlock Armor',
            season: 16,
            items: []
          },
          {
            name: 'Extras',
            season: 16,
            items: []
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
            items: []
          },
          {
            name: 'Hunter Armor',
            season: 16,
            items: []
          },
          {
            name: 'Titan Armor',
            season: 16,
            items: []
          },
          {
            name: 'Warlock Armor',
            season: 16,
            items: []
          },
          {
            name: 'Extras',
            season: 16,
            items: []
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
            items: []
          },
          {
            name: 'Hunter Armor',
            season: 16,
            items: []
          },
          {
            name: 'Titan Armor',
            season: 16,
            items: []
          },
          {
            name: 'Warlock Armor',
            season: 16,
            items: []
          },
          {
            name: 'Extras',
            season: 16,
            items: []
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
            itemGroups: [[], []]
          },
          {
            name: 'Hunter Armor',
            season: 16,
            items: []
          },
          {
            name: 'Titan Armor',
            season: 16,
            items: []
          },
          {
            name: 'Warlock Armor',
            season: 16,
            items: []
          },
          {
            name: 'Extras',
            season: 16,
            items: []
          }
        ]
      },
      {
        name: _(
          'DestinyActivityDefinition[910380154].displayProperties.name',
          'Deep Stone Crypt'
        ),
        id: 'year-five-deep-stone-crypt',
        description: _(
          'DestinyCollectibleDefinition[2273453973].sourceString',
          '"Deep Stone Crypt" raid.'
        ),
        sections: [
          {
            name: 'Weapons',
            season: 16,
            items: []
          },
          {
            name: 'Hunter Armor',
            season: 16,
            items: []
          },
          {
            name: 'Titan Armor',
            season: 16,
            items: []
          },
          {
            name: 'Warlock Armor',
            season: 16,
            items: []
          },
          {
            name: 'Extras',
            season: 16,
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
        name: 'Season 16',
        id: 'year-five-season-16',
        description: 'Complete seasonal activities from Season of the Risen.',
        sections: [
          {
            name: 'Pursuit Weapon',
            season: 16,
            itemGroups: [[], []]
          },
          {
            name: 'Wrathborn Hunts',
            season: 16,
            items: []
          },
          {
            name: 'Extras',
            season: 16,
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
        id: 'year-five-europa',
        description: _(
          'DestinyCollectibleDefinition[3859356069].sourceString',
          'Found exploring Europa.'
        ),
        sections: [
          {
            name: 'Weapons',
            season: 16,
            itemGroups: [[], []]
          },
          {
            name: 'Hunter Armor',
            season: 16,
            items: []
          },
          {
            name: 'Titan Armor',
            season: 16,
            items: []
          },
          {
            name: 'Warlock Armor',
            season: 16,
            items: []
          },

          {
            name: 'Extras',
            season: 16,
            items: []
          }
        ]
      }
    ]
  },
  {
    name: 'Holiday & Special Events',
    sets: []
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
        id: 'year-five-season-passes',
        big: false,
        sections: [
          {
            name: 'Free Track',
            season: 16,
            items: []
          },

          {
            name: 'Paid Track',
            season: 16,
            itemGroups: [[], [], [], [], []]
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
            items: []
          }
        ]
      }
    ]
  }
]: SetPage);
