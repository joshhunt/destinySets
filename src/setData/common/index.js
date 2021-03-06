// @flow
import type { ItemsList, SetSection } from '../../types';

export * from './ironBanner';
export * from './eververse';
export * from './trials';
export * from './factions';
export * from './yearOneRaids';
export * from './vendors';
export * from './gambitPrimeStuff';

export const section = (name: string, items: ItemsList): SetSection => ({
  name,
  items
});

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
        [
          3054638345, // Arcing Helmet Glow
          463166592, // Arcing Arms Glow
          3507818312, // Arcing Chest Glow
          3835954362, // Arcing Leg Glow
          1339405989 // Arcing Class Item Glow
        ],
        [
          4143534670, // Sunlit Helmet Glow
          873770815, // Sunlit Arms Glow
          3367964921, // Sunlit Chest Glow
          4089988225, // Sunlit Leg Glow
          811724212 // Sunlit Class Item Glow
        ],
        [
          4236468733, // Void-Tinged Helmet Glow
          2699000684, // Void-Tinged Arms Glow
          1702504372, // Void-Tinged Chest Glow
          3344732822, // Void-Tinged Leg Glow
          2912265353 // Void-Tinged Class Item Glow
        ]
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

export const SOLSTICE_OF_HEROES_YEAR_2 = {
  name: 'Solstice of Heroes',
  id: 'COMMON_SOLSTICE_OF_HEROES',
  description: 'Earned during the 2019 Solstice of Heroes event.',
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
        [
          834178986, // Arc Head Armor Glow
          839740147, // Arc Arms Armor Glow
          577345565, // Arc Chest Armor Glow
          574694085, // Arc Leg Armor Glow
          2039333456 // Arc Class Item Glow
        ],
        [
          60802325, // Solar Head Armor Glow
          3031612900, // Solar Arms Armor Glow
          2449203932, // Solar Chest Armor Glow
          242730894, // Solar Leg Armor Glow
          3735037521 // Solar Class Item Glow
        ],
        [
          558870048, // Void Head Armor Glow
          2419910641, // Void Arms Armor Glow
          2552954151, // Void Chest Armor Glow
          2251060291, // Void Leg Armor Glow
          3692806198 // Void Class Item Glow
        ]
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

export const SOLSTICE_OF_HEROES_YEAR_3 = {
  name: 'Solstice of Heroes',
  id: 'COMMON_SOLSTICE_OF_HEROES',
  description: 'Earned during the 2020 Solstice of Heroes event.',
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

export const SOLSTICE_OF_HEROES_YEAR_4 = {
  name: 'Solstice of Heroes',
  id: 'COMMON_SOLSTICE_OF_HEROES',
  description: 'Earned during the 2021 Solstice of Heroes event.',
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
