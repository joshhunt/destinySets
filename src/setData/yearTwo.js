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
        id: 'YEAR_TWO_STRIKES',
        description: _(
          'DestinyCollectibleDefinition[2589931339].sourceString',
          'Complete strikes and earn rank-up packages from Commander Zavala.'
        ),
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
            name: 'Weapons',
            season: 5,
            items: [
              792755504, // Nightshade
              4083045006 // Persuader
            ]
          },
          {
            name: 'Hunter Armor',
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
            name: 'Titan Armor',
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
            name: 'Warlock Armor',
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
              2935851862, // Struck a Nerve (Emblem)
              2294983474, // Honor of the Vanguard (Emblem)
              2294983475, // Strikes of All Stripes (Emblem)
              1263710510, // Always North (Shader)
              2788911999, // Vanguard Veteran (Shader)
              2788911998, // Vanguard Metallic (Shader)
              2788911997 // Vanguard Divide (Shader)
            ]
          },
          {
            name: 'Extras',
            season: 5,
            items: [
              912222548, // Soldier On (Emblem)
              274843196 // Vanguard Unyielding (Shader)
            ]
          }
        ]
      },
      {
        name: _(
          'DestinyActivityModeDefinition[1164760504].displayProperties.name',
          'Crucible'
        ),
        id: 'YEAR_TWO_CRUCIBLE',
        description: _(
          'DestinyCollectibleDefinition[1279318105].sourceString',
          'Complete Crucible matches and earn rank-up packages from Lord Shaxx.'
        ),
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
            name: 'Weapons',
            season: 5,
            items: [
              3356526253, // Wishbringer
              2278995296 // Does Not Compute  
            ]
          },
          {
            name: 'Hunter Armor',
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
            name: 'Titan Armor',
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
            name: 'Warlock Armor',
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
              4159935832, // Fireforged Valor
              1788892384, // Smoldering Flame
              1788892385, // Persistent Blaze
              2420153991, // Made Shaxx Proud
              2588739578, // Crucible Legacy
              2588739579, // Crucible Metallic
              2588739576 // Crucible Solemnity
            ]
          },
          {
            name: 'Extras',
            season: 5,
            items: [
              2414564781, // Punctuation Marks (Emblem)
              769099721 // Devil in the Details (Shader)
            ]
          }
        ]
      },
      {
        name: _(
          'DestinyActivityModeDefinition[1848252830].displayProperties.name',
          'Gambit'
        ),
        id: 'YEAR_TWO_GAMBIT',
        description: _(
          'DestinyCollectibleDefinition[1534387875].sourceString',
          'Complete Gambit matches and earn rank-up packages from the Drifter.'
        ),
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
            name: 'Hunter Armor',
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
            name: 'Titan Armor',
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
            name: 'Warlock Armor',
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
              3013363601, // Playin' The Odds
              540603119, // Primeval Prime
              540603118, // Ludomaniacal
              180108390, // Kit and Kaboodle
              180108391, // Dance the Demons Away
              1335424935, // Gambit Leather
              1335424934, // Gambit Chrome
              1335424933 // Gambit Suede
            ]
          },
          {
            name: 'Extras',
            season: 5,
            items: [
              2394866220, // Keep on Drifting
              3217477988 // Gambit Duds
            ]
          }
        ]
      },
      {
        name: _(
          'DestinyActivityModeDefinition[1826469369].displayProperties.name',
          'Iron Banner'
        ),
        id: 'YEAR_TWO_IRON_BANNER',
        description: _(
          'DestinyCollectibleDefinition[3008980338].sourceString',
          'Complete Iron Banner matches and earn rank-up packages from Lord Saladin.'
        ),
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
            name: 'Weapons',
            season: 5,
            items: [
              4292849692, // Crimil's Dagger 
              1865351684 // The Hero's Burden
            ]
          },
          {
            name: 'Hunter Armor',
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
            name: 'Hunter Armor',
            season: 5,
            items: [
              142417051, // Iron Fellowship Casque 
              1601698634, // Iron Fellowship Grips 
              2753509502, // Iron Fellowship Vest 
              258029924, // Iron Fellowship Strides
              2083136519 // Iron Fellowship Cloak 
            ]
          },
          {
            name: 'Titan Armor',
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
            name: 'Titan Armor',
            season: 5,
            items: [
              3018777825, // Iron Fellowship Helm
              3856697336, // Iron Fellowship Gauntlets
              3661959184, // Iron Fellowship Plate
              1891964978, // Iron Fellowship Greaves
              2589114445 // Iron Fellowship Mark 
            ]
          },
          {
            name: 'Warlock Armor',
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
            name: 'Warlock Armor',
            season: 5,
            items: [
              2055774222, // Iron Fellowship Hood
              3505538303, // Iron Fellowship Gloves
              4145557177, // Iron Fellowship Robes
              2426788417, // Iron Fellowship Boots
              1164755828 // Iron Fellowship Bond
            ]
          },
          {
            name: 'Extras',
            season: 4,
            items: [
              2448092902 // Rusted Iron (Shader)
            ]
          },
          {
            name: 'Extras',
            season: 5,
            items: [
              1162929425 // The Golden Standard (Emblem)
            ]
          }
        ]
      },
            {
        name: 'Black Armory Forge Gear',
        description:
          'Gear from Forge Ignitions and crafted in a Black Armory forge.',
        id: 'YEAR_TWO_FORGE_GEAR',
        sections: [
          {
            name: 'Weapons',
            season: 5,
            items: [
              1775804198, // Galliard-42 XN7568
              20025671, // Tango-45 XK5094
              1386601612, // Swift Ride XE8375
              2824241403, // Bad News XF4354
              2422664927, // Atalanta-D XG1992
              3751622019, // Dead Man Walking XX7463
              3461377698, // Baligant XU7743
              4148143418, // Show of Force XF4865
              1757129747, // Acantha-D XK8434
              2817798849 // Hoosegow XE5837
            ]
          },
          {
            name: 'Hunter Armor',
            season: 5,
            items: [
              3086191374, // Woven Firesmith Mask
              240988159, // Woven Firesmith Grips
              2791841721, // Woven Firesmith Vest
              3457205569, // Woven Firesmith Boots
              4106007668 // Woven Firesmith Cape
            ]
          },
          {
            name: 'Titan Armor',
            season: 5,
            items: [
              524862116, // Forged Machinist Helm
              89175933, // Forged Machinist Gauntlets
              866063619, // Forged Machinist Plate
              2413328031, // Forged Machinist Greaves
              4059853946 // Forged Machinist Mark
            ]
          },
          {
            name: 'Warlock Armor',
            season: 5,
            items: [
              2389815461, // Annealed Shaper Crown
              3128915572, // Annealed Shaper Gloves
              2153602188, // Annealed Shaper Robes
              3416654206, // Annealed Shaper Boots
              91359169 // Annealed Shaper Bond
            ]
          },
          {
            name: 'Extras',
            season: 5,
            items: [
              2960983142, // Armory Forged Shell
              2960983143, // Fusion Matrix Shell
              2960983140, // Futurecraft Shell
              3317837689, // Anti-Paladin
              2719140312, // The Platinum Starling
              4185095559, // Might of Volundr
              956685247, // Vengeance of Volundr
              4185095558, // Gofannon's Hammer
              2944769992, // Gofannon's Fire
              4185095557, // Tear of Izanami
              3491436641, // Blood of Izanami
              4185095556, // Steel of Bergusia
              3715790138, // Blade of Bergusia
              4181232540, // Hubris of Niobe
              2083630698, // Obsidian Dreams
              3650581584 // New Age Black Armory
            ]
          }
        ]
      },
      {
        name: _(
          'DestinyRecordDefinition[3688903951].displayProperties.name',
          'Raid: Last Wish'
        ),
        id: 'YEAR_TWO_LAST_WISH',
        description: _(
          'DestinyCollectibleDefinition[3471068543].sourceString',
          'Last Wish raid.'
        ),
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
            name: 'Hunter Armor',
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
            name: 'Titan Armor',
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
            name: 'Warlock Armor',
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
              1059304051, // Wish No More
              1511214613, // The Winding Tower (Emblem)
              1511214612, // Castle in the Clouds (Emblem)
              3668669364 // Dreaming Spectrum (Shader)
            ]
          },
          
        ]
      },
      {
        name: 'Raid: Scourge of the Past',
        id: 'YEAR_TWO_RAID_BLACK_ARMORY',
        description: 'Found in the "Scourge of the Past" raid lair.',
        sections: [
          {
            name: 'Hunter Armor',
            season: 5,
            items: [
              350056552, // Bladesmith's Memory Mask
              3992358137, // Bladesmith's Memory Grips
              1917693279, // Bladesmith's Memory Vest
              2589473259, // Bladesmith's Memory Strides
              3164851950 // Bladesmith's Memory Cloak
            ]
          },
          {
            name: 'Titan Armor',
            season: 5,
            items: [
              2921334134, // Bulletsmith's Ire Helm
              4125324487, // Bulletsmith's Ire Gauntlets
              2530113265, // Bulletsmith's Ire Plate
              2878130185, // Bulletsmith's Ire Greaves
              388999052 // Bulletsmith's Ire Mark
            ]
          },
          {
            name: 'Warlock Armor',
            season: 5,
            items: [
              1624906371, // Gunsmith's Devotion Crown
              2762445138, // Gunsmith's Devotion Gloves
              4238134294, // Gunsmith's Devotion Robes
              3163683564, // Gunsmith's Devotion Boots
              3567761471 // Gunsmith's Devotion Bond
            ]
          },
          {
            name: 'Extras',
            season: 5,
            items: [
              3317837688, // Always on Time
              3931192718, // Recovered Memories
              2557722678 // Midnight Smith
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
          'DestinyPlaceDefinition[975684424].displayProperties.name',
          'The Tangled Shore'
        ),
        id: 'year-two-tangled-shore',
        description: _(
          'DestinyCollectibleDefinition[1350431641].sourceString',
          'Complete activities and earn rank-up packages on the Tangled Shore.'
        ),
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
            name: 'Hunter Armor',
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
            name: 'Titan Armor',
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
            name: 'Warlock Armor',
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
            name: "Eliminated Barons' Armor",
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
              1671775166, // Wing of the Crow
              1671775167, // Untangled
              4085986809, // Secret Treasure
              1226584228, // Tangled Rust
              1226584229 // Tangled Bronze
            ]
          }
        ]
      },
      {
        name: _(
          'DestinyPlaceDefinition[2877881518].displayProperties.name',
          'The Dreaming City'
        ),
        id: 'year-two-dreaming-city',
        description: _(
          'DestinyCollectibleDefinition[1350431640].sourceString',
          'Complete activities and earn rank-up packages in the Dreaming City.'
        ),
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
            name: 'Hunter Armor',
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
            name: 'Titan Armor',
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
            name: 'Warlock Armor',
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
              2844014413, // Pallas Galliot
              3352019292, // Secret Victories
              3118323620, // Drink at the Well
              3118323621 // Transcendent
            ]
          }
        ]
      },
    ]
  },
  {
    name: 'Holiday & Special Events',
    sets: [
      {
        name: 'Festival of the Lost',
        id: 'YEAR_TWO_FESTIVAL_OF_THE_LOST',
        big: false,
        sections: [
          {
            name: 'Weapons',
            season: 4,
            items: [
              3829285960 // Horror Story
            ]
          },
          {
            name: 'Hunter Armor',
            season: 4,
            items: [
              3448772677, // Skerren Corvus Mask
              4187872788, // Skerren Corvus Grasps
              654307116, // Skerren Corvus Vest
              4051153950, // Skerren Corvus Strides
              3352962401 // Skerren Corvus Cloak
            ]
          },
          {
            name: 'Titan Armor',
            season: 4,
            items: [
              2253976433, // Lustrous Chromite Helm
              870527944, // Lustrous Chromite Gauntlets
              2800372416, // Lustrous Chromite Plate
              1547512994, // Lustrous Chromite Greaves
              1727527805 // Lustrous Chromite Mark
            ]
          },
          {
            name: 'Warlock Armor',
            season: 4,
            items: [
              4044559530, // Liminal Voyager Hood
              4050120691, // Liminal Voyager Gloves
              1575548701, // Liminal Voyager Robes
              3785074629, // Liminal Voyager Boots
              3037536592 // Liminal Voyager Bond
            ]
          },
          {
            name: 'Masks',
            season: 4,
            items: [
              1138577659, // Glitterball Mask
              1138577658, // Colonel Mask
              1441415180, // Master Rahool Mask
              1441415182, // Traveler Mask
              1441415178, // Lord Shaxx Mask
              1441415181, // Petra Venj Mask
              1441415179, // Dominus Ghaul Mask
              1441415175, // Jade Rabbit Mask
              1441415177, // Will of the Thousands Mask
              1441415174, // Scorn Mask
              1441415176, // Emperor Calus Mask
              1441415183 // Dark Prince Mask
            ]
          },
          {
            name: 'Emotes',
            season: 4,
            items: [
              2024188850, // Heroic Guitarist
              171748061, // Summoning Dance
              937162783, // Magnificent Dance
              3665594271 // Spell of Abolition
            ]
          },
          {
            name: 'Ghosts',
            season: 4,
            items: [
              1833569877, // Okular Fortitude Shell
              1833569876, // Nine Lives Shell
              1833569879, // Stonecraft's Amalgam Shell
              4283023982, // Quondam Shell
              4283023983, // Angora Raider Shell
              4283023980, // Canaan's Harvest Shell
              4283023981, // Rigg's Vortex Shell
              4283023978, // The Lycan's Mire Shell
              4283023979 // Seal of Troika Shell
            ]
          },
          {
            name: 'Ghost Projections',
            season: 4,
            items: [
              1771869769, // Chiroptera Projection
              1771869768, // Spectral Projection
              1771869771, // Spinneret Projection
              1771869770, // Carved Projection
              1771869773, // Arachnid Projection
              1771869772, // Remembrance Projection
              1771869775, // Unlucky Projection
              1771869774 // Phrygian Projection
            ]
          },
          {
            name: 'Ships',
            season: 4,
            items: [
              1721185807, // Infected Seeker
              1721185806, // Aerial Shroud
              1473368764, // Three to Eight
              1473368765, // Uncrowned Progenitor
              1473368766, // The First Domino
              1473368767, // Stronger Than Now
              1473368760, // Stained Shrapnel
              1473368761 // Xenon Direct
            ]
          },
          {
            name: 'Sparrows',
            season: 4,
            items: [
              1836636207, // Winchester's Ruin
              2277536122, // Insurgent's Spur
              2277536123, // Cetacean Wing
              2277536120 // Bishop's Run
            ]
          },
          {
            name: 'Extras',
            season: 4,
            items: [
              2176571298, // Nightmare's End (Emblem)
              2176571299, // Deep in the Woods (Emblem)
              4224972854, // Dark Fluorescence (Shader)
              4224972855, // Shadowstrike (Shader)
              566732136, // Amaranth Atrocity (Shader)
              2574262861, // Soulsknot (Transmat Effect)
              2574262860 // Arachnophile (Transmat Effect)
            ]
          }
        ]
      },
      {
        name: 'The Dawning',
        id: 'YEAR_TWO_THE_DAWNING',
        big: false,
        sections: [
           {
            name: 'Weapons',
            season: 5,
            items: [
              66875353 // Avalanche
            ] 
          },
          {
            name: 'Hunter Armor',
            season: 5,
            items: [
              2891490654, // Frostveil Mask
              1695429263, // Frostveil Grasps
              1987263977, // Frostveil Vest
              2311506225, // Frostveil Boots
              3301429924 // Frostveil Cloak
            ]
          },
          {
            name: 'Titan Armor',
            season: 5,
            items: [
              437421244, // Froststrike Helm
              1792195381, // Froststrike Gauntlets
              1280755883, // Froststrike Plate
              3368317463, // Froststrike Greaves
              3932439362 // Froststrike Mark
            ]
          },
          {
            name: 'Warlock Armor',
            season: 5,
            items: [
              671247011, // Frostreach Hood
              1767312242, // Frostreach Gloves
              2702372534, // Frostreach Robes
              2168550540, // Frostreach Boots
              2073576287 // Frostreach Bond
            ]
          },
          {
            name: 'Emotes',
            season: 5,
            items: [
              1708415886, // Baking Cookies
              3510138048, // Protecting Teammates
              2799886702, // Comfort Dance
              2556098840, // Fist Bump
              3166802179, // Chest Bump
              3539322898 // High Five
            ]
          },
          {
            name: 'Ghosts',
            season: 5,
            items: [
              4031340274, // True North Shell
              4031340275, // Hard-Packed Shell
              1028757552, // Ternion Honor Shell
              1028757553, // Transhedron Shell
              1028757554, // Frozen Amaryllis Shell
              1028757555, // Sibyl Shell
              1028757556, // Maelstrom's Auge Shell
              1028757557, // Kabuto Shell
              1028757558, // Amethyst Spine Shell
              1028757559, // Ufsilon's Rune Shell
              1028757567 // Sunseeker Shell
            ]
          },
                    {
            name: 'Ghost Projections',
            season: 5,
            items: [
              611329864, // Package Projection
              611329865, // Cocoa Projection
              611329868, // Cupcake Projection
              611329869, // Dawning Projection
              611329870, // Flickering Projection
              611329871 // Garland Projection
            ]
          },
          {
            name: 'Sparrows',
            season: 5,
            items: [
              1847708611 // Dawning Cheer
            ]
          },
          {
            name: 'Ships',
            season: 5,
            items: [
              855351524, // Glad Tidings
              855351525, // Home Away
              1287851098, // Affinity's Gift
              1502135233, // Celestial Tour
              1502135240, // Flight of Fancy
              1502135241, // Cold Snap
              1502135242, // In With the New
              1502135243, // Classical Nova
              1502135244, // Whetted Resolution
              1502135246, // Crux Unraveled
              1502135247 // Bird of Peace
            ]
          },
          {
            name: 'Extras',
            season: 5,
            items: [
              3136552544, // Holiday Treats (Emblem)
              3136552545, // Delicious Benefactor (Emblem)
              3328839466, // Resilient Laurel (Shader)
              3328839467, // Aniline Shock (Shader)
              2774782768, // Shower of Gifts (Transmat Effect)
              2774782769, // Howling Blizzard (Transmat Effect)
              3012249670, // Shining Winter (Transmat Effect)
              3012249671 // Cold and Bright (Transmat Effect)
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
        name: _(
          'DestinyVendorDefinition[3163810067].displayProperties.name',
          'Legendary Engram'
        ),
        description: _(
          'DestinyCollectibleDefinition[256984755].sourceString',
          'Open Legendary engrams and earn faction rank-up packages.'
        ),
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
            name: 'Hunter Armor',
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
            name: 'Titan Armor',
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
            name: 'Warlock Armor',
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
        name: _(
          'DestinyFactionDefinition[1393733616].displayProperties.name',
          'Eververse'
        ),
        id: 'YEAR_TWO_EVERVERSE',
        description: _(
          'DestinyCollectibleDefinition[764786884].sourceString',
          'Seasonal Bright Engrams.'
        ),
        big: true,
        sections: [
          {
            name: 'Armor',
            season: 4,
            itemGroups: [
              [
                2685109601, // Dragonfly Regalia Mask',
                3523029112, // Dragonfly Regalia Grasps
                190167440, // Dragonfly Regalia Vest
                1558296754, // Dragonfly Regalia Strides
                3412289997 // Dragonfly Regalia Wings
              ],
              [
                1961788365, // Dragonfly Regalia Helm
                2614454204, // Dragonfly Regalia Gauntlets
                2634286116, // Dragonfly Regalia Plate
                2000262854, // Dragonfly Regalia Greaves
                3378116217 // Dragonfly Regalia Mark
              ],
              [
                3516622758, // Dragonfly Regalia Mandible
                2530582647, // Dragonfly Regalia Reaches
                4118548161, // Dragonfly Regalia Robes
                44150041, // Dragonfly Regalia Boots
                606085916 // Dragonfly Regalia Bond
              ]
            ]
          },
          {
            name: 'Armor',
            season: 5,
            itemGroups: [
              [
                2754217990, // Vanguard Dare Casque
                1768177879, // Vanguard Dare Grips
                3422717473, // Vanguard Dare Vest
                3576712697, // Vanguard Dare Boots
                4205222524 // Vanguard Dare Cloak
              ],
              [
                2613761000, // Star-Crossed Helm
                1961095289, // Star-Crossed Fists
                1510035423, // Star-Crossed Heart
                558210411, // Star-Crossed Footsteps
                2757194094 // Star-Crossed Mark
              ],
              [
                773780651, // Symmetrists' Mask
                3349428378, // Symmetrists' Palms
                3634634222, // Symmetrists' Habit
                776863956, // Symmetrists' Balance
                82115767 // Bond of Reciprocity
              ]
            ]
          },
          {
            name: 'Emotes',
            season: 4,
            items: [
              2611996036, // All Mine'
              1863079869, // Red Card'
              28673365, // Poultry Petting'
              132405572, // All Alone'
              704532774, // Sad Trombone'
              1332836182, // Unbridled Enthusiasm
              3256616328, // Accidental Dance
              4080789277, // Beguiling Dance'
              2604685098, // Linear Fusion Dance'
              1036776535, // Denial Dance'
              1338552830, // Potential Dance'
              1314734302, // Smooth Dance'
              2748215252, // Awkward Greeting'
              2217132045, // Do Not Want'
              503951839, // What Is That?!'
              896553940, // Lucky Shot'
              448262266, // Rev It Up'
              1267161032 // Warm Up
            ]
          },
          {
            name: 'Emotes',
            season: 5,
            items: [
              2480779718, // Pyrrhic Victory
              1280540149, // Let's Chat
              815877596, // Nothing Is Wrong
              4025684881, // S'mores
              1552953172, // Explosive Dance
              985639543, // Duel
              3893300466, // Floating Dance
              1725443969, // Competitive Dance
              2760383682, // Ska Dance
              2346609008, // Cringe
              1740156933, // Get Out
              2005133719, // Cheeky Celebration
              2528830834, // Oh Snap
              1372151242, // Silly Salute
              2321189501 // You
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
              374922810, // Spectral Circuit Shell
              374922811, // Eyeball Shell
              1625672313, // Mansansas Shell
              1625672312, // Atlantis Shell
              1625672315 // Chevron Shell
            ]
          },
          {
            name: 'Ghosts',
            season: 5,
            items: [
              227918506, // Rust Punk Shell
              227918507, // Neon Helix Shell
              227918504, // Future Perfect Shell
              227918505, // Sanctum Plate Shell
              4214004319, // Age of Tomorrow Shell
              4214004318, // Lustrous Onyx Shell
              4214004317, // Buzzing Drone Shell
              4214004316, // Dark Days Shell
              4214004315, // Aqua Tusk Shell
              4214004314, // Brilliant Starfish Shell
              4214004313, // Eye of the Storm Shell
              4214004311, // Aero Dart Shell
              4214004310, // Path Followed Shell
              3308716490, // Techno Robin Shell
              3308716491, // Valor Chevron Shell
              3308716488, // Classic Waveform Shell
              3308716489, // Audiophile Shell
              3308716494, // Autumn Gloss Shell
              3308716495 // Eight Ball Shell
            ]
          },
          {
            name: 'Ghost Projections',
            season: 4,
            items: [
              3148574213, // Horned Horse Projection
              3148574212, // Sovereign Projection
              3148574215, // Fortunate Projection
              3148574214, // Jeweled Projection
              3148574209, // Beastly Projection
              3148574208, // Vanguard Projection
              3148574211, // Crucible Projection
              3148574210, // Jade Rabbit Projection
              3148574221, // SUROS Projection
              3148574220, // Häkke Projection
              1927164028, // Electrostatic Projection
              1927164029 // Tex Mechanica Projection
            ]
          },
          {
            name: 'Ghost Projections',
            season: 5,
            items: [
              3673160716, // Three as One Projection
              3673160717, // Rasmussen Projection
              3673160718, // Meyrin Projection
              3673160719, // Satou Projection
              2233846239, // Wise Owl Projection
              2233846238, // Artist's Palette Projection
              2233846237, // Lost Sector Projection
              2233846236, // Taken King Projection
              2233846235, // Parthenon Projection
              2233846234, // Quill and Ink Projection
              2233846233, // Lost Treasure Projection
              2233846232 // Clashing Projection
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
              1092458451, // Jewel of Saturn
              1092458450, // Tickled Catastrophe
              1092458449, // Astera Blade
              3600237170, // Temperance Moon
              3600237172, // Beautiful Gravities
              3600237173, // Where Stars Collide
              3600237174, // Bicameral Promise
              3600237175, // Last Sunset
              3600237176, // Quantum Cartographer
              3600237177 // In Medias Res
            ]
          },
          {
            name: 'Ships',
            season: 5,
            items: [
              2417017736, // unsecured/OUTCRY
              2417017737, // Ada-1's Lone Wolf
              2417017738, // Ódrerir
              749977229, // Forgotten Vortex
              749977228, // Inky Daydream
              3941922388, // The People's Pride
              3941922389, // Technical Meltdown
              3941922390, // Momentum Occasion
              3941922391, // Galaxy Kayak
              749977231, // Grim Foxx
              749977230, // Turbo Hammer
              749977225, // Dream Streak
              749977224, // Granite Burrow
              749977227, // Cosmo Jumper
              749977226, // Azul Blade
              749977221, // Ruby Slice
              749977220 // Cautious Optimism
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
              1264663101, // Manta Esperanta
              1264663100, // Battle-Shrike
              1264663103, // Gossamer Longshot
              2285214172, // Jagged Sunstreak
              2285214173, // Majuscule Tide
              2285214171, // Thermal Runaway
              2285214168, // Endymion Cavalcade
              2285214169, // Swiftsong
              2285214166, // Mappa Mundarum
              2285214167 // Jubilee Pronto
            ]
          },
          {
            name: 'Sparrows',
            season: 5,
            items: [
              3268592500, // Approaching Infinity
              3268592502, // Burnout
              3268592503, // The Bronco
              4085575827, // Unraveling Star
              4085575826, // Swiftrook
              3964057062, // Inexorable
              3964057063, // Juliet Windy
              3964057060, // Summer's Altar
              3964057061, // Jupiter Midnight
              4085575825, // Widen the Sky
              4085575824, // Vega Wave
              4085575831, // Where I Belong
              4085575830, // Gravity Maestro
              4085575829, // Cosmonaut Galahad
              4085575828, // Eidolon Bird
              4085575835, // Spinning Spinning
              4085575834 // Pegasus Bravo
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
          },
          {
            name: 'Shaders',
            season: 5,
            items: [
              2644588986, // Deep-Sea Jaunt
              2644588987, // Temperature Wash
              2644588988, // Lilac Bombast
              2644588989, // Vibrant Beach
              2644588990, // Chalco's Finery
              2644588991 // Sunrise Warrior
            ]
          },
          {
            name: 'Transmat Effects',
            season: 4,
            items: [
              1836879401, // Corrupt Ether
              1836879400, // Reef Awoken
              1836879403, // Reef Shimmer
              1836879402 // Reef Oracle
            ]
          },
          {
            name: 'Transmat Effects',
            season: 5,
            items: [
              1866581851, // Signal Processed
              1866581850, // Only the Finest
              1866581849, // Guiding Light
              1866581848 // The Past Unearthed
            ]
          }
        ]
      }
    ]
  }
]: SetPage);
