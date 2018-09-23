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
            season: 4,
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
            season: 4,
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
            season: 4,
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
            season: 4,
            items: [
              3213912958, // Vigil of Heroes
              2442309039, // Vigil of Heroes
              3569624585, // Vigil of Heroes
              2592351697, // Vigil of Heroes
              1054960580 // Vigil of Heroes
            ]
          },
          {
            name: 'Extras',
            season: 4,
            items: [
               2793382470, // Wisteria Orbit Shell (Ghost)
               1013544390, // Mimesis Drive (Sparrow)
               4030297244, // Buckthorn Approach (Ship)
               2390666069, // High-Risk, High-Reward (Emblem)
               1075647353, // Vanguard Terminus (Emblem)
               1263710510, // Always North (Shader)
               2788911997, // Vanguard Divide (Shader)
               2788911999, // Vanguard Veteran (Shader)
               2788911998 // Vanguard Metallic (Shader)
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
            season: 4,
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
            season: 4,
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
            season: 4,
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
            season: 4,
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
            season: 4,
            items: [
                1131244817, // Damage, Incorporated
                2588739576, // Crucible Solemnity
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
            season: 4,
            items: [
              1789347249, // Hardline
              2034817450, // Distant Relation
              2712244741, // Bygones
              4077196130, // Trust
              2653316158, // Pillager
              991314988, // Bad Omens
              3100452337, // Dreaded Venture
              2217366863 // Parcel of Stardust
            ]
          },
          {
            name: 'Hunter armor',
            season: 4,
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
            season: 4,
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
            season: 4,
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
            season: 4,
            items: [
                4257852942, // Furtive Shell
                4271205858, // Antediluvian
                3610893760, // Drift Apart
                1471300080, // A Cold Wind Blowin'
                540603119, // Primeval Prime
                540603118, // Ludomaniacal
                1335424933, // Gambit Suede
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
            season: 4,
            items: [
              1982711279, // Talons of the Eagle
              1280933460, // Claws of the Wolf
              1357080535, // Breath of the Dragon
              3169616514, // Bite of the Fox
              1972985595, // Swarm of the Raven
              308332265 // Roar of the Bear
            ]
          },
          {
            name: 'Hunter armor',
            season: 4,
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
            season: 4,
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
            season: 4,
            items: [
              2340483067, // Iron Remembrance Hood
              3799661482, // Iron Remembrance Gloves
              3974682334, // Iron Remembrance Vestments
              2455992644, // Iron Remembrance Legs
              3345886183 // Bond of Remembrance
            ]
          },
          {
            name: 'Extras',
            season: 4,
            items: [
              2448092902 // Rusted Iron (Shader)
            ]
          }
        ]
      },
      {
        name: 'Last Wish raid',
        id: 'YEAR_TWO_LAST_WISH',
        description: 'Last Wish raid.',
        sections: [
          {
            name: 'Weapons',
            season: 4,
            items: [
              2069224589, // One Thousand Voices
              686951703, // The Supremacy
              4094657108, // Techeun Force
              654370424, // Nation of Beasts
              568515759, // Chattering Bone
              3799980700, // Transfiguration
              601592879, // Age-Old Bond
              2721249463, // Tyranny of Heaven
              2545083870 // Apex Predator
            ]
          },

          {
            name: 'Hunter armor',
            season: 4,
            items: [
              3838639757, // Mask of the Great Hunt
              196235132, // Grips of the Great Hunt
              146275556, // Vest of the Great Hunt
              3494130310, // Strides of the Great Hunt
              1314563129 // Cloak of the Great Hunt
            ]
          },

          {
            name: 'Titan armor',
            season: 4,
            items: [
              2274520361, // Helm of the Great Hunt
              65929376, // Gauntlets of the Great Hunt
              3614211816, // Plate of the Great Hunt
              3055836250, // Greaves of the Great Hunt
              1021341893 // Mark of the Great Hunt
            ]
          },

          {
            name: 'Warlock armor',
            season: 4,
            items: [
              3251351304, // Hood of the Great Hunt
              2598685593, // Gloves of the Great Hunt
              3445296383, // Robes of the Great Hunt
              1195800715, // Boots of the Great Hunt
              821841934 // Bond of the Great Hunt
            ]
          },

          {
            name: 'Extras',
            season: 4,
            items: [
              3862768196, // Wish-Maker Shell
              2081719592, // Cleansing Knife
              2269373482, // Ermine TAC-717
              1059304051 // Wish No More
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
        name: 'The Tangled Shore',
        id: 'year-two-tangled-shore',
        description:
          'Complete activities and earn rank-up packages on the Tangled Shore',
        sections: [
          {
            name: 'Weapons',
            season: 4,
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
            season: 4,
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
            season: 4,
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
            season: 4,
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
            season: 4,
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
            season: 4,
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
            season: 4,
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
            season: 4,
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
            season: 4,
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
            season: 4,
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
            season: 4,
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
            season: 4,
            items: [
              813936739, // Starlight Shell
              1317468652, // Harbinger's Echo
              1317468653, // Silver Tercel
              2844014413 // Pallas Galliot
            ]
          }
        ]
      }
    ]
  },
  {
    name: 'Other',
    sets: [
      {
        name: 'Legendary Engrams',
        description: 'Gunsmith and other drops',
        id: 'YEAR_TWO_ENGRAMS',
        big: true,
        sections: [
          {
            name: 'Weapons',
            season: 4,
            items: [
              819441402, // Misfit
              3501969491, // The Cut and Run
              4138174248, // Go Figure
              2112909415, // Ten Paces
              2112909414, // Duke Mk. 44
              2105827099, // Bad Reputation
              1843044399, // Smuggler's Word
              1843044398, // Translation Theory
              720351795, // Arsenic Bite-4b
              3410721600, // Subtle Calamity
              1327264046, // Badlander
              218335759 // Edge Transit
            ]
          },
          {
            name: 'Hunter armor',
            season: 4,
            itemGroups: [
              [
                4261835528, // Tangled Web Mask
                3609169817, // Tangled Web Grips
                2648545535, // Tangled Web Vest
                2206284939, // Tangled Web Strides
                25091086 // Tangled Web Cloak
              ],
              [
                4104298449, // Prodigal Mask
                2762426792, // Prodigal Grasps
                2766448160, // Prodigal Vest
                3397835010, // Prodigal Strides
                1693706589 // Prodigal Cloak
              ],
              [
                3994031968, // Red Moon Phantom Mask
                1601578801, // Red Moon Phantom Grips
                3612275815, // Red Moon Phantom Vest
                1432831619, // Red Moon Phantom Steps
                32806262 // Cloak of Five Full Moons
              ]
            ]
          },
          {
            name: 'Titan armor',
            season: 4,
            itemGroups: [
              [
                2982412348, // Tangled Web Helm
                42219189, // Tangled Web Gauntlets
                2562470699, // Tangled Web Plate
                1618341271, // Tangled Web Greaves
                919186882 // Tangled Web Mark
              ],
              [
                2753581141, // Prodigal Helm
                1429424420, // Prodigal Gauntlets
                3850634012, // Prodigal Cuirass
                3360070350, // Prodigal Greaves
                1266060945 // Prodigal Mark
              ],
              [
                3839471140, // Mimetic Savior Helm
                3403784957, // Mimetic Savior Gauntlets
                3066154883, // Mimetic Savior Plate
                1432969759, // Mimetic Savior Greaves
                1964977914 // Mimetic Savior Bond
              ]
            ]
          },
          {
            name: 'Warlock armor',
            season: 4,
            itemGroups: [
              [
                1664085089, // Tangled Web Hood
                2502004600, // Tangled Web Gloves
                1034149520, // Tangled Web Robes
                537272242, // Tangled Web Boots
                4256272077 // Tangled Web Bond
              ],
              [
                2012084760, // Prodigal Hood
                2475888361, // Prodigal Gloves
                1553407343, // Prodigal Robes
                2767830203, // Prodigal Steps
                2800566014 // Prodigal Bond
              ],
              [
                2470746631, // Thorium Holt Hood
                417345678, // Thorium Holt Gloves
                1330107298, // Thorium Holt Robes
                2924984456, // Thorium Holt Boots
                554000115 // Thorium Holt Bond
              ]
            ]
          }
        ]
      },
      {
        name: 'Eververse',
        id: 'YEAR_TWO_EVERVERSE',
        big: true,
        sections: [
          {
            name: 'Hunter armor',
            season: 4,
            items: [
              2685109601, // Dragonfly Regalia Mask',
              3523029112, // Dragonfly Regalia Grasps
              190167440, // Dragonfly Regalia Vest
              1558296754, // Dragonfly Regalia Strides
              3412289997 // Dragonfly Regalia Wings
            ]
          },
          {
            name: 'Titan armor',
            season: 4,
            items: [
              1961788365, // Dragonfly Regalia Helm
              2614454204, // Dragonfly Regalia Gauntlets
              2634286116, // Dragonfly Regalia Plate
              2000262854, // Dragonfly Regalia Greaves
              3378116217 // Dragonfly Regalia Mark
            ]
          },
          {
            name: 'Warlock armor',
            season: 4,
            items: [
              3516622758, // Dragonfly Regalia Mandible
              2530582647, // Dragonfly Regalia Reaches
              4118548161, // Dragonfly Regalia Robes
              44150041, // Dragonfly Regalia Boots
              606085916 // Dragonfly Regalia Bond
            ]
          },
          {
            name: 'Emotes',
            season: 4,
            items: [
              28673365, // Poultry Petting'
              132405572, // All Alone'
              704532774, // Sad Trombone'
              1617583310, // Standoff'
              1863079869, // Red Card'
              2611996036, // All Mine'
              3201469151, // Cerebral Explosion'
              4080789277, // Beguiling Dance'
              2604685098, // Linear Fusion Dance'
              1036776535, // Denial Dance'
              1314734302, // Smooth Dance'
              1338552830, // Potential Dance'
              2748215252, // Awkward Greeting'
              448262266, // Rev It Up'
              503951839, // What Is That?!'
              896553940, // Lucky Shot'
              2217132045, // Do Not Want'
              1267161032 // Warm Up
            ]
          },
          {
            name: 'Ghosts',
            season: 4,
            items: [
              1106697449, // Peerless Precision Shell
              1106697448, // S.H.A.N.K. Shell
              1106697451, // Tyrant Shell
              1106697450, // Sanctified Vigilance Shell
              374922802, // Color Theory Shell
              374922803, // Blue Sky Shell
              374922800, // Cordial Diamond Shell
              374922801, // Trusty Shell
              374922806, // Painted Eye Shell
              374922807, // Triangle Shell
              374922804, // Skewed Orbit Shell
              374922805, // Freyja Shell
              374922810, // Spectral Circuit Shell
              374922811, // Eyeball Shell
              1625672312, // Atlantis Shell
              1625672315 // Chevron Shell
            ]
          },
          {
            name: 'Ships',
            season: 4,
            items: [
              460688467, // Aeviternal XXII
              460688466, // Death to Kells
              460688465, // Unfinal Shapes
              460688464, // The Tall Tale
              3600237168, // Stellar Pavements
              3600237169, // Impolite Company
              3600237170, // Temperance Moon
              3600237172, // Beautiful Gravities
              3600237173, // Where Stars Collide
              3600237174, // Bicameral Promise
              3600237175, // Last Sunset
              3600237176, // Quantum Cartographer
              3600237177, // In Medias Res
              1092458451, // Jewel of Saturn
              1092458450, // Tickled Catastrophe
              1092458449 // Astera Blade
            ]
          },
          {
            name: 'Sparrows',
            season: 4,
            items: [
              523189763, // Hecuba-S
              523189762, // Warrior's Steed
              523189761, // Ravager's Ride
              2285214174, // Jagged Darksun
              2285214175, // Here I Stand
              2285214172, // Jagged Sunstreak
              2285214173, // Majuscule Tide
              2285214170, // Roar Defiant
              2285214171, // Thermal Runaway
              2285214168, // Endymion Cavalcade
              2285214169, // Swiftsong
              2285214166, // Mappa Mundarum
              2285214167, // Jubilee Pronto
              1264663100, // Battle-Shrike
              1264663103 // Gossamer Longshot
            ]
          },
          {
            name: 'Shaders',
            season: 4,
            items: [
              2815102890, // Smashing Success
              2815102891, // Melchizedek Bramble
              2815102888, // Safety First
              2815102889, // Flavedo Core
              2815102894, // Metropolitan Acoustics
              2815102895, // Celestial Dome
              2815102892 // Forty-Four Steel
            ]
          }
        ]
      }
    ]
  }
]: SetPage);
