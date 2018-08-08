// @flow

import type { SetPage } from '../types';

export default ([
  {
    name: 'Everything',
    sets: [
      {
        name: 'Weapons',
        id: "DELUXE_WEAPONS",
        big: true,
        query: 'is:weapon',
        sections: []
      },

      {
        name: 'Armor',
        id: "DELUXE_ARMOR",
        big: true,
        query: 'is:armor',
        sections: []
      }
    ]
  }
]: SetPage);
