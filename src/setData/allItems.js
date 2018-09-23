// @flow

import type { SetPage } from '../types';

export default ([
  {
    name: 'Gear',
    sets: [
      {
        name: 'Exotics',
        id: 'ALL_EXOTICS',
        big: true,
        query: 'is:exotic is:gear',
        sections: []
      },
      {
        name: 'Weapons',
        id: 'ALL_WEAPONS',
        big: true,
        sections: [
          {
            name: 'Kinetic',
            query: 'is:legendary is:weapon is:kinetic'
          },
          {
            name: 'Energy',
            query: 'is:legendary is:weapon is:energy'
          },
          {
            name: 'Power',
            query: 'is:legendary is:weapon is:power'
          },
        ]
      },
      {
        name: 'Armor',
        id: 'ALL_ARMOR',
        big: true,
        query: 'is:legendary is:armor',
        sections: []
      },
      {
        name: 'Ghosts',
        id: 'ALL_GHOSTS',
        big: true,
        query: 'is:ghostly',
        sections: []
      },
    ]
  },

  {
    name: 'Cosmetics',
    sets: [
      {
        name: 'Emblems',
        id: 'ALL_EMBLEMS',
        big: true,
        sections: [
          {
            name: 'Legendary',
            query: 'is:legendary is:emblem'
          },
          {
            name: 'Rare',
            query: 'is:rare is:emblem'
          },
          {
            name: 'Uncommon',
            query: 'is:uncommon is:emblem'
          },
          {
            name: 'Common',
            query: 'is:common is:emblem'
          }
        ]
      },

      {
        name: 'Shaders',
        id: 'ALL_SHADERS',
        big: true,
        sections: [
          {
            name: 'Legendary',
            query: 'is:legendary is:shader'
          },
          {
            name: 'Rare',
            query: 'is:rare is:shader'
          },
          {
            name: 'Uncommon',
            query: 'is:uncommon is:shader'
          }
        ]
      },

      {
        name: 'Emotes',
        id: 'ALL_EMOTES',
        big: true,
        query: 'is:emote',
        sections: []
      },

      {
        name: 'Ornaments',
        id: 'ALL_ORNAMENTS',
        big: true,
        query: 'is:ornament',
        sections: []
      }
    ]
  },

  {
    name: 'Vehicles',
    sets: [
      {
        name: 'Sparrows',
        id: 'ALL_SPARROWS',
        query: 'is:sparrow',
        sections: []
      },

      {
        name: 'Ships',
        id: 'ALL_SHIPS',
        query: 'is:ship',
        sections: []
      }
    ]
  }
]: SetPage);
