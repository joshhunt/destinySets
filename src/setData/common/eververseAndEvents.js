import * as common from '../common';
import { i18nDefinitionString as _ } from '../utils';

// Year 1

export const DAWNING_Y1 = {
  name: 'The Dawning',
  id: 'OSIRIS_THE_DAWNING',
  big: false,
  sections: [
    {
      name: 'Weapons',
      season: 2,
      items: [
        4203034886 // Zephyr
      ]
    },
    {
      name: 'Hunter Armor',
      season: 2,
      items: [
        316740353, // Winterhart Mask
        1154659864, // Winterhart Grips
        3309556272, // Winterhart Vest
        3909352274, // Winterhart Strides
        2661272173, // Winterhart Cloak
        2661272172 // Warm Winter Cloak
      ]
    },
    {
      name: 'Titan Armor',
      season: 2,
      items: [
        3956230125, // Winterhart Helm
        779962716, // Winterhart Gauntlets
        3306267716, // Winterhart Plate
        4036178150, // Winterhart Greaves
        221164697, // Winterhart Mark
        221164696 // Quilted Winter Mark
      ]
    },
    {
      name: 'Warlock Armor',
      season: 2,
      items: [
        3734501342, // Winterhart Cover
        2538439951, // Winterhart Gloves
        270671209, // Winterhart Robes
        3154516913, // Winterhart Boots
        1584837156, // Winterhart Bond
        1584837157 // Festive Winter Bond
      ]
    },
    {
      name: 'Emotes',
      season: 2,
      items: [
        3494199208, // Giving
        367778392, // Honest Dance
        80303715, // Excited Dance
        2134318165 // Icecapade
      ]
    },
    {
      name: 'Ghosts',
      season: 2,
      items: [
        2549404869, // Winter Lotus Shell
        3287805175, // Dulcinea Shell
        3287805177, // Pomegranate Shell
        3287805178, // Circular Time Shell
        3287805174, // Wild Hunt Shell
        3287805183, // Infinite Hand Shell
        3287805180, // Joyous Hunt Shell
        3287805176, // Dawning Bauble Shell
        3287805181, // Sweet Memories Shell
        3287805179 // Jasper Dawn Shell
      ]
    },
    {
      name: 'Sparrows',
      season: 2,
      items: [
        3105953707, // Chill of Winter
        3105953706, // Holiday Cheer
        63024229, // Star of Dark Nights
        1423305598, // December Muse
        1423305588, // Insectus Invictus
        1423305586, // Acumen Maxer
        1423305599, // Viperdiamond
        1423305591, // Verità Scelta
        1423305587, // Subito Mk. 9
        1423305585, // Rocket-Propelled Bobsled
        1423305589, // Rupture
        1423305590, // Shimmering Iris
        1423305584 // Magikon
      ]
    },
    {
      name: 'Ships',
      season: 2,
      items: [
        317465075, // A History of Starlight
        317465074, // Cerulean Flash
        3140833552, // Dragonfly Strident
        3140833555, // Alta Clara
        3140833553, // Brilliant Narcissus
        3140833558, // Breath of Stars
        3140833556, // Winter Blade
        3140833557, // Carmina Commencing
        3140833559, // Regent Redeemer
        3140833554 // Joyfire
      ]
    },
    {
      name: 'Extras',
      season: 2,
      items: [
        3639894194, // Light of the Dawning
        3800267415, // Dawning Hope
        3800267413, // Dawning Festiveness
        3800267412, // Dawning Warmth
        3800267414, // Dawning Brilliance
        3023230941, // Ice Ball Effects
        2607476204, // Silver Dawning Lanterns
        2607476205, // Yellow Dawning Lanterns
        2607476206, // Green Dawning Lanterns
        2607476207 // Purple Dawning Lanterns
      ]
    }
  ]
};

export const CRIMSON_DAYS_Y1 = {
  name: 'Crimson Days',
  id: 'OSIRIS_CRIMSON_DAYS',
  big: false,
  sections: [
    {
      name: 'Ornaments',
      season: 2,
      items: [
        3373357626, // Prism
        3171649853, // Go About Your Business
        2433900295, // Carina Nebula
        669267835 // Dieselpunk
      ]
    },
    {
      name: 'Emotes',
      season: 2,
      items: [
        596833222, // Heart Sign
        4097227155, // Vengeful Dance
        3809722908, // Amour Dance
        2764644855 // Flaunting Dance
      ]
    },
    {
      name: 'Ghosts',
      season: 2,
      items: [
        263371517, // Electric Heart Shell
        263371516, // Amo Ludere Shell
        263371519, // Radiant Sunflake Shell
        263371513, // Garland Shell
        263371512, // Entwining Heart Shell
        263371515, // True Conifer Shell
        263371514, // Propulsive Heart Shell
        263371518 // Tirastrella Shell
      ]
    },
    {
      name: 'Sparrows',
      season: 2,
      items: [
        3587167050, // Undefeated
        3587167051, // Undeterred
        1623653769, // First Love
        1623653768, // Last Love
        1623653771, // Battleheart
        1623653770 // Heartbreaker
      ]
    },
    {
      name: 'Extras',
      season: 2,
      items: [
        1782320603, // Fire of the Crimson Days
        1052553863, // Crimson Passion
        1052553862 // Crimson Valor
      ]
    }
  ]
};

// Not added '_Y1' to not break older pages
export const SOLSTICE_OF_HEROES = {
  name: 'Solstice of Heroes',
  id: 'COMMON_SOLSTICE_OF_HEROES',
  big: false,
  sections: [
    {
      name: 'Ornaments',
      season: 3,
      items: [
        1259278657, // Raging Lepus
        2949664689, // Gray Nitrite
        1750365155, // Beachheader VI
        2396888157 // Sudden Squall
      ]
    },
    {
      name: 'Hunter Armor',
      season: 3,
      itemGroups: [
        [
          1506728251, // Solstice Mask (Scorched)
          3007586538, // Solstice Grasps (Scorched)
          780038942, // Solstice Vest (Scorched)
          2046798468, // Solstice Strides (Scorched)
          109666087 // Solstice Cloak (Scorched)
        ],
        [
          2065460339, // Solstice Mask (Rekindled)
          3853434114, // Solstice Grasps (Rekindled)
          2319743206, // Solstice Vest (Rekindled)
          1644189372, // Solstice Strides (Rekindled)
          2637837647 // Solstice Cloak (Rekindled)
        ],
        [
          622966241, // Solstice Mask (Resplendent)
          1460885752, // Solstice Grasps (Resplendent)
          222565136, // Solstice Vest (Resplendent)
          3791120690, // Solstice Strides (Resplendent)
          3444687693 // Solstice Cloak (Resplendent)
        ]
      ]
    },
    {
      name: 'Titan Armor',
      season: 3,
      itemGroups: [
        [
          1174021263, // Solstice Helm (Scorched)
          3329153302, // Solstice Gauntlets (Scorched)
          1225396570, // Solstice Plate (Scorched)
          246568432, // Solstice Greaves (Scorched)
          873850027 // Solstice Mark (Scorched)
        ],
        [
          2897466191, // Solstice Helm (Rekindled)
          757630934, // Solstice Gauntlets (Rekindled)
          1021217306, // Solstice Plate (Rekindled)
          1969910192, // Solstice Greaves (Rekindled)
          245110123 // Solstice Mark (Rekindled)
        ],
        [
          3915635973, // Solstice Helm (Resplendent)
          401345492, // Solstice Gauntlets (Resplendent)
          512463852, // Solstice Plate (Resplendent)
          647507422, // Solstice Greaves (Resplendent)
          3211222305 // Solstice Mark (Resplendent)
        ]
      ]
    },
    {
      name: 'Warlock Armor',
      season: 3,
      itemGroups: [
        [
          2147433548, // Solstice Hood (Scorched)
          1301731333, // Solstice Gloves (Scorched)
          3101330395, // Solstice Robes (Scorched)
          1224603527, // Solstice Boots (Scorched)
          1841030642 // Solstice Bond (Scorched)
        ],
        [
          2274492816, // Solstice Hood (Rekindled)
          2030596705, // Solstice Gloves (Rekindled)
          796635575, // Solstice Robes (Rekindled)
          3525545299, // Solstice Boots (Rekindled)
          2924954886 // Solstice Bond (Rekindled)
        ],
        [
          545021994, // Solstice Hood (Resplendent)
          550583155, // Solstice Gloves (Resplendent)
          2158678429, // Solstice Robes (Resplendent)
          285537093, // Solstice Boots (Resplendent)
          3620666320 // Solstice Bond (Resplendent)
        ]
      ]
    },
    {
      name: 'Armor Glows',
      season: 3,
      itemGroups: [
        [1553202889, 3256698432, 1540875016, 1951638138, 3242972517],
        [3911008533, 2586851812, 3599111900, 4092937102, 589978193],
        [485239296, 2346279889, 2407661191, 2177429667, 3589089942]
      ]
    },
    {
      name: 'Ghosts',
      season: 3,
      items: [
        3717471208, // Predator Sun Shell
        3717471209, // Archipelago Pitch
        980898610, // Regality Sphere Shell
        980898611, // Authorized Misconduct Shell
        980898608, // Headerstripe Shell
        980898609, // Citrine Sway Shell
        980898614, // Bankjar Shell
        980898615 // Skyfire North Shell
      ]
    },
    {
      name: 'Emotes',
      season: 3,
      items: [
        961496619, // Fishing
        3244569127, // Festival Dance
        2919938481, // Teamwork Dance
        2114877381, // Fly Dance
        396134792, // Sassy Taunt
        3672748946, // Herald Dance
        2427328578, // Alliterative Dance
        621701973, // Aggressively Affirmative
        4119095630, // Confident Strut
        1599949358 // Raise the Roof
      ]
    },
    {
      name: 'Vehicles',
      season: 3,
      itemGroups: [
        [
          682682138, // Estival Excursion
          3475074928 // Thunderwing
        ],
        [
          4213271811, // Gray Hornet
          4213271810, // Blacklight Razor
          2298896094, // Sunspear
          2298896095, // Boltcrackle
          2298896092, // Junestinger
          2298896093, // Timberwolf
          2298896090, // Orcinus Swath
          2298896091, // Serriform 7
          2298896088 // Memorium Sol
        ]
      ]
    },
    {
      name: 'Moments of Triumph',
      season: 3,
      items: [
        3867275449, // The Right Choice (Moments of Triumph Ghost)
        4243004391, // Comrades in Arms (Moments of Triumph Sparrow)
        3860733294, // Renewed Triumph (Moments of Triumph Emblem)
        3860733295 // Eternally Triumphant (Moments of Triumph Emblem)
      ]
    },
    {
      name: 'Extras',
      season: 3,
      items: [
        3859483818, // Blazing Virtue
        3859483819 // Malachite Gold
      ]
    }
  ]
};

