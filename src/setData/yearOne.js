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
        id: 'YEAR_ONE_STRIKES',
        description: _(
          'DestinyCollectibleDefinition[1333654058].sourceString',
          'Complete strikes and earn rank-up packages from Commander Zavala.'
        ),
        sections: [
          {
            name: 'Weapons',
            season: 1,
            items: common.VENDOR_VANGUARD_S1_WEAPONS
          },
          {
            name: 'Weapons',
            season: 2,
            items: common.VENDOR_VANGUARD_S2_WEAPONS
          },

          {
            name: 'Weapons',
            season: 3,
            items: common.VENDOR_VANGUARD_S3_WEAPONS
          },
          {
            name: 'Armor',
            season: 1,
            itemGroups: [
              common.VENDOR_VANGUARD_S1_ARMOR_HUNTER,
              common.VENDOR_VANGUARD_S1_ARMOR_TITAN,
              common.VENDOR_VANGUARD_S1_ARMOR_WARLOCK
            ]
          },
          {
            name: 'Ornaments',
            season: 2,
            itemGroups: [
              common.VENDOR_VANGUARD_S2_ORNAMENTS_HUNTER,
              common.VENDOR_VANGUARD_S2_ORNAMENTS_TITAN,
              common.VENDOR_VANGUARD_S2_ORNAMENTS_WARLOCK
            ]
          },
          {
            name: 'Ornaments',
            season: 3,
            itemGroups: [
              common.VENDOR_VANGUARD_S3_ORNAMENTS_HUNTER,
              common.VENDOR_VANGUARD_S3_ORNAMENTS_TITAN,
              common.VENDOR_VANGUARD_S3_ORNAMENTS_WARLOCK
            ]
          },
          {
            name: 'Extras',
            season: 1,
            items: [
              2010554576, // At the Vanguard
              2010554578, // Make Us Proud
              2010554579, // Push Forward
              223308216 // Vanguard Magnus
            ]
          },
          {
            name: 'Extras',
            season: 2,
            items: [
              822835819 // Vanguard Discipline
            ]
          },
          {
            name: 'Extras',
            season: 3,
            items: [
              1887457789, // Ambrite Complex Shell
              123555424, // S-99 Bogtreader Steel
              806017499, // Zavala's Authority
              1400453406 // Vanguard Unity
            ]
          }
        ]
      },
      {
        name: _(
          'DestinyActivityModeDefinition[1164760504].displayProperties.name',
          'Crucible'
        ),
        id: 'YEAR_ONE_CRUCIBLE',
        description: _(
          'DestinyCollectibleDefinition[273762345].sourceString',
          'Complete Crucible matches and earn rank-up packages from Lord Shaxx.'
        ),
        sections: [
          {
            name: 'Weapons',
            season: 1,
            items: common.VENDOR_CRUCIBLE_S1_WEAPONS
          },
          {
            name: 'Weapons',
            season: 2,
            items: common.VENDOR_CRUCIBLE_S2_WEAPONS
          },
          {
            name: 'Valor Rewards',
            season: 3,
            items: common.VENDOR_CRUCIBLE_S3_VALOR_REWARDS
          },
          {
            name: 'Glory Rewards',
            season: 3,
            items: common.VENDOR_CRUCIBLE_S3_GLORY_REWARDS
          },
          {
            name: 'Armor',
            season: 1,
            itemGroups: [
              common.VENDOR_CRUCIBLE_S1_ARMOR_HUNTER,
              common.VENDOR_CRUCIBLE_S1_ARMOR_TITAN,
              common.VENDOR_CRUCIBLE_S1_ARMOR_WARLOCK
            ]
          },
          {
            name: 'Ornaments',
            season: 2,
            itemGroups: [
              common.VENDOR_CRUCIBLE_S2_ORNAMENTS_HUNTER,
              common.VENDOR_CRUCIBLE_S2_ORNAMENTS_TITAN,
              common.VENDOR_CRUCIBLE_S2_ORNAMENTS_WARLOCK
            ]
          },
          {
            name: 'Ornaments',
            season: 3,
            itemGroups: [
              common.VENDOR_CRUCIBLE_S3_ORNAMENTS_HUNTER,
              common.VENDOR_CRUCIBLE_S3_ORNAMENTS_TITAN,
              common.VENDOR_CRUCIBLE_S3_ORNAMENTS_WARLOCK
            ]
          },
          {
            name: 'Extras',
            season: 1,
            items: [
              4242592195, // Fight Forever
              4242592192, // Give Them War
              4242592193, // One Path to Victory
              969863968, // Victorious Veteran
              3875413893 // Crucible Glory
            ]
          },
          {
            name: 'Extras',
            season: 2,
            items: [
              87646118 // Endless Glory
            ]
          },
          {
            name: 'Extras',
            season: 3,
            items: [
              29194593, // For Valor (Season 3)
              2890977363, // For Glory (Season 3)
              2361935691 // Crucible Triumph
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
          'DestinyCollectibleDefinition[1333654062].sourceString',
          'Complete Iron Banner matches and earn rank-up packages from Lord Saladin.'
        ),
        sections: [
          {
            name: 'Weapons',
            season: 1,
            items: common.IRONBANNER_S1_WEAPONS
          },
          {
            name: 'Weapons',
            season: 2,
            items: common.IRONBANNER_S2_WEAPONS
          },
          {
            name: 'Weapons',
            season: 3,
            items: common.IRONBANNER_S3_WEAPONS
          },
          {
            name: 'Armor',
            season: 1,
            itemGroups: [
              common.IRONBANNER_S1_ARMOR_HUNTER,
              common.IRONBANNER_S1_ARMOR_TITAN,
              common.IRONBANNER_S1_ARMOR_WARLOCK
            ]
          },
          {
            name: 'Ornaments',
            season: 2,
            itemGroups: [
              common.IRONBANNER_S2_ORNAMENTS_HUNTER,
              common.IRONBANNER_S2_ORNAMENTS_TITAN,
              common.IRONBANNER_S2_ORNAMENTS_WARLOCK
            ]
          },
          {
            name: 'Ornaments',
            season: 3,
            itemGroups: [
              common.IRONBANNER_S3_ORNAMENTS_HUNTER,
              common.IRONBANNER_S3_ORNAMENTS_TITAN,
              common.IRONBANNER_S3_ORNAMENTS_WARLOCK
            ]
          },
          {
            name: 'Extras',
            season: 1,
            items: [
              3373303016, // Felwinter Frost
              3373303017, // Shades of Radegast
              864505614, // Iron Wolf
              864505615 // Iron Battalion
            ]
          },
          {
            name: 'Extras',
            season: 2,
            items: [
              3681086673, // Iron Companionship Shell (Ghost shell)
              1220495181, // Iron Gallop (Sparrow)
              2924982629, // Iron Pendragon (Ship)
              2919429251, // Iron Hero Sigil (Emblem)
              3784292658 // Ironwood (Shader)
            ]
          },
          {
            name: 'Extras',
            season: 3,
            items: [
              1420718398, // Esfera Triumph
              1069214754, // Visage of Skorri
              3449099425 // Iron to Steel
            ]
          }
        ]
      },

      {
        name: _(
          'DestinyRecordDefinition[1370326378].displayProperties.name',
          'Trials of the Nine'
        ),
        id: 'YEAR_ONE_TRIALS_OF_THE_NINE',
        description: _(
          'DestinyCollectibleDefinition[1152758805].sourceString',
          'Complete Trials tickets and earn rank-up packages from the Emissary of the Nine.'
        ),
        sections: [
          {
            name: 'Weapons',
            season: 1,
            items: common.TRIALS_S1_WEAPONS
          },
          {
            name: 'Weapons',
            season: 2,
            items: common.TRIALS_S2_WEAPONS
          },
          {
            name: 'Weapons',
            season: 3,
            items: common.TRIALS_S3_WEAPONS
          },
          {
            name: 'Armor',
            season: 1,
            itemGroups: [
              common.TRIALS_S1_ARMOR_HUNTER,
              common.TRIALS_S1_ARMOR_TITAN,
              common.TRIALS_S1_ARMOR_WARLOCK
            ]
          },

          {
            name: 'Armor - Flawless',
            season: 1,
            itemGroups: [
              common.TRIALS_S1_ARMOR_FLAWLESS_HUNTER,
              common.TRIALS_S1_ARMOR_FLAWLESS_TITAN,
              common.TRIALS_S1_ARMOR_FLAWLESS_WARLOCK
            ]
          },

          {
            name: 'Ornaments',
            season: 2,
            itemGroups: [
              common.TRIALS_S2_ORNAMENTS_HUNTER,
              common.TRIALS_S2_ORNAMENTS_TITAN,
              common.TRIALS_S2_ORNAMENTS_WARLOCK
            ]
          },

          {
            name: 'Ornaments - Flawless',
            season: 2,
            itemGroups: [
              common.TRIALS_S2_ORNAMENTS_FLAWLESS_HUNTER,
              common.TRIALS_S2_ORNAMENTS_FLAWLESS_TITAN,
              common.TRIALS_S2_ORNAMENTS_FLAWLESS_WARLOCK
            ]
          },
          {
            name: 'Extras',
            season: 1,
            items: [
              19962737, // Chasing Perfection
              2029506313, // You Are Worthy
              16277432, // Honors of the Nine
              16277433 // Gift of the Nine
            ]
          },
          {
            name: 'Extras',
            season: 2,
            items: [
              3327512302 // Benevolence of the Nine (Shader)
            ]
          },
          {
            name: 'Extras',
            season: 3,
            items: [
              2894506171, // Knight's Peace Shell
              1827800764, // Millennial Spadework Shell
              641129738, // Canine Rising
              1879447862, // Burningbrite Tyger
              3682795607 // Cognition of the Nine shader
            ]
          }
        ]
      },
      {
        name: 'Vanguard Research Gear',
        id: 'BASE_VANGUARD_RESEARCH_GEAR',
        description:
          'Weapons and armor obtained by assisting Ikora Rey with her research.',
        sections: [
          {
            name: 'Hunter Armor',
            season: 1,
            items: [477057676, 3967899461, 2392018715, 20158663, 748838194]
          },
          {
            name: 'Titan Armor',
            season: 1,
            items: [2066872758, 3229389575, 4258405681, 2406652745, 2158868172]
          },
          {
            name: 'Warlock Armor',
            season: 1,
            items: [2612983587, 3709048818, 1390681142, 4110287116, 761884895]
          },
          {
            name: 'Extras',
            season: 1,
            items: [
              1724152706, // Red Legion Aegis
              1724152705, // Red Legion Logistics
              1724152704 // WAR Vault 5
            ]
          }
        ]
      },
      {
        name: 'Leviathan Raid',
        id: 'ALL_SEASONS_LEVIATHAN_RAID',
        description:
          'Gear obtained by playing the Leviathan raid and increasing your reputation with Emperor Calus.',
        sections: [
          {
            name: 'Weapons',
            season: 1,
            items: common.RAID_LEVIATHAN_WEAPONS
          },
          {
            name: 'Armor',
            season: 1,
            itemGroups: [
              common.RAID_LEVIATHAN_ARMOR_HUNTER,
              common.RAID_LEVIATHAN_ARMOR_TITAN,
              common.RAID_LEVIATHAN_ARMOR_WARLOCK
            ]
          },
          {
            name: 'Armor - Prestige Mode',
            season: 1,
            itemGroups: [
              common.RAID_LEVIATHAN_ARMOR_PRESTIGE_HUNTER,
              common.RAID_LEVIATHAN_ARMOR_PRESTIGE_TITAN,
              common.RAID_LEVIATHAN_ARMOR_PRESTIGE_WARLOCK
            ]
          },
          {
            name: 'Extras',
            items: [
              3257147585, // Embrace His Name
              1667199810, // Good Dog
              2984066626, // Splish Splash
              1625974211, // Two Enter, One Leaves
              812824526, // Take the Throne
              1422712818, // Calus's Selected
              2107367383, // Glory to the Emperor
              1422712819 // Calus's Treasured
            ]
          }
        ]
      },
      {
        name: 'Dead Orbit Arsenal',
        id: 'ALL_SEASONS_DEAD_ORBIT_ARSENAL',
        description:
          'Weapons and armor obtained by working with Dead Orbit in their mission to push beyond the solar system.',
        sections: [
          {
            name: 'Weapons',
            season: 1,
            items: common.FACTION_DO_S1_WEAPONS
          },
          {
            name: 'Weapons',
            season: 2,
            items: common.FACTION_DO_S2_WEAPONS
          },
          {
            name: 'Weapons',
            season: 3,
            items: common.FACTION_DO_S3_WEAPONS
          },
          {
            name: 'Armor',
            season: 1,
            itemGroups: [
              common.FACTION_DO_S1_ARMOR_HUNTER,
              common.FACTION_DO_S1_ARMOR_TITAN,
              common.FACTION_DO_S1_ARMOR_WARLOCK
            ]
          },
          {
            name: 'Ornaments',
            season: 2,
            itemGroups: [
              common.FACTION_DO_S2_ORNAMENTS_HUNTER,
              common.FACTION_DO_S2_ORNAMENTS_TITAN,
              common.FACTION_DO_S2_ORNAMENTS_WARLOCK
            ]
          },
          {
            name: 'Ornaments',
            season: 3,
            itemGroups: [
              common.FACTION_DO_S3_ORNAMENTS_HUNTER,
              common.FACTION_DO_S3_ORNAMENTS_TITAN,
              common.FACTION_DO_S3_ORNAMENTS_WARLOCK
            ]
          },
          {
            name: 'Extras',
            season: 1,
            items: [
              802191383, // Total Eclipse
              1841451177, // Dead Orbit's Fate
              1841451179 // Dead Orbit Camo
            ]
          },
          {
            name: 'Extras',
            season: 2,
            items: [
              3681086672, // Deep Space Shell (Ghost)
              1220495180, // Pale Horse (Sparrow)
              2924982628, // Distant Pulsar (Ship)
              745759694, // Escape This Dead Orbit (CoO Emblem)
              1106615806 // Dead Orbit Resurrection (Shader)
            ]
          },
          {
            name: 'Extras',
            season: 3,
            items: [
              3826233802, // Rotaro 33
              738873646, // One Orbit Remains emblem
              996259007 // Dead Orbit Vision
            ]
          }
        ]
      },
      {
        name: 'New Monarchy Arsenal',
        id: 'ALL_SEASONS_NEW_MONARCHY_ARSENAL',
        description:
          'Weapons and armor obtained by working with New Monarchy to strengthen the Last City.',
        sections: [
          {
            name: 'Weapons',
            season: 1,
            items: common.FACTION_NM_S1_WEAPONS
          },
          {
            name: 'Weapons',
            season: 2,
            items: common.FACTION_NM_S2_WEAPONS
          },
          {
            name: 'Weapons',
            season: 3,
            items: common.FACTION_NM_S3_WEAPONS
          },
          {
            name: 'Armor',
            season: 1,
            itemGroups: [
              common.FACTION_NM_S1_ARMOR_HUNTER,
              common.FACTION_NM_S1_ARMOR_TITAN,
              common.FACTION_NM_S1_ARMOR_WARLOCK
            ]
          },
          {
            name: 'Ornaments',
            season: 2,
            itemGroups: [
              common.FACTION_NM_S2_ORNAMENTS_HUNTER,
              common.FACTION_NM_S2_ORNAMENTS_TITAN,
              common.FACTION_NM_S2_ORNAMENTS_WARLOCK
            ]
          },
          {
            name: 'Ornaments',
            season: 3,
            itemGroups: [
              common.FACTION_NM_S3_ORNAMENTS_HUNTER,
              common.FACTION_NM_S3_ORNAMENTS_TITAN,
              common.FACTION_NM_S3_ORNAMENTS_WARLOCK
            ]
          },
          {
            name: 'Extras',
            season: 1,
            items: [
              802191381, // Regency
              1206746476, // New Monarchy Diamonds
              1206746478 // New Monarchy Regalia
            ]
          },
          {
            name: 'Extras',
            season: 2,
            items: [
              3681086674, // Leonine Shell (Ghost)
              1220495182, // Leonine Courser (Sparrow)
              2924982630, // Leonine Carrack (Ship)
              745759692, // Sigil of the New Monarch (CoO Emblem)
              3366113619 // New Monarchy Succession (Shader)
            ]
          },
          {
            name: 'Extras',
            season: 3,
            items: [
              3826233803, // Trirang Tox
              1312626341, // Four Times a Ruler emblem
              2931044502 // New Monarchy Allegiance
            ]
          }
        ]
      },
      {
        name: 'Future War Cult Arsenal',
        id: 'ALL_SEASONS_FUTURE_WAR_CULT_ARSENAL',
        description:
          'Weapons and armor obtained by working with Future War Cult to prepare for the wars to come.',
        sections: [
          {
            name: 'Weapons',
            season: 1,
            items: common.FACTION_FWC_S1_WEAPONS
          },
          {
            name: 'Weapons',
            season: 2,
            items: common.FACTION_FWC_S2_WEAPONS
          },
          {
            name: 'Weapons',
            season: 3,
            items: common.FACTION_FWC_S3_WEAPONS
          },
          {
            name: 'Armor',
            season: 1,
            itemGroups: [
              common.FACTION_FWC_S1_ARMOR_HUNTER,
              common.FACTION_FWC_S1_ARMOR_TITAN,
              common.FACTION_FWC_S1_ARMOR_WARLOCK
            ]
          },
          {
            name: 'Ornaments',
            season: 2,
            itemGroups: [
              common.FACTION_FWC_S2_ORNAMENTS_HUNTER,
              common.FACTION_FWC_S2_ORNAMENTS_TITAN,
              common.FACTION_FWC_S2_ORNAMENTS_WARLOCK
            ]
          },
          {
            name: 'Ornaments',
            season: 3,
            itemGroups: [
              common.FACTION_FWC_S3_ORNAMENTS_HUNTER,
              common.FACTION_FWC_S3_ORNAMENTS_TITAN,
              common.FACTION_FWC_S3_ORNAMENTS_WARLOCK
            ]
          },
          {
            name: 'Extras',
            season: 1,
            items: [
              802191382, // Battle Colors
              1045633725, // War Cult Rain
              1045633727 // War Cult Camo
            ]
          },
          {
            name: 'Extras',
            season: 2,
            items: [
              3681086675, // Wars to Come Shell (Ghost)
              1220495183, // Truth Scraper (Sparrow)
              2924982631, // Bonegrip (Ship)
              745759695, // Future War Cultist (CoO Emblem)
              730976676 // War Cult Endgame (Shader)
            ]
          },
          {
            name: 'Extras',
            season: 3,
            items: [
              308384258, // G-008 Ziphopper
              414672658, // Zero Future emblem
              2296172971 // War Cult Scheme
            ]
          }
        ]
      },
      {
        name: 'Eater of Worlds, Raid Lair',
        id: 'ALL_SEASONS_EATER_OF_WORLDS',
        description:
          'Gear obtained by playing the Eater of Worlds raid lair and increasing your reputation with Emperor Calus.',
        sections: [
          {
            name: 'Weapons',
            season: 2,
            items: common.RAID_EOW_WEAPONS
          },
          {
            name: 'Armor',
            season: 2,
            itemGroups: [
              common.RAID_EOW_ARMOR_HUNTER,
              common.RAID_EOW_ARMOR_TITAN,
              common.RAID_EOW_ARMOR_WARLOCK
            ]
          },
          {
            name: 'Ornaments',
            season: 2,
            itemGroups: [
              common.RAID_EOW_ORNAMENTS_HUNTER,
              common.RAID_EOW_ORNAMENTS_TITAN,
              common.RAID_EOW_ORNAMENTS_WARLOCK
            ]
          },
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
        name: 'Escalation Protocol',
        id: 'WARMIND_ESCALATION_PROTOCOL',
        description: 'Gear obtained by completing Escalation Protocol.',
        sections: [
          {
            name: 'Weapons',
            season: 3,
            items: [
              3866356643, // IKELOS_HC_v1.0.1
              1723472487, // IKELOS_SMG_v1.0.1
              1887808042, // IKELOS_SG_v1.0.1
              847450546 // IKELOS_SR_v1.0.1
            ]
          },

          {
            name: 'Hunter Armor',
            season: 3,
            items: [
              3792637803, // Abhorrent Imperative Mask
              2114894938, // Abhorrent Imperative Grasps
              2320951982, // Abhorrent Imperative Vest
              3371366804, // Abhorrent Imperative Strides
              2639046519 // Abhorrent Imperative Cloak
            ]
          },
          {
            name: 'Titan Armor',
            season: 3,
            items: [
              508035927, // Midnight Exigent Helm
              3876414174, // Midnight Exigent Gauntlets
              3691605010, // Midnight Exigent Plate
              425390008, // Midnight Exigent Greaves
              4286845987 // Midnight Exigent Mark
            ]
          },
          {
            name: 'Warlock Armor',
            season: 3,
            items: [
              3126089918, // Yuga Sundown Helmet
              2395959535, // Yuga Sundown Gloves
              720656969, // Yuga Sundown Robes
              2970562833, // Yuga Sundown Boots
              2034926084 // Yuga Sundown Bond
            ]
          },
          {
            name: 'Extras',
            season: 3,
            items: [
              2731919245, // BLOCK-Z SHELL
              3969205939, // PACIFIC DECEPTION
              4268441917, // GROUNDSWELL NULLIFIER99
              1291068165, // IKELOS Imperative emblem
              1273131836, // Apparatus Belli emblem
              4052831236, // Activate ESCALATION emblem
              2544513644, // Return TYRANT++ emblem
              3286479728 // GENOTYPENULL-ZERO shader
            ]
          }
        ]
      },

      {
        name: 'Spire of Stars, Raid Lair',
        id: 'ALL_SEASONS_SPIRE_OF_STARS',
        description:
          'Gear obtained by playing the Spire of Stars raid lair and increasing your reputation with Emperor Calus.',
        sections: [
          {
            name: 'Weapons',
            season: 3,
            items: common.RAID_SOS_WEAPONS
          },
          {
            name: 'Armor',
            season: 3,
            itemGroups: [
              common.RAID_SOS_ARMOR_HUNTER,
              common.RAID_SOS_ARMOR_TITAN,
              common.RAID_SOS_ARMOR_WARLOCK
            ]
          },
          {
            name: 'Ornaments',
            season: 3,
            itemGroups: [
              common.RAID_SOS_ORNAMENTS_HUNTER,
              common.RAID_SOS_ORNAMENTS_TITAN,
              common.RAID_SOS_ORNAMENTS_WARLOCK
            ]
          },
          {
            name: 'Extras',
            season: 3,
            items: [
              530754878, // Luxurious Toast emote
              2925370359, // I'm Open Emote
              1057119308, // Spire Star emblem
              2331063860, // Grind Underfoot emblem
              2331063861, // Together, For Glory! emblem
              2543722796, // Praetorian Visage shader
              1595521942, // Atop the Spire emblem
              2543722797 // Calus's Shadow shader
            ]
          }
        ]
      },
      {
        name: 'The Whisper',
        id: 'YEAR_ONE_THE_WHISPER',
        description: 'Gear obtained by playing the The Whisper mission.',
        sections: [
          {
            name: 'Weapons',
            season: 3,
            items: [
              1891561814 // Whisper of the Worm
            ]
          },
          {
            name: 'Extras',
            season: 3,
            items: [
              3403859120 // A Thousand Wings
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
        name: 'European Dead Zone Gear',
        id: 'BASE_EDZ',
        description:
          'Weapons and armor obtained by performing tasks for Devrim Kay in the EDZ.',
        small: false,
        sections: [
          {
            name: 'Weapons',
            items: [
              3762467078,
              1885753222,
              2145476620,
              1911843789,
              1513927138,
              287042893,
              731147177,
              2502422772,
              1983332560,
              3312073054,
              1291586825 // Eystein-D
            ]
          },
          {
            name: 'Hunter Armor',
            items: [1666413633, 2504333144, 1435681904, 539497618, 321260461]
          },
          {
            name: 'Titan Armor',
            items: [2747681397, 1423524548, 1226000828, 3354170606, 2977868593]
          },
          {
            name: 'Warlock Armor',
            items: [754826572, 4204091653, 226467547, 4126963847, 3261135090]
          },
          {
            name: 'Extras',
            items: [
              1321546045, // European Dead Zone
              2664485240, // Shadow of the Shard
              2664485241, // Red Legion Stronghold
              2664485242, // Devrim's Perch
              2664485243, // Humanity's Cradle
              3541326821, // Dead Zone Camo
              3541326820, // Kay's Command
              3541326823, // Trostland Terminus
              3921006352, // Dead Zone Foliage
              3921006355 // Dead Zone Bark
            ]
          }
        ]
      },

      {
        name: 'Echo Mesa, Io Gear',
        id: 'BASE_ECHO_MESA',
        description:
          'Weapons and armor obtained by performing tasks for Asher Mir on Io.',
        small: false,
        sections: [
          {
            name: 'Weapons',
            items: [
              3762467079,
              1911843788,
              731147179,
              287042894,
              3312073055,
              2502422775,
              417474226,
              1983332562,
              2517599010
            ]
          },
          {
            name: 'Hunter Armor',
            items: [1707236192, 3609750321, 1156579431, 3441003139, 1872077174]
          },
          {
            name: 'Titan Armor',
            items: [1447990748, 2844341589, 2778321483, 125496503, 1135037794]
          },
          {
            name: 'Warlock Armor',
            items: [1980271175, 4221940686, 481073890, 2010051528, 129527347]
          },
          {
            name: 'Extras',
            items: [
              3451625162, // Echo Mesa
              313685908, // Taken Resurgence
              313685909, // Ignition Unsparked
              313685910, // Traveler's Departure
              313685911, // Asher's Asylum
              31953747, // Ballet Lover
              31953744, // Holy Ground
              31953746, // Traveler's Flight
              1489178153, // Echoes of Io
              1489178154 // Flowers of Io
            ]
          }
        ]
      },

      {
        name: 'New Pacific Arcology Gear',
        id: 'BASE_NEW_PACIFIC_ARCOLOGY',
        description:
          'Weapons and armor obtained by performing tasks for Sloane on Titan.',
        small: false,
        sections: [
          {
            name: 'Weapons',
            items: [
              3762467077,
              1885753223,

              2145476623,
              1911843790,

              2700862856,
              3312073052,

              1513927136,
              287042892,

              2502422774,
              417474224,
              515224227
            ]
          },
          {
            name: 'Hunter Armor',
            items: [784477316, 348791133, 1833326563, 2672840191, 732149466]
          },
          {
            name: 'Titan Armor',
            items: [1135037794, 1598597433, 1317716127, 237289259, 3030805806]
          },
          {
            name: 'Warlock Armor',
            items: [720513501, 3902367052, 832551956, 253235190, 2000839529]
          },
          {
            name: 'Extras',
            items: [
              426147374, // New Pacific Arcology
              594640136, // Hive Infestation
              594640137, // Golden Age Tarnished
              594640138, // Utopia Lost
              594640139, // Sloane's Watchtower
              3785035698, // Cargo Bay Cross
              3785035696, // New Pacific Access
              3785035697, // Solarium Yellow
              1051938196, // New Pacific Sink
              1051938199 // New Pacific Rush
            ]
          }
        ]
      },

      {
        name: 'Arcadian Valley, Nessus Gear',
        id: 'BASE_ARCADIAN_VALLEY',
        description:
          'Weapons and armor obtained by performing tasks for Failsafe on Nessus.',
        small: false,
        sections: [
          {
            name: 'Weapons',
            items: [
              3762467076,
              1885753220,
              2145476622,
              1911843791,
              1513927139,
              2700862858,
              3312073053,
              2502422773,
              417474225,
              1983332561,
              2535939781
            ]
          },
          {
            name: 'Hunter Armor',
            items: [3968652888, 137386025, 2956080815, 4258364155, 374306366]
          },
          {
            name: 'Titan Armor',
            items: [413767702, 1617861351, 1092747537, 370667049, 3288177452]
          },
          {
            name: 'Warlock Armor',
            items: [280471817, 1983967360, 2210204488, 1061787834, 41792165]
          },
          {
            name: 'Extras',
            items: [
              1599898966, // Arcadian Valley
              776878384, // Fallen Pillage
              776878385, // Leviathan's Feast
              776878386, // Machine Centaur
              776878387, // Failsafe's Prison
              2484637938, // Exodus Access
              2484637936, // Jacobson's Staff
              2484637939, // Tangled Anchor
              3403116793, // Nessus Pursuit
              3403116794 // Nessus Mirage
            ]
          }
        ]
      },

      {
        name: 'Mercury Gear',
        id: 'OSIRIS_MERCURY',
        description:
          'Gear obtained by performing tasks for Brother Vance on Mercury.',
        small: false,
        sections: [
          {
            name: 'Lost Prophecy weapons',
            season: 2,
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
            season: 2,
            items: [
              3585812448, // Kairos Function Mask
              1193359281, // Kairos Function Grips
              161082855, // Kairos Function Vest
              1024612099, // Kairos Function Boots
              876580598 // Kairos Function Cloak
            ]
          },
          {
            name: 'Titan Armor',
            season: 2,
            items: [
              4182737364, // Kairos Function Helm
              3013565805, // Kairos Function Gauntlets
              479000083, // Kairos Function Plate
              3259907375, // Kairos Function Greaves
              3108883530 // Kairos Function Mark
            ]
          },
          {
            name: 'Warlock Armor',
            season: 2,
            items: [
              149949001, // Kairos Function Crown
              1853444544, // Kairos Function Wraps
              817757576, // Kairos Function Robes
              548384250, // Kairos Function Boots
              2519855077 // Kairos Function Bond
            ]
          },
          {
            name: 'Extras',
            season: 2,
            items: [
              573576346, // Sagira's Shell
              1312472209, // Fields of Glass
              2276139500, // Infinite Possibilities
              2276139501, // Vex Convergence
              2276139502, // Vance's Temple
              2276139503, // Burning Silicon
              2029492794, // Legend of Saint-14
              2939572589, // Crossroads Emblem
              4261480748, // Transit of Mercury
              2939572586, // Hero of the Infinite
              4261480749, // Prophetic Arsenal
              2939572584, // Secrets of the Vex (Emblem)
              2939572585, // Vex Destroyer (Emblem)
              2939572590, // Vex Scholar (Emblem)
              3042066428, // Kairos Black (Shader)
              3042066430, // Kairos Gold (Shader)
              3042066431, // Kairos Bronze (Shader)
              3853609171 // Mercury Prophetic (Shader)
            ]
          }
        ]
      },

      {
        name: 'Hellas Basin, Mars Gear',
        id: 'WARMIND_HELLAS_BASIN',
        description: 'Gear obtained by performing tasks for Ana Bray on Mars.',
        small: false,
        sections: [
          {
            name: 'BrayTech / Sleeper Node weapons',
            season: 3,
            items: [
              1752585070, // BrayTech Winter Wolf
              717150101, // BrayTech RWP Mk. II
              689453941, // The Frigid Jackal
              1350102270, // Niflheim Frost
              1798874854 // 18 Kelvins
            ]
          },
          {
            name: 'Weapons',
            season: 3,
            items: [
              159056377, // Requiem-45
              618554398, // Proelium FR3
              276918162, // Hagakure
              4014434381, // Kibou AR3
              541053086 // Telemachus-C
            ]
          },
          {
            name: 'Hunter Armor',
            season: 3,
            items: [
              620774353, // BrayTech Sn0Mask
              3573869992, // BrayTech Survival Mitts
              3360543264, // BrayTech Combat Vest
              4209278210, // BrayTech Sn0Treads
              2287801693 // BrayTech Winter Cloak
            ]
          },
          {
            name: 'Titan Armor',
            season: 3,
            items: [
              3240387365, // BrayTech Sn0Helm
              3979487476, // BrayTech Thermal Grips
              3484179468, // BrayTech Iron-Heart Engine
              4267226110, // BrayTech Sn0Boots
              1421936449 // BrayTech Absolute Zero Mark
            ]
          },
          {
            name: 'Warlock Armor',
            season: 3,
            items: [
              2519855077, // BrayTech Researcher's Hood
              1005587287, // BrayTech Researcher's Gloves
              3188870561, // BrayTech Researcher's Robes
              2814122105, // BrayTech Researcher's Boots
              3971375612 // BrayTech Researcher's Bond
            ]
          },
          {
            name: 'Extras',
            season: 3,
            items: [
              2995501285, // Polestar I Shell
              2995501286, // Polestar II Shell
              2932488014, // G-72 Classical Sepheid
              2932488015, // G-693 Orchestral Maneuver
              4222882592, // G-335 Anseris Overdrive
              3073638913, // Alpha Umi
              1210937132, // Hellas Basin
              842157716, // Cradle of Invention
              842157717, // Warmind's Fortress
              842157718, // Relic of the Golden Age
              842157719, // Wormslayer
              1291068172, // Specter of the Gun
              1291068170, // Cold Comfort
              1273131835, // Arctic Arsenalist
              1291068171, // Data Mine
              1273131832, // Warminded
              235397500, // The Mad Monk
              235397502, // Arctic Dreamscape
              235397503 // Bray Innovation
            ]
          }
        ]
      }
    ]
  },
  {
    name: 'Holiday & Special Events',
    sets: [common.DAWNING_Y1, common.CRIMSON_DAYS_Y1, common.SOLSTICE_OF_HEROES]
  },

  {
    name: 'Other',
    sets: [
      {
        name: 'Gunsmith Arsenal',
        id: 'ALL_SEASONS_GUNSMITH_ARSENAL',
        description:
          'Weapons obtained by increasing your standing with Banshee-44, the Gunsmith.',
        sections: [
          {
            name: 'Weapons',
            season: 1,
            items: [
              3778520451, // Galliard-42
              3778520450, // Halfdan-D
              273396910, // Frontier Justice
              925326393, // Manannan SR4
              925326392, // Tango-45
              925326394, // Black Scorpion-4sr
              3860697510, // Imset HC4
              3860697508, // Minuet-42
              1533499360, // Athelflad-D
              1533499361, // Etana SI4
              1533499362, // Urchin-3si
              566976652, // Resonance-42
              566976653, // Antiope-D
              566976654, // Phosphorus MG4
              339343291, // Cadenza-43
              339343290, // Nergal PR4
              3748713779, // Morrigan-D
              3748713778, // Pentatonic-48
              3666954562, // Veleda-D
              3666954561, // Copperhead-4sn
              3666954563, // Elegy-49
              2703340117, // Somerled-D
              2398848320, // Erentil FR4
              896923850, // Acantha-D
              3778520449 // Jiangshi AR4
            ]
          },
          {
            name: 'Weapons',
            season: 2,
            items: [
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
          },
          {
            name: 'Weapons',
            season: 3,
            items: [
              1178397318, // Agrona PR4
              1178397319, // Battle Scar
              1489452902, // Courageous Surrender
              1137768695, // Foregone Conclusion
              2544285846, // Scipio-D
              2433826056, // The Quickstep
              1159252500 // Vacuna SR4
            ]
          },
          {
            name: 'Extras',
            items: [
              3605230072, // Hakke Upgrade
              3605230074, // Omolon Upgrade
              3605230073, // SUROS Upgrade
              3605230075, // VEIST Upgrade
              346878928, // VEIST Fieldscale
              346878930, // VEIST Poison
              700322568, // Omolon Meteor
              700322570, // Omolon Camo
              2307426896, // SUROS Tone
              2307426898, // SUROS Modular
              2737886288, // Häkke History
              2737886290 // Häkke Camo
            ]
          }
        ]
      },
      {
        name: 'Hunter Specific Sets',
        id: 'BASE_WORLD_HUNTER',
        description: 'Other legendary gear obtained from Engrams.',
        small: true,
        sections: [
          {
            name: 'Weapons',
            season: 1,
            items: [1180270692] // Quickfang
          },
          {
            name: 'Dead End Cure 2.1',
            season: 1,
            items: [3064716714, 3070277875, 1835885085, 2805231813, 3297872976]
          },
          {
            name: 'Errant Knight 1.0',
            season: 1,
            items: [3051359899, 215674186, 2531405438, 3166972772, 1861032455]
          },
          {
            name: 'Road Complex AA1',
            season: 1,
            items: [2932691109, 3671791220, 1889156236, 3959529854, 4121880513]
          },
          {
            name: 'Icarus Drifter',
            season: 1,
            items: [1507837170, 1932613595, 3145637173, 382653773, 1843231752]
          },
          {
            name: 'Insight',
            season: 3,
            items: [
              1794052784, // Insight Rover Mask
              1591836417, // Insight Rover Grips
              4159457751, // Insight Rover Vest
              3086681971, // Insight Rover Boots
              1992809894 // Clandestine Maneuvers
            ]
          },
          {
            name: 'Extras',
            season: 1,
            items: [
              1907674138, // Hunter's Wit
              3635192014, // Hunter's Hoard
              844563491, // Slinger's Sight
              2054118356, // Strider's Slash
              621113310 // Stalker's Shot
            ]
          }
        ]
      },

      {
        name: 'Titan Specific Sets',
        id: 'BASE_WORLD_TITAN',
        description: 'Other legendary gear obtained from Engrams.',
        small: true,
        sections: [
          {
            name: 'Weapons',
            season: 1,
            items: [1180270694] // Crown-Splitter
          },
          {
            name: 'Retro-Grade TG2',
            season: 1,
            items: [2783831726, 3809138207, 331602521, 2730285281, 2070329108]
          },
          {
            name: 'Kerak Type 2',
            season: 1,
            items: [1091190365, 4273043916, 2038956436, 623912054, 3207244009]
          },
          {
            name: 'Devastation Complex',
            season: 1,
            items: [3434301337, 2906086416, 385985080, 3264721770, 3076446677]
          },
          {
            name: 'Terra Concord',
            season: 1,
            items: [178467806, 3277373711, 1708233065, 3893450673, 3022399012]
          },
          {
            name: 'Insight',
            season: 3,
            items: [
              2996100508, // Insight Unyielding Helm
              56010517, // Insight Unyielding Gauntlets
              4227656459, // Insight Unyielding Plate
              2098166903, // Insight Unyielding Greaves
              3008933410 // Anti-Hero Victory
            ]
          },
          {
            name: 'Extras',
            season: 1,
            items: [
              1907674139, // Titan's Pride
              3941202506, // Titan's Triumph
              3828080585, // Breaker's Blaze
              2967682030, // Striker's Slam
              3338748564 // Sentinel's Shove
            ]
          }
        ]
      },

      {
        name: 'Warlock Specific Sets',
        id: 'BASE_WORLD_WARLOCK',
        description: 'Other legendary gear obtained from Engrams.',
        small: true,
        sections: [
          {
            name: 'Weapons',
            season: 1,
            items: [1180270693] // Eternity's Edge
          },
          {
            name: 'Heiro Camo',
            season: 1,
            items: [2954945607, 901647822, 2432846050, 2984725960, 2081299507]
          },
          {
            name: 'Philomath',
            season: 1,
            items: [1196270212, 760584029, 282139107, 3084633087, 3475929306]
          },
          {
            name: 'High-Minded Complex',
            season: 1,
            items: [1800940324, 1365254141, 1876989571, 3689406239, 775812602]
          },
          {
            name: 'Tesseract Trace',
            season: 1,
            items: [1292840125, 4050339372, 1162508660, 825561686, 1906338633]
          },
          {
            name: 'Insight',
            season: 3,
            items: [
              616641643, // Insight Vikti Hood
              3233866074, // Insight Vikti Gloves
              2294753710, // Insight Vikti Robes
              195370644, // Insight Vikti Boots
              2612848247 // Synaptic Construct
            ]
          },
          {
            name: 'Extras',
            season: 1,
            items: [
              1907674137, // Warlock's Flight
              3564452901, // Warlock's Wisdom
              1530147650, // Blade's Blast
              3778092977, // Storm's Surge
              46275857 // Walker's Warp
            ]
          }
        ]
      },
      common.EVERVERSE_Y1
    ]
  }
]: SetPage);
