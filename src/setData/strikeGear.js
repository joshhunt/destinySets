// @flow

import type { SetPage } from '../types';

export default ([
  {
    name: 'Base Game',
    sets: [
      {
        name: 'The Inverted Spire',
        image: '/img/destiny_content/pgcr/strike_inverted_spire.jpg',
        sections: [
          {
            name: 'Nightfall exclusive',
            bigItems: true,
            items: [953357968] // Trichromatica
          },
          {
            name: 'Nightfall emblems',
            items: [
              2764373298, // The Inverted Spire
              4238775804, // Operation Radiolarian Cascade
              4238775806, // Unconventional Research
              4238775807 // A Mind Forever Changing
            ]
          }
        ]
      },
      {
        name: 'Pyramidion',
        image: '/img/destiny_content/pgcr/strike_the_pyramdion.jpg',
        sections: [
          {
            name: 'Nightfall exclusive',
            bigItems: true,
            items: [990416096] // Silicon Neuroma
          },
          {
            name: 'Nightfall emblems',
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
        image: '/img/destiny_content/pgcr/strike_exodus_crash.jpg',
        sections: [
          {
            name: 'Nightfall exclusive',
            bigItems: true,
            items: [2757144093] // Impact Velocity
          },
          {
            name: 'Nightfall emblems',
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
        image: '/img/destiny_content/pgcr/strike_the_arms_dealer.jpg',
        sections: [
          {
            name: 'Nightfall exclusive',
            bigItems: true,
            items: [2757144092] // Tilt Fuse
          },
          {
            name: 'Nightfall emblems',
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
        image: '/img/destiny_content/pgcr/strike_savanthuns_song.jpg',
        sections: [
          {
            name: 'Nightfall exclusive',
            bigItems: true,
            items: [1457979868] // Duty Bound
          },
          {
            name: 'Nightfall emblems',
            items: [
              148664963, // Savathûn's Song
              4040838277, // Search and Rescue
              4040838279, // Praxic Fire
              4040838276 // Watcher from Beyond
            ]
          }
        ]
      },
      {
        name: 'Lake of Shadows',
        image: '/img/destiny_content/pgcr/strike_lake_of_shadows.jpg',
        sections: [
          // {
          //   name: 'Nightfall exclusive',
          //   bigItems: true,
          //   items: [2082184158]
          // }
        ]
      }
    ]
  },
  {
    name: 'Curse of Osiris',
    sets: [
      {
        name: 'Tree Of Probabilities',
        image: '/img/destiny_content/pgcr/campaign_tree_of_probabilities.jpg',
        sections: [
          {
            name: 'Nightfall exclusive',
            bigItems: true,
            items: [
              4238497225 // D.F.A.
            ]
          },
          {
            name: 'Nightfall emblems',
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
        image: '/img/destiny_content/pgcr/rituals_a_garden_world.jpg',
        sections: [
          {
            name: 'Nightfall exclusive',
            bigItems: true,
            items: [
              1174053886 // Universal Wavefunction
            ]
          },
          {
            name: 'Nightfall emblems',
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
        image: '/img/destiny_content/pgcr/strike_xol.jpg',
        sections: [
          {
            name: 'Nightfall exclusive',
            bigItems: true,
            items: [
              1311389413 // Worm God Incarnation
            ]
          },
          {
            name: 'Nightfall emblems',
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
        image: '/img/destiny_content/pgcr/strike_nokris.jpg',
        sections: [
          {
            name: 'Nightfall exclusive',
            bigItems: true,
            items: [
              1929278169 // BrayTech Osprey
            ]
          },
          {
            name: 'Nightfall emblems',
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
  }
]: SetPage);
