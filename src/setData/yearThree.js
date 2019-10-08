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
        id: 'year-three-strikes',
        description: 'Complete necessary pursuits from Commander Zavala.',
        sections: [
          {
            name: 'Weapons',
            season: 8, // Double Check
            items: [
              847329160 // Edgewise
            ]
          },
          {
            name: 'Extras',
            season: 8, // Double Check
            items: [
              1655929400, // The Ordeal
              298334049, // Timeless Vigil
              2058800852, // Vanguard Stratosphere
              2058800853 // Vanguard Angelos
            ]
          }
        ]
      },
      {
        name: _(
          'DestinyActivityModeDefinition[1164760504].displayProperties.name',
          'Crucible'
        ),
        id: 'year-three-crucible',
        description: 'Complete necessary pursuits from Lord Shaxx.',
        sections: [
          {
            name: 'Weapons',
            season: 8, // Double Check
            items: [
              3535742959 // Randy's Throwing Knife
            ]
          },
          {
            name: 'Extras',
            season: 8,
            items: [
              3219975799, // Honorable Duelist Shell
              298334062, // Burnished Blade
              1392223753, // Crucible Lazurite
              1392223752 // Crucible Vermillion
            ]
          }
        ]
      },
      {
        name: _(
          'DestinyActivityModeDefinition[1848252830].displayProperties.name',
          'Gambit'
        ),
        id: 'year-three-gambit',
        description: 'Complete necessary pursuits from the Drifter.',
        sections: [
          {
            name: 'Weapons',
            season: 8, // Double Check
            items: [
              4227181568 // Exit Strategy
            ]
          },
          {
            name: 'Extras',
            season: 8,
            items: [
              1714370697, // Living Vestige
              1359616732, // Gambit Emerald
              1359616733 // Gambit Celadon
            ]
          }
        ]
      },
      {
        name: _(
          'DestinyActivityModeDefinition[1826469369].displayProperties.name',
          'Iron Banner'
        ),
        id: 'year-three-iron-banner',
        description: _(
          'DestinyCollectibleDefinition[1158218425].sourceString',
          'Complete Iron Banner matches and earn rank-up packages from Lord Saladin.'
        ),
        sections: [
          {
            name: 'Hunter Armor',
            season: 8,
            items: [
              1098138990, // Iron Will Mask
              2547799775, // Iron Will Sleeves
              1058936857, // Iron Will Vest
              1469050017, // Iron Will Boots
              2414679508 // Iron Will Cloak
            ]
          },
          {
            name: 'Titan Armor',
            season: 8,
            items: [
              1895324274, // Iron Will Helm
              2320100699, // Iron Will Gauntlets
              2536633781, // Iron Will Plate
              770140877, // Iron Will Greaves
              1234228360 // Iron Will Mark
            ]
          },
          {
            name: 'Warlock Armor',
            season: 8,
            items: [
              2205315921, // Iron Will Hood
              863444264, // Iron Will Gloves
              4128151712, // Iron Will Vestments
              1498852482, // Iron Will Steps
              3055410141 // Iron Will Bond
            ]
          },
          {
            name: 'Extras',
            season: 8,
            items: [
              677674547, // Flying Foundry
              3340102521, // Iron Mossbone
              3340102520 // Iron Oxide
            ]
          }
        ]
      },
      {
        name: _(
          'DestinyActivityModeDefinition[332181804].displayProperties.name',
          'Nightmare Hunt'
        ),
        id: 'year-three-nightmare-hunts',
        description: _(
          'DestinyCollectibleDefinition[2185716210].sourceString', // Double Check
          'Complete all Nightmare Hunt time trials on Master difficulty.' // Double Check
        ),
        sections: [
          {
            name: 'Extras',
            // season: "K",
            items: [
              298334057 // A Sibyl's Dreams
            ]
          }
        ]
      },
      {
        name: 'Vex Offensive & Invasions',
        id: 'year-three-vex-offensive-and-invasions',
        description: _(
          'DestinyCollectibleDefinition[4151753667].sourceString',
          'Complete seasonal activities during Season of the Undying.'
        ),
        sections: [
          {
            name: 'Weapons',
            season: 8,
            items: [
              2314999489, // Imperative
              1167153950, // Adhortative
              2138599001, // Optative
              2663204025 // Subjunctive
            ]
          },
          {
            name: 'Extras',
            season: 8,
            items: [
              1714370696 // Pushing Down Daisies
            ]
          }
        ]
      },
      {
        // 'DestinyActivityModeDefinition[2394616003].displayProperties.name', // Double Check
        name: 'Garden of Salvation', // Add above back in later
        id: 'year-three-garden-of-salvation',
        description: _(
          'DestinyCollectibleDefinition[2948134329].sourceString',
          '"Garden of Salvation" raid'
        ),
        sections: [
          {
            name: 'Weapons',
            // season: "K", // Double Check
            items: [
              3385326721, // Reckless Oracle
              2408405461, // Sacred Provenance
              48643186, // Ancient Gospel
              4095896073, // Accrued Redemption
              4020742303, // Prophet of Doom
              2209003210, // Zealot's Reward
              3454326177 // Omniscient Eye
            ]
          },
          {
            name: 'Hunter Armor',
            // season: "K", // Double Check
            items: [
              557676195, // Cowl of Righteousness
              1653741426, // Grips of Exaltation
              4177973942, // Vest of Transcendence
              2054979724, // Strides of Ascendancy
              3549177695 // Cloak of Temptation
            ]
          },
          {
            name: 'Titan Armor',
            // season: "K", // Double Check
            items: [
              519078295, // Helm of Righteousness
              3887559710, // Gauntlets of Exaltation
              3939809874, // Plate of Transcendence
              11974904, // Greaves of Ascendancy
              281660259 // Temptation's Mark
            ]
          },
          {
            name: 'Warlock Armor',
            // season: "K", // Double Check
            items: [
              3001934726, // Mask of Righteousness
              2015894615, // Gloves of Exaltation
              2320830625, // Robes of Transcendence
              3824429433, // Boots of Ascendancy
              3103335676 // Temptation's Bond
            ]
          },
          {
            name: 'Extras',
            // season: "K", // Double Check
            items: [
              298334059, // Inherent Truth
              3996862462, // Ancient Believer
              3996862463 // Ancient Defender
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
          'DestinyPlaceDefinition[3325508439].displayProperties.name',
          'The Moon'
        ),
        id: 'year-three-moon',
        description: _(
          'DestinyCollectibleDefinition[1310958655].sourceString',
          'Found by exploring the Moon.'
        ),
        sections: [
          {
            name: 'Weapons',
            // season: "K",
            items: [
              2723909519, // Arc Logic
              208088207, // Premonition
              3924212056, // Loud Lullaby
              4277547616, // Every Waking Moment
              1016668089, // One Small Step
              2931957300, // Dream Breaker
              1645386487, // Tranquility
              3870811754, // Night Terror
              3690523502, // Love and Death
              3325778512 // A Fine Memorial
            ]
          },
          {
            name: 'Hunter Armor',
            // season: "K",
            items: [
              659922705, // Dreambane Cowl
              3571441640, // Dreambane Grips
              883769696, // Dreambane Vest
              377813570, // Dreambane Strides
              193805725 // Dreambane Cloak
            ]
          },
          {
            name: 'Titan Armor',
            // season: "K",
            items: [
              272413517, // Dreambane Helm
              925079356, // Dreambane Gauntlets
              2568538788, // Dreambane Plate
              310888006, // Dreambane Greaves
              3312368889 // Dreambane Mark
            ]
          },
          {
            name: 'Warlock Armor',
            // season: "K",
            items: [
              1528483180, // Dreambane Hood
              682780965, // Dreambane Gloves
              3692187003, // Dreambane Robes
              1030110631, // Dreambane Boots
              2048903186 // Dreambane Bond
            ]
          },
          {
            name: 'Extras',
            // season: "K",
            items: [
              1272828316, // Moonshot Shell
              3382260610, // Moonrider One
              672488948, // The Third Tide
              1714370698, // Orbital Cartographer
              298334056, // Lunar Memoriam
              2056256564, // Lunar Halcyon Gilt
              2056256565 // Lunar Gloom
            ]
          }
        ]
      }
    ]
  },
  // {
  //   name: 'Holiday & Special Events',
  //   sets: [
  //     {
  //       name: 'Festival of the Lost',
  //       id: 'year-three-festival-of-the-lost',
  //       description: 'Earned during the seasonal Festival of the Lost event.', // Double Check
  //       sections: [
  //         {
  //           name: 'Weapons',
  //           season: 8, // Double Check
  //           items: [
  //
  //           ]
  //         },
  //         {
  //           name: 'Hunter Armor',
  //           season: 8, // Double Check
  //           items: [

  //           ]
  //         },
  //         {
  //           name: 'Titan Armor',
  //           season: 8, // Double Check
  //           items: [

  //           ]
  //         },
  //         {
  //           name: 'Warlock Armor',
  //           season: 8, // Double Check
  //           items: [

  //           ]
  //         },
  //         {
  //           name: 'Masks',
  //           season: 8, // Double Check
  //           items: [

  //           ]
  //         },
  //         {
  //           name: 'Emotes',
  //           season: 8, // Double Check
  //           items: [

  //           ]
  //         },
  //         {
  //           name: 'Ghosts',
  //           season: 8, // Double Check
  //           items: [

  //           ]
  //         },
  //         {
  //           name: 'Ghost Projections',
  //           season: 8, // Double Check
  //           items: [

  //           ]
  //         },
  //         {
  //           name: 'Sparrows',
  //           season: 8, // Double Check
  //           items: [

  //           ]
  //         },
  //         {
  //           name: 'Ships',
  //           season: 8, // Double Check
  //           items: [

  //           ]
  //         },
  //         {
  //           name: 'Extras',
  //           season: 8, // Double Check
  //           items: [

  //           ]
  //         }
  //       ]
  //     },
  //   ]
  // },
  {
    name: 'Other',
    sets: [
      // {
      //   name: _(
      //     'DestinyVendorDefinition[3163810067].displayProperties.name',
      //     'Legendary Engram'
      //   ),
      //   description: _(
      //     'DestinyCollectibleDefinition[256984755].sourceString',
      //     'Open Legendary engrams and earn faction rank-up packages.'
      //   ),
      //   id: 'year-three-legendary-engram',
      //   big: false, // Double Check
      //   sections: [
      //     {
      //       name: 'Weapons',
      //       season: 4,
      //       items: [

      //       ]
      //     },
      //     {
      //       name: 'Hunter Armor',
      //       season: 4,
      //       itemGroups: [
      //         [

      //         ],
      //         [

      //         ],
      //         [

      //         ]
      //       ]
      //     },
      //     {
      //       name: 'Titan Armor',
      //       season: 4,
      //       itemGroups: [
      //         [

      //         ],
      //         [

      //         ],
      //         [

      //         ]
      //       ]
      //     },
      //     {
      //       name: 'Warlock Armor',
      //       season: 4,
      //       itemGroups: [
      //         [

      //         ],
      //         [

      //         ],
      //         [

      //         ]
      //       ]
      //     }
      //   ]
      // },
      {
        name: _(
          'DestinyFactionDefinition[1393733616].displayProperties.name',
          'Eververse'
        ),
        id: 'year-three-eververse',
        description: 'Items sold at Eververse for Bright Dust.',
        big: false,
        sections: [
          {
            name: 'Armor',
            season: 8,
            itemGroups: [
              [
                // Hunter
              ],
              [
                // Titan
              ],
              [
                // Warlock
              ]
            ]
          },
          {
            name: 'Ornaments',
            season: 8,
            itemGroups: [
              [
                // Exotic Weapon
              ],
              [
                // Legendary Weapon
              ],
              [
                // Exotic Armour
              ]
            ]
          },
          {
            name: 'Emotes',
            season: 8,
            items: [
              991204036 // Make it Stop
            ]
          },
          {
            name: 'Ghosts',
            season: 8,
            items: []
          },
          {
            name: 'Ghost Projections',
            season: 8,
            items: []
          },
          {
            name: 'Sparrows',
            season: 8,
            items: []
          },
          {
            name: 'Ships',
            season: 8,
            items: []
          },
          {
            name: 'Shaders',
            season: 8,
            items: [
              3818755494 // Bruised Blush
            ]
          },
          {
            name: 'Transmat Effects',
            season: 8,
            items: [
              3951356827 // Blind Clutch
            ]
          }
        ]
      }
    ]
  }
]: SetPage);
