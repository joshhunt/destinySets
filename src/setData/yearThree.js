// @flow
import type { SetPage } from '../types';
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
          'DestinyCollectibleDefinition[2185716210].sourceString',
          'Complete all Nightmare Hunt time trials on Master difficulty.'
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
        name: _(
          'DestinyActivityModeDefinition[2659723068].displayProperties.name',
          'Garden of Salvation'
        ),
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
      {
        name: _(
          'DestinyPresentationNodeDefinition[3110685926].displayProperties.name',
          'Season Pass1'
        ),
        description:
          'Free Track available to all Destiny 2 Players. Paid Track to owners of the current Season Pass.',
        id: 'year-three-season-passes',
        big: false,
        sections: [
          {
            name: 'Free Track',
            season: 8,
            items: []
          },
          {
            name: 'Paid Track',
            season: 8,
            items: []
          }
        ]
      },
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
                2523963837, // Empyrean Cartographer Mask
                986495788, // Empyrean Cartographer Grips
                3384125556, // Empyrean Cartographer Vest
                2056685398, // Empyrean Cartographer Strides
                4127955529 // Empyrean Cartographer Cloak
              ],
              [
                2727287231, // Empyrean Cartographer Helm
                2661154438, // Empyrean Cartographer Gauntlets
                926439978, // Empyrean Cartographer Plate
                2220183680, // Empyrean Cartographer Greaves
                1563257659 // Empyrean Cartographer Mark
              ],
              [
                2868013594, // Empyrean Cartographer Hood
                810317923, // Empyrean Cartographer Gloves
                2081889453, // Empyrean Cartographer Robes
                2731297685, // Empyrean Cartographer Boots
                195800736 // Empyrean Cartographer Bond
              ]
            ]
          },
          {
            name: 'Ornaments',
            season: 8,
            itemGroups: [
              [
                // 52189603, // Bad Dog (Not planned to be sold for Bright Dust)
                // 651701175, // Big Blind (Not planned to be sold for Bright Dust)
                // 3844102542, // Father of Islands (Not planned to be sold for Bright Dust)
                // 3432171457, // Heretic Robe (Not planned to be sold for Bright Dust)
                // 1360105767, // Járngreipr (Not planned to be sold for Bright Dust)
                // 1563263613, // Law of Induction (Not planned to be sold for Bright Dust)
                // 3438514430, // Peacebringer (Not planned to be sold for Bright Dust)
                // 2020179519, // Polemology (Not planned to be sold for Bright Dust)
                // 3093486579, // Sky/Perdition (Not planned to be sold for Bright Dust)
                // 2744195002, // Third Rail (Not planned to be sold for Bright Dust)
                // 519687404, // What If (Not planned to be sold for Bright Dust)
                // Currently Classified
                // 4159445096 // Ornament for Xenophage (Not planned to be sold for Bright Dust)
              ],
              [
                // 1617168101, // Augury of Snakes (Not planned to be sold for Bright Dust)
                // 193028652, // Disruptive Camouflage (Not planned to be sold for Bright Dust)
                1145663134 // Great White
              ],
              [
                // 3624790844, // Eerie Breeze (Not planned to be sold for Bright Dust)
                // 331838657, // The Gate Lord (Not planned to be sold for Bright Dust)
                // 3200402431, // Bronze Carapace (Not planned to be sold for Bright Dust)
                // 1206183717, // Shock Grenadier (Not planned to be sold for Bright Dust)
                // 2406427719, // Conflux Control (Not planned to be sold for Bright Dust)
                // 3916835562 // Fènghuáng (Not planned to be sold for Bright Dust)
              ]
            ]
          },
          {
            name: 'Emotes',
            season: 8,
            items: [
              // 3769820799, // Camping (Not planned to be sold for Bright Dust)
              3806167517, // Fireteam Fire Up
              // 3470992439, // Guitar Solo (Not planned to be sold for Bright Dust)
              2291520183, // Ninja Vanish
              // 3366702053, // Plant the Flag (Not planned to be sold for Bright Dust)
              // 2035374481, // Precise Strike (Not planned to be sold for Bright Dust)
              // 2370712399, // Spring Showers (Not planned to be sold for Bright Dust)
              // 3105326202, // Cross-Step Shuffle (Not planned to be sold for Bright Dust)
              // 1188569234, // Ding (Not planned to be sold for Bright Dust)
              1141309169, // Flare Gun
              1422833575, // Give Dap
              1300438173, // Happy Feet
              // 3702002191, // Be Sneaky (Not planned to be sold for Bright Dust)
              248592690, // Eat It Up
              991204036, // Make It Stop
              88498859 // Too Hot
            ]
          },
          {
            name: 'Ghosts',
            season: 8,
            items: [
              // 779216204, // Harper's Shell (Not planned to be sold for Bright Dust)
              779216202, // Lander Shell
              // 779216203, // Lion Guardant Shell (Not planned to be sold for Bright Dust)
              779216206, // Lunar Shell
              779216207, // Ophiuchus Shell
              779216200 // Propheteer Shell
              // 779216201, // Scarlet Swarm Shell (Not planned to be sold for Bright Dust)

              // Has highResIcon but not attached to Tess

              // 779216205 // Friendly Fire Shell (Not planned to be sold for Bright Dust)
            ]
          },
          {
            name: 'Ghost Projections',
            season: 8,
            items: [
              2155593794, // Moonbound Projection
              2155593795, // Mindjack Projection
              2155593792, // Crota's Bane Projection
              2155593793 // Aeronautics of China Projection
            ]
          },
          {
            name: 'Sparrows',
            season: 8,
            items: [
              2067296769, // Blood Runner
              // 2067296773, // Four Degrees of Separation (Not planned to be sold for Bright Dust)
              // 2067296775, // Golden Pride (Not planned to be sold for Bright Dust)
              2067296772, // Invasive Species
              2067296770 // Jotuneer
              // 2067296771, // The Regal Howl (Not planned to be sold for Bright Dust)

              // Has highResIcon but not attached to Tess

              // 2067296774, // Blast Chariot (Not planned to be sold for Bright Dust)
              // 2067296768 // Magneton Trust (Not planned to be sold for Bright Dust)
            ]
          },
          {
            name: 'Ships',
            season: 8,
            items: [
              // 4079130217, // Quality Cut (Not planned to be sold for Bright Dust)
              4079130220 // Refashioned Shapes
              // 4079130223, // The Machinoform (Not planned to be sold for Bright Dust)

              // Has highResIcon but not attached to Tess

              // 4079130218, // Arbitrage LXI (Not planned to be sold for Bright Dust)
              // 4079130219, // Cuttlebone (Not planned to be sold for Bright Dust)
              // 4079130216, // Nephilim Toaster (Not planned to be sold for Bright Dust)
              // 4079130221 // Unwilling Revolt 00-Z (Not planned to be sold for Bright Dust)
            ]
          },
          {
            name: 'Shaders',
            season: 8,
            items: [
              3818755494, // Bruised Blush
              3818755495, // Chitin Slate
              3818755493, // Iridescent Coral
              3818755490, // Jungle Viper
              3818755492, // Oiled Gunmetal
              3818755491 // Polished Sea Stone
            ]
          },
          {
            name: 'Transmat Effects',
            season: 8,
            items: [
              3951356827, // Blind Clutch
              3951356826, // Harpy's Cry
              3951356824, // Nightmare Emergence
              3951356825 // Shattered Shrieker
            ]
          }
        ]
      }
    ]
  }
]: SetPage);