export const EVERVERSE_Y1 = {
  name: 'Eververse',
  id: 'ALL_SEASONS_EVERVERSE',
  big: true,
  sections: [
    {
      name: 'Armor',
      season: 1,
      itemGroups: [
        [
          1869779952, // Mask of Optimacy
          1625986881, // Arms of Optimacy
          369186071, // Vest of Optimacy
          2696374963, // Legs of Optimacy
          2497505510 // Cloak of Optimacy
        ],
        [
          1638376198, // Helm of Optimacy
          652336087, // Arms of Optimacy
          415074081, // Plate of Optimacy
          2460870905, // Legs of Optimacy
          1197579132 // Mark of Optimacy
        ],
        [
          2956899553, // Hood of Optimacy
          3794819064, // Arms of Optimacy
          199852048, // Robes of Optimacy
          1830086706, // Legs of Optimacy
          3421974605 // Bond of Optimacy
        ]
      ]
    },
    {
      name: 'Armor',
      season: 2,
      itemGroups: [
        [
          2277597261, // Omega Mechanos Mask
          2930263100, // Omega Mechanos Grasps
          3203735972, // Omega Mechanos Vest
          2316071750, // Omega Mechanos Strides
          3947566073 // Omega Mechanos Cloak
        ],
        [
          3838590505, // Omega Mechanos Helm
          1629999520, // Omega Mechanos Gauntlets
          2574287336, // Omega Mechanos Plate
          324939098, // Omega Mechanos Greaves
          4276384709 // Omega Mechanos Mark
        ],
        [
          903593458, // Omega Mechanos Crown
          1328369883, // Omega Mechanos Gloves
          153589813, // Omega Mechanos Robes
          4073377357, // Omega Mechanos Boots
          3146151688 // Omega Mechanos Bond
        ]
      ]
    },
    {
      name: 'Armor',
      season: 3,
      itemGroups: [
        [
          2089084848, // Qiao's Grin
          1886868481, // Qiao's Care
          2798295255, // Qiao's Heart
          3381714035, // Qiao's Strides
          631647398 // Qiao's Passing
        ],
        [
          2881907522, // Hardy's Calm
          2221552043, // Hardy's Control
          4234287845, // Hardy's Journey
          3696190397, // Hardy's Steps
          2890202680 // Hardy's Orders
        ],
        [
          2170939813, // Mihaylova's Triumph
          2910039924, // Mihaylova's Instruments
          4141029260, // Mihaylova's Choice
          3197778558, // Mihaylova's Path
          2078786241 // Mihaylova's Tale
        ]
      ]
    },
    {
      name: 'Ornaments',
      season: 1,
      items: [
        3434280692, // Sub-Zero
        2110420504, // Down to Business
        2760478958, // Book of the Dead
        1856805547, // Particle Accelerator
        1630611952, // Red Dwarf
        20859173, // Symbiosis
        3925009772, // Black Plague
        3520552272, // Summer Storm
        1014060907, // Break the Dawn
        3034617041, // Jade Countenance
        4236694804, // Under Construction
        2412488653, // Mind of Its Own
        2583504679, // Tesla's Revenge
        3628862572, // Comstock Lode
        2673403667, // The Future is Chrome
        1135501644, // Titanium Alloy
        1748595581 // Beware the Red Legion
      ]
    },
    {
      name: 'Ornaments',
      season: 2,
      itemGroups: [
        [
          3373357627, // Eye of Osiris
          889398080, // Silver Bullet
          907775118, // VEIST Silver
          1970437989, // Jade Jester
          2356548547, // Reef in Ruins
          2195305504, // MIDA Tactical
          2599526136, // Catacombs
          914313861 // War Beast Skin
        ],
        [
          848193348, // Tiamat
          3972613793, // Forest Ranger
          409092784, // Trickster
          3002642194, // Vulcan's Heart
          2456870946, // Rocket Scientist
          1991731877, // Technoscarab
          1064781608, // Gothic Horror
          2042795071, // Dead of Winter
          49421814 // Midnight Sun
        ]
      ]
    },
    {
      name: 'Ornaments',
      season: 3,
      itemGroups: [
        [
          3556728490, // Dread from Below
          4288562036, // Heaven's Vigil
          3686084858, // Quark Star
          2036459008, // The Bray Legacy
          2775242452, // The Devil's Work
          2425317590, // Positive Infinity
          2409312095, // Hypnopompic
          4280582304 // Coup de Main
        ],
        [
          3628276006, // Thundergod
          1391284237, // War Painted
          1244411540, // Deep Pockets
          1180014202, // Endless Loop
          933468683, // Grant's Vicksburg
          1967983910, // Hip Wader
          2140296014, // Crown Joules
          2173197096, // A Stride to the Edge
          915385568 // Capreolinax
        ]
      ]
    },
    {
      name: 'Emotes',
      season: 1,
      items: common.EVERVERSE_S1_EMOTES
    },
    {
      name: 'Emotes',
      season: 2,
      items: common.EVERVERSE_S2_EMOTES
    },
    {
      name: 'Emotes',
      season: 3,
      items: common.EVERVERSE_S3_EMOTES
    },
    {
      name: 'Ghosts',
      season: 1,
      items: [
        2833999140, // Lambda Shell
        2833999141, // Avalon Shell
        2833999142, // Tower Shell
        2833999143, // Blue Moon Shell
        2833999136, // Number Two Shell
        2833999137, // Starfire Shell
        2833999138, // Jagged Shell
        2833999139, // Kingfisher Shell
        2833999148, // Graylight Shell
        2833999149, // Heraldic Shell
        261110023, // Half-Submerged Shell
        261110022, // Interchange Shell
        261110024, // Bold Shell
        261110025, // Two of Diamonds Shell
        261110026, // Honeycomb Shell
        261110027, // Titan Shell
        261110028, // Lotus Shell
        261110030, // Warlock Shell
        261110031, // Hunter Shell
        261110029, // Competitive Shell
        277887714, // Crescent Shell
        277887715, // Hemisphere Shell
        277887712, // Aggressive Shell
        277887713, // Twilight Shell
        277887718 // Vertical Shell
      ]
    },
    {
      name: 'Ghosts',
      season: 2,
      items: [
        1558857470, // Star Map Shell
        1558857471, // Cosmos Shell
        1558857468, // Fast Lane Shell
        1558857469, // Fire Victorious Shell
        1558857466, // Electronica Shell
        1271045315, // Flaming Arrow Shell
        1271045314, // Unearthly Koi Shell
        1271045313, // Commanding Star Shell
        1271045312, // Gray Tiger Shell
        1271045319, // Dolphin Wave Shell
        1271045318, // Triumphal Shell
        1271045317, // Infinite Blue Shell
        1271045316, // Garter Snake Shell
        1271045323, // Abacus Shell
        1271045322, // Symphonic Shell
        89965910, // Kaleidoscope Shell
        89965911, // In Fine Omnium Shell
        89965908, // Captaincy Shell
        89965909, // Precious Metals Shell
        89965906, // Viceroy Shell
        89965907, // Upward Climber Shell
        89965904, // Pintail Ghost
        89965905, // Iris Map Shell
        89965918, // Orchid Shell
        89965919 // Yellowspear Shell
      ]
    },
    {
      name: 'Ghosts',
      season: 3,
      items: [
        3075308678, // Skyline Flipside Shell
        3075308672, // Bursting Wisdom Shell
        1748063012, // Palm of Gold Shell
        1748063015, // Waiting Cask Shell
        631626576, // Orcasong Shell
        631626578, // Copperhead Supremacy Shell
        631626579, // Blaster Box
        631626580, // Speckled Giallo Shell
        631626582, // Riveted Majesty Shell
        631626583 // Open Orchid Shell
      ]
    },
    {
      name: 'Sparrows',
      season: 1,
      items: [
        807458183, // Vanishing Point
        807458182, // Dinas Emrys
        807458181, // Hastilude
        3889183914, // Fast Track
        3889183915, // Crucible Courser
        3889183912, // Athwart the Void
        3889183913, // Aeon Plume
        3889183918, // Wavechaser
        3889183919, // Soul Velocity
        3889183916, // Angel Bloom
        3889183917, // Speedpunk
        3889183906, // Chronoglass
        3889183907, // Wind Shrike
        2546958593, // October Dash
        2546958592, // Sagittarius
        2546958594, // Telluride
        2546958597, // Skedaddle
        2546958596, // Lunadove
        2546958599, // Hightail
        2546958598, // Wave-Maker
        2546958595, // Noble Steed
        904825093, // Wayfarer Delta
        904825092, // Wayfarer Tri
        904825094, // Warbird
        904825089, // Hyperion
        904825088, // Dead-End Pro
        904825095 // On Guard
      ]
    },
    {
      name: 'Sparrows',
      season: 2,
      items: [
        3081894946, // SV-112 Predator
        3081894947, // Concentric Dawn
        3081894944, // Curse of Foresight
        3610177557, // Avalon Courser
        3610177556, // Angel Lazuli
        3610177559, // Twintail Locust
        3610177558, // Soul Sylph
        3610177553, // Striped Abandon
        3610177552, // Solaris Celestina
        3610177555, // Twinfang
        3610177554, // Data Stream
        3610177565, // Lunaria Lumina
        3610177564, // Cavalcade
        3538153292, // Directoria Sagitta
        3538153293, // Arondight
        3538153294, // Oculus Angulon
        3538153295, // Ridgerunner Rex
        3538153288, // Tropidon V
        3538153289, // Velos Knight
        3538153290, // Annabel Lee
        3538153291, // Marbled Orb Weaver
        3538153284, // Solo Stand
        3538153285, // Sharklight
        3588486149, // Aldebaran
        3588486148, // Machina Macro
        3588486151, // Frago Junium
        3588486150 // Vox Imperative
      ]
    },
    {
      name: 'Sparrows',
      season: 3,
      items: [
        777818278, // Eon Drive
        777818276, // Vespulaser
        777818274, // Azure Azazyel
        256118668, // Andes Peakhunter
        2351197436, // Glam Toboggan
        2351197437, // Sickle Skiff
        2351197438, // Mindbarge
        2351197439, // Fiery Phoenician
        2351197433, // Mad Son of Seychelles
        2351197434, // Alton's Ambush
        2351197435 // Flychaplain
      ]
    },
    {
      name: 'Ships',
      season: 1,
      items: [
        2503134037, // Eriana's Vengeance
        838210459, // Symmetry Flight
        4209989368, // Takanome Wings
        96858972, // Ego and Squid
        3213307847, // The Bandwagon
        1104161649, // Rose and Bone
        2503134032, // BreakPoint
        2503134038, // Cardinal One
        2503134039, // Talon Blue
        2503134036, // Shadowed Dawn
        2503134042, // Helios Strain
        838210457, // Imprint
        838210456, // Alessa
        4209989372, // Dead Fall
        4209989373, // Sojourner
        4209989370, // Captain Nemo
        4209989371, // Alexandria
        4209989369, // Absolute/MN
        4209989366, // Amplitude/PT
        96858973, // Ordinate/VD
        4209989367, // Cartesian/KO
        3213307843, // Leonid MV
        3213307842, // Zenith SV
        3213307845, // Eos Rapture
        3213307844, // Space-Age Lancelot
        3213307846, // Spectral Gain
        3213307849, // Verona Mesh
        3213307848, // High Line
        1104161648, // Tidal Dawn
        2503134043, // Starling Bolt
        2503134033 // City Apex
      ]
    },
    {
      name: 'Ships',
      season: 2,
      items: [
        292872936, // Sails of Osiris
        292872937, // Saint-14's Gray Pigeon
        292872938, // Kabr's Glass Aegis
        292872939, // Asher Mir's One-Way Ticket
        292872940, // Ikora's Resolve
        292872941, // The Sundaresh Experiment 13-R
        530012781, // Star Scion
        530012780, // Galactic Hum
        530012783, // Arrowhawk
        530012782, // Dragonquin
        530012777, // Nebula Bloom
        530012776, // Rubente Dextra
        530012779, // Andromeda Gleaming
        530012778, // Edge of the Worlds
        530012773, // Sailing Shield
        530012772, // Armcoat
        658724916, // Mainsail Royal
        658724917, // Bassanio
        658724918, // Spun Sidhe
        658724919, // Neverfall
        658724912, // Antonio
        658724913, // Runereed
        658724914, // Wanderlonging
        658724915, // Infinite Visage
        658724924, // Hardtop Regent
        658724925, // Amethystine
        709057677 // Fantail Regent
      ]
    },
    {
      name: 'Ships',
      season: 3,
      items: [
        1748147690, // Lost Legend
        1748147691, // Shadow Trespass
        1748147688, // Holborn's Splint
        3101966172, // Currus Gloriae XLII
        3101966166, // Jadewyrm XLIV
        1833943242, // Fleet Ska IX
        1833943243, // Vor Pyl VIII
        1833943240, // Ampulance LXXX
        1833943246, // Kolla Mauler IX
        1833943247, // Pitfall Souter E5D
        1833943245 // Dusk Harrier
      ]
    },
    {
      name: 'Shaders',
      season: 1,
      items: [
        1284563760, // Häkke History Polish
        1284563761, // SUROS Modular Shine
        1284563762, // Omolon Meteor Gloss
        1284563763, // VEIST Poison Shimmer
        1284563764, // Noble Constant Red
        1284563765, // Vanguard Magnus Gloss
        1284563766, // Frumious Blue
        1284563767, // Midnight Talons
        1284563774, // Tarnished Copper
        1284563775, // Xenosilver
        3205869472, // Golden Trace
        3205869473, // Monochromatic
        3205869474, // Cerulean Divide
        3205869475, // Nebula Rose
        3205869476, // Metro Shift
        3205869477, // Dawn and Dusk
        3205869478, // Arctic Pearl
        3205869479, // Watermelon
        3205869484, // Indigo Matrix
        3205869485 // Bumblebee
      ]
    },
    {
      name: 'Shaders',
      season: 2,
      items: [
        2395477994, // Mercurian Sunrise
        2395477996, // Precursor Vex Chrome
        2395477997, // Desert of Gold
        2395477998, // Descendant Vex Chrome
        2395477999 // Mercury Vex Chrome
      ]
    },
    {
      name: 'Shaders',
      season: 3,
      items: [
        1017491633, // Molten Bronze
        1017491632, // Mars Sunset
        1017491635, // Cargulo Bristle
        1017491634, // Ancient Republic
        1017491637, // Petiolora Growth
        1017491636 // Buffer Overflow
      ]
    },
    {
      name: 'Transmat Effects',
      season: 1,
      items: [
        4258704672, // Cabal Arrival
        4258704673, // Vex Arrival
        4258704674, // Taken Arrival
        4258704675, // Hive Arrival
        4258704676, // Fallen Arrival
        3351378135, // Guardian Gold
        3351378134, // Guardian White
        3351378133, // Guardian Green
        3351378132, // Guardian Pink
        3351378131, // Guardian Blue
        3351378130, // Arc Effects
        3351378129, // Solar Effects
        3351378128, // Void Effects
        3351378143, // Ghost White
        3351378142, // Ghost Gold
        1281013970, // Ghost Green
        1281013971, // Ghost Pink
        1281013968, // Ghost Blue
        1281013969, // Crucible White
        1281013974, // Crucible Gold
        1281013975, // Crucible Green
        1281013972, // Crucible Pink
        1281013973, // Crucible Blue
        1281013978, // Amethyst Rabbit
        1281013979 // Coral Rabbit
      ]
    },
    {
      name: 'Transmat Effects',
      season: 2,
      items: [
        526091740, // Reflection Effects
        526091741, // Dominus Ghaul Effects
        526091742, // Traveler's Wake Effects
        526091743, // Vex Invasion Effects
        2153115587, // Silver Beam Effects
        2153115586, // Gold Beam Effects
        2153115585, // Green Beam Effects
        2153115584, // Purple Beam Effects
        2153115591, // Silver Spotlight Effects
        2153115590, // Yellow Spotlight Effects
        2153115589, // Green Spotlight Effects
        2153115588, // Purple Spotlight Effects
        2153115595, // Pink Class Sigil
        2153115594, // Yellow Class Sigil
        3376967254, // Green Class Sigil
        3376967255 // Purple Class Sigil
      ]
    },
    {
      name: 'Transmat Effects',
      season: 3,
      items: [
        1311389412, // Plesiohedral State
        1311389415, // AI-COM/RSPN: REBOOT
        1311389414 // Celebrate Newness
      ]
    }
  ]
};

