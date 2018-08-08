// @flow
import type { ItemsList, SetSection } from '../../types';

export * from './ironBanner';
export * from './eververse';
export * from './trials';
export * from './factions';
export * from './yearOneRaids';
export * from './vendors';

export const section = (name: string, items: ItemsList): SetSection => ({
  name,
  items
});

export const SOLSTICE_OF_HEROES = {
  name: 'Solstice of Heroes',
  id: 'COMMON_SOLSTICE_OF_HEROES',
  big: true,
  sections: [
    {
      name: 'Moments of Triumph',
      items: [
        3867275449, // The Right Choice (Moments of Triumph Ghost)
        4243004391, // Comrades in Arms (Moments of Triumph Sparrow)
        3860733295, // Eternally Triumphant (Moments of Triumph Emblem)
        3860733294 // Renewed Triumph (Moments of Triumph Emblem)
      ]
    },
    {
      name: 'Hunter Armor',
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
      name: 'Ghosts',
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
      name: 'Cosmetics',
      itemGroups: [
        [
          3859483818, // Blazing Virtue
          3859483819 // Malachite Gold
        ],
        [
          1259278657, // Raging Lepus
          2949664689, // Gray Nitrite
          1750365155, // Beachheader VI
          2396888157 // Sudden Squall
        ]
      ]
    },
    {
      name: 'Armor Glows',
      itemGroups: [
        [
          463166592, // Arcing Arms Glow
          3507818312, // Arcing Chest Glow
          1339405989, // Arcing Class Item Glow
          3054638345, // Arcing Helmet Glow
          3835954362 // Arcing Leg Glow
        ],
        [
          873770815, // Sunlit Arms Glow
          3367964921, // Sunlit Chest Glow
          811724212, // Sunlit Class Item Glow
          4143534670, // Sunlit Helmet Glow
          4089988225 // Sunlit Leg Glow
        ],
        [
          2699000684, // Void-Tinged Arms Glow
          1702504372, // Void-Tinged Chest Glow
          2912265353, // Void-Tinged Class Item Glow
          4236468733, // Void-Tinged Helmet Glow
          3344732822 // Void-Tinged Leg Glow
        ]
      ]
    }
  ]
};
