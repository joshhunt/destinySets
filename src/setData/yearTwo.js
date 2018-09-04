// @flow
import type { SetPage } from '../types';

export default ([
  {
    name: 'Activities',
    sets: [
      {
        name: 'Strikes',
        id: 'YEAR_TWO_STRIKES',
        description:
          'Complete strikes and earn rank-up packages from Commander Zavala',
        sections: [
          {
            name: 'Weapons',
            items: [
              3040742682, // Nameless Midnight
              2009277538, // The Last Dance
              2957367743, // Toil and Trouble
              253196586, // Oath for Tomorrow
              3745990145, // Long Shadow
              4146702548 // Outrageous Fortune
            ]
          },
          {
            name: 'Hunter armor',
            items: [
              575676771, // Vigil of Heroes
              1247181362, // Vigil of Heroes
              3916064886, // Vigil of Heroes
              2072877132, // Vigil of Heroes
              3670149407 // Vigil of Heroes
            ]
          },
          {
            name: 'Titan armor',
            items: [
              1514863327, // Vigil of Heroes
              1490307366, // Vigil of Heroes
              335317194, // Vigil of Heroes
              1007759904, // Vigil of Heroes
              506100699 // Vigil of Heroes
            ]
          },
          {
            name: 'Warlock armor',
            items: [
              3213912958, // Vigil of Heroes
              2442309039, // Vigil of Heroes
              3569624585, // Vigil of Heroes
              2592351697, // Vigil of Heroes
              1054960580 // Vigil of Heroes
            ]
          },
          {
            name: 'Shaders',
            items: [
              2788911999, // Vanguard Veteran
              2788911998 // Vanguard Metallic
            ]
          }
        ]
      },
      {
        name: 'Crucible',
        id: 'YEAR_TWO_CRUCIBLE',
        description:
          'Complete Crucible matches and earn rank-up packages from Lord Shaxx',
        sections: [
          {
            name: 'Weapons',
            items: [
              153979397, // Better Devils
              105567493, // Hard Truths
              3222518097, // Anonymous Autumn
              1684914716, // Fate Cries Foul
              4230993599, // Steel Sybil Z-14
              195440257 // Play of the Game
            ]
          },
          {
            name: 'Hunter armor',
            items: [
              1127237110, // Wing Contender
              2331227463, // Wing Contender
              3211001969, // Wing Contender
              1084033161, // Wing Contender
              1069887756 // Wing Contender
            ]
          },
          {
            name: 'Titan armor',
            items: [
              2124666626, // Wing Discipline
              1464207979, // Wing Discipline
              1063904165, // Wing Discipline
              2555965565, // Wing Discipline
              185853176 // Wing Discipline
            ]
          },
          {
            name: 'Warlock armor',
            items: [
              3724026171, // Wing Theorem
              929917162, // Wing Theorem
              997903134, // Wing Theorem
              4264096388, // Wing Theorem
              327530279 // Wing Theorem
            ]
          },
          {
            name: 'Extras',
            items: [
              2588739578, // Crucible Legacy
              2588739579 // Crucible Metallic
            ]
          }
        ]
      },
      {
        name: 'Gambit',
        id: 'YEAR_TWO_GAMBIT',
        description:
          'Complete Gambit matches and earn rank-up packages from the Drifter',
        sections: [
          {
            name: 'Weapons',
            items: [
              1789347249, // Hardline
              2034817450, // Distant Relation
              2712244741, // Bygones
              4077196130, // Trust
              2653316158, // Pillager
              991314988 // Bad Omens
            ]
          },
          {
            name: 'Hunter armor',
            items: [
              629787707, // Ancient Apocalypse Mask
              2130645994, // Ancient Apocalypse Grips
              3855285278, // Ancient Apocalypse Vest
              1169857924, // Ancient Apocalypse Strides
              3184912423 // Ancient Apocalypse Cloak
            ]
          },
          {
            name: 'Titan armor',
            items: [
              3031848199, // Ancient Apocalypse Helm
              978447246, // Ancient Apocalypse Gauntlets
              4115739810, // Ancient Apocalypse Plate
              3486086024, // Ancient Apocalypse Greaves
              3339632627 // Ancient Apocalypse Mark
            ]
          },
          {
            name: 'Warlock armor',
            items: [
              1236746902, // Ancient Apocalypse Hood
              2440840551, // Ancient Apocalypse Gloves
              4188366993, // Ancient Apocalypse Robes
              1193646249, // Ancient Apocalypse Boots
              2088829612 // Ancient Apocalypse Bond
            ]
          },
          {
            name: 'Extras',
            items: [
              4257852942, // Furtive Shell
              3610893760, // Drift Apart
              4271205858, // Antediluvian
              1335424935, // Gambit Leather
              1335424934 // Gambit Chrome
            ]
          }
        ]
      },
      {
        name: 'Iron Banner',
        id: 'YEAR_TWO_IRON_BANNER',
        description:
          'Complete Iron Banner matches and earn rank-up packages from Lord Saladin.',
        sections: [
          {
            name: 'Weapons',
            items: [
              1982711279, // Talons of the Eagle
              1280933460, // Claws of the Wolf
              1357080535, // Breath of the Dragon
              3169616514, // Bite of the Fox
              1972985595, // Swarm of the Raven
              432716552, // Shining Sphere
              308332265 // Roar of the Bear
            ]
          },
          {
            name: 'Hunter armor',
            items: [
              1944853984, // Iron Remembrance Casque
              3847368113, // Iron Remembrance Grips
              279785447, // Iron Remembrance Vest
              3678620931, // Iron Remembrance Strides
              995283190 // Cloak of Remembrance
            ]
          },
          {
            name: 'Titan armor',
            items: [
              485774636, // Iron Remembrance Helm
              3976616421, // Iron Remembrance Gauntlets
              741704251, // Iron Remembrance Plate
              3899385447, // Iron Remembrance Greaves
              3817948370 // Mark of Remembrance
            ]
          },
          {
            name: 'Warlock armor',
            items: [
              2340483067, // Iron Remembrance Hood
              3799661482, // Iron Remembrance Gloves
              3974682334, // Iron Remembrance Vestments
              2455992644, // Iron Remembrance Legs
              3345886183 // Bond of Remembrance
            ]
          }
        ]
      }
      // {
      //   name: "Last Wish raid",
      //   id: "YEAR_TWO_LAST_WISH",
      //   description: "Last Wish raid.",
      //   sections: [
      //     {
      //       name: "Weapons",
      //       items: [
      //         601592879,
      //         3799980700,
      //         568515759,
      //         654370424,
      //         2721249463,
      //         2545083870
      //       ]
      //     },
      //     {
      //       name: "Hunter armor",
      //       items: [
      //         3251351304, // hood
      //         196235132, // grips
      //         146275556, // vest
      //         3494130310, // strides
      //         1314563129 // cloak
      //       ]
      //     },
      //     {
      //       name: "Titan armor",
      //       items: [
      //         2274520361, // helm
      //         65929376, // gauntlets
      //         3614211816, // plate
      //         3055836250, // greaves
      //         1021341893 // mark
      //       ]
      //     },
      //     {
      //       name: "Warlock armor",
      //       items: [
      //         2340335439, // mask
      //         4058916407, // gloves
      //         3445296383, // robes
      //         1195800715, // boots
      //         1230173206 // bond
      //       ]
      //     },
      //     {
      //       name: "Extras",
      //       items: [
      //         3862768196, // Wish-Maker Shell
      //         2269373482, // ship
      //         2081719592, // sparrow
      //         3668669365, // shader
      //         3668669364 // shader
      //       ]
      //     }
      //   ]
      // }
    ]
  },
  {
    name: 'Destinations',
    sets: [
      {
        name: 'The Tangled Shore',
        id: 'year-two-tangled-shore',
        description:
          'Complete activities and earn rank-up packages on the Tangled Shore',
        sections: [
          {
            name: 'Weapons',
            items: [
              1839565992, // Ether Doctor
              3957603605, // Wrong Side of Right
              3376406418, // Right Side of Wrong
              1178886909, // Thin Line
              2681395357, // Trackless Waste
              636912560 // Dust Rock Blues
            ]
          },
          {
            name: 'Hunter armor',
            items: [
              2276115770, // Scatterhorn Mask
              218523139, // Scatterhorn Grasps
              307138509, // Scatterhorn Vest
              2563857333, // Scatterhorn Strides
              2757593792 // Scatterhorn Cloak
            ]
          },
          {
            name: 'Titan armor',
            items: [
              1862088022, // Scatterhorn Helm
              3066181671, // Scatterhorn Gauntlets
              3871458129, // Scatterhorn Plate
              2243444841, // Scatterhorn Greaves
              1347463276 // Scatterhorn Mark
            ]
          },
          {
            name: 'Warlock armor',
            items: [
              2411325265, // Scatterhorn Hood
              1069453608, // Scatterhorn Wraps
              1250571424, // Scatterhorn Robe
              1704861826, // Scatterhorn Boots
              177829853 // Scatterhorn Bond
            ]
          },
          {
            name: "Spider's Wanted Escapee Bounties",
            itemGroups: [
              [
                3334276333, // Death by Scorn
                720351794, // No Turning Back
                301362380 // Terran Wind
              ],
              [
                1673638926, // The Great Beyond
                3031114503 // The Gambler's Palm
              ]
            ]
          },
          {
            name: "Eliminated Barons' armor",
            itemGroups: [
              [
                2932919026, // Nea-Thonis Breather
                1928007477 // Scorned Baron Vest
              ],
              [
                2007698582, // Torobatl Celebration Mask
                1349281425 // Scorned Baron Plate
              ],
              [
                3858472841, // Eimin-Tin Ritual Mask
                3183089352 // Scorned Baron Robes
              ],
              [
                785442930 // Eye for an Eye
              ]
            ]
          },
          {
            name: 'Extras',
            items: [
              1226584228, // Tangled Rust
              1226584229 // Tangled Bronze
            ]
          }
        ]
      },
      {
        name: 'The Dreaming City',
        id: 'year-two-dreaming-city',
        description:
          'Complete activities and earn rank-up packages in the Dreaming City',
        sections: [
          {
            name: 'Weapons',
            items: [
              640114618, // Tigerspite
              3242168339, // Vouchsafe
              334171687, // Waking Vigil
              346136302, // Retold Tale
              3297863558, // Twilight Oath
              1644160541, // Abide the Return
              3740842661 // Sleepless
            ]
          },
          {
            name: 'Hunter armor',
            items: [
              2824453288, // Reverie Dawn Casque
              1705856569, // Reverie Dawn Grasps
              1593474975, // Reverie Dawn Hauberk
              344548395, // Reverie Dawn Strides
              3306564654 // Reverie Dawn Cloak
            ]
          },
          {
            name: 'Titan armor',
            items: [
              4097166900, // Reverie Dawn Helm
              2503434573, // Reverie Dawn Gauntlets
              4070309619, // Reverie Dawn Plate
              3174233615, // Reverie Dawn Greaves
              1980768298 // Reverie Dawn Mark
            ]
          },
          {
            name: 'Warlock armor',
            items: [
              185695659, // Reverie Dawn Hood
              2761343386, // Reverie Dawn Gloves
              2859583726, // Reverie Dawn Tabard
              188778964, // Reverie Dawn Boots
              3602032567 // Reverie Dawn Bond
            ]
          },
          {
            name: 'Extras',
            items: [
              813936739, // Starlight Shell
              2844014413, // Pallas Galliot
              1317468652, // Harbinger's Echo
              1317468653 // Silver Tercel
            ]
          }
        ]
      }
    ]
  }
]: SetPage);
