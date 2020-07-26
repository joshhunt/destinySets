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
        query: 'is:exotic is:gear is:incollections',
        sections: []
      },
      {
        name: 'Weapons',
        id: 'ALL_WEAPONS',
        big: true,
        sections: [
          {
            name: 'Kinetic',
            query: 'is:legendary is:weapon is:kinetic is:incollections'
          },
          {
            name: 'Energy',
            query: 'is:legendary is:weapon is:energy is:incollections'
          },
          {
            name: 'Power',
            query: 'is:legendary is:weapon is:power is:incollections'
          }
        ]
      },
      {
        name: 'Armor',
        id: 'ALL_ARMOR',
        big: true,
        query: 'is:legendary is:armor is:incollections',
        sections: []
      },
      {
        name: 'Ghosts',
        id: 'ALL_GHOSTS',
        big: true,
        query: 'is:ghostly', // not in collections yet
        sections: []
      }
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
            query: 'is:legendary is:emblem is:incollections'
          },
          {
            name: 'Rare',
            query: 'is:rare is:emblem is:incollections'
          },
          {
            name: 'Uncommon',
            query: 'is:uncommon is:emblem is:incollections'
          },
          {
            name: 'Common',
            query: 'is:common is:emblem is:incollections'
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
            query: 'is:legendary is:shader is:incollections'
          },
          {
            name: 'Rare',
            query: 'is:rare is:shader is:incollections'
          },
          {
            name: 'Uncommon',
            query: 'is:uncommon is:shader is:incollections'
          }
        ]
      },

      {
        name: 'Emotes',
        id: 'ALL_EMOTES',
        big: true,
        query: 'is:emote', // not in collections yet
        sections: []
      },

      {
        name: 'Ornaments',
        id: 'ALL_ORNAMENTS',
        big: true,
        query: 'is:ornament', // not all in collections yet
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
        query: 'is:sparrow is:incollections',
        sections: []
      },

      {
        name: 'Ships',
        id: 'ALL_SHIPS',
        query: 'is:ship is:incollections',
        sections: []
      }
    ]
  }
]: SetPage);