// Year 2

export const FESTIVAL_OF_THE_LOST_Y2 = {
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
        // 375770440, // Prankster Dance
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
};

export const DAWNING_Y2 = {
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
        1708415886, // Baking Cookies
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
};

export const CRIMSON_DAYS_Y2 = {
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
};

export const REVELRY_Y2 = {
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
};

export const MOMENTS_OF_TRIUMPH_Y2 = {
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
};

export const SOLSTICE_OF_HEROES_Y2 = {
  name: 'Solstice of Heroes',
  id: 'COMMON_SOLSTICE_OF_HEROES',
  description: 'Acquirable during the 2019 Solstice of Heroes event.',
  big: false,
  sections: [
    {
      name: 'Ornaments',
      season: 7,
      items: []
    },
    {
      name: 'Hunter Armor',
      season: 7,
      itemGroups: [
        [
          1126194683, // SOLSTICE MASK (DRAINED)
          2585373098, // SOLSTICE GRASPS (DRAINED)
          4242735326, // SOLSTICE VEST (DRAINED)
          1241704260, // SOLSTICE STRIDES (DRAINED)
          3613939175 // SOLSTICE CLOAK (DRAINED)
        ],
        [
          2826719795, // SOLSTICE MASK (RENEWED)
          785657282, // SOLSTICE GRASPS (RENEWED)
          477417894, // SOLSTICE VEST (RENEWED)
          2829803132, // SOLSTICE STRIDES (RENEWED)
          1219866639 // SOLSTICE CLOAK (RENEWED)
        ],
        [
          1597235361, // SOLSTICE MASK (MAJESTIC)
          2393578168, // SOLSTICE GRASPS (MAJESTIC)
          3084686800, // SOLSTICE VEST (MAJESTIC)
          428845810, // SOLSTICE STRIDES (MAJESTIC)
          2436402701 // SOLSTICE CLOAK (MAJESTIC)
        ]
      ]
    },
    {
      name: 'Titan Armor',
      season: 7,
      itemGroups: [
        [
          132648577, // SOLSTICE HELM (DRAINED)
          970568088, // SOLSTICE GAUNTLETS (DRAINED)
          4282498224, // SOLSTICE PLATE (DRAINED)
          3725260498, // SOLSTICE GREAVES (DRAINED)
          3634214125 // SOLSTICE MARK (DRAINED)
        ],
        [
          808331801, // SOLSTICE HELM (RENEWED)
          280116880, // SOLSTICE GAUNTLETS (RENEWED)
          829700536, // SOLSTICE PLATE (RENEWED)
          638752234, // SOLSTICE GREAVES (RENEWED)
          3520162133 // SOLSTICE MARK (RENEWED)
        ],
        [
          536106547, // SOLSTICE HELM (MAJESTIC)
          2790011330, // SOLSTICE GAUNTLETS (MAJESTIC)
          778247590, // SOLSTICE PLATE (MAJESTIC)
          539189884, // SOLSTICE GREAVES (MAJESTIC)
          1520696335 // SOLSTICE MARK (MAJESTIC)
        ]
      ]
    },
    {
      name: 'Warlock Armor',
      season: 7,
      itemGroups: [
        [
          1834731376, // SOLSTICE HOOD (DRAINED)
          1590938305, // SOLSTICE GLOVES (DRAINED)
          1276995479, // SOLSTICE ROBES (DRAINED)
          2661326387, // SOLSTICE BOOTS (DRAINED)
          3405314918 // SOLSTICE BOND (DRAINED)
        ],
        [
          381563628, // SOLSTICE HOOD (RENEWED)
          3830828709, // SOLSTICE GLOVES (RENEWED)
          3192591867, // SOLSTICE ROBES (RENEWED)
          4178158375, // SOLSTICE BOOTS (RENEWED)
          1549308050 // SOLSTICE BOND (RENEWED)
        ],
        [
          3359671646, // SOLSTICE HOOD (MAJESTIC)
          2163610255, // SOLSTICE GLOVES (MAJESTIC)
          1685642729, // SOLSTICE ROBES (MAJESTIC)
          2779687217, // SOLSTICE BOOTS (MAJESTIC)
          2999808676 // SOLSTICE BOND (MAJESTIC)
        ]
      ]
    },
    {
      name: 'Armor Glows',
      season: 7,
      itemGroups: [
        [3664536990, 2934509775, 2005133865, 3509010033, 3785437156],
        [2021434466, 1319502155, 1597797637, 2835717213, 253815640],
        [2971194471, 917896686, 610201346, 3000974824, 4129164627]
      ]
    },
    {
      name: 'Ghosts',
      season: 7,
      itemGroups: [
        [
          537036424, // Jubilant Shell
          537036425, // Shaded Shell
          537036427 // Buoy Shell
        ],
        [
          2325283036, // Beach Ball Projection
          2325283037, // Crab Projection
          2325283038, // Palm Tree Projection
          2325283039, // Sunglasses Projection
          3631905978, // Triumphant Projection
          3631905979 // Buried Treasure Projection
        ]
      ]
    },
    {
      name: 'Emotes',
      season: 7,
      items: [
        4114677048, // BREATHE IN
        1849697741, // FLAG ON THE PLAY
        1858216083, // PAPERWORK
        403465735, // FLICK OF THE WRIST
        1482931023, // HIP BUMP
        4096637925 // SILLY HANDSHAKE
      ]
    },
    {
      name: 'Sparrows',
      season: 7,
      items: [
        1363029408, // Micro Mini
        1363029409, // Legacy-2
        2863148331 // EV-37 Voidstreak
      ]
    },
    {
      name: 'Ships',
      season: 7,
      items: [
        1454610995 // Summertide Kite
      ]
    },
    {
      name: 'Extras',
      season: 7,
      items: [
        4173467416, // Tangerine Gloss
        4173467417, // Pomegranate Gloss
        2957044930, // Beach Ball Effects
        2957044931 // Sandcastle Effects
      ]
    }
  ]
};

export const EVERVERSE_Y2 = {
  name: _(
    'DestinyFactionDefinition[1393733616].displayProperties.name',
    'Eververse'
  ),
  id: 'YEAR_TWO_EVERVERSE',
  description:
    'Bright Engrams (Season 6 and prior) or items sold at Eververse for Bright Dust (Season 7).',
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
          2714705096, // Dirty Work
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
          // Order based on Eververse Store
          343223696, // VORACIOUS
          2182432903, // STOLEN GOODS
          // 1541998888, // Lucid Melody (Wasn't sold for Bright Dust)
          // 12695374, // Aurelian Decree (Wasn't sold for Bright Dust)
          // 12695375, // Beast Magic (Wasn't sold for Bright Dust)
          // Below weren't available for direct purchase so random order
          // 2257492093, // BAIKONUR (Wasn't sold for Bright Dust)
          3763220133, // BARREN WASTES
          // 2404516638, // CYBERINTELLECT (Wasn't sold for Bright Dust)
          3807808621, // DIGITAL OPS
          1321987864, // DREAM OF A NEW WORLD
          1904833599, // RONIN
          3838841051 // ULTRAVIOLET
        ],
        [
          // 2533050120, // BEGGAR, TO BE FED (Wasn't sold for Bright Dust)
          4017323452, // BROKEN BIRD, TO BE HEALED
          // 1069601252, // UNSEEING, TO BE SHOWN (Wasn't sold for Bright Dust)
          1546315793, // UNHEARING, TO BE TOLD
          77772312, // ALONE, TO BE JOINED
          // 3967294031, // UNLOVED, TO BE CHERISHED (Wasn't sold for Bright Dust)
          403561732, // DEFENSELESS, TO BE ARMED
          // 3199440990, // ROCK-A-BYE (Wasn't sold for Bright Dust)
          // 2512537661, // SHAPESHIFTER (Wasn't sold for Bright Dust)
          3473397300 // KING IN ALL DIRECTIONS
        ],
        [
          2783100859, // QUEEN COBRA
          3211076406, // BLUED STEEL
          3105540650, // ~FLEX ENHANCE REPLICATE~
          1011994721, // JIĀN (Wasn't sold for Bright Dust)
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
        1617583310, // Standoff
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
        // 2931525672, // SABRAGE SALUTE (Wasn't sold for Bright Dust)
        1668956766, // GIDDY LAUGH
        2070010145, // BUT YOU
        4189539716, // YOU GO AHEAD
        4179243516, // TIME OUT
        319183094, // MEDITATIVE MOMENT
        908677920, // STYLISH SIT
        // 1324309776, // DISCOURAGED (Wasn't sold for Bright Dust)
        1081767429, // LINK UP
        854833035, // QUICK HUG
        28833378 // STATIC SHOCK
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
        443190222, // Drop Pod Shell
        // 443190223, // Intrepid Shell (Wasn't sold for Bright Dust)
        // 443190220, // Gyro Shell (Wasn't sold for Bright Dust)
        443190221, // PS-1 Shell
        443190218, // Arc Shell
        443190219, // Solar Shell
        // 443190216, // Void Shell (Wasn't sold for Bright Dust)
        443190217 // Kitbash Shell
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
        1295682251, // IMPERIAL BEAST PROJECTION
        1295682250, // CHALICE PROJECTION
        1295682249, // CROWN OF SORROW PROJECTION
        1295682248, // EMPEROR CALUS PROJECTION
        1295682255, // DARING HAT PROJECTION
        // 3527564900, // IMPERIAL AXES PROJECTION (Wasn't sold for Bright Dust)
        // 3527564901, // DROPSHIP PROJECTION (Wasn't sold for Bright Dust)
        3527564902 // BEAST'S PAW PROJECTION
        // 3527564903, // TREASURE CHEST PROJECTION (Wasn't sold for Bright Dust)
        // 3527564896, // SALACOT PROJECTION (Wasn't sold for Bright Dust)
        // 3527564897 // TREASURE MAP PROJECTION (Wasn't sold for Bright Dust)
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
        // 258623689, // Clean Sweep (Wasn't sold for Bright Dust)
        // 258623690, // Expedition-JT (Wasn't sold for Bright Dust)
        258623691, // The Motherlode
        258623692, // The Grateful Crane
        258623693, // The Calypso (Wasn't sold for Bright Dust)
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
        554648945, // Black Peregrine
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
        2964059916, // Bayle's Aerodyne
        2964059917, // Proteus
        2964059918, // Woomera B-5
        2964059919, // The Oviraptor
        2964059912, // Transpose JT-24-X
        2964059913, // Chela-N
        2964059914 // Aeshnidae Fixed-Wing
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
        1363705635, // Coastal Suede
        1363705634, // Amethyst Veil
        1363705633, // Atmospheric Glow
        1363705632, // First Light
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
        515071965, // Darkblade Effects
        515071964, // Eldritch Effects
        515071967, // Minotaur Effects
        515071966, // Loot Chest Effects
        515071961 // Tiger Effects
      ]
    }
  ]
};

