// @flow

import type { SetPage } from '../types';

const strike = (name, id, image, exclusiveItems, emblems) => ({
  name,
  id,
  image,
  sections: [
    {
      name: 'Nightfall Exclusive',
      bigItems: true,
      items: exclusiveItems
    },
    {
      name: 'Nightfall Emblems',
      items: emblems
    }
  ]
});

export default ([
  {
    name: 'Base Game',
    sets: [
      strike(
        'The Inverted Spire',
        'STRIKE_THE_INVERTED_SPIRE',
        '/img/destiny_content/pgcr/strike_inverted_spire.jpg',
        [
          953357968 // Trichromatica
        ],
        [
          2764373298, // The Inverted Spire
          4238775804, // Operation Radiolarian Cascade
          4238775806, // Unconventional Research
          4238775807 // A Mind Forever Changing
        ]
      ),
      {
        name: 'Pyramidion',
        id: 'STRIKE_PYRAMIDION',
        image: '/img/destiny_content/pgcr/strike_the_pyramdion.jpg',
        sections: [
          {
            name: 'Nightfall Exclusive',
            bigItems: true,
            items: [990416096] // Silicon Neuroma
          },
          {
            name: 'Nightfall Emblems',
            items: [
              10493725, // The Pyramidion
              1078226395, // Operation Intrepid
              1078226394, // Spiraling into the Infinite
              1078226393 // An Inscrutable Amygdaloid Eigenstate
            ]
          }
        ]
      },
      {
        name: 'Exodus Crash',
        id: 'STRIKE_EXODUS_CRASH',
        image: '/img/destiny_content/pgcr/strike_exodus_crash.jpg',
        sections: [
          {
            name: 'Nightfall Exclusive',
            bigItems: true,
            items: [2757144093] // Impact Velocity
          },
          {
            name: 'Nightfall Emblems',
            items: [
              2726018197, // Exodus Crash
              769740914, // Better Failsafe Than Sorry
              769740915, // Operation Piccolo
              769740913 // Operation… Oboe?
            ]
          }
        ]
      },
      {
        name: 'The Arms Dealer',
        id: 'STRIKE_THE_ARMS_DEALER',
        image: '/img/destiny_content/pgcr/strike_the_arms_dealer.jpg',
        sections: [
          {
            name: 'Nightfall Exclusive',
            bigItems: true,
            items: [2757144092] // Tilt Fuse
          },
          {
            name: 'Nightfall Emblems',
            items: [
              997563763, // The Arms Dealer
              2399682325, // Outlawed and Unsanctioned
              2399682327, // A Flare for the Dramatic
              2399682324 // No More Flame Turrets
            ]
          }
        ]
      },
      {
        name: "Savathûn's Song",
        id: "STRIKE_SAVATHÛN'S_SONG",
        image: '/img/destiny_content/pgcr/strike_savanthuns_song.jpg',
        sections: [
          {
            name: 'Nightfall Exclusive',
            bigItems: true,
            items: [1457979868] // Duty Bound
          },
          {
            name: 'Nightfall Emblems',
            items: [
              148664963, // Savathûn's Song
              4040838277, // Search and Rescue
              4040838279, // Praxic Fire
              4040838276 // Watcher from Beyond
            ]
          }
        ]
      }
    ]
  },
  {
    name: 'Curse of Osiris',
    sets: [
      {
        name: 'Tree Of Probabilities',
        id: 'STRIKE_TREE_OF_PROBABILITIES',
        image: '/img/destiny_content/pgcr/campaign_tree_of_probabilities.jpg',
        sections: [
          {
            name: 'Nightfall Exclusive',
            bigItems: true,
            items: [
              4238497225 // D.F.A.
            ]
          },
          {
            name: 'Nightfall Emblems',
            items: [
              2933984410, // Tree of Probabilities
              2178159623, // No More Lasers
              2178159622, // Valus Intrigue
              2178159620 // A Forest of Red
            ]
          }
        ]
      },
      {
        name: 'A Garden World',
        id: 'STRIKE_A_GARDEN_WORLD',
        image: '/img/destiny_content/pgcr/rituals_a_garden_world.jpg',
        sections: [
          {
            name: 'Nightfall Exclusive',
            bigItems: true,
            items: [
              1174053886 // Universal Wavefunction
            ]
          },
          {
            name: 'Nightfall Emblems',
            items: [
              893502917, // A Garden World
              1505307650, // Blast from the Past
              1505307651, // Pulling Out the Roots
              1505307649 // Odysseus's Offspring
            ]
          }
        ]
      }
    ]
  },

  {
    name: 'Warmind',
    sets: [
      {
        name: 'Will of the Thousands',
        id: 'STRIKE_WILL_OF_THE_THOUSANDS',
        image: '/img/destiny_content/pgcr/strike_xol.jpg',
        sections: [
          {
            name: 'Nightfall Exclusive',
            bigItems: true,
            items: [
              1311389413 // Worm God Incarnation
            ]
          },
          {
            name: 'Nightfall Emblems',
            items: [
              3427785728, // Will of the Thousands
              1456844009, // Feast of Worms
              1456844010, // Death to the Deathless
              1456844008 // Giantfall
            ]
          }
        ]
      },
      {
        name: 'Strange Terrain',
        id: 'STRIKE_STRANGE_TERRAIN',
        image: '/img/destiny_content/pgcr/strike_nokris.jpg',
        sections: [
          {
            name: 'Nightfall Exclusive',
            bigItems: true,
            items: [
              1929278169 // BrayTech Osprey
            ]
          },
          {
            name: 'Nightfall Emblems',
            items: [
              2136479687, // Strange Terrain
              1901100185, // Maleficarum Interrupted
              1901100187, // Bane of Nokris
              1901100184 // Purifying Light
            ]
          }
        ]
      }
    ]
  },

  {
    name: 'Forsaken',
    sets: [
      strike(
        'Lake of Shadows',
        'STRIKE_LAKE_OF_SHADOWS',
        '/img/destiny_content/pgcr/strike_lake_of_shadows.jpg',
        [3745974521],
        [1184965378, 4179974574]
      ),
      strike(
        'The Insight Terminus',
        'STRIKE_INSIGHT_TERMINUS',
        '/img/destiny_content/pgcr/strike_glee.jpg',
        [2154059444],
        [3844225097, 3597022727]
      ),
      strike(
        'The Corrupted',
        'STRIKE_THE_CORRUPTED',
        '/img/destiny_content/pgcr/strike_gemini.jpg',
        [1071542914],
        [4162792207, 1777460225]
      ),
      strike(
        'The Hollowed Lair',
        'STRIKE_THE_HOLLOWED_LAIR',
        '/img/destiny_content/pgcr/strike_taurus.jpg',
        [4117693024],
        [1639160638, 3819100474]
      ),
      strike(
        'Warden of Nothing',
        'STRIKE_WARDEN_OF_NOTHING',
        '/img/destiny_content/pgcr/strike_aries.jpg',
        [233423981],
        [1814407142, 1582507554]
      )
    ]
  },

  // 1655929400 - The Ordeal

]: SetPage);
