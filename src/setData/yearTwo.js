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
            name: 'Weapons',
            season: 6,
            items: [
              834081972 //  Service Revolver
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
              2390666069, // High-Risk, High-Reward (Emblem)
              1075647353, // Vanguard Terminus (Emblem)
              2935851862, // Struck a Nerve (Emblem)
              2294983474, // Honor of the Vanguard (Emblem)
              2294983475, // Strikes of All Stripes (Emblem)
              1987790789, // After the Nightfall (Emblem)
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
          },
          {
            name: 'Extras',
            season: 6,
            items: [
              3215252549 // Determination
            ]
          },
          {
            name: 'Extras',
            season: 7,
            items: [
              1661191186, // DISDAIN FOR GOLD
              2523776413, // VANGUARD STEEL
              2523776412 // VANGUARD BURNISHED STEEL
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
            name: 'Weapons',
            season: 6,
            items: [
              188882152 // Last Perdition
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
          },
          {
            name: 'Extras',
            season: 6,
            items: [
              2632846356 // Rain of Ashes
            ]
          },
          {
            name: 'Extras',
            season: 7,
            items: [
              1661191197, // DISDAIN FOR GLITTER
              3928440584, // CRUCIBLE CARMINE
              3928440585 // CRUCIBLE REDJACK
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
            name: 'Prime Weapons',
            season: 6,
            items: [
              3116356268, // Spare Rations
              299665907, // Outlast
              3504336176, // Night Watch
              755130877, // Last Man Standing
              2199171672, // Lonesome
              1115104187, //  Sole Survivor
              2744715540 // Bug-Out Bag
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
          },
          {
            name: 'Prime Extras',
            season: 6,
            items: [
              2868525742, // The Reaper
              2868525741, // The Invader
              2868525740, // The Collector
              2868525743, // The Sentry
              3808901541, // Viper Strike
              3735277403 // Prime Palette
            ]
          },
          {
            name: 'Extras',
            season: 7,
            items: [
              1661191187, // MISTRUST OF GIFTS
              2224920149, // GAMBIT STEEL
              2224920148 // GAMBIT BLACKGUARD
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
            name: 'Weapons',
            season: 6,
            items: [
              930590127, // The Wizened Rebuke
              2108920981 // Orewing's Maul
            ]
          },
          {
            name: 'Weapons',
            season: 7,
            items: [
              2326716489, // GUNNORA'S AXE
              136525518 // SHINING SPHERE
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
            name: 'Hunter Armor',
            season: 6,
            items: [
              1618191618, // Iron Symmachy Mask
              957732971, // Iron Symmachy Grips
              3112906149, // Iron Symmachy Vest
              2049490557, // Iron Symmachy Strides
              2234855160 // Iron Symmachy Cloak
            ]
          },
          {
            name: 'Hunter Armor',
            season: 7,
            items: [
              481390023, // IRON TRUAGE CASQUE
              2723059534, // IRON TRUAGE GRIPS
              4169842018, // IRON TRUAGE VEST
              511170376, // IRON TRUAGE BOOTS
              3818295475 // MANTLE OF EFRIDEET
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
            name: 'Titan Armor',
            season: 6,
            items: [
              1127757814, // Iron Symmachy Helm
              2331748167, // Iron Symmachy Gauntlets
              3420845681, // Iron Symmachy Plate
              1084553865, // Iron Symmachy Greaves
              1279731468 // Iron Symmachy Mark
            ]
          },
          {
            name: 'Titan Armor',
            season: 7,
            items: [
              3379235805, // IRON TRUAGE HELM
              2266122060, // IRON TRUAGE GAUNTLETS
              2850783764, // IRON TRUAGE PLATE
              2911957494, // IRON TRUAGE GREAVES
              4019071337 // RADEGAST'S IRON SASH
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
            name: 'Warlock Armor',
            season: 6,
            items: [
              3147146325, // Iron Symmachy Hood
              1822989604, // Iron Symmachy Gloves
              3543613212, // Iron Symmachy Robes
              3753635534, // Iron Symmachy Boots
              959040145 // Iron Symmachy Bond"
            ]
          },
          {
            name: 'Warlock Armor',
            season: 7,
            items: [
              1854612346, // IRON TRUAGE HOOD
              3625849667, // IRON TRUAGE GLOVES
              1166260237, // IRON TRUAGE VESTMENTS
              1717896437, // IRON TRUAGE LEGS
              4041069824 // TIMUR'S IRON BOND
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
              1162929425, // The Golden Standard (Emblem)
              231533811 // Iron Strength (Shader)
            ]
          },
          {
            name: 'Extras',
            season: 6,
            items: [
              // 1368521327, // Volk-CER (Currently MIA from Loot-Pool)
              2868525736, // The Weight of Guilt (Emblem)
              2868525739, // Heavy as Death (Emblem)
              1987234560 // Iron Ruby (Shader)
            ]
          },
          {
            name: 'Extras',
            season: 7,
            items: [
              3767156788, // The Pacesetter
              1661191199, // GRIZZLED WOLF
              1448664466, // IRON BONE
              1448664467 // IRON GOLD
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
            name: 'Weapon Frames',
            season: 5,
            items: [
              603242241, // Hammerhead
              93253474, // The Ringing Nail
              1449922174, // Tatara Gaze
              2575506895, // Kindled Orchid
              421573768, // The Spiteful Fang
              3843477312, // Blast Furnance
              3704653637 // Stryker's Sure-Hand
            ]
          },
          {
            name: 'Weapons',
            season: 5,
            items: [
              3211806999, // Izanagi's Burden
              3588934839, // Le Monarque
              417164956, // Jötunn
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
            itemGroups: [
              [
                // Ghosts
                2960983142, // Armory Forged Shell
                2960983140, // Futurecraft Shell
                2960983143 // Fusion Matrix Shell
              ],
              [
                // Sparrows / Ships
                3317837689, // Anti-Paladin
                2719140312 // The Platinum Starling
              ],
              [
                // Forge emblems
                4185095559, // Might of Volundr
                4185095558, // Gofannon's Hammer
                4185095557, // Tear of Izanami
                4185095556 // Steel of Bergusia
              ],
              [
                // Triumph bounty emblems
                956685247, // Vengeance of Volundr
                2944769992, // Gofannon's Fire
                3491436641, // Blood of Izanami
                3715790138 // Blade of Bergusia
              ],
              [
                1347384482, // Meyrin's Vision
                1347384481, // Satou's Secret
                1347384483 // Rasmussen's Gift
              ],
              [
                // Misc
                4181232540, // Hubris of Niobe
                2083630698, // Obsidian Dreams
                3650581584, // New Age Black Armory
                3650581585, // Refurbished Black Armory
                3650581586, // Rasmussen Clan
                3650581587, // House of Meyrin
                3650581588, // Satou Tribe
                3650581589 // Bergusian Night
              ]
            ]
          }
        ]
      },
      {
        name: 'Menagerie',
        description: 'Acquired from the Menagerie.',
        id: 'YEAR_TWO_MENAGERIE',
        sections: [
          {
            name: 'Weapons',
            season: 7,
            items: [
              2429822977, // AUSTRINGER
              2919334548, // IMPERIAL DECREE
              4124357815, // THE EPICUREAN
              79075821, // DRANG (BAROQUE)
              4190932264, // BELOVED
              174192097, // CALUS MINI-TOOL
              1642384931 // FIXED ODDS
            ]
          },
          {
            name: 'Hunter Weapon & Armor',
            season: 7,
            itemGroups: [
              [
                2172333833, // EXODUS DOWN MASK
                3875829376, // EXODUS DOWN GRIPS
                126418248, // EXODUS DOWN VEST
                2953649850, // EXODUS DOWN STRIDES
                2252973221 // EXODUS DOWN CLOAK
              ],
              [
                906236408, // OPULENT STALKER MASK
                1370039881, // OPULENT STALKER GRIPS
                3759327055, // OPULENT STALKER VEST
                1661981723, // OPULENT STALKER STRIDES
                1135872734 // OPULENT STALKER CLOAK
              ],
              [
                569799275 // GOLDTUSK
              ]
            ]
          },
          {
            name: 'Titan Weapon & Armor',
            season: 7,
            itemGroups: [
              [
                582151075, // EXODUS DOWN HELM
                1678216306, // EXODUS DOWN GAUNTLETS
                1156448694, // EXODUS DOWN
                2079454604, // EXODUS DOWN GREAVES
                527652447 // EXODUS DOWN MARK
              ],
              [
                1420117606, // OPULENT DUELIST HELM
                392500791, // OPULENT DUELIST GAUNTLETS
                2856582785, // OPULENT DUELIST PLATE
                1776578009, // OPULENT DUELIST GREAVES
                4105225180 // OPULENT DUELIST MARK
              ],
              [
                569799273 // THRONE-CLEAVER
              ]
            ]
          },
          {
            name: 'Warlock Weapon & Armor',
            season: 7,
            itemGroups: [
              [
                2731698402, // EXODUS DOWN HOOD
                2029766091, // EXODUS DOWN GLOVES
                2218838661, // EXODUS DOWN ROBES
                3545981149, // EXODUS DOWN BOOTS
                874856664 // EXODUS DOWN BOND
              ],
              [
                831222279, // OPULENT SCHOLAR HOOD
                3072788622, // OPULENT SCHOLAR GLOVES
                2026757026, // OPULENT SCHOLAR ROBES
                1285460104, // OPULENT SCHOLAR BOOTS
                1250649843 // OPULENT SCHOLAR BOND
              ],
              [
                569799274 // DEATH'S RAZOR
              ]
            ]
          },
          {
            name: 'Extras',
            season: 7,
            items: [
              3176509806, // Árma Mákhēs
              3875444086, // The Emperor's Chosen
              1661191194, // A Hall of Delights
              1661191195, // THE IMPERIAL MENAGERIE
              3841416152, // Golden Empire
              3841416153, // Goldleaf
              3841416154, // SHADOW GILT
              3841416155 // Cinderchar
            ]
          }
        ]
      },
      {
        name: 'Tribute Hall',
        description: 'Acquired by Placing Tributes in the Tribute Hall',
        id: 'YEAR_TWO_TRIBUTE_HALL',
        sections: [
          {
            name: 'Extras',
            season: 7,
            items: [
              377681571, // X Marks the Spot
              1661191192 // The Tribute Hall
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
          }
        ]
      },
      {
        name: 'Raid: Scourge of the Past',
        id: 'YEAR_TWO_RAID_BLACK_ARMORY',
        description: _(
          'DestinyCollectibleDefinition[982798874].sourceString',
          'Found in the "Scourge of the Past" raid.'
        ),
        sections: [
          {
            name: 'Weapons',
            season: 5,
            items: [
              2376481550, // Anarchy
              1931556011, // No Feelings
              1664372054, // Threat Level
              2753269585, // Tempered Dynamo
              2186258845 // Bellowing Giant
            ]
          },
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
      },
      {
        name: 'Raid: Crown of Sorrow',
        id: 'YEAR_TWO_RAID_PENUMBRA',
        description: ('DestinyCollectibleDefinition[3110698812].sourceString',
          'Acquired from the raid "Crown of Sorrow.'),
        sections: [
          {
            name: 'Weapons',
            season: 7,
            items: [
              3110698812, // TARRABAH
              1286686760, // GAHLRAN'S RIGHT HAND
              2338088853, // CALUSEA NOBLESSE
              3861448240, // EMPEROR'S COURTESY
              1496419775 // BANE OF SORROW
            ]
          },
          {
            name: 'Hunter Armor',
            season: 7,
            items: [
              1999427172, // SHADOW'S MASK
              1946621757, // SHADOW'S GRIPS
              3483984579, // SHADOW'S VEST
              17280095, // SHADOW'S STRIDES
              2765688378 // SHADOW'S CLOAK
            ]
          },
          {
            name: 'Titan Armor',
            season: 7,
            items: [
              1434870610, // SHADOW'S HELM
              1901223867, // SHADOW'S GAUNTLETS
              1862963733, // SHADOW'S PLATE
              309687341, // SHADOW'S GREAVES
              560455272 // SHADOW'S MARK
            ]
          },
          {
            name: 'Warlock Armor',
            season: 7,
            items: [
              1481751647, // SHADOW'S MIND
              1457195686, // SHADOW'S GLOVES
              2023695690, // SHADOW'S ROBES
              974648224, // SHADOW'S BOOTS
              2194479195 // SHADOW'S BOND
            ]
          },
          {
            name: 'Extras',
            season: 7,
            items: [
              947448544, // Shadow of Earth Shell
              1661191193, // CROWN OF SORROW
              2027598066, // IMPERIAL OPULENCE
              2027598067 // IMPERIAL DRESS
            ]
          }
        ]
      }
    ]
  },
  {
    name: 'The Reckoning',
    sets: [
      {
        name: 'Illicit Set',
        description:
          'The Gambit Prime Illicit armor, obtained from The Reckoning Tier 1',
        id: 'RECKONING_ILLICIT',
        sections: [
          {
            name: 'Hunter Armor',
            season: 6,
            itemGroups: [
              common.RECKONING_ILLICIT_COLLECTOR_HUNTER,
              common.RECKONING_ILLICIT_SENTRY_HUNTER,
              common.RECKONING_ILLICIT_INVADER_HUNTER,
              common.RECKONING_ILLICIT_REAPER_HUNTER
            ]
          },
          {
            name: 'Titan Armor',
            season: 6,
            itemGroups: [
              common.RECKONING_ILLICIT_COLLECTOR_TITAN,
              common.RECKONING_ILLICIT_SENTRY_TITAN,
              common.RECKONING_ILLICIT_INVADER_TITAN,
              common.RECKONING_ILLICIT_REAPER_TITAN
            ]
          },
          {
            name: 'Warlock Armor',
            season: 6,
            itemGroups: [
              common.RECKONING_ILLICIT_COLLECTOR_WARLOCK,
              common.RECKONING_ILLICIT_SENTRY_WARLOCK,
              common.RECKONING_ILLICIT_INVADER_WARLOCK,
              common.RECKONING_ILLICIT_REAPER_WARLOCK
            ]
          }
        ]
      },
      {
        name: 'Outlawed Set',
        description:
          'The Gambit Prime Outlawed armor & weapons, obtained from The Reckoning Tier 2',
        id: 'RECKONING_OUTLAWED',
        sections: [
          {
            name: 'Weapons (Tier 2 & 3)',
            season: 6,
            items: [
              821154603, // Gnawing Hunger
              715338174, // Just in Case
              736901634 // Doomsday
            ]
          },
          {
            name: 'Hunter Armor',
            season: 6,
            itemGroups: [
              common.RECKONING_OUTLAWED_COLLECTOR_HUNTER,
              common.RECKONING_OUTLAWED_SENTRY_HUNTER,
              common.RECKONING_OUTLAWED_INVADER_HUNTER,
              common.RECKONING_OUTLAWED_REAPER_HUNTER
            ]
          },
          {
            name: 'Titan Armor',
            season: 6,
            itemGroups: [
              common.RECKONING_OUTLAWED_COLLECTOR_TITAN,
              common.RECKONING_OUTLAWED_SENTRY_TITAN,
              common.RECKONING_OUTLAWED_INVADER_TITAN,
              common.RECKONING_OUTLAWED_REAPER_TITAN
            ]
          },
          {
            name: 'Warlock Armor',
            season: 6,
            itemGroups: [
              common.RECKONING_OUTLAWED_COLLECTOR_WARLOCK,
              common.RECKONING_OUTLAWED_SENTRY_WARLOCK,
              common.RECKONING_OUTLAWED_INVADER_WARLOCK,
              common.RECKONING_OUTLAWED_REAPER_WARLOCK
            ]
          }
        ]
      },
      {
        name: 'Notorious Set',
        description:
          'The Gambit Prime Notorious armor & flair, obtained from The Reckoning Tier 3',
        id: 'RECKONING_NOTORIOUS',
        sections: [
          {
            name: 'Hunter Armor',
            season: 6,
            itemGroups: [
              common.RECKONING_NOTORIOUS_COLLECTOR_HUNTER,
              common.RECKONING_NOTORIOUS_SENTRY_HUNTER,
              common.RECKONING_NOTORIOUS_INVADER_HUNTER,
              common.RECKONING_NOTORIOUS_REAPER_HUNTER
            ]
          },
          {
            name: 'Titan Armor',
            season: 6,
            itemGroups: [
              common.RECKONING_NOTORIOUS_COLLECTOR_TITAN,
              common.RECKONING_NOTORIOUS_SENTRY_TITAN,
              common.RECKONING_NOTORIOUS_INVADER_TITAN,
              common.RECKONING_NOTORIOUS_REAPER_TITAN
            ]
          },
          {
            name: 'Warlock Armor',
            season: 6,
            itemGroups: [
              common.RECKONING_NOTORIOUS_COLLECTOR_WARLOCK,
              common.RECKONING_NOTORIOUS_SENTRY_WARLOCK,
              common.RECKONING_NOTORIOUS_INVADER_WARLOCK,
              common.RECKONING_NOTORIOUS_REAPER_WARLOCK
            ]
          },
          {
            name: 'Extras',
            season: 6,
            items: [
              2868525732 // 	Wheel of Fortune
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
                3031114503, // The Gambler's Palm
                1673638926 // The Great Beyond
              ]
            ]
          },
          {
            name: 'Baron Exclusive Gear',
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
      }
    ]
  },
  {
    name: 'Holiday & Special Events',
    sets: [
      {
        name: 'Festival of the Lost',
        id: 'YEAR_TWO_FESTIVAL_OF_THE_LOST',
        description: 'Earned during the seasonal Festival of the Lost event.',
        big: false,
        sections: [
          {
            name: 'Weapon & Ornament',
            season: 4,
            itemGroups: [
              [
                3829285960 // Horror Story
              ],
              [
                796633253 // Prideglass
              ]
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
        description: 'Earned during the seasonal Dawning event.',
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
              3510138048, // Protecting Teammates
              3166802179, // Chest Bump
              2799886702, // Comfort Dance
              2556098840, // Fist Bump
              3539322898 // High Five
            ]
          },
          {
            name: 'Ghosts',
            season: 5,
            items: [
              4031340274, // True North Shell
              4031340275, // Hard-Packed Shell
              1028757559, // Ufsilon's Rune Shell
              1028757558, // Amethyst Spine Shell
              1028757557, // Kabuto Shell
              1028757556, // Maelstrom's Auge Shell
              1028757555, // Sibyl Shell
              1028757554, // Frozen Amaryllis Shell
              1028757553, // Transhedron Shell
              1028757552, // Ternion Honor Shell
              1028757567 // Sunseeker Shell
            ]
          },
          {
            name: 'Ghost Projections',
            season: 5,
            items: [
              611329868, // Cupcake Projection
              611329869, // Dawning Projection
              611329870, // Flickering Projection
              611329871, // Garland Projection
              611329864, // Package Projection
              611329865 // Cocoa Projection
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
              1502135241, // Cold Snap
              1502135240, // Flight of Fancy
              1502135243, // Classical Nova
              1502135242, // In With the New
              1502135244, // Whetted Resolution
              1502135247, // Bird of Peace
              1502135246, // Crux Unraveled
              1502135233, // Celestial Tour
              1287851098 // Affinity's Gift
            ]
          },
          {
            name: 'Extras',
            season: 5,
            items: [
              3136552544, // Holiday Treats (Emblem)
              3136552545, // Delicious Benefactor (Emblem)
              3328839467, // Aniline Shock (Shader)
              3328839466, // Resilient Laurel (Shader)
              2774782768, // Shower of Gifts (Transmat Effect)
              2774782769, // Howling Blizzard (Transmat Effect)
              3012249671, // Cold and Bright (Transmat Effect)
              3012249670 // Shining Winter (Transmat Effect)
            ]
          }
        ]
      },
      {
        name: 'Crimson Days',
        id: 'YEAR_TWO_CRIMSON_DAYS',
        description: _(
          'DestinyCollectibleDefinition[2772970661].sourceString',
          'Earned during the seasonal Crimson Days event.'
        ),
        big: false,
        sections: [
          {
            name: 'Weapons',
            season: 5,
            items: [
              2009106091 // The Vow
            ]
          },
          {
            name: 'Ghosts',
            season: 5,
            items: [
              679887739 // Sugary Shell
            ]
          }
        ]
      },
      {
        name: 'The Revelry',
        id: 'YEAR_TWO_THE_REVELRY',
        description: 'Earned during the seasonal Revelry event.',
        big: false,
        sections: [
          {
            name: 'Hunter Armor & Ornaments',
            season: 6,
            itemGroups: [
              [
                53761356, // Vernal Growth Mask
                3503026437, // Vernal Growth Grips
                1165027035, // Vernal Growth Vest
                3425898631, // Vernal Growth Strides
                4199694578 // Vernal Growth Cloak
              ],
              [
                1232802389, // Inaugural Revelry Mask
                4203612964, // Inaugural Revelry Grips
                862152988, // Inaugural Revelry Vest
                1839291598, // Inaugural Revelry Strides
                2572547217 // Inaugural Revelry Cloak
              ],
              [
                1027203767, //  Reveler's Wings
                1027203766 // Reveler's Antlers
              ]
            ]
          },
          {
            name: 'Titan Armor & Ornaments',
            season: 6,
            itemGroups: [
              [
                1821343040, // Vernal Growth Helm
                3682383633, // Vernal Growth Gauntlets
                4079552711, // Vernal Growth Plate
                3089075939, // Vernal Growth Greaves
                500083158 // Vernal Growth Mark
              ],
              [
                438524081, // Inaugural Revelry Helm
                3350146056, // Inaugural Revelry Gauntlets
                3796358144, // Inaugural Revelry Plate
                156518114, // Inaugural Revelry Greaves
                3148074173 // Inaugural Revelry Mark
              ],
              [
                1685769251, // Reveler's Wings
                1685769250 // Reveler's Antlers
              ]
            ]
          },
          {
            name: 'Warlock Armor & Ornaments',
            season: 6,
            itemGroups: [
              [
                1356657785, // Vernal Growth Hood
                870019568, // Vernal Growth Gloves
                2967148056, // Vernal Growth Robes
                1187078090, // Vernal Growth Boots
                1362642485 // Vernal Growth Bond
              ],
              [
                3738044006, // Inaugural Revelry Hood
                2710427191, // Inaugural Revelry Gloves
                678051457, // Inaugural Revelry Chest
                4094504409, // Inaugural Revelry Boots
                1926693852 // Inaugural Revelry Bond
              ],
              [
                2665176423, // Reveler's Wings
                2665176422 // Reveler's Antlers
              ]
            ]
          },
          {
            name: 'Emotes',
            season: 6,
            items: [
              2422643144, // Perfect Swing
              3946927545, // Stylish Fist Bump
              2873996295, // Ricochet Dance
              4128095381, // Hyped Dance
              3035129091 // Glide Dance
            ]
          },
          {
            name: 'Ghosts',
            season: 6,
            items: [
              286098607, // Ladylike Shell
              286098604, // Lapine Shell
              2179603795, // Hatchling Shell
              2179603794, // Prophet Shell
              2179603793, // Trostland Courier Shell
              2179603792, // Verdant Infinity Shell
              2179603799, // Revelry Courier Shell
              2179603798 // Revelry Masquerade Shell
            ]
          },
          {
            name: 'Ghost Projections',
            season: 6,
            items: [
              3105972942, // Dragonfly Projection
              3105972943, // Cheese Projection
              3105972940, // Carrot Projection
              3105972941 // Petalled Projection
            ]
          },
          {
            name: 'Sparrows',
            season: 6,
            items: [
              281718534, // Circumpolar Light
              281718535, // Equinoctial Edge
              2717540197, // The Saturnalian
              2717540196, // Saturnalia-DAI-SP1
              2717540199, // Raucous Edge
              2717540198, // The Merry Gunner
              2717540193, // The Festive Hauler
              2717540192 // The Convivial Racer
            ]
          },
          {
            name: 'Ships',
            season: 6,
            items: [
              2459768632, // The Mayfly
              3252358301, // Carouse-CER
              3252358300, // Congregate-IS
              3252358303, // Wassail-CER
              3252358302, // Equatorial Equilibrium
              3252358297, // Bombos-CER
              3252358296 // Wander-CER
            ]
          },
          {
            name: 'Extras',
            season: 6,
            items: [
              2868525733, // Simulant Spring
              2868525738, // Virescent
              2133500860, // Answered Call
              1914989541, // Verdant Chrome
              1914989540, // Verdant Crown
              971728596, // Spring Breeze Effects
              971728597 // Spring Fountain Effects
            ]
          }
        ]
      },
      {
        name: 'Moments of Triumph',
        id: 'YEAR_TWO_MOMENTS_OF_TRIUMPH',
        description: 'Earned during the 2019 Moments of Triumph event.',
        big: false,
        sections: [
          {
            name: 'Extras',
            season: 7,
            items: [
              3823337168, // Lightning Rider
              3514681868, // Solstice Hymnal
              1661191196 // Moments of Triumph 2019
            ]
          }
        ]
      },
      common.SOLSTICE_OF_HEROES_YEAR_2
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
            name: 'Armor',
            season: 6,
            itemGroups: [
              [
                2647162463, // Neoteric Kiyot Mask
                2622606502, // Neoteric Kiyot Grasps
                3532819274, // Neoteric Kiyot Vest
                2140059040, // Neoteric Kiyot Strides
                3703602779 // Neoteric Kiyot Cloak
              ],
              [
                2001565587, // Sunbreak Helm
                3789539490, // Sunbreak Gauntlets
                729400710, // Sunbreak Plate
                2004752092, // Sunbreak Greaves
                1471849583 // Sunbreak Mark
              ],
              [
                1178752364, // Mantle of the Cormorant Blade
                333050149, // Gloves of the Cormorant Blade
                189621627, // Duster of the Cormorant Blade
                680379815, // Boots of the Cormorant Blade
                2841305106 // Bond of the Cormorant Blade
              ]
            ]
          },
          {
            name: 'Armor',
            season: 7,
            itemGroups: [
              [
                3856371784, // Mask of Optimacy
                3203706073, // Arms of Optimacy
                1381620543, // Vest of Optimacy
                1800924363, // Legs of Optimacy
                2628779086 // Cloak of Optimacy
              ],
              [
                1394425388, // INTREPID DISCOVERY MASK
                590299877, // INTREPID DISCOVERY GRIPS
                1855737147, // INTREPID DISCOVERY VEST
                513068903, // INTREPID DISCOVERY STRIDES
                637013970 // INTREPID DISCOVERY CLOAK
              ],
              [
                3938714858, // Helm of Optimacy
                3519818547, // Arms of Optimacy
                1072425053, // Plate of Optimacy
                3254669317, // Legs of Optimacy
                2958870416 // Mark of Optimacy
              ],
              [
                2882705174, // INTREPID EXPLOIT HELM
                4086798823, // INTREPID EXPLOIT GAUNTLETS
                3937103377, // INTREPID EXPLOIT PLATE
                2839604521, // INTREPID EXPLOIT GREAVES
                1837565996 // INTREPID EXPLOIT MARK
              ],
              [
                979292443, // Hood of Optimacy
                2438574026, // Arms of Optimacy
                2859359742, // Robes of Optimacy
                1094905316, // Legs of Optimacy
                2188986759 // Bond of Optimacy
              ],
              [
                2856645651, // INTREPID INQUIRY HOOD
                349652258, // INTREPID INQUIRY GLOVES
                3876766470, // INTREPID INQUIRY ROBES
                2859832156, // INTREPID INQUIRY BOOTS
                324248047 // INTREPID INQUIRY BOND
              ]
            ]
          },
          {
            name: 'Ornaments',
            season: 4,
            itemGroups: [
              [
                3458554860, // Pride of Omolon
                3319386964, // Belvedere
                3071174732, // Machinist's Trove
                2943778709, // Cleans Up Good
                1445854248, // Electric Violet
                3779623011, // Lethal System
                4252160794, // Sneak Attack
                3474614844, // Iridescent Death
                2752106987, // Author of Devastation
                3977461550, // Tangled Outrider
                1206295112, // Aim to Misbehave
                2515377971 // Guardian Angel
              ],
              [
                2854488868, // Loaded Dice
                3892880725, // Credence
                135999390, // Past Is Past
                451772823, // Foretelling
                1954229677, // Next of Kin
                2473664949, // Plunderer
                4292140878, // End of Days"
                3919047492, // Meteor Shower
                714705096, // Dirty Work
                1045979943, // Subatomic Ivory
                439277955, // Eyes Forward
                565852609 // Yes, Queen
              ],
              [
                1702676167, // Victorian Silverhawk
                1590290995, // Turbo-Kickers
                447258238, // Electronic Mindcage
                74694216, // Nephrite Paragon
                2729756765, // Afraid of the Dark
                4135276161 // Transcendent Geometry
              ]
            ]
          },
          {
            name: 'Ornaments',
            season: 5,
            itemGroups: [
              [
                2990167832, // Calus's Promise
                2005782761, // Desert Camo
                346961818, // IKELOS Field Tuning
                1672094182, // SUROS Chrome
                476682455, // One Terrible Scream
                1644978187, // Cuddly Throwback
                2117927723, // Tangled Paladin
                1570516124, // Salute to the Colonel
                2515305906, // Kingmaker
                2004366751, // Haetae's Judgment
                1119316141 // Laconic
              ],
              [
                989739137, // A Bad Run
                1854219966, // Blind Faith
                2690170829, // Never Through
                4150423078, // Unwelcome Visit
                2936629770, // Salt the Fields
                2057077927, // Fell to Earth
                3394132457, // Over and Done With
                586630330 // Aim Is True
              ],
              [
                2580207276, // Augmented Wish
                4192295468, // Rigel Crossroads
                3054468233, // Lordly Homage
                1974045428, // Thanatonaut's Peril
                2662368496, // Eyes of Mercury
                683894655 // Matterflare
              ]
            ]
          },
          {
            name: 'Ornaments',
            season: 6,
            itemGroups: [
              [
                3151260458, // Caution: Heavy Machinery
                3844549116, // Vigil for Saint-14
                2634511221, // Vostok
                1535205434, // Climate Change
                898795824, // The Colony XZ812
                1865779065, // Four-Headed Mongrel
                1473300982, // Red String of Fate
                3009090211 // The Panama Ravine
              ],
              [
                1084411177, // Draws Nigh
                2805728757, // Insomnia
                1226148028, // Ozymandias
                613746953, // Out of Place
                2812946864, // At Any Cost
                2302790381, // The Bunker
                3020192510, // Powerful Statement
                1125119861, // 87% Ennui
                1546799103, // Perfluorocarbon
                1414396215 // Itsy-Bitsy Spider
              ],
              [
                1397707366, // Unyielding
                3542571269, // Thalia's Reach
                2365935989, // Ursus Maritimus
                1505928251, // Otto's Resolve
                164776724, // The Hateful Wish
                159907007 // Ayrin's Swagger
              ]
            ]
          },
          {
            name: 'Ornaments',
            season: 7,
            itemGroups: [
              [
                2257492093, // BAIKONUR
                3763220133, // BARREN WASTES
                2404516638, // CYBERINTELLECT
                3807808621, // DIGITAL OPS
                1321987864, // DREAM OF A NEW WORLD
                1904833599, // RONIN
                2182432903, // STOLEN GOODS
                3838841051, // ULTRAVIOLET
                343223696 // VORACIOUS
              ],
              [
                77772312, // ALONE, TO BE JOINED
                2533050120, // BEGGAR, TO BE FED
                4017323452, // BROKEN BIRD, TO BE HEALED
                403561732, // DEFENSELESS, TO BE ARMED
                3473397300, // KING IN ALL DIRECTIONS
                3199440990, // ROCK-A-BYE
                2512537661, // SHAPESHIFTER
                1546315793, // UNHEARING, TO BE TOLD
                3967294031, // UNLOVED, TO BE CHERISHED
                1069601252 // UNSEEING, TO BE SHOWN
              ],
              [
                3211076406, // BLUED STEEL
                2783100859, // QUEEN COBRA
                1011994721, // JIĀN
                3105540650, // ~FLEX ENHANCE REPLICATE~
                1984736607, // CADUCEUS
                2986573526 // ELECTROMAG STABILIZERS
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
            name: 'Emotes',
            season: 6,
            items: [
              2218275250, // Chair Pop
              2272950849, // Chicken Dinner
              3559259728, // Rock Out
              1652440677, // Cup of Tea
              3217972777, // Respectful Handshake
              2879093413, // Boxer's Dance
              240371989, // Grooving
              442845394, // Cloister Dance
              1552235509, // Newish Dance
              2134292552, // Shake Dance
              3558549449, // Reload
              1005293753, // Directed Plea
              3517258101, // Wasn't Me
              925771554 // Watching You
            ]
          },
          {
            name: 'Emotes',
            season: 7,
            items: [
              4009267290, // CONSULT THE ARCHIVES
              2231816495, // MIRROR MIRROR
              2931525672, // SABRAGE SALUTE
              319183094, // MEDITATIVE MOMENT
              908677920, // STYLISH SIT
              1324309776, // DISCOURAGED
              1081767429, // LINK UP
              854833035, // QUICK HUG
              28833378, // STATIC SHOCK
              2070010145, // BUT YOU
              1668956766, // GIDDY LAUGH
              4179243516, // TIME OUT
              4189539716 // YOU GO AHEAD
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
              4214004312, // Chrome Crab Shell
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
            name: 'Ghosts',
            season: 6,
            items: [
              527607310, // Hissing Silence Shell
              527607309, // Plasma Shell
              527607308, // Sunshot Shell
              2371653985, // Lilac Bell Shell
              2371653986, // Stalwart Shell
              2371653987, // Arch Shell
              2371653988, // Bulwark Shell
              2371653989, // Poison Courier Shell
              2371653990, // Tastemaker Shell
              2371653991, // Worrier Shell
              2371653992, // Vanguard Courier Shell
              2371653993, // City Courier Shell
              3921206146 // Subterfuge Shell
            ]
          },
          {
            name: 'Ghosts',
            season: 7,
            items: [
              443190216, // Void Shell
              443190217, // Kitbash Shell
              443190218, // Arc Shell
              443190219, // Solar Shell
              443190220, // Gyro Shell
              443190221, // PS-1 Shell
              443190222, // Drop Pod Shell
              443190223 // Intrepid Shell
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
            name: 'Ghost Projections',
            season: 6,
            items: [
              403349193, // Treacherous Projection
              403349192, // SIVA Projection
              403349195, // Crane Projection
              403349194, // Viper Projection
              668465162, // Mote Projection
              668465163, // Invade! Projection
              668465164, // Bank! Projection
              668465165, // Collect! Projection
              668465166, // Fight! Projection
              668465167 // Twin Snake Projection
            ]
          },
          {
            name: 'Ghost Projections',
            season: 7,
            items: [
              1295682250, // CHALICE PROJECTION
              1295682249, // CROWN OF SORROW PROJECTION
              1295682255, // DARING HAT PROJECTION
              1295682248, // EMPEROR CALUS PROJECTION
              1295682251, // IMPERIAL BEAST PROJECTION
              3527564902, // BEAST'S PAW PROJECTION
              3527564901, // DROPSHIP PROJECTION
              3527564900, // IMPERIAL AXES PROJECTION
              3527564896, // SALACOT PROJECTION
              3527564903, // TREASURE CHEST PROJECTION
              3527564897 // TREASURE MAP PROJECTION
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
            name: 'Sparrows',
            season: 6,
            items: [
              928095169, // Barebones SL-19
              928095168, // Another Inspired Idea
              928095170, // Praxic Finery
              3330250540, // Sunny Disposition
              3330250541, // Aerolite HW-42
              2816146407, // Bitter Poison
              2816146406, // Beat Patrol
              3330250542, // The Whipcrack
              3330250543, // Spaded Knife
              3330250538, // Sgian Dubh
              3330250539, // Praxic Justice
              3330250532, // Arion
              3330250533 // RJSV 99-40
            ]
          },
          {
            name: 'Sparrows',
            season: 7,
            items: [
              258623688, // BrayTech DREAM9
              25862368, // Clean Sweep
              258623690, // Expedition-JT
              258623691, // The Motherlode
              258623692, // The Grateful Crane
              258623693, // The Calypso
              258623694, // Blood in the Water
              258623695 // One Fell Swoop
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
            name: 'Ships',
            season: 6,
            items: [
              554648944, // Skulking Fox
              554648947, // Threat Display
              4063523622, // Vimana-S
              4063523623, // Reclaimer-IS
              1871791701, // Monument-CER
              1871791700, // Ignition-CER
              4063523621, // Broadcast-IS
              4063523618, // Egbe-01X
              4063523619, // Safe Passage
              4063523616, // Holacanthus
              4063523630, // DSV-Huygens IX
              4063523631 // SCRAP MS-123-88
            ]
          },
          {
            name: 'Ships',
            season: 7,
            items: [
              2964059912, // Transpose JT-24-X
              2964059913, // Chela-N
              2964059914, // Aeshnidae Fixed-Wing
              2964059916, // Bayle's Aerodyne
              2964059917, // Proteus
              2964059918, // Woomera B-5
              2964059919 // The Oviraptor
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
            name: 'Shaders',
            season: 6,
            items: [
              915277997, // Bloody Tooth
              915277996, // Atlantic Rush
              915277995, // Chrome Stock
              915277994, // Verdigris
              915277993, // Reefmade
              915277992 // Warbrick
            ]
          },
          {
            name: 'Shaders',
            season: 7,
            items: [
              1363705632, // First Light
              1363705633, // Atmospheric Glow
              1363705634, // Amethyst Veil
              1363705635, // Coastal Suede
              1363705639 // Royal Welcome
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
          },
          {
            name: 'Transmat Effects',
            season: 6,
            items: [
              1556665148, // Twin Snake Effects
              1556665149, // Jade Coin Effects
              1556665150, // Sterile Neutrino Effects
              1556665151 // Illicit Transmat Effects
            ]
          },
          {
            name: 'Transmat Effects',
            season: 7,
            items: [
              515071961, // Tiger Effects
              515071964, // Eldritch Effects
              515071965, // Darkblade Effects
              515071966, // Loot Chest Effects
              515071967 // Minotaur Effects
            ]
          }
        ]
      }
    ]
  }
]: SetPage);