// Year 3

export const FESTIVAL_OF_THE_LOST_Y3 = {
  name: 'Festival of the Lost',
  id: 'year-three-festival-of-the-lost',
  description: 'Acquirable during the seasonal Festival of the Lost event.',
  sections: [
    {
      name: 'Weapons',
      season: 8,
      items: [
        528834068 // Braytech Werewolf
      ]
    },
    {
      name: 'Hunter Armor',
      season: 8,
      itemGroups: [
        [
          1256660988, // Chthonic Mask
          2653114997, // Chthonic Grips
          3560184043, // Chthonic Vest
          4229237079, // Chthonic Strides
          2299884162 // Chthonic Cloak
        ],
        [
          2352138838 // Masquerader Helmet: Hunter
        ]
      ]
    },
    {
      name: 'Hunter Armor',
      season: 11,
      itemGroups: [
        [],
        [
          514561133, // Canis Luna Mask
          1633261020, // Canis Luna Grips
          1440616900, // Canis Luna Vest
          594509158, // Canis Luna Strides
          2650481177 // Canis Luna Cloak
        ]
      ]
    },
    {
      name: 'Titan Armor',
      season: 8,
      itemGroups: [
        [
          3055452222, // Pandemonic Helm
          2325321839, // Pandemonic Gauntlets
          170952905, // Pandemonic Plate
          2899925137, // Pandemonic Greaves
          1485222020 // Pandemonic Mark
        ],
        [
          239189018 // Masquerader Helmet: Titan
        ]
      ]
    },
    {
      name: 'Titan Armor',
      season: 11,
      itemGroups: [
        [],
        [
          269052681, // Chemflesh Helm
          1972548224, // Chemflesh Gauntlets
          1903259976, // Chemflesh Plate
          1050368698, // Chemflesh Greaves
          4029814949 // Chemflesh Mark
        ]
      ]
    },
    {
      name: 'Warlock Armor',
      season: 8,
      itemGroups: [
        [
          3081047495, // Phantasmagoric Hood
          1027749710, // Phantasmagoric Gloves
          3859783010, // Phantasmagoric Robes
          3110827848, // Phantasmagoric Boots
          3508236467 // Phantasmagoric Bond
        ],
        [
          2213504923 // Masquerader Helmet: Warlock
        ]
      ]
    },
    {
      name: 'Warlock Armor',
      season: 11,
      itemGroups: [
        [
          1126889172, //  Blood Lineage Cover
          4252684909, //  Blood Lineage Gloves
          1627792659, //  Blood Lineage Robes
          204059183, //  Blood Lineage Boots
          4257676106 //  Blood Lineage Bond
        ],
        []
      ]
    },
    {
      name: 'Masks',
      season: 8,
      items: [
        1201782503, // Omnigul Mask
        1201782502, // Jack-o'-Lantern Mask
        1494882400, // Hidden Swarm Mask
        1494882401, // Goblin Mask
        1494882403, // Mithrax Mask
        1494882402, // Opulent Calus Mask
        1494882406, // Drifter Mask
        1494882407 // Eris Morn Mask
      ]
    },
    {
      name: 'Masks',
      season: 11,
      items: [
        3326837142, // Associates Mask
        3326837143, // Spider Mask
        1691825972, // Fractured Traveler Mask
        1691825975, // Variks Mask
        1691825974, // Exo Stranger Mask
        1691825969, // Ana Bray Mask
        1691825968, // Wrapped Traveler Mask
        1691825973 // Bubbling Mask
      ]
    },
    {
      name: 'Emotes',
      season: 8,
      items: [
        2810182789, // Tombstone
        3531985793, // Boo
        3730248014, // Parting
        1016114126 // Bone Boogie
      ]
    },
    {
      name: 'Emotes',
      season: 11,
      itemGroups: [
        [
          3314737869, // Ghastly Durance
          2580357958, // Lunar Roar
          2024085840, // Peaceful Rest
          433582103, // By Candlelight
          1078097668, // Rueful Wail
          712123915 // Summoning Ritual
        ],
        [
          // 3846727856, // One-Inch Punch (Not planned to be sold for Bright Dust)
        ]
      ]
    },
    {
      name: 'Ghosts',
      season: 8,
      itemGroups: [
        [
          3677746975, // Gensym Relic Shell
          3677746972, // Chiropteran Shell
          3677746973 // Jack-O-Shell
        ],
        [
          3661044025, // Winged Nightmare Projection
          3661044024 // Hive-o'-lantern Projection
        ]
      ]
    },
    {
      name: 'Ghosts',
      season: 11,
      itemGroups: [
        [
          4090775747, // Hexing Shell
          2505000979 // Restless Shell
        ],
        [
          968361536, //Fanged Projection
          968361537 // Howling Projection
        ]
      ]
    },
    {
      name: 'Sparrows',
      season: 8,
      items: [
        4087530286, // Brumeswept Night
        4087530287 // The Necrobeast
      ]
    },
    {
      name: 'Sparrows',
      season: 11,
      items: [
        3721195043, // Halted Oblivion
        3948527015 // Tomb Rider
      ]
    },
    {
      name: 'Ships',
      season: 8,
      items: [
        3755201983 // The Desmodus
      ]
    },
    {
      name: 'Ships',
      season: 11,
      items: [
        558697641 // Wrap Speed
      ]
    },
    {
      name: 'Extras',
      season: 8,
      items: [
        298334048, // Sweet Dreams
        2526736328, // Dark Orbit
        1005594230, // Skele-Ghaul
        1005594231, // Basalt Toxic
        2233576420, // Fright Night
        3980259371, // Looming Moon
        3980259370 // Murder of Crows
      ]
    },
    {
      name: 'Extras',
      season: 11,
      items: [
        3639046081, // Shadehallow
        2716279146, // Bloodmane
        2716279147, // Nougat Delight
        // 373634602, // Alchemy Scorch (Never sold and has no collectible)
        810321696 // Reanimated Entrance
      ]
    }
  ]
};

export const DAWNING_Y3 = {
  name: 'The Dawning',
  id: 'year-three-the-dawning',
  description: 'Acquirable during the seasonal Dawning event.',
  big: false,
  sections: [
    {
      name: 'Weapons',
      season: 9,
      itemGroups: [
        [
          1506719573 // Cold Front
        ],
        [
          3344861342, // Brumal Dawn
          3615976865, // Frostborne
          2579162237 // Wind Chill
        ]
      ]
    },
    {
      name: 'Hunter Armor',
      season: 9,
      items: [
        1018190408, // Northlight Mask
        365524697, // Northlight Grips
        55826751, // Northlight Vest
        3257710283, // Northlight Strides
        1302985294 // Northlight Cloak
      ]
    },
    {
      name: 'Titan Armor',
      season: 9,
      items: [
        3188413900, // Northlight Helm
        2342711685, // Northlight Gauntlets
        3857100891, // Northlight Plate
        2265583879, // Northlight Greaves
        2596801138 // Northlight Mark
      ]
    },
    {
      name: 'Warlock Armor',
      season: 9,
      items: [
        2551510151, // Northlight Crown
        498109198, // Northlight Gloves
        1665551138, // Northlight Robes
        3005747976, // Northlight Boots
        889443955 // Northlight Bond
      ]
    },
    {
      name: 'Emotes',
      season: 9,
      itemGroups: [
        [
          1181969391, // Card Shuffle
          3941766715, // Get That Bread
          9762701, // Graceful Spin
          595406727, // Something to Say
          2352869761 // Bust a Move
        ],
        [
          // 1913500528 // Perfect Ten (Not planned to be sold for Bright Dust)
        ]
      ]
    },
    {
      name: 'Ghosts',
      season: 9,
      itemGroups: [
        [
          76764722, // Confectionery Shell
          76764721, // Crystalline Shell
          76764720 // Winterview Shell
        ],
        [
          3390110524, // Snowflake Projection
          3390110525 // The Great Pigeon Projection
        ]
      ]
    },
    {
      name: 'Sparrows',
      season: 9,
      items: [
        1837000827, // Cardinal Directive
        1837000826, // Polar Vortex
        3981634627 // Alpine Dash
      ]
    },
    {
      name: 'Ships',
      season: 9,
      items: [
        1430140002, // Amnestia-S2
        1430140003, // Sleepless Flight
        2307306630 // Bright Spirits
      ]
    },
    {
      name: 'Extras',
      season: 9,
      items: [
        1736897080, // Gift Giver
        2118730408, // Dawning Celebration
        2118730409, // Dawning Tranquility
        466236950, // Dawning Elegance
        466236951, // Dawning Welcome
        3403347111, // Snowy Entrance
        3403347110 // Sweet Entrance
      ]
    }
  ]
};

export const CRIMSON_DAYS_Y3 = {
  name: 'Crimson Days',
  id: 'year-three-crimson-days',
  description: 'Acquirable during the seasonal Crimson Days event.',
  big: false,
  sections: [
    {
      name: 'Emotes',
      season: 9,
      items: [
        // 1345789366 // Heartfelt Union (Not planned to be sold for Bright Dust)
      ]
    },
    {
      name: 'Ghosts',
      season: 9,
      itemGroups: [
        [
          2716406907 // Crimson Shell
        ],
        [
          4111024700 // Two of Hearts Projection
        ]
      ]
    },
    {
      name: 'Sparrows',
      season: 9,
      items: [
        1266122672, // IVC-10
        1266122673 // SVC-12
      ]
    },
    {
      name: 'Extras',
      season: 9,
      items: [
        3622268500 // In the Valley
      ]
    }
  ]
};

