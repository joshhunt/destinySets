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
            items: []
          },
          {
            name: 'Hunter Armor',
            season: 12,
            items: []
          },
          {
            name: 'Titan Armor',
            season: 12,
            items: []
          },
          {
            name: 'Warlock Armor',
            season: 12,
            items: []
          },
          {
            name: 'Extras',
            season: 12,
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
            items: []
          },
          {
            name: 'Hunter Armor',
            season: 12,
            items: []
          },
          {
            name: 'Titan Armor',
            season: 12,
            items: []
          },
          {
            name: 'Warlock Armor',
            season: 12,
            items: []
          },
          {
            name: 'Extras',
            season: 12,
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
            items: []
          },
          {
            name: 'Hunter Armor',
            season: 12,
            items: []
          },
          {
            name: 'Titan Armor',
            season: 12,
            items: []
          },
          {
            name: 'Warlock Armor',
            season: 12,
            items: []
          },
          {
            name: 'Extras',
            season: 12,
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
            items: []
          },
          {
            name: 'Hunter Armor',
            season: 12,
            items: []
          },
          {
            name: 'Titan Armor',
            season: 12,
            items: []
          },
          {
            name: 'Warlock Armor',
            season: 12,
            items: []
          },
          {
            name: 'Extras',
            season: 12,
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
            items: []
          },
          {
            name: 'Hunter Armor',
            season: 12,
            items: []
          },
          {
            name: 'Titan Armor',
            season: 12,
            items: []
          },
          {
            name: 'Warlock Armor',
            season: 12,
            items: []
          },
          {
            name: 'Extras',
            season: 12,
            items: []
          }
        ]
      },
      {
        name: _(
          'DestinyActivityModeDefinition[2659723068].displayProperties.name',
          'Garden of Salvation'
        ),
        id: 'year-four-garden-of-salvation',
        description: _(
          'DestinyCollectibleDefinition[2948134329].sourceString',
          '"Garden of Salvation" raid'
        ),
        sections: [
          {
            name: 'Weapons',
            season: 12,
            items: []
          },
          {
            name: 'Hunter Armor',
            season: 12,
            items: []
          },
          {
            name: 'Titan Armor',
            season: 12,
            items: []
          },
          {
            name: 'Warlock Armor',
            season: 12,
            items: []
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
    name: 'Seasonal Content',
    sets: [
      {
        name: 'Season 12',
        id: 'year-four-season-12',
        description:
          'Complete seasonal activities during Season of the Undying.',
        sections: [
          {
            name: 'Vex Offensive/Invasions & Ikora Bounty Weapons',
            season: 12,
            items: []
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
    name: 'Destinations',
    sets: [
      {
        name: _(
          'DestinyPlaceDefinition[3325508439].displayProperties.name',
          'The Moon'
        ),
        id: 'year-four-moon',
        description: _(
          'DestinyCollectibleDefinition[1310958655].sourceString',
          'Found by exploring the Moon.'
        ),
        sections: [
          {
            name: 'Weapons',
            season: 12,
            items: []
          },
          {
            name: 'Hunter Armor',
            season: 12,
            items: []
          },
          {
            name: 'Titan Armor',
            season: 12,
            items: []
          },
          {
            name: 'Warlock Armor',
            season: 12,
            items: []
          },
          {
            name: 'Altars of Sorrow',
            season: 12,
            itemGroups: [[], []]
          },
          {
            name: 'Nightmare Hunts',
            season: 12,
            items: []
          },
          {
            name: "'Pit of Heresy' Dungeon",
            season: 12,
            itemGroups: [[], []]
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
      {
        name: 'The Dawning',
        id: 'year-four-the-dawning',
        description: 'Earned during the seasonal Dawning event.',
        big: false,
        sections: [
          {
            name: 'Weapons',
            season: 12,
            itemGroups: [[], []]
          },
          {
            name: 'Hunter Armor',
            season: 12,
            items: []
          },
          {
            name: 'Titan Armor',
            season: 12,
            items: []
          },
          {
            name: 'Warlock Armor',
            season: 12,
            items: []
          },
          {
            name: 'Emotes',
            season: 12,
            itemGroups: [[], []]
          },
          {
            name: 'Ghosts',
            season: 12,
            itemGroups: [[], []]
          },
          {
            name: 'Sparrows',
            season: 12,
            items: []
          },
          {
            name: 'Ships',
            season: 12,
            items: []
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
    name: 'Other',
    sets: [
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
            itemGroups: [[], [], [], []]
          },
          {
            name: 'Paid Track',
            season: 12,
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
            itemGroups: [[], [], []]
          },
          {
            name: 'Ornaments',
            season: 12,
            itemGroups: [[], [], []]
          },
          {
            name: 'Emotes & Finishers',
            season: 12,
            itemGroups: [[], []]
          },
          {
            name: 'Ghosts',
            season: 12,
            itemGroups: [[], []]
          },
          {
            name: 'Sparrows',
            season: 12,
            items: []
          },
          {
            name: 'Ships',
            season: 12,
            items: []
          },
          {
            name: 'Shaders',
            season: 12,
            items: []
          },
          {
            name: 'Transmat Effects',
            season: 12,
            items: []
          }
        ]
      },
      {
        name: _(
          'DestinyVendorDefinition[3163810067].displayProperties.name',
          'Legendary Engrams'
        ),
        id: 'year-four-legendary-engram',
        description: _(
          'DestinyCollectibleDefinition[4273799635].sourceString',
          'Open Legendary engrams and earn faction rank-up packages.'
        ),
        big: false,
        sections: [
          {
            name: 'Weapons',
            season: 12,
            items: []
          }
        ]
      },
      {
        name: _(
          'DestinyVendorDefinition[3767535285].displayProperties.name',
          'Mnemonic Engram'
        ),
        id: 'season-12-eververse-engram',
        description: _(
          'DestinyInventoryItemDefinition[3692259864].displayProperties.description',
          'An engram containing different ornaments, emotes, and accessories from previous Destiny 2 releases.'
        ),
        big: false,
        sections: [
          {
            name: 'Ornaments',
            season: 12,
            itemGroups: [[], [], []]
          },
          {
            name: 'Emotes',
            season: 12,
            items: []
          },
          {
            name: 'Ghosts',
            season: 12,
            itemGroups: [[], []]
          },

          {
            name: 'Sparrows',
            season: 12,
            items: []
          },
          {
            name: 'Ships',
            season: 12,
            items: []
          },
          {
            name: 'Shaders',
            season: 12,
            items: []
          },
          {
            name: 'Transmat Effects',
            season: 12,
            items: []
          }
        ]
      }
    ]
  }
]: SetPage);
