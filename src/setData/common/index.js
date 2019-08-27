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
      name: 'Cosmetics',
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
      items: [

      ]
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
        4096637925, // SILLY HANDSHAKE
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
      name: 'Cosmetics',
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