export const GUARDIAN_GAMES_Y3 = {
  name: 'Guardian Games',
  id: 'year-three-guardian-games',
  description: 'Acquirable during the seasonal Guardian Games event.',
  big: false,
  sections: [
    {
      name: 'Hunter Armor',
      season: 10,
      itemGroups: [
        [
          685004314, // Competitive Spirit Mask
          2922275939, // Competitive Spirit Grips
          2797445293, // Competitive Spirit Vest
          548288405, // Competitive Spirit Strides
          911356576 // Competitive Spirit Cloak
        ],
        [
          195422190 // Cunning Rivalry Cloak
        ]
      ]
    },
    {
      name: 'Titan Armor',
      season: 10,
      itemGroups: [
        [
          2449623004, // Competitive Spirit Helm
          3845973845, // Competitive Spirit Gauntlets
          2709194827, // Competitive Spirit Plate
          1127128759, // Competitive Spirit Greaves
          1065911138 // Competitive Spirit Mark
        ],
        [
          967781090 // Mighty Rivalry Mark
        ]
      ]
    },
    {
      name: 'Warlock Armor',
      season: 10,
      itemGroups: [
        [
          544720811, // Competitive Spirit Hood
          3120368538, // Competitive Spirit Gloves
          1517831918, // Competitive Spirit Robes
          547804116, // Competitive Spirit Boots
          2260280759 // Competitive Spirit Bond
        ],
        [
          3365248655 // Sage Rivalry Bond
        ]
      ]
    },
    {
      name: 'Emotes',
      season: 10,
      itemGroups: [
        [
          2201628119, // Represent
          10656656, // Torch Light
          2788609407, // Participation Trophy
          2367025562, // Hip to the Hop
          1870273657, // High Score
          1327630195, // Low Score
          213458862, // One… Two… Uh…
          2300270673 // Recognize
        ],
        [
          // 2376234856 // Shuffle and Scat (Not planned to be sold for Bright Dust)
        ]
      ]
    },
    {
      name: 'Ghosts',
      season: 10,
      itemGroups: [
        [
          2272646882, // Rival Hunter Shell
          2272646881, // Rival Titan Shell
          2272646880 // Rival Warlock Shell
        ],
        [
          1673238725, // Hunter Projection
          1673238724, // Titan Projection
          1673238727 // Warlock Projection
        ]
      ]
    },
    {
      name: 'Sparrows',
      season: 10,
      items: [
        1614326414, // Runner Up
        1614326415 // Victory Lap
      ]
    },
    {
      name: 'Ships',
      season: 10,
      items: [
        1205148160, // The Underdog
        1205148161 // Team Spirit
      ]
    },
    {
      name: 'Extras',
      season: 10,
      items: [
        1983519832, // Rivals Three
        1983519831, // Settle the Score
        2171727443, // Rivalry Whitesand
        2171727442, // Rivalry Blacksand
        2213649831, // Rivalry Resolute
        2213649830, // Rivalry Stoic
        3393212813, // Cherry Blossom Entrance
        3393212812 // Cyber Class Entrance
      ]
    }
  ]
};

export const MOMENTS_OF_TRIUMPH_Y3 = {
  name: 'Moments of Triumph',
  id: 'year-three-moments-of-triumph',
  description: 'Earned during the 2020 Moments of Triumph event.',
  big: false,
  sections: [
    {
      name: 'Ghosts',
      season: 11,
      items: [
        3478783829 // Awakened Shell
      ]
    },
    {
      name: 'Sparrows',
      season: 11,
      items: [
        1328791939 // Resurrecting Flight
      ]
    },

    {
      name: 'Extras',
      season: 11,
      items: [
        1138508287, // Accolades on Accolades
        3605490916, // Eclipsed Void
        3622268497, // Savior / Sunset
        1138508279 // No Power in the Verse Can Stop Me
      ]
    }
  ]
};

export const SOLSTICE_OF_HEROES_Y3 = {
  name: 'Solstice of Heroes',
  id: 'COMMON_SOLSTICE_OF_HEROES',
  description: 'Acquirable during the 2020 Solstice of Heroes event.',
  big: false,
  sections: [
    {
      name: 'Hunter Armor',
      season: 11,
      itemGroups: [
        [
          3656394176, // Solstice Mask (Magnificent)
          1222467473, // Solstice Grasps (Magnificent)
          2723301959, // Solstice Vest (Magnificent)
          629159779, // Solstice Strides (Magnificent)
          3438799702 // Solstice Cloak (Magnificent)
        ],
        [
          2479769639, // Solstice Mask (Renewed)
          426368686, // Solstice Grasps (Renewed)
          1166603202, // Solstice Vest (Renewed)
          2933904296, // Solstice Strides (Renewed)
          856633363 // Solstice Cloak (Renewed)
        ],
        [
          510413482, // Solstice Mask (Majestic)
          515974643, // Solstice Grasps (Majestic)
          3243833629, // Solstice Vest (Majestic)
          250928581, // Solstice Strides (Majestic)
          410854224 // Solstice Cloak (Majestic)
        ],
        [
          3742741341, // Solstice Mask (Magnificent)
          2629627596, // Solstice Grasps (Magnificent)
          1167143060, // Solstice Vest (Magnificent)
          3275463030, // Solstice Strides (Magnificent)
          2335430633 // Solstice Cloak (Magnificent)
        ]
      ]
    },
    {
      name: 'Titan Armor',
      season: 11,
      itemGroups: [
        [
          393225356, // Solstice Helm (Magnificent)
          3884067141, //Solstice Gauntlets (Magnificent)
          2967332123, // Solstice Plate (Magnificent)
          4231293639, // Solstice Graves (Magnificent)
          1324151602 // Solstice Mark (Magnificent)
        ],
        [
          4153787689, // Solstice Helm (Renewed)
          1945196704, // Solstice Gauntlets (Renewed)
          749733608, // Solstice Plate (Renewed)
          640136282, // Solstice Greaves (Renewed)
          2451830981 // Solstice Mark (Renewed)
        ],
        [
          4116309852, // Solstice Helm (Majestic)
          1217693397, // Solstice Gauntlets (Majestic)
          2221612747, // Solstice Plate (Majestic)
          2793815607, // Solstice Greaves (Majestic)
          578329058 // Solstice Mark (Majestic)
        ],
        [
          3081894763, // Solstice Helm (Magnificent)
          1404151898, // Solstice Gauntlets (Magnificent)
          3654315694, //  Solstice Plate (Magnificent)
          2660623764, // Solstice Greaves (Magnificent)
          3972410231 // Solstice Mark (Magnificent)
        ]
      ]
    },
    {
      name: 'Warlock Armor',
      season: 11,
      itemGroups: [
        [
          1529650477, // Solstice Hood (Magnificent)
          2182316188, // Solstice Gloves (Magnificent)
          486920324, // Solstice Robes (Magnificent)
          1185244198, // Solstice Boots (Magnificent)
          1230647257 // Solstice Bond (Magnificent)
        ],
        [
          4116537170, // Solstice Hood (Renewed)
          287923131, // Solstice Gloves (Renewed)
          242828821, // Solstice Robes (Renewed)
          2991353901, // Solstice Boots (Renewed)
          3235287656 //  Solstice Bond (Renewed)
        ],
        [
          3162915011, // Solstice Hood (Majestic)
          3834419602, // Solstice Gloves (Majestic)
          211668054, // Solstice Robes (Majestic)
          4235761196, // Solstice Boots (Majestic)
          3836262527 // Solstice Bond (Majestic)
        ],
        [
          1858878452, // Solstice Hood (Magnificent)
          731283469, // Solstice Gloves (Magnificent)
          803600051, // Solstice Robes (Magnificent)
          1402082511, // Solstice Boots (Magnificent)
          3009026026 // Solstice Bond (Magnificent)
        ]
      ]
    },
    {
      name: 'Emotes',
      season: 11,
      itemGroups: [
        [
          3574066955, // Catching Rays
          801509177, // Power Rising
          4264494593, // Sweltering Heat
          1623693459, // Intimidating Snap
          2840773569 //Twisty Dance
        ],
        [
          // 876119751 // Iron Severance (Not planned to be sold for Bright Dust)
        ]
      ]
    },
    {
      name: 'Ghosts',
      season: 11,
      itemGroups: [
        [
          217626590, // Spelunking Shell
          217626591, // Cabana Shell
          217626588 // Backspin Shell
        ],
        [
          1821549985, // Flamingo Projection
          1821549984 // Sand Castle Projection
        ]
      ]
    },
    {
      name: 'Sparrows',
      season: 11,
      items: [
        320750826, // Eira's Grace
        320750827 // On Gilt Wings
      ]
    },
    {
      name: 'Ships',
      season: 11,
      items: [
        2924794318 // Solpiercer
      ]
    },
    {
      name: 'Extras',
      season: 11,
      items: [
        1138508286, // Magnificence in Action
        261886691, // Vintage Timber
        261886690, // Oiled Algae
        147998763 // Shocking Entrance
      ]
    }
  ]
};

