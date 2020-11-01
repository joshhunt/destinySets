// @flow

import type { SetPage } from '../types';

export default ([
  {
    name: 'Kinetic Weapons',
    sets: [
      {
        name: 'Exotics',
        id: 'CATALYSTS',
        big: true,
        noUi: true,
        sections: [
          {
            name: 'Kinetic weapons',
            itemType: 'exoticCatalysts',
            query: 'special:kineticCatalysts'
          }
        ]
      }
    ]
  },
  {
    name: 'Energy Weapons',
    sets: [
      {
        name: 'Exotics',
        id: 'CATALYSTS',
        big: true,
        noUi: true,
        sections: [
          {
            name: 'Special weapons',
            itemType: 'exoticCatalysts',
            query: 'special:energyCatalysts'
          }
        ]
      }
    ]
  },
  {
    name: 'Power Weapons',
    sets: [
      {
        name: 'Exotics',
        id: 'CATALYSTS',
        big: true,
        noUi: true,
        sections: [
          {
            name: 'Heavy weapons',
            itemType: 'exoticCatalysts',
            query: 'special:powerCatalysts'
          }
        ]
      }
    ]
  }
]: SetPage);
