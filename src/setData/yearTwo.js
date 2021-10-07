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
              4083045006, // Persuader
              580961571 // Loaded Question
            ]
          },
          {
            name: 'Weapons',
            season: 6,
            items: [
              834081972, //  Service Revolver
              3907337522 // Oxygen SR3
            ]
          },
          {
            name: 'Weapons',
            season: 7,
            items: [
              578459533 // Wendigo GL3
            ]
          },
          {
            name: 'Hunter Armor',
            season: 4,
            items: [
              1524444346, // Vigil of Heroes
              3761819011, // Vigil of Heroes
              178749005, // Vigil of Heroes
              1812185909, // Vigil of Heroes
              2629204288 // Vigil of Heroes
            ]
          },
          {
            name: 'Titan Armor',
            season: 4,
            items: [
              1392054568, // Vigil of Heroes
              273457849, // Vigil of Heroes
              2009892127, // Vigil of Heroes
              3207116971, // Vigil of Heroes
              3722981806 // Vigil of Heroes
            ]
          },
          {
            name: 'Warlock Armor',
            season: 4,
            items: [
              3631862279, // Vigil of Heroes
              1578461326, // Vigil of Heroes
              1108278178, // Vigil of Heroes
              4086100104, // Vigil of Heroes
              332170995 // Vigil of Heroes
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
              195440257, // Play of the Game
              153979396, // Luna's Howl
              153979399, // Not Forgotten
              1161276682 // Redrix's Broadsword
            ]
          },
          {
            name: 'Weapons',
            season: 5,
            items: [
              3356526253, // Wishbringer
              2278995296, // Does Not Compute
              3993415705 // The Mountaintop
            ]
          },
          {
            name: 'Weapons',
            season: 6,
            items: [
              188882152, // Last Perdition
              3354242550 // The Recluse
            ]
          },
          {
            name: 'Weapons',
            season: 7,
            items: [
              654608616 // Revoker
            ]
          },
          {
            name: 'Hunter Armor',
            season: 4,
            items: [
              3153956825, // Wing Contender
              3091776080, // Wing Contender
              1914589560, // Wing Contender
              3408834730, // Wing Contender
              693067797 // Wing Contender
            ]
          },
          {
            name: 'Titan Armor',
            season: 4,
            items: [
              657606375, // Wing Discipline
              2899275886, // Wing Discipline
              2389585538, // Wing Discipline
              687386728, // Wing Discipline
              1613581523 // Wing Discipline
            ]
          },
          {
            name: 'Warlock Armor',
            season: 4,
            items: [
              3684978064, // Wing Theorem
              3441081953, // Wing Theorem
              2286507447, // Wing Theorem
              641063251, // Wing Theorem
              119859462 // Wing Theorem
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
            name: 'Weapons',
            season: 5,
            items: [
              324382200 // Breakneck
            ]
          },
          {
            name: 'Weapons',
            season: 6,
            items: [
              1600633250 // 21% Delirium
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
            name: 'Weapons',
            season: 7,
            items: [
              1584643826 // Hush
            ]
          },
          {
            name: 'Hunter Armor',
            season: 4,
            items: [
              1267361154, // Ancient Apocalypse Mask
              606902507, // Ancient Apocalypse Grips
              1314666277, // Ancient Apocalypse Vest
              1698660093, // Ancient Apocalypse Strides
              436615288 // Ancient Apocalypse Cloak
            ]
          },
          {
            name: 'Titan Armor',
            season: 4,
            items: [
              2002452096, // Ancient Apocalypse Helm
              3863492689, // Ancient Apocalypse Gauntlets
              1811579911, // Ancient Apocalypse Plate
              3694642467, // Ancient Apocalypse Greaves
              2993008662 // Ancient Apocalypse Mark
            ]
          },
          {
            name: 'Warlock Armor',
            season: 4,
            items: [
              754069623, // Ancient Apocalypse Hood
              4122447870, // Ancient Apocalypse Gloves
              725297842, // Ancient Apocalypse Robes
              671423576, // Ancient Apocalypse Boots
              896081219 // Ancient Apocalypse Bond
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
              2936230179, // Iron Remembrance Casque
              4032295410, // Iron Remembrance Grips
              2810038838, // Iron Remembrance Vest
              138566412, // Iron Remembrance Strides
              2181242591 // Cloak of Remembrance
            ]
          },
          {
            name: 'Hunter Armor',
            season: 5,
            items: [
              3624199242, // Iron Fellowship Casque
              3671337107, // Iron Fellowship Grips
              4039932861, // Iron Fellowship Vest
              3406291173, // Iron Fellowship Strides
              1248530160 // Iron Fellowship Cloak
            ]
          },
          {
            name: 'Hunter Armor',
            season: 6,
            items: [
              3875549237, // Iron Symmachy Mask
              2509918852, // Iron Symmachy Grips
              2772262012, // Iron Symmachy Vest
              4057580974, // Iron Symmachy Strides
              4058198769 // Iron Symmachy Cloak
            ]
          },
          {
            name: 'Hunter Armor',
            season: 7,
            items: [
              1495869176, // IRON TRUAGE CASQUE
              1959672649, // IRON TRUAGE GRIPS
              863163983, // IRON TRUAGE VEST
              2251614491, // IRON TRUAGE BOOTS
              2534676958 // MANTLE OF EFRIDEET
            ]
          },
          {
            name: 'Titan Armor',
            season: 4,
            items: [
              2368311917, // Iron Remembrance Helm
              3487011804, // Iron Remembrance Gauntlets
              1177873348, // Iron Remembrance Plate
              2448259942, // Iron Remembrance Greaves
              2387737625 // Mark of Remembrance
            ]
          },
          {
            name: 'Titan Armor',
            season: 5,
            items: [
              391384020, // Iron Fellowship Helm
              3517179757, // Iron Fellowship Gauntlets
              1571959827, // Iron Fellowship Plate
              3763521327, // Iron Fellowship Greaves
              4201843274 // Iron Fellowship Mark
            ]
          },
          {
            name: 'Titan Armor',
            season: 6,
            items: [
              4161524635, // Iron Symmachy Helm
              1325838922, // Iron Symmachy Gauntlets
              3251195262, // Iron Symmachy Plate
              4277137508, // Iron Symmachy Greaves
              2580822279 // Iron Symmachy Mark
            ]
          },
          {
            name: 'Titan Armor',
            season: 7,
            items: [
              682107058, // IRON TRUAGE HELM
              1148460187, // IRON TRUAGE GAUNTLETS
              1779796469, // IRON TRUAGE PLATE
              23061005, // IRON TRUAGE GREAVES
              860168648 // RADEGAST'S IRON SASH
            ]
          },
          {
            name: 'Warlock Armor',
            season: 4,
            items: [
              1466284308, // Iron Remembrance Hood
              297009581, // Iron Remembrance Gloves
              4144779347, // Iron Remembrance Vestments
              1009385327, // Iron Remembrance Legs
              2096711562 // Bond of Remembrance
            ]
          },
          {
            name: 'Warlock Armor',
            season: 5,
            items: [
              2717305289, // Iron Fellowship Hood
              125833536, // Iron Fellowship Gloves
              2522706952, // Iron Fellowship Robes
              3115740538, // Iron Fellowship Boots
              4224804453 // Iron Fellowship Bond
            ]
          },
          {
            name: 'Warlock Armor',
            season: 6,
            items: [
              2645763830, // Iron Symmachy Hood
              3849754183, // Iron Symmachy Gloves
              996946801, // Iron Symmachy Robes
              2602559881, // Iron Symmachy Boots
              3150799884 // Iron Symmachy Bond"
            ]
          },
          {
            name: 'Warlock Armor',
            season: 7,
            items: [
              2321258055, // IRON TRUAGE HOOD
              267960270, // IRON TRUAGE GLOVES
              459833058, // IRON TRUAGE VESTMENTS
              2351038408, // IRON TRUAGE LEGS
              108286515 // TIMUR'S IRON BOND
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
              3423279826, // Mask of the Great Hunt
              3889633083, // Grips of the Great Hunt
              2180477077, // Vest of the Great Hunt
              2298096557, // Strides of the Great Hunt
              877968616 // Cloak of the Great Hunt
            ]
          },
          {
            name: 'Titan Armor',
            season: 4,
            items: [
              3546379828, // Helm of the Great Hunt
              1952647501, // Gauntlets of the Great Hunt
              1146451699, // Plate of the Great Hunt
              2623446543, // Greaves of the Great Hunt
              3351877674 // Mark of the Great Hunt
            ]
          },
          {
            name: 'Warlock Armor',
            season: 4,
            items: [
              1350126011, // Hood of the Great Hunt
              2850984298, // Gloves of the Great Hunt
              4241329310, // Robes of the Great Hunt
              1890196228, // Boots of the Great Hunt
              3570956455 // Bond of the Great Hunt
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
        name: 'Black Armory Forges',
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
              2174117797, // Woven Firesmith Mask
              2913217908, // Woven Firesmith Grips
              1126789516, // Woven Firesmith Vest
              3200956542, // Woven Firesmith Boots
              3359513793 // Woven Firesmith Cape
            ]
          },
          {
            name: 'Titan Armor',
            season: 5,
            items: [
              578189287, // Forged Machinist Helm
              2819858798, // Forged Machinist Gauntlets
              449270146, // Forged Machinist Plate
              607969640, // Forged Machinist Greaves
              3968233427 // Forged Machinist Mark
            ]
          },
          {
            name: 'Warlock Armor',
            season: 5,
            items: [
              2668526660, // Annealed Shaper Crown
              2615721245, // Annealed Shaper Gloves
              2011267747, // Annealed Shaper Robes
              261922239, // Annealed Shaper Boots
              1293074586 // Annealed Shaper Bond
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
              96643258, // Bladesmith's Memory Mask
              2334017923, // Bladesmith's Memory Grips
              300528205, // Bladesmith's Memory Vest
              384384821, // Bladesmith's Memory Strides
              2750983488 // Bladesmith's Memory Cloak
            ]
          },
          {
            name: 'Titan Armor',
            season: 5,
            items: [
              2719710110, // Bulletsmith's Ire Helm
              1989682895, // Bulletsmith's Ire Gauntlets
              3491990569, // Bulletsmith's Ire Plate
              2564183153, // Bulletsmith's Ire Greaves
              977326564 // Bulletsmith's Ire Mark
            ]
          },
          {
            name: 'Warlock Armor',
            season: 5,
            items: [
              583145321, // Gunsmith's Devotion Crown
              2286640864, // Gunsmith's Devotion Gloves
              4092373800, // Gunsmith's Devotion Robes
              940003738, // Gunsmith's Devotion Boots
              1499503877 // Gunsmith's Devotion Bond
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
        name: 'The Reckoning',
        id: 'YEAR_TWO_RECKONING',
        description: `Weapons & Gambit Prime armor, obtained from The Reckoning`,
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
            name: 'Hunter Armor (Tier 1)',
            season: 6,
            itemGroups: [
              common.RECKONING_ILLICIT_COLLECTOR_HUNTER,
              common.RECKONING_ILLICIT_SENTRY_HUNTER,
              common.RECKONING_ILLICIT_INVADER_HUNTER,
              common.RECKONING_ILLICIT_REAPER_HUNTER
            ]
          },
          {
            name: 'Hunter Armor (Tier 2)',
            season: 6,
            itemGroups: [
              common.RECKONING_OUTLAWED_COLLECTOR_HUNTER,
              common.RECKONING_OUTLAWED_SENTRY_HUNTER,
              common.RECKONING_OUTLAWED_INVADER_HUNTER,
              common.RECKONING_OUTLAWED_REAPER_HUNTER
            ]
          },
          {
            name: 'Hunter Armor (Tier 3)',
            season: 6,
            itemGroups: [
              common.RECKONING_NOTORIOUS_COLLECTOR_HUNTER,
              common.RECKONING_NOTORIOUS_SENTRY_HUNTER,
              common.RECKONING_NOTORIOUS_INVADER_HUNTER,
              common.RECKONING_NOTORIOUS_REAPER_HUNTER
            ]
          },
          {
            name: 'Titan Armor (Tier 1)',
            season: 6,
            itemGroups: [
              common.RECKONING_ILLICIT_COLLECTOR_TITAN,
              common.RECKONING_ILLICIT_SENTRY_TITAN,
              common.RECKONING_ILLICIT_INVADER_TITAN,
              common.RECKONING_ILLICIT_REAPER_TITAN
            ]
          },
          {
            name: 'Titan Armor (Tier 2)',
            season: 6,
            itemGroups: [
              common.RECKONING_OUTLAWED_COLLECTOR_TITAN,
              common.RECKONING_OUTLAWED_SENTRY_TITAN,
              common.RECKONING_OUTLAWED_INVADER_TITAN,
              common.RECKONING_OUTLAWED_REAPER_TITAN
            ]
          },
          {
            name: 'Titan Armor (Tier 3)',
            season: 6,
            itemGroups: [
              common.RECKONING_NOTORIOUS_COLLECTOR_TITAN,
              common.RECKONING_NOTORIOUS_SENTRY_TITAN,
              common.RECKONING_NOTORIOUS_INVADER_TITAN,
              common.RECKONING_NOTORIOUS_REAPER_TITAN
            ]
          },
          {
            name: 'Warlock Armor (Tier 1)',
            season: 6,
            itemGroups: [
              common.RECKONING_ILLICIT_COLLECTOR_WARLOCK,
              common.RECKONING_ILLICIT_SENTRY_WARLOCK,
              common.RECKONING_ILLICIT_INVADER_WARLOCK,
              common.RECKONING_ILLICIT_REAPER_WARLOCK
            ]
          },
          {
            name: 'Warlock Armor (Tier 2)',
            season: 6,
            itemGroups: [
              common.RECKONING_OUTLAWED_COLLECTOR_WARLOCK,
              common.RECKONING_OUTLAWED_SENTRY_WARLOCK,
              common.RECKONING_OUTLAWED_INVADER_WARLOCK,
              common.RECKONING_OUTLAWED_REAPER_WARLOCK
            ]
          },
          {
            name: 'Warlock Armor (Tier 3)',
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
      },
      {
        name: 'Zero Hour',
        id: 'YEAR_ONE_ZERO_HOUR',
        description: 'Gear obtained by playing the Zero Hour mission.',
        sections: [
          {
            name: 'Weapons',
            season: 6,
            items: [
              400096939 // Outbreak Perfected
            ]
          },
          {
            name: 'Ships',
            season: 6,
            items: [
              2200702883 // Scrap CF-717-91
            ]
          },
          {
            name: 'Extras',
            season: 6,
            items: [
              2868525737 // Quarantine Zone
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
                3968652888, // EXODUS DOWN MASK
                137386025, // EXODUS DOWN GRIPS
                2956080815, // EXODUS DOWN VEST
                4258364155, // EXODUS DOWN STRIDES
                374306366 // EXODUS DOWN CLOAK
              ],
              [
                1440812312, // OPULENT STALKER MASK
                1904615913, // OPULENT STALKER GRIPS
                3258844783, // OPULENT STALKER VEST
                2196557755, // OPULENT STALKER STRIDES
                211036158 // OPULENT STALKER CLOAK
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
                413767702, // EXODUS DOWN HELM
                1617861351, // EXODUS DOWN GAUNTLETS
                1092747537, // EXODUS DOWN PLATE
                370667049, // EXODUS DOWN GREAVES
                3288177452 // EXODUS DOWN MARK
              ],
              [
                2450046452, // OPULENT DUELIST HELM
                1322451469, // OPULENT DUELIST GAUNTLETS
                2821102771, // OPULENT DUELIST PLATE
                1993250511, // OPULENT DUELIST GREAVES
                731561450 // OPULENT DUELIST MARK
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
                280471817, // EXODUS DOWN HOOD
                1983967360, // EXODUS DOWN GLOVES
                2210204488, // EXODUS DOWN ROBES
                1061787834, // EXODUS DOWN BOOTS
                41792165 // EXODUS DOWN BOND
              ],
              [
                164194947, // OPULENT SCHOLAR HOOD
                1301733714, // OPULENT SCHOLAR GLOVES
                3981949974, // OPULENT SCHOLAR ROBES
                1702972140, // OPULENT SCHOLAR BOOTS
                3311577151 // OPULENT SCHOLAR BOND
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
        name: 'Raid: Crown of Sorrow',
        id: 'YEAR_TWO_RAID_PENUMBRA',
        description:
          ('DestinyCollectibleDefinition[3110698812].sourceString',
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
              326149062, // SHADOW'S MASK
              4017853847, // SHADOW'S GRIPS
              942205921, // SHADOW'S VEST
              1107067065, // SHADOW'S STRIDES
              2149271612 // PENUMBRAL CLOAK
            ]
          },
          {
            name: 'Titan Armor',
            season: 7,
            items: [
              1129634130, // SHADOW'S HELM
              1595987387, // SHADOW'S GAUNTLETS
              3406713877, // SHADOW'S PLATE
              4450861, // SHADOW'S GREAVES
              2104205416 // PENUMBRAL MARK
            ]
          },
          {
            name: 'Warlock Armor',
            season: 7,
            items: [
              2472794149, // SHADOW'S MIND
              3211894260, // SHADOW'S GLOVES
              3381758732, // SHADOW'S ROBES
              3499632894, // SHADOW'S BOOTS
              1319515713 // PENUMBRAL BOND
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
              1164347863, // Scatterhorn Mask
              237758814, // Scatterhorn Grasps
              4044826514, // Scatterhorn Vest
              1081701944, // Scatterhorn Strides
              345100195 // Scatterhorn Cloak
            ]
          },
          {
            name: 'Titan Armor',
            season: 4,
            items: [
              822537185, // Scatterhorn Helm
              1660456696, // Scatterhorn Gauntlets
              3340244240, // Scatterhorn Plate
              3990691634, // Scatterhorn Greaves
              2267399501 // Scatterhorn Mark
            ]
          },
          {
            name: 'Warlock Armor',
            season: 4,
            items: [
              3682059404, // Scatterhorn Hood
              2877933893, // Scatterhorn Wraps
              1222559003, // Scatterhorn Robe
              3225160391, // Scatterhorn Boots
              3874345778 // Scatterhorn Bond
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
                3124726865, // Nea-Thonis Breather
                988607392 // Scorned Baron Vest
              ],
              [
                64566999, // Torobatl Celebration Mask
                3214769810 // Scorned Baron Plate
              ],
              [
                3634942770, // Eimin-Tin Ritual Mask
                4214131061 // Scorned Baron Robes
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
              2804026582, // Reverie Dawn Casque
              4008120231, // Reverie Dawn Grasps
              3368092113, // Reverie Dawn Hauberk
              3185383401, // Reverie Dawn Strides
              844097260 // Reverie Dawn Cloak
            ]
          },
          {
            name: 'Titan Armor',
            season: 4,
            items: [
              1472713738, // Reverie Dawn Helm
              1478378067, // Reverie Dawn Gauntlets
              2561756285, // Reverie Dawn Plate
              788771493, // Reverie Dawn Greaves
              4023744176 // Reverie Dawn Mark
            ]
          },
          {
            name: 'Warlock Armor',
            season: 4,
            items: [
              1076538039, // Reverie Dawn Hood
              150052158, // Reverie Dawn Gloves
              757360370, // Reverie Dawn Tabard
              569434520, // Reverie Dawn Boots
              1394177923 // Reverie Dawn Bond
            ]
          },
          {
            name: "'The Shattered Throne' Dungeon",
            season: 4,
            items: [
              814876684, // Wish-Ender
              2844014413, // Pallas Galliot
              185321778 // The Eternal Return
            ]
          },
          {
            name: 'Ascendant Challenges',
            season: 4,
            items: [
              813936739 // Starlight Shell
            ]
          },
          {
            name: 'Petra Weekly Mission',
            season: 4,
            items: [
              1317468653 // Silver Tercel
            ]
          },
          {
            name: 'Extras',
            season: 4,
            items: [
              1317468652, // Harbinger's Echo
              3352019292, // Secret Victories
              3118323620, // Drink at the Well
              3118323621, // Transcendent
              185321779 // Ennead
            ]
          }
        ]
      }
    ]
  },
  {
    name: 'Holiday & Special Events',
    sets: [
      common.FESTIVAL_OF_THE_LOST_Y2,
      common.DAWNING_Y2,
      common.CRIMSON_DAYS_Y2,
      common.REVELRY_Y2,
      common.MOMENTS_OF_TRIUMPH_Y2,
      common.SOLSTICE_OF_HEROES_Y2
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
                141163281, // Tangled Web Mask
                3052682216, // Tangled Web Grips
                2277119328, // Tangled Web Vest
                4154021442, // Tangled Web Strides
                1587155357 // Tangled Web Cloak
              ],
              [
                3605448950, // Prodigal Mask
                514472007, // Prodigal Grasps
                1202993521, // Prodigal Vest
                3562245001, // Prodigal Strides
                3356846604 // Prodigal Cloak
              ],
              [
                1395001913, // Red Moon Phantom Mask
                1291141296, // Red Moon Phantom Grips
                1571425240, // Red Moon Phantom Vest
                1649776522, // Red Moon Phantom Steps
                391377141 // Cloak of Five Full Moons
              ]
            ]
          },
          {
            name: 'Titan Armor',
            season: 4,
            itemGroups: [
              [
                2483687741, // Tangled Web Helm
                946219692, // Tangled Web Gauntlets
                2185244404, // Tangled Web Plate
                2016409302, // Tangled Web Greaves
                2929074377 // Tangled Web Mark
              ],
              [
                2143887570, // Prodigal Helm
                2610240827, // Prodigal Gauntlets
                1981473429, // Prodigal Cuirass
                1018704301, // Prodigal Greaves
                678964968 // Prodigal Mark
              ],
              [
                343027757, // Mimetic Savior Helm
                995693468, // Mimetic Savior Gauntlets
                3314301316, // Mimetic Savior Plate
                4293588774, // Mimetic Savior Greaves
                4058028249 // Mimetic Savior Mark
              ]
            ]
          },
          {
            name: 'Warlock Armor',
            season: 4,
            itemGroups: [
              [
                4113317396, // Tangled Web Hood
                2944042669, // Tangled Web Gloves
                1452257107, // Tangled Web Robes
                3656418415, // Tangled Web Boots
                3699156618 // Tangled Web Bond
              ],
              [
                265597079, // Prodigal Hood
                3634078494, // Prodigal Gloves
                571127634, // Prodigal Robes
                4053460984, // Prodigal Steps
                1207945315 // Prodigal Bond
              ],
              [
                1592984110, // Thorium Holt Hood
                2618290591, // Thorium Holt Gloves
                3603834073, // Thorium Holt Robes
                1539437665, // Thorium Holt Boots
                1047593364 // Thorium Holt Bond
              ]
            ]
          }
        ]
      },
      common.EVERVERSE_Y2
    ]
  }
]: SetPage);