export const EVERVERSE_Y3 = {
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
      name: 'Armor',
      season: 9,
      itemGroups: [
        [
          1701735222, // Virulent Mask
          2864252039, // Virulent Grips
          989383089, // Virulent Vest
          2041515209, // Virulent Strides
          3184812876 // Virulent Cloak
        ],
        [
          78334970, // Future-Facing Helm
          1849572291, // Future-Facing Gauntlets
          438532493, // Future-Facing Plate
          4236586357, // Future-Facing Greaves
          3313342080 // Future-Facing Mark
        ],
        [
          3389218555, // Wrath Trail Hood
          553429674, // Wrath Trail Gloves
          1413321694, // Wrath Trail Robes
          3504728132, // Wrath Trail Boots
          784525543 // Wrath Trail Bond
        ]
      ]
    },
    {
      name: 'Armor',
      season: 10,
      itemGroups: [
        [
          1880090831, // Luxe Visage
          4035222870, // Luxe Sleeves
          1188323994, // Luxe Vest
          952534832, // Luxe Riders
          412216811 // Luxe Cloak
        ],
        [
          2138625825, // Luxe Visor
          2934968632, // Luxe Cuffs
          74228048, // Luxe Parka
          970236274, // Luxe Treads
          3720911245 // Luxe Mark
        ],
        [
          1476085268, // Luxe Crown
          306810541, // Luxe Gloves
          3799598931, // Luxe Overcoat
          1019186287, // Luxe Soles
          1751531146 // Luxe Bond
        ]
      ]
    },
    {
      name: 'Ornaments',
      season: 8,
      itemGroups: [
        [
          52189603, // Bad Dog
          651701175, // Big Blind
          3844102542, // Father of Islands
          // 3432171457, // Heretic Robe (Not planned to be sold for Bright Dust)
          1360105767, // Járngreipr
          1563263613, // Law of Induction
          3438514430, // Peacebringer
          2020179519, // Polemology
          3093486579, // Sky/Perdition
          2744195002, // Third Rail
          519687404, // What If
          4159445096 // A Better Specimen
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
          3916835562 // Fènghuáng (Not planned to be sold for Bright Dust)
        ]
      ]
    },
    {
      name: 'Ornaments',
      season: 9,
      itemGroups: [
        [
          384923539, // Abyssal Scream
          432606867, // Black Death
          3449188806, // Long Live the Queen
          4115107119, // Packmaster's Command
          1869157938, // Ain't My First Rodeo
          299539105, // Violent Exorcism
          204713420, // Devil's Advocate
          171163996 // Bloodline Memorial
        ],
        [
          2319265678, // Doubt
          440770966 // Shifting Loyalties
        ],
        [
          929374195, // Mantle of Remembrance
          2579031865, // Calliope's Lullaby
          3654808012, // The Fourteenth Anamnesis
          3786758103, // Embodiment of the Warbeast
          3778646768, // Flight of the Interceptor
          475012491 // The Want of Lies and Wishes
        ]
      ]
    },
    {
      name: 'Ornaments',
      season: 10,
      itemGroups: [
        [
          2598666301, // All In
          269320354, // Blind Fury
          1409366784, // Burning Red
          1513177792, // Mercurial Affliction
          1673894252, // Splice of Life
          2482603977, // Standard Bearer
          1998569185 // Timeline Zero
          // 3547626308, // Death Comes Calling (Not planned to be sold for Bright Dust)
          // 3673548752 // Regal Deterrent (Not planned to be sold for Bright Dust)
        ],
        [
          // 4124216484, // Prized Ivory (Not planned to be sold for Bright Dust)
          1418556229, // Lord of the Hunt
          1828076537, // Necrosis
          1733242439, // Only the Penitent Pass
          572589482 // Blissful Ignorance
        ],
        [
          3927691568, // Nano Redux
          879895999, // Huskcrushers
          3505404632 // Diadem of Deceit
        ]
      ]
    },
    {
      name: 'Ornaments',
      season: 11,
      itemGroups: [
        [
          3038888553, // Matterscourge
          2347594371, // Objective Reality
          1606218149, // Heated Exchange
          3697492370, // Ahead of Its Time
          3365127084 // Sand and Sun
          // 584392035 // Equinox (Not planned to be sold for Bright Dust)
        ],
        [
          2549526496, // Hrafnagud (Not planned to be sold for Bright Dust)
          2779460227, // Arcturus Engine (Not planned to be sold for Bright Dust)
          1705887390 // Path to Convergence (Not planned to be sold for Bright Dust)
        ]
      ]
    },
    {
      name: 'Emotes & Finishers',
      season: 8,
      itemGroups: [
        [
          // 3769820799, // Camping (Not planned to be sold for Bright Dust)
          3806167517, // Fireteam Fire Up
          3470992439, // Guitar Solo
          2291520183, // Ninja Vanish
          // 3366702053, // Plant the Flag (Not planned to be sold for Bright Dust)
          2035374481, // Precise Strike
          2370712399, // Spring Showers
          3105326202, // Cross-Step Shuffle
          1188569234, // Ding
          1141309169, // Flare Gun
          1422833575, // Give Dap
          1300438173, // Happy Feet
          3702002191, // Be Sneaky
          248592690, // Eat It Up
          991204036, // Make It Stop
          88498859 // Too Hot
        ],
        [
          2504641452, // Savage Haymaker
          2504641454, // Golden Age Dropkick
          2504641455 // Whirlwind
        ]
      ]
    },
    {
      name: 'Emotes & Finishers',
      season: 9,
      itemGroups: [
        [
          1749473785, // Galloping Knight
          2711683305, // Playground Ride
          710527784, // Spike
          1194404806, // Cowbell
          208153163, // Keep It Clean
          2036655792, // Origami Crane
          1037681135, // Shake It Out
          300144357, // Distracted
          2077271390, // Flashy Moves
          2737227933, // Blade Wipe
          //  1700183918, // Gunslinger's Anticipation (Not planned to be sold for Bright Dust)
          //  1944063916, // Sunbreaker's Anticipation (Not planned to be sold for Bright Dust)
          //  340413553, // Dawnblade's Anticipation (Not planned to be sold for Bright Dust)
          //  1931729143, // Nightstalker's Respite (Not planned to be sold for Bright Dust)
          //  430068245, // Sentinel's Respite (Not planned to be sold for Bright Dust)
          //  3302119490 // Voidwalker's Respite (Not planned to be sold for Bright Dust)
          2970231290, // Face Palm
          4138096633 // Guardian, Bye!
        ],
        [
          //  1395929128, // Clock Cleaner (Not planned to be sold for Bright Dust)
          885220736 // Fist of Fury
          //  3643356340, // Flash Kick (Not planned to be sold for Bright Dust)
          //  1294248797, // Sure Shot (Not planned to be sold for Bright Dust)
          //  3474738931, // Nail on the Head (Not planned to be sold for Bright Dust)
          //  1492613344 // En Garde (Not planned to be sold for Bright Dust)
        ]
      ]
    },
    {
      name: 'Emotes',
      season: 10,
      itemGroups: [
        [
          1706261957, // ANOTHER!
          2007350539, // Carry The Load
          4273833730, // Feline Fancy
          2082339998, // Hit the Bag
          2737290434, // Master Chef
          2836141137, // Blinding Imagery
          // 3394806033, // Masterful Flow (Not planned to be sold for Bright Dust)
          // 2032032009, // Up High, Down Low (Not planned to be sold for Bright Dust)
          666690120, // Big Red Button
          2203539122, // Don Shades
          2270918090, // I Surrender!
          3245326556, // Infinity Cubes
          3736949607, // Taunt and Flaunt
          2144724879, // Patty Cake
          1942988696, // Shoulder Hug
          1032515587, // Whisper Sweet Nothings
          3973089432, // All Right, Let's GO!
          1897766356 // Hand Cannon Vogue
        ],
        [
          // 1429730445, // I Am the Boss Now (Not planned to be sold for Bright Dust)
          // 1475990252, // Gladiator's Bladerush (Not planned to be sold for Bright Dust)
          // 777541286 // Energy Overload (Not planned to be sold for Bright Dust)
          // 529541453, // This… Is… TRIALS! (Not planned to be sold for Bright Dust)
          // 1516635053, // Crackling Flourish (Not planned to be sold for Bright Dust)
          // 3141315153, // Thunderclap (Not planned to be sold for Bright Dust)
          // 1491605562, // Stormbreaker (Not planned to be sold for Bright Dust)
        ]
      ]
    },
    {
      name: 'Emotes',
      season: 11,
      itemGroups: [
        [
          2837446538, // A Sour Taste
          484425890, // Dawn of Invention
          1872362630, // Dubious Correlation
          3358915164, // Commanding Presence
          2449520393, // Grasping Thoughts
          391087589, // Elegant Twirl
          4015309571, // Fluid Dance
          1426984386, // Leggy Dance
          964709622, // Study Time
          3615496977, // Wacky Inflation
          3793695881, // Pumping Up
          2850533948, // Air Riff
          346333546, // Fencing Salute
          3462529885, // Sign of Approval
          3086378545, // Miniscule Melody
          2161809809, // Eager Beaver
          1163621614 // Victory Shout
        ],
        [
          // 2167929971, // Set and Spike (Not planned to be sold for Bright Dust)
          // 2902950991, // Aerial Snap Kick (Not planned to be sold for Bright Dust)
          // 659427429, // Overhead Heel Crush (Not planned to be sold for Bright Dust)
          // 1447853644, // Slice and Dice (Not planned to be sold for Bright Dust)
          // 697327226, // Bulwark Hurl (Not planned to be sold for Bright Dust)
          // 3401563735 // Nova Pulse (Not planned to be sold for Bright Dust)
        ]
      ]
    },
    {
      name: 'Ghosts',
      season: 8,
      itemGroups: [
        [
          779216204, // Harper's Shell
          779216202, // Lander Shell
          779216203, // Lion Guardant Shell
          779216206, // Lunar Shell
          779216207, // Ophiuchus Shell
          779216200, // Propheteer Shell
          779216201 // Scarlet Swarm Shell

          // Has highResIcon but not attached to Tess

          // 779216205 // Friendly Fire Shell (Not planned to be sold for Bright Dust)
        ],
        [
          2155593794, // Moonbound Projection
          2155593795, // Mindjack Projection
          2155593792, // Crota's Bane Projection
          2155593793 // Aeronautics of China Projection
        ]
      ]
    },
    {
      name: 'Ghosts',
      season: 9,
      itemGroups: [
        [
          4005536856, // Lampion Shell
          4005536857, // Omolon Shell
          4005536858, // Tex Mechanica Shell
          4005536859, // Veist Shell
          4005536860, // Simulation Shell
          4005536861, // Phalanx Shell
          4005536862 // Traitor Primus Shell
        ],
        [
          859004031, // Lantern Projection
          859004030, // Red Legion Projection
          859004029, // Saint-14 Projection
          859004028, // Colossus Helmet Projection
          859004027 // XIV Projection
        ]
      ]
    },
    {
      name: 'Ghosts',
      season: 10,
      itemGroups: [
        [
          1090082587, // Orbweaver Shell
          1090082586, // Seraph Shell
          1090082585, // CLVS-241 Shell
          1090082584, // Almost Mighty Shell
          1090082591, // Constricting Shell
          1090082590, // CamNav-TTN Shell
          1090082589 // Nucleus Shell
        ],
        [
          4149534912, // Cover of the Exile Projection
          4149534916, // Rasputin Projection
          4149534917, // Trials of Osiris Projection
          4149534918, // Hood of the Exile Projection
          4149534919 // Helm of the Exile Projection
        ]
      ]
    },
    {
      name: 'Ghosts',
      season: 11,
      itemGroups: [
        [
          3398078487, // August Shell
          3398078485, // Canopus Shell
          3398078482, // Adonis Shell
          3398078483 // Multiband Shell

          // 2764545753 // Empathic Shell (Not planned to be sold for Bright Dust)
        ],
        [
          2062815065, // Sterling Arbor Projection
          2062815064, // Tetrahedron Projection
          2062815067, // Ennead Projection
          2062815066, // Daito Projection
          2062815069 // Depository Projection
        ]
      ]
    },
    {
      name: 'Sparrows',
      season: 8,
      items: [
        2067296769, // Blood Runner
        2067296773, // Four Degrees of Separation
        2067296775, // Golden Pride
        2067296772, // Invasive Species
        2067296770, // Jotuneer
        2067296771 // The Regal Howl

        // Has highResIcon but not attached to Tess

        // 2067296774, // Blast Chariot (Not planned to be sold for Bright Dust)
        // 2067296768 // Magneton Trust (Planned for a future season)
      ]
    },
    {
      name: 'Sparrows',
      season: 9,
      items: [
        4248884708, // Tip of the Spear
        4248884709, // Ash Angel
        4248884710, // The Ram
        4248884711, // Perennial Velocity
        4248884704, // Viper-4s
        4248884705, // Spur of the Moment
        4248884706 // Motive Force
      ]
    },
    {
      name: 'Sparrows',
      season: 10,
      items: [
        // 144819303, // The Blockbuster (Not planned to be sold for Bright Dust)
        144819302, // Magneton Thrust
        144819301, // Nightmare Stalker
        144819300, // Lunatic's Legacy
        // 144819299, // Residual Trace (Not planned to be sold for Bright Dust)
        144819298, // Immoderate Splendor
        144819297, // Urban Commander
        144819296 // Haute Bliss
      ]
    },
    {
      name: 'Sparrows',
      season: 11,
      items: [
        // 406589946 // Photocycle (Not planned to be sold for Bright Dust)
        406589947, // Galvanic Fork
        406589944, // Canopus Trireme
        406589945, // Adonis Blue
        406589950, // SK-1 Multiband Rover
        406589948 // August Courser
        // 406589949 // Cryptomnesia (Not planned to be sold for Bright Dust)
      ]
    },
    {
      name: 'Ships',
      season: 8,
      items: [
        4079130217, // Quality Cut
        4079130220, // Refashioned Shapes
        4079130223 // The Machinoform

        // Has highResIcon but not attached to Tess

        // 4079130218, // Arbitrage LXI (Not planned to be sold for Bright Dust)
        // 4079130219, // Cuttlebone (Not planned to be sold for Bright Dust)
        // 4079130216, // Nephilim Toaster (Not planned to be sold for Bright Dust)
        // 4079130221 // Unwilling Revolt 00-Z (Not planned to be sold for Bright Dust)
      ]
    },
    {
      name: 'Ships',
      season: 9,
      items: [
        430387801, // Chrysopelea-S
        430387802, // The Prod
        430387803, // Tachyon-4
        430387804 // Saint's Invocation
      ]
    },
    {
      name: 'Ships',
      season: 10,
      items: [
        3528646495, // Obsidian Wings
        3528646494, // Waking Nightmare
        // 3528646493, // NS81 Reprisal Sprint (Not planned to be sold for Bright Dust)
        3528646492, // Solar Sails
        3528646491, // Arrow of Time
        3528646490, // Knucklebug
        3528646489 // Saint's Vocation
      ]
    },
    {
      name: 'Ships',
      season: 11,
      items: [
        2266588630, // Rimskipper Sling
        2266588631, // The Pallbearer
        2266588628, // Callisto Lancer
        2266588629, // VG-17 Flying Fortress
        2266588626, // Velocimancer
        2266588627 // Canopus Wing
        // 2266588624, // Cuttlebone (Not planned to be sold for Bright Dust)
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
      name: 'Shaders',
      season: 9,
      items: [
        3906243541, // Welded Brass
        3906243540, // Grayscale Undergrowth
        3906243543, // Circadian Chill
        3906243542 // Byzantium Lotus
      ]
    },
    {
      name: 'Shaders',
      season: 10,
      items: [
        2885393052, // Golden Age Wine
        2885393053, // Vibrant Medusa
        2885393054, // Coppertone Patina
        2885393055 // Neopop Wave
      ]
    },
    {
      name: 'Shaders',
      season: 11,
      items: [
        1046971211, // Butterbark
        1046971210, // Biolume
        1046971209, // Jacarina
        1046971208 // Gloamstrife
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
    },
    {
      name: 'Transmat Effects',
      season: 9,
      items: [
        1378231105, // Cabal Shield Breaker
        1378231104, // Box of Tricks
        1378231107, // Vex Gate Arrival
        1378231106 // Up in Smoke
      ]
    },
    {
      name: 'Transmat Effects',
      season: 10,
      items: [
        3545885626, // Warsat Arrival
        3545885627, // Cabal Entrance
        3545885625 // SIVA Emergence
      ]
    },
    {
      name: 'Transmat Effects',
      season: 11,
      items: [
        1729618707, // Daito Capsule Entrance
        1729618706 //Champion Entrance
      ]
    }
  ]
};

