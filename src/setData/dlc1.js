// @flow

import * as common from './common';
import { section } from './common';
import type { SetPage } from '../types';

export default ([
  {
    name: 'Endgame',
    sets: [
      {
        name: 'Eater of Worlds, Raid Lair',
        description:
          'Gear obtained by playing the Eater of Worlds raid lair and increasing your reputation with Emperor Calus.',
        sections: [
          section('Weapons', common.RAID_EOW_WEAPONS),

          section('Hunter Armor', common.RAID_EOW_ARMOR_HUNTER),
          section('Hunter Ornaments', common.RAID_EOW_ORNAMENTS_HUNTER),

          section('Titan Armor', common.RAID_EOW_ARMOR_TITAN),
          section('Titan Ornaments', common.RAID_EOW_ORNAMENTS_TITAN),

          section('Warlock Armor', common.RAID_EOW_ARMOR_WARLOCK),
          section('Warlock Ornaments', common.RAID_EOW_ORNAMENTS_WARLOCK),

          {
            name: 'Extras',
            items: [
              113124080, // Contender's Shell (Ghost)
              4261480751, // Emperor's Envy (Emblem)
              4242407217, // Calus's Elite (Shader)
              4261480750, // Covetous Emperor (Emblem)
              4242407216 // Calus's Preferred (Shader)
            ]
          }
        ]
      },

      {
        name: 'Iron Banner',
        description:
          'Weapons and armor obtained by honoring the heroes of old in the Iron Banner Crucible tournament.',
        sections: [
          {
            name: 'Weapons',
            items: common.IRONBANNER_S2_WEAPONS
          },
          {
            name: 'Hunter Ornaments',
            items: common.IRONBANNER_S2_ORNAMENTS_HUNTER
          },
          {
            name: 'Titan Ornaments',
            items: common.IRONBANNER_S2_ORNAMENTS_TITAN
          },
          {
            name: 'Warlock Ornaments',
            items: common.IRONBANNER_S2_ORNAMENTS_WARLOCK
          },
          {
            name: 'Extras',
            items: [
              3681086673, // Iron Companionship Shell (Ghost shell)
              1220495181, // Iron Gallop (Sparrow)
              2924982629, // Iron Pendragon (Ship)
              2919429251, // Iron Hero Sigil (Emblem)
              3784292658 // Ironwood (Shader)
            ]
          }
        ]
      },

      {
        name: 'Trials of the Nine',
        description:
          'Weapons and armor obtained by competing in the Trials of the Nine.',
        sections: [
          {
            name: 'Weapons',
            items: common.TRIALS_S2_WEAPONS
          },
          {
            name: 'Hunter Ornaments',
            items: common.TRIALS_S2_ORNAMENTS_HUNTER
          },
          {
            name: 'Hunter Flawless Ornaments',
            items: common.TRIALS_S2_ORNAMENTS_FLAWLESS_HUNTER
          },
          {
            name: 'Titan Ornaments',
            items: common.TRIALS_S2_ORNAMENTS_TITAN
          },
          {
            name: 'Titan Flawless Ornaments',
            items: common.TRIALS_S2_ORNAMENTS_FLAWLESS_TITAN
          },
          {
            name: 'Warlock Ornaments',
            items: common.TRIALS_S2_ORNAMENTS_WARLOCK
          },
          {
            name: 'Warlock Flawless Ornaments',
            items: common.TRIALS_S2_ORNAMENTS_FLAWLESS_WARLOCK
          },
          {
            name: 'Extras',
            items: [
              3327512302 // Benevolence of the Nine (Shader)
            ]
          }
        ]
      }
    ]
  },
  {
    name: 'Faction Rally',
    sets: [
      {
        name: 'Dead Orbit Arsenal',
        description:
          'Weapons and armor obtained by working with Dead Orbit in their mission to push beyond the solar system.',
        small: true,
        sections: [
          {
            name: 'Weapons',
            items: common.FACTION_DO_S2_WEAPONS
          },
          {
            name: 'Hunter Ornaments',
            items: common.FACTION_DO_S2_ORNAMENTS_HUNTER
          },
          {
            name: 'Titan Ornaments',
            items: common.FACTION_DO_S2_ORNAMENTS_TITAN
          },
          {
            name: 'Warlock Ornaments',
            items: common.FACTION_DO_S2_ORNAMENTS_WARLOCK
          },
          {
            name: 'Extras',
            items: [
              3681086672, // Deep Space Shell (Ghost)
              1220495180, // Pale Horse (Sparrow)
              2924982628, // Distant Pulsar (Ship)
              745759694, // Escape This Dead Orbit (CoO Emblem)
              1106615806 // Dead Orbit Resurrection (Shader)
            ]
          }
        ]
      },
      {
        name: 'New Monarchy Arsenal',
        description:
          'Weapons and armor obtained by working with New Monarchy to strengthen the Last City.',
        small: true,
        sections: [
          {
            name: 'Weapons',
            items: common.FACTION_NM_S2_WEAPONS
          },
          {
            name: 'Hunter Ornaments',
            items: common.FACTION_NM_S2_ORNAMENTS_HUNTER
          },
          {
            name: 'Titan Ornaments',
            items: common.FACTION_NM_S2_ORNAMENTS_TITAN
          },
          {
            name: 'Warlock Ornaments',
            items: common.FACTION_NM_S2_ORNAMENTS_WARLOCK
          },
          {
            name: 'Extras',
            items: [
              3681086674, // Leonine Shell (Ghost)
              1220495182, // Leonine Courser (Sparrow)
              2924982630, // Leonine Carrack (Ship)
              745759692, // Sigil of the New Monarch (CoO Emblem)
              3366113619 // New Monarchy Succession (Shader)
            ]
          }
        ]
      },
      {
        name: 'Future War Cult Arsenal',
        description:
          'Weapons and armor obtained by working with Future War Cult to prepare for the wars to come.',
        small: true,
        sections: [
          {
            name: 'Weapons',
            items: common.FACTION_FWC_S2_WEAPONS
          },
          {
            name: 'Hunter Ornaments',
            items: common.FACTION_FWC_S2_ORNAMENTS_HUNTER
          },
          {
            name: 'Titan Ornaments',
            items: common.FACTION_FWC_S2_ORNAMENTS_TITAN
          },
          {
            name: 'Warlock Ornaments',
            items: common.FACTION_FWC_S2_ORNAMENTS_WARLOCK
          },
          {
            name: 'Extras',
            items: [
              3681086675, // Wars to Come Shell (Ghost)
              1220495183, // Truth Scraper (Sparrow)
              2924982631, // Bonegrip (Ship)
              745759695, // Future War Cultist (CoO Emblem)
              730976676 // War Cult Endgame (Shader)
            ]
          }
        ]
      }
    ]
  },
  {
    name: 'Vendor',
    sets: [
      {
        name: 'Mercury Gear',
        description:
          'Gear obtained by performing tasks for Brother Vance on Mercury.',
        small: false,
        sections: [
          {
            name: 'Lost Prophecy weapons',
            items: [
              472169727, // Garden Progeny 1
              3991544423, // The Conqueror 2
              3285365666, // Jack Queen King 3
              161537636, // Machina Dei 4
              2091737595, // Traveler's Judgment 5
              3991544422, // Sol Pariah 6
              3285365667, // West of Sunfall 7
              161537637, // Infinite Paths 8
              3188460622, // Null Calamity 9
              1490571337, // Future Safe 10
              2248667690 // Perfect Paradox
            ]
          },
          {
            name: 'Hunter Armor',
            items: [
              952071004, // Kairos Function Mask
              2348421845, // Kairos Function Grips
              2638643915, // Kairos Function Vest
              3924544055, // Kairos Function Boots
              995360226 // Kairos Function Cloak
            ]
          },
          {
            name: 'Titan Armor',
            items: [
              1768175752, // Kairos Function Helm
              1115510041, // Kairos Function Gauntlets
              578519423, // Kairos Function Plate
              4007592459, // Kairos Function Greaves
              2250032270 // Kairos Function Mark
            ]
          },
          {
            name: 'Warlock Armor',
            items: [
              2062911883, // Kairos Function Crown
              385169146, // Kairos Function Wraps
              2926606926, // Kairos Function Robes
              2066098484, // Kairos Function Boots
              3669055767 // Kairos Function Bond
            ]
          },
          {
            name: 'Ghosts',
            items: [
              573576346 // Sagira's Shell
            ]
          },
          {
            name: 'Emblems',
            items: [
              1312472209, // Fields of Glass
              2276139500, // Infinite Possibilities
              2276139501, // Vex Convergence
              2276139502, // Vance's Temple
              2276139503, // Burning Silicon
              2939572589, // Crossroads Emblem
              4261480748 // Transit of Mercury
            ]
          },
          {
            name: 'Achievement Emblems',
            items: [
              2939572586, // Hero of the Infinite
              4261480749, // Prophetic Arsenal
              2939572584, // Secrets of the Vex (Emblem)
              2939572585, // Vex Destroyer (Emblem)
              2939572590 // Vex Scholar (Emblem)
            ]
          },
          {
            name: 'Shaders',
            items: [
              3042066428, // Kairos Black (Shader)
              3042066430, // Kairos Gold (Shader)
              3042066431, // Kairos Bronze (Shader)
              3853609171 // Mercury Prophetic (Shader)
            ]
          }
        ]
      },

      {
        name: 'Vanguard Tactician Gear',
        description:
          'Weapons and armor obtained by carrying out special operations for Zavala.',
        sections: [
          {
            name: 'Weapons',
            items: [
              // Curse of Osiris
              3393130645, // Positive Outlook
              2957542878, // Living Memory
              1927800278, // Eternal Blazon
              3551104348 // Double-Edged Answer
            ]
          },
          {
            name: 'Hunter Ornaments',
            items: [
              2795289891, // On the Offense Ornament
              4188739374, // On the Offense Ornament
              1409959426, // On the Offense Ornament
              2951536384, // On the Offense Ornament
              2541644975 // On the Offense Ornament
            ]
          },
          {
            name: 'Titan Ornaments',
            items: [
              1269036705, // Take Shelter Ornament
              1776321292, // Take Shelter Ornament
              1214682004, // Take Shelter Ornament
              28479854, // Take Shelter Ornament
              552112621 // Take Shelter Ornament
            ]
          },
          {
            name: 'Warlock Ornaments',
            items: [
              2520561932, // Xenos Shore Ornament
              137367657, // Xenos Shore Ornament
              2033661183, // Xenos Shore Ornament
              995614939, // Xenos Shore Ornament
              2491110586 // Xenos Shore Ornament
            ]
          },
          {
            name: 'Achievement Emblems',
            items: [
              2939572588, // Master Gardener
              2939572591 // Master Cartographer
            ]
          },
          {
            name: 'Shaders',
            items: [
              822835819 // Vanguard Discipline
            ]
          }
        ]
      },

      {
        name: 'Crucible Engram',
        description: 'Rewards for your efforts in the Crucible.',
        sections: [
          {
            name: 'Weapons',
            items: [
              // Curse of Osiris
              1674742470, // Autumn Wind
              468276817, // Nature of the Beast
              1084788061, // Swift Solstice
              2792181427 // Tiebreaker
            ]
          },

          {
            name: 'Hunter Ornaments',
            items: [
              2806246104, // Soaring Sword Ornament
              3460422045, // Soaring Sword Ornament
              2646135315, // Soaring Sword Ornament
              337811599, // Soaring Sword Ornament
              1181382726 // Soaring Sword Ornament
            ]
          },
          {
            name: 'Titan Ornaments',
            items: [
              2908316342, // Phoenix Battle Ornament
              3955222467, // Phoenix Battle Ornament
              3440657549, // Phoenix Battle Ornament
              2685752725, // Phoenix Battle Ornament
              1617637028 // Phoenix Battle Ornament
            ]
          },
          {
            name: 'Warlock Ornaments',
            items: [
              2516513295, // Ankaa Friend Ornament
              121382562, // Ankaa Friend Ornament
              2521913126, // Ankaa Friend Ornament
              3980640404, // Ankaa Friend Ornament
              36130859 // Ankaa Friend Ornament
            ]
          },
          {
            name: 'Shaders',
            items: [
              87646118 // Endless Glory
            ]
          }
        ]
      },

      {
        name: 'Gunsmith Arsenal',
        description:
          'Weapons obtained by increasing your standing with Banshee-44, the Gunsmith.',
        sections: [
          {
            name: 'Weapons',
            items: [
              // Curse of Osiris
              2414612776, // New City
              3216383791, // Home for the Lost
              2295941920, // Belfry Bounty
              2414612777, // Atalanta-D
              1411084669, // Zenobia-D
              2812672357, // Eulogy SI4
              2149166938, // Classical-42
              3920811074, // Medley-45
              2295941921, // Maestro-46
              228424224, // Impromptu-49
              3434629515, // Metronome-52
              2149166939, // Countess SA/2
              3005879472, // Conjecture TSc
              2812672356, // Vertical Orbit QSm
              3005879473, // Crooked Fang-4fr
              4105447486, // Nox Veneris II
              4105447487, // Elatha FR4
              4213221671 // Sunrise GL4
            ]
          }
        ]
      }
    ]
  },
  {
    name: 'Holiday',
    sets: [
      {
        name: 'The Dawning',
        big: false,
        sections: [
          {
            name: 'Hunter Armor',
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
            items: [
              3494199208, // Giving
              367778392, // Honest Dance
              80303715, // Excited Dance
              2134318165 // Icecapade
            ]
          },
          {
            name: 'Ghosts',
            items: [
              3287805175, // Dulcinea Shell
              3287805177, // Pomegranate Shell
              3287805178, // Circular Time Shell
              3287805174, // Wild Hunt Shell
              3287805183, // Infinite Hand Shell
              3287805180, // Joyous Hunt Shell
              3287805176, // Dawning Bauble Shell
              1051903593, // Dawning Bauble Shell
              1816495538, // Sweet Memories Shell
              3287805181, // Sweet Memories Shell
              1397284432, // Jasper Dawn Shell
              3287805179 // Jasper Dawn Shell
            ]
          },
          {
            name: 'Sparrows',
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
              3161524490, // Rupture
              1423305589, // Rupture
              1423305590, // Shimmering Iris
              3569791559, // Shimmering Iris
              1984190529, // Magikon
              1423305584 // Magikon
            ]
          },
          {
            name: 'Ships',
            items: [
              317465075, // A History of Starlight
              317465074, // Cerulean Flash
              3140833552, // Dragonfly Strident
              3140833555, // Alta Clara
              3140833553, // Brilliant Narcissus
              3140833558, // Breath of Stars
              3140833556, // Winter Blade
              3177119978, // Carmina Commencing
              3140833557, // Carmina Commencing
              3140833559, // Regent Redeemer
              1602334068, // Regent Redeemer
              3140833554, // Joyfire
              3729709035 // Joyfire
            ]
          },
          {
            name: 'Emblems',
            items: [
              3639894194 // Light of the Dawning
            ]
          },
          {
            name: 'Shaders',
            items: [
              3800267415, // Dawning Hope
              3800267413, // Dawning Festiveness
              3866715933, // Dawning Warmth
              3800267414 // Dawning Brilliance
            ]
          }
        ]
      },
      {
        name: 'Crimson Days',
        big: false,
        sections: [
          {
            name: 'Emotes',
            items: [
              596833222, // Heart Sign
              4097227155, // Vengeful Dance
              3809722908, // Amour Dance
              2764644855 // Flaunting Dance
            ]
          },
          {
            name: 'Ghosts',
            items: [
              263371512, // Entwining Heart Shell
              263371513, // Garland Shell
              263371515, // True Conifer Shell
              263371514, // Propulsive Heart Shell
              263371516, // Amo Ludere Shell
              263371517, // Electric Heart Shell
              263371519, // Radiant Sunflake Shell
              263371518 // Tirastrella Shell
            ]
          },
          {
            name: 'Sparrows',
            items: [
              3587167050, // Undefeated
              3587167051, // Undeterred
              1623653768, // Last Love
              1623653770, // Heartbreaker
              1623653769, // First Love
              1623653771 // Battleheart
            ]
          },
          {
            name: 'Emblems',
            items: [
              1782320603 // Fire of the Crimson Days
            ]
          },
          {
            name: 'Shaders',
            items: [
              1052553863, // Crimson Passion - Bright Dust dismantle
              1052553862 // Crimson Valor - Bright Dust dismantle
            ]
          },
          {
            name: 'Weapon Ornaments',
            items: [
              3373357626, // Prism for Prometheus Lens
              2433900295, // Carina Nebula for Graviton Lance
              3171649853, // Go About Your Business for Sweet Business
              669267835 // Dieselpunk for The Wardcliffe Coil
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
        name: 'Eververse, Season 2',
        big: true,
        sections: [
          {
            name: 'Hunter Armor',
            items: [
              2277597261, // Omega Mechanos Mask
              2930263100, // Omega Mechanos Grasps
              3203735972, // Omega Mechanos Vest
              2316071750, // Omega Mechanos Strides
              3947566073 // Omega Mechanos Cloak
            ]
          },
          {
            name: 'Titan Armor',
            items: [
              3838590505, // Omega Mechanos Helm
              1629999520, // Omega Mechanos Gauntlets
              2574287336, // Omega Mechanos Plate
              324939098, // Omega Mechanos Greaves
              4276384709 // Omega Mechanos Mark
            ]
          },
          {
            name: 'Warlock Armor',
            items: [
              903593458, // Omega Mechanos Crown
              1328369883, // Omega Mechanos Gloves
              153589813, // Omega Mechanos Robes
              4073377357, // Omega Mechanos Boots
              3146151688 // Omega Mechanos Bond
            ]
          },
          {
            name: 'Emotes',
            items: common.EVERVERSE_S2_EMOTES
          },
          {
            name: 'Ghosts',
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
            name: 'Sparrows',
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
            name: 'Ships',
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
            name: 'Shaders',
            items: [
              2395477994, // Mettalic Sunrise
              2395477996, // Precursor Vex Chrome
              2395477997, // Desert of Gold
              2395477998, // Descendant Vex Chrome
              2395477999 // Mercury Vex Chrome
            ]
          }
        ]
      }
    ]
  }
]: SetPage);