// Year 4

export const DAWNING_Y4 = {
  name: 'The Dawning',
  id: 'year-four-the-dawning',
  description: 'Acquirable during the seasonal Dawning event.',
  big: false,
  sections: [
    {
      name: 'Weapons',
      season: 12,
      itemGroups: [
        [1030895163],
        [
          // 1981661519,
          // 116918307
        ]
      ]
    },
    {
      name: 'Weapons',
      season: 15,
      itemGroups: [[3400256755], [301177215, 3264152240]]
    },
    {
      name: 'Hunter Armor',
      season: 12,
      items: [3104651352, 3568351785, 2655812783, 3394362619, 74038334]
    },
    {
      name: 'Hunter Armor',
      season: 15,
      items: [1938477372, 3293251509, 2763470379, 574406295, 1120186562]
    },
    {
      name: 'Titan Armor',
      season: 12,
      items: [428862428, 1825213269, 91501643, 3401335479, 2743185250]
    },
    {
      name: 'Titan Armor',
      season: 15,
      items: [2423798800, 2179902689, 2984888631, 3674851283, 818240646]
    },
    {
      name: 'Warlock Armor',
      season: 12,
      items: [3656766039, 2730176990, 1319520530, 3574120120, 1914761507]
    },
    {
      name: 'Warlock Armor',
      season: 15,
      items: [1581478491, 3082233610, 3524020798, 2121445668, 3278002119]
    },
    {
      name: 'Emotes',
      season: 12,
      itemGroups: [
        [3269282583, 2847079604, 4090391256, 3613286014, 4772275],
        [
          // 1150304053
        ]
      ]
    },
    {
      name: 'Emotes',
      season: 15,
      itemGroups: [
        [1983275378, 386969562, 2195752360, 796298276, 2760841051],
        [
          // 2892092373
        ]
      ]
    },
    {
      name: 'Ghosts',
      season: 12,
      itemGroups: [
        [4088827200, 4088827201, 4088827202],
        [505272876, 505272877]
      ]
    },
    {
      name: 'Ghosts',
      season: 15,
      itemGroups: [
        [2021594588, 2021594589, 2021594590],
        [2191694033, 2191694032]
      ]
    },
    {
      name: 'Sparrows',
      season: 12,
      items: [3301342410, 3301342411, 3301342408]
    },
    {
      name: 'Sparrows',
      season: 15,
      items: [773659238, 773659239, 773659236]
    },
    {
      name: 'Ships',
      season: 12,
      items: [249784434, 472776702]
    },
    {
      name: 'Ships',
      season: 15,
      items: [3078552186, 1926033630]
    },
    {
      name: 'Extras',
      season: 12,
      items: [1230660647, 2962058751, 2696974649, 2696974648, 912276057]
    },
    {
      name: 'Extras',
      season: 15,
      items: [
        3800278199,
        3986958420,
        2214585029,
        2214585028,
        1091411797,
        1091411796,
        707118595
      ]
    }
  ]
};

export const GUARDIAN_GAMES_Y4 = {
  name: 'Guardian Games',
  id: 'year-four-guardian-games',
  description: 'Acquirable during the seasonal Guardian Games event.',
  big: false,
  sections: [
    {
      name: 'Weapons',
      season: 13,
      items: [3044160466]
    },
    {
      name: 'Hunter Armor',
      season: 13,
      itemGroups: [
        [539974843],
        [1991946241, 2829865752, 4107663664, 1289590866, 3459379565]
      ]
    },
    {
      name: 'Titan Armor',
      season: 13,
      itemGroups: [
        [3371868783],
        [3690574071, 2763985022, 873100338, 3607928024, 1043883715]
      ]
    },
    {
      name: 'Warlock Armor',
      season: 13,
      itemGroups: [
        [3628145148],
        [2984964098, 2324505451, 4166401701, 3416263037, 3288350712]
      ]
    },
    {
      name: 'Emotes',
      season: 13,
      itemGroups: [
        [
          2532993847,
          1303706313,
          3651793541,
          838156448,
          2624974641,
          2222286218,
          411709610
        ],
        [
          // 1785547370
        ]
      ]
    },
    {
      name: 'Ghosts',
      season: 13,
      itemGroups: [
        [2991116201, 2991116200, 2991116203],
        [3216960486, 3216960487]
      ]
    },
    {
      name: 'Sparrows',
      season: 13,
      items: [1107624473, 1273354937, 1273354936]
    },
    {
      name: 'Ships',
      season: 13,
      items: [156845153, 156845152]
    },
    {
      name: 'Extras',
      season: 13,
      items: [
        532530780,
        532530769,
        3919847953,
        3446862222,
        3446862223,
        2217042834,
        2671075344
      ]
    }
  ]
};

export const SOLSTICE_OF_HEROES_Y4 = {
  name: 'Solstice of Heroes',
  id: 'COMMON_SOLSTICE_OF_HEROES',
  description: 'Acquirable during the 2021 Solstice of Heroes event.',
  big: false,
  sections: [
    {
      name: 'Weapons',
      season: 14,
      items: [2591111628]
    },
    {
      name: 'Hunter Armor',
      season: 14,
      itemGroups: [
        [3280087347, 1239024834, 2795914918, 3283170684, 3538363663],
        [343482208, 2245996337, 1319537767, 2077249155, 2035035510],
        [343482209, 2245996336, 1319537766, 2077249154, 2035035511],
        [604124708, 168438525, 596633475, 2492590623, 3790423802]
      ]
    },
    {
      name: 'Titan Armor',
      season: 14,
      itemGroups: [
        [1292425061, 2073101876, 3636889164, 2360840510, 2040680321],
        [2809967986, 3234744411, 1770862261, 1684784589, 468456840],
        [2809967987, 3234744410, 1770862260, 1684784588, 468456841],
        [3474363664, 3230467553, 1160766519, 430448851, 3289085830]
      ]
    },
    {
      name: 'Warlock Armor',
      season: 14,
      itemGroups: [
        [754050190, 2203814271, 1389298745, 1125064385, 2703464692],
        [139281387, 2756505818, 1044615214, 4012977684, 1362709751],
        [139281386, 2756505819, 1044615215, 4012977685, 1362709750],
        [444202817, 1282122328, 3612254098, 2805962096, 1691540653]
      ]
    },
    {
      name: 'Emotes',
      season: 14,
      itemGroups: [
        [3157963939, 3326173065, 2214129016, 1020589069, 2255318456],
        [
          // 130305507
        ]
      ]
    },
    {
      name: 'Ghosts',
      season: 14,
      itemGroups: [[52039562, 3116258570, 3116258571, 3116258568], [4202033493]]
    },
    {
      name: 'Sparrows',
      season: 14,
      items: [2795689398, 2795689399]
    },
    {
      name: 'Ships',
      season: 14,
      items: [2988472426, 2988472427]
    },
    {
      name: 'Extras',
      season: 14,
      items: [2510169805, 3936625548, 3004379087, 3592198503]
    }
  ]
};

export const FESTIVAL_OF_THE_LOST_Y4 = {
  name: 'Festival of the Lost',
  id: 'year-four-festival-of-the-lost',
  description: 'Acquirable during the seasonal Festival of the Lost event.',
  sections: [
    {
      name: 'Weapons',
      season: 15,
      items: [2261046232]
    },
    {
      name: 'Hunter Armor',
      season: 15,
      itemGroups: [
        [456874738, 881651163, 514572085, 3626658637, 3507133960],
        [3224066584]
      ]
    },
    {
      name: 'Titan Armor',
      season: 15,
      itemGroups: [
        [3254463492, 2818777309, 2952826467, 847859071, 1851649370],
        [199733460]
      ]
    },
    {
      name: 'Warlock Armor',
      season: 15,
      itemGroups: [
        [2128916453, 2909593268, 3587987404, 3197331902, 1991778561],
        [2545426109]
      ]
    },
    {
      name: 'Masks',
      season: 15,
      items: [
        1912138920,
        1912138921,
        1912138922,
        1912138923,
        1912138924,
        1912138925,
        3727346033,
        3727346032
      ]
    },
    {
      name: 'Emotes',
      season: 15,
      itemGroups: [
        [1806258196, 4034060602, 2297249368, 804309451, 1824935794],
        [
          // 1591188458
        ]
      ]
    },
    {
      name: 'Ghosts',
      season: 15,
      itemGroups: [
        [3547113102, 3547113103],
        [442994988, 442994989]
      ]
    },
    {
      name: 'Sparrows',
      season: 15,
      items: [3542826854, 3397132454, 3397132455]
    },
    {
      name: 'Ships',
      season: 15,
      items: [3499472512]
    },
    {
      name: 'Extras',
      season: 15,
      items: [
        1141716960,
        1141716967,
        3986958426,
        511117849,
        418753773,
        418753772,
        3186457725
      ]
    }
  ]
};

export const BUNGIE_30TH_ANNIVERSARY_EVENT_Y4 = {
  name: 'Bungie 30th Anniversary Event',
  id: 'year-four-bungie-30th-anniversary-event',
  description: 'Acquirable during the Bungie 30th Anniversary Event.',
  sections: [
    {
      name: 'Weapons',
      season: 15,
      items: [
        3046205073,
        296103153,
        2014761391,
        3227439259,
        2452241573,
        3593477432,
        2109129768,
        2991424415,
        2768498167
      ]
    },
    {
      name: 'Hunter Armor',
      season: 15,
      items: [1324885391, 3492105806]
    },
    {
      name: 'Titan Armor',
      season: 15,
      items: [4069013424, 4212806147]
    },
    {
      name: 'Warlock Armor',
      season: 15,
      items: [115580637, 3242034340]
    },
    {
      name: 'Emotes',
      season: 15,
      itemGroups: [
        [
          3703169394,
          3582457406,
          2388840381,
          2433436300,
          4271566634,
          1505110164,
          2214333484,
          2078304963,
          2637432184,
          3485775922,
          2438702274,
          1967918626,
          3825460361,
          2001069811,
          // 542633380,
          2064956040,
          2203190004,
          3125136030,
          1378831120
        ],
        [
          // 2163010787, // 4039153625, // 3681248702
        ]
      ]
    },
    {
      name: 'Ghosts',
      season: 15,
      itemGroups: [
        [
          // 3105072596,
          // 3105072597,
          3105072598,
          3105072599,
          3105072592,
          3105072593,
          3105072594
        ],
        [1538938258, 1538938257, 1538938256, 1538938259]
      ]
    },
    {
      name: 'Sparrows',
      season: 15,
      items: [
        // 2357026176,
        // 2357026177,
        2357026178,
        2357026179,
        2357026180,
        2357026181
      ]
    },
    {
      name: 'Ships',
      season: 15,
      items: [
        // 3210287508,
        // 3210287509,
        3210287510,
        3210287511,
        3210287504
      ]
    },
    {
      name: 'Extras',
      season: 15,
      items: [
        557384113,
        557384112,
        557384115,
        557384114,
        2827976013,
        2827976012
      ]
    }
  ]
};

export const MOMENTS_OF_TRIUMPH_Y4 = {
  name: 'Moments of Triumph',
  id: 'year-four-moments-of-triumph',
  description: 'Earned during the 2021 Moments of Triumph event.',
  big: false,
  sections: [
    {
      name: 'Ghosts',
      season: 15,
      items: [787883499]
    },
    {
      name: 'Sparrows',
      season: 15,
      items: [4153737633]
    },
    {
      name: 'Extras',
      season: 15,
      items: [3800278192, 3752071771]
    }
  ]
};

export const EVERVERSE_Y4 = {
  name: _(
    'DestinyFactionDefinition[1393733616].displayProperties.name',
    'Eververse'
  ),
  id: 'year-four-eververse',
  description: 'Items sold at Eververse for Bright Dust.',
  big: false,
  sections: [
    {
      name: 'Armor',
      season: 12,
      itemGroups: [
        [1596659078, 610618967, 2930427553, 2419153785, 3712932604],
        [3482689162, 3488353491, 2980516861, 2798746917, 147537456],
        [3092145291, 1414402554, 1095842638, 3095331892, 1838291479]
      ]
    },
    {
      name: 'Armor',
      season: 13,
      itemGroups: [
        [1597467149, 2250029820, 1044330340, 1252957702, 2212617913],
        [2188215631, 48380374, 2956050458, 1260659632, 2179943275],
        [3149327402, 3154888563, 3721737629, 2889842501, 888758224]
      ]
    },
    {
      name: 'Armor',
      season: 14,
      itemGroups: [
        [3912040564, 2784445581, 1446726707, 3455244623, 3652152682],
        [3794176656, 3550280545, 3343867063, 750261843, 1177219078],
        [3032081193, 823490208, 3968549096, 3813397082, 1375679173]
      ]
    },
    {
      name: 'Armor',
      season: 15,
      itemGroups: [
        [3081475235, 4177540466, 3361737910, 283811468, 2732941663],
        [2714489365, 1390332644, 2438224348, 2896417934, 3724057937],
        [689953736, 37288025, 3067917759, 2929473611, 20109006]
      ]
    },
    {
      name: 'Ornaments',
      season: 12,
      itemGroups: [
        [
          3170445301,
          3170445300,
          3900166436,
          4258327739,
          1522454198,
          1061828070,
          396425346
        ],
        [1029444727, 1516829881, 488956963, 2099043843, 3391785621, 740142754]
      ]
    },
    {
      name: 'Ornaments',
      season: 13,
      itemGroups: [
        [
          2267660625,
          287295296,
          1395580616,
          568877018,
          3802742250,
          4074521886,
          3925195811,
          4231724739
        ],
        [3951784665, 3049004864, 46563601]
      ]
    },
    {
      name: 'Ornaments',
      season: 14,
      itemGroups: [
        [
          1173052383,
          3753648496,
          314669087,
          2272772784,
          3756164435,
          3855774718,
          899855954,
          3205431489,
          3991681308,
          116193775
        ],
        [2413288976, 1185631823, 3736112681]
      ]
    },
    {
      name: 'Ornaments',
      season: 15,
      itemGroups: [
        [
          1180846762,
          46339337,
          3893996145,
          1532753063,
          2468053986,
          2478595126,
          204467717,
          4116539322,
          2321971501,
          1339798067
        ],
        [2906309175, 2548770303, 533407799, 3810306343, 2296382436, 31326870]
      ]
    },
    {
      name: 'Emotes',
      season: 12,
      itemGroups: [
        [
          793331321,
          4294201950,
          3581655471,
          392758338,
          614765340,
          768261433,
          4057072771,
          1927858591,
          1021230510,
          3867067311,
          2259361757,
          158226755,
          // 694000234,
          // 3775013469,
          // 2990386436,
          53537405,
          4043146243
        ],
        [
          // 1636358075,
          // 3932930005,
          //3662503912
        ]
      ]
    },
    {
      name: 'Emotes',
      season: 13,
      itemGroups: [
        [
          122185975,
          801080977,
          2847002782,
          1733566584,
          3043004564,
          4099441739,

          3516475261,
          63857986,
          2662325594,
          1033800931,
          2067971469,
          293474540,
          633593783,

          4217695393,
          2517691934,
          4198587027,
          2073721669
        ],
        [
          // 848275837,
          // 4286421958,
          // 3615928434
        ]
      ]
    },
    {
      name: 'Emotes',
      season: 14,
      itemGroups: [
        [
          // 3194926263,
          2054283378,
          2990575665,
          4247137339,
          4210150840,
          3969779337,
          451244149,

          3982999012,
          // 3250156679,
          // 1530151545,
          // 390568252,
          2967915798,
          3577052913,
          352241391,

          3305426869,
          2213036539,
          2884457784,
          4039169807
        ],
        [
          // 3702733224,
          // 2787596977,
          // 2878428802
        ]
      ]
    },
    {
      name: 'Emotes',
      season: 15,
      itemGroups: [
        [
          2253395575,
          659083489,
          2147358304,
          603756036,
          2270689055,
          // 3765582739,
          4157484206,
          3578508560,
          2290991653,
          3963288698,
          472303353,
          // 714835835,
          666729485,
          450587113,
          1426914281,
          2442710343,
          3470033292,
          2432107793
        ],
        [
          // 3441162174,
          // 2984874193,
          // 3672255631
        ]
      ]
    },
    {
      name: 'Ghosts',
      season: 12,
      itemGroups: [
        [
          1013853352,
          1013853353,
          1013853354,
          1013853355,
          1013853356,
          1013853357
          // 1013853358
        ],
        [4022197231, 4022197230, 4022197229, 4022197228, 4022197227]
      ]
    },
    {
      name: 'Ghosts',
      season: 13,
      itemGroups: [
        [
          2012043037,
          2012043036,
          2012043039,
          2012043038,
          // 2012043033,
          2012043032
        ],
        [3065522226, 3065522227, 3065522224, 3065522225, 3065522230]
      ]
    },
    {
      name: 'Ghosts',
      season: 14,
      itemGroups: [
        [
          3705925874,
          3705925875,
          3705925872,
          // 3705925873,
          3705925878,
          3705925879
        ],
        [1753939279, 1753939277, 1753939276]
      ]
    },
    {
      name: 'Ghosts',
      season: 15,
      itemGroups: [
        [
          3161505831,
          3161505830,
          3161505829,
          // 3161505828,
          3161505827,
          3161505826,
          3161505825
        ],
        [
          // 30317211,
          3079400952,
          3079400953,
          3079400954,
          3079400955,
          3079400956
        ]
      ]
    },
    {
      name: 'Sparrows',
      season: 12,
      items: [
        1439378676,
        1439378677,
        1439378678,
        1439378679,
        1439378672
        // 1439378674
      ]
    },
    {
      name: 'Sparrows',
      season: 13,
      items: [
        2056426001,
        2056426000,
        2056426003,
        2056426002,
        // 2056426005,
        2056426004
      ]
    },
    {
      name: 'Sparrows',
      season: 14,
      items: [
        422524822,
        422524823,
        422524820,
        // 422524821,
        422524818,
        422524819,
        422524816
      ]
    },
    {
      name: 'Sparrows',
      season: 15,
      items: [
        2803630130,
        2803630129,
        // 2803630128,
        2803630135,
        2803630134,
        2803630131
      ]
    },
    {
      name: 'Ships',
      season: 12,
      items: [3891757416, 3891757417, 3891757418, 3891757419]
    },
    {
      name: 'Ships',
      season: 13,
      items: [1018723385, 1018723384, 1018723387, 1018723386, 1018723389]
    },
    {
      name: 'Ships',
      season: 14,
      items: [
        489224274,
        489224275,
        489224272,
        // 489224273,
        489224278,
        489224279
      ]
    },
    {
      name: 'Ships',
      season: 15,
      items: [
        3343094235,
        3343094234,
        3343094233,
        // 3343094232,
        3343094239,
        3343094238
      ]
    },
    {
      name: 'Shaders',
      season: 12,
      items: [
        1371145733,
        1371145732,
        1371145735,
        1371145734,
        1371145729,
        1371145728
      ]
    },
    {
      name: 'Shaders',
      season: 13,
      items: [1854244374, 1854244375]
    },
    {
      name: 'Shaders',
      season: 14,
      items: [
        208045063,
        208045062
        // 208045061,
        // 208045060
      ]
    },
    {
      name: 'Shaders',
      season: 15,
      items: [2179339272, 2179339273, 2179339274, 2179339275]
    },
    {
      name: 'Transmat Effects',
      season: 12,
      items: [2527044465, 2527044464]
    },
    {
      name: 'Transmat Effects',
      season: 13,
      items: [3182550856, 3182550857]
    },
    {
      name: 'Transmat Effects',
      season: 14,
      items: [51305743, 51305742]
    },
    {
      name: 'Transmat Effects',
      season: 15,
      items: [2353828566, 2353828567]
    }
  ]
};

// Year 5

export const EVERVERSE_Y5 = {
  name: _(
    'DestinyFactionDefinition[1393733616].displayProperties.name',
    'Eververse'
  ),
  id: 'year-five-eververse',
  description: 'Items sold at Eververse for Bright Dust.',
  big: false,
  sections: [
    {
      name: 'Armor',
      season: 16,
      itemGroups: [
        [340605625, 236745008, 3998967128, 595380234, 2818919029],
        [1829123755, 109804186, 3736142830, 1832207060, 183624375],
        [2318928118, 3522918471, 2426141041, 2275724169, 285026828]
      ]
    },
    {
      name: 'Ornaments',
      season: 16,
      itemGroups: [
        [
          1868384995,
          2325054640,
          // 478593030,
          // 2971678083,
          682653408,
          // 567817402,
          1141818699
        ],
        [],
        [3115540150, 599904805, 3472374302, 2471221568, 2316352266, 3192251706]
      ]
    },

    {
      name: 'Emotes',
      season: 16,
      itemGroups: [
        [
          1948636808,
          1283540420,
          1880883246,
          2888139384,
          1801784637,
          1614426798,
          2340699134,
          428294954,
          // 3103707650,
          // 1344199169,
          1812891775,
          4130815052,
          1143446663,
          // 1181305814,
          3813350081,
          // 1556736433,
          3114447426,
          1768949382
        ],
        [
          // 22044598, // 3140272522, // 2964064937
        ]
      ]
    },

    {
      name: 'Ghosts',
      season: 16,
      itemGroups: [
        [
          2222909937,
          // 2222909936,
          2222909939,
          // 2222909938,
          2222909941,
          2222909940,
          2222909943
        ],
        [
          2371951502,
          2371951503,
          2371951500,
          2371951501
          // 2371951498
        ]
      ]
    },

    {
      name: 'Sparrows',
      season: 16,
      items: [
        2862488837,
        // 2862488836,
        // 2862488839,
        2862488838,
        2862488833,
        // 2862488832,
        2862488835
      ]
    },

    {
      name: 'Ships',
      season: 16,
      items: [
        // 1326263069,
        //1326263068,
        1326263071,
        1326263070
      ]
    },

    {
      name: 'Shaders',
      season: 16,
      items: [
        2776737690,
        2776737691,
        2776737688,
        2776737689,
        2776737694,
        2776737695
      ]
    },

    {
      name: 'Transmat Effects',
      season: 16,
      items: [1091850348, 1091850349]
    }
  ]
};

export const GUARDIAN_GAMES_Y5 = {
  name: 'Guardian Games',
  id: 'year-five-guardian-games',
  description: 'Acquirable during the seasonal Guardian Games event.',
  big: false,
  sections: [
    {
      name: 'Weapons',
      season: 16,
      items: [4294938474]
    },
    {
      name: 'Hunter Armor',
      season: 16,
      itemGroups: [[], []]
    },
    {
      name: 'Titan Armor',
      season: 16,
      itemGroups: [[], []]
    },
    {
      name: 'Warlock Armor',
      season: 16,
      itemGroups: [[], []]
    },
    {
      name: 'Emotes',
      season: 16,
      itemGroups: [[928070392, 214374661, 3104486761, 465351846, 51945187], []]
    },
    {
      name: 'Ghosts',
      season: 16,
      itemGroups: [
        [2200729532, 2200729533, 2200729535],
        [2934252066, 2934252067]
      ]
    },
    {
      name: 'Sparrows',
      season: 16,
      items: [134085740, 134085741, 134085743]
    },
    {
      name: 'Ships',
      season: 16,
      items: [386610725]
    },
    {
      name: 'Extras',
      season: 16,
      items: [787024992, 2983466243, 2450544934]
    }
  ]
};
