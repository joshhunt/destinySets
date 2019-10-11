// @flow
import type { SetPage } from '../types';

export default [
  {
    name: 'Armor mods',
    sets: [
      {
        name: 'Armor mods',
        description:
          'Very beta, completely untested. Elemental affinity not displayed yet. No guarentees made about accuracy.',
        big: true,
        sections: [
          {
            name: 'Ammo scavengers',
            items: [
              987267082, // Arrow Scavenger
              737634704, // Auto Rifle Scavenger
              2347686425, // Fusion Rifle Scavenger
              3670960347, // Grenade Launcher Scavenger
              2758832455, // Hand Cannon Scavenger
              2051366208, // Linear Fusion Rifle Scavenger
              1559280270, // Machine Gun Scavenger
              3156855054, // Pulse Rifle Scavenger
              311492789, // Rocket Launcher Scavenger
              356666687, // Scout Rifle Scavenger
              3836152936, // Shotgun Scavenger
              2183342667, // Sidearm Scavenger
              498878196, // Sniper Rifle Scavenger
              1023632589, // Submachine Gun Scavenger
              2146553541 // Sword Scavenger
            ]
          },
          {
            name: 'Ammo finders',
            items: [
              2193892158, // Auto Rifle Ammo Finder
              1624081088, // Bow Ammo Finder
              3394151347, // Fusion Rifle Ammo Finder
              755265365, // Grenade Launcher Ammo Finder
              650047261, // Hand Cannon Ammo Finder
              1499759470, // Linear Fusion Rifle Ammo Finder
              2128395292, // Machine Gun Ammo Finder
              589699896, // Pulse Rifle Ammo Finder
              2603856295, // Rocket Launcher Ammo Finder
              421111969, // Scout Rifle Ammo Finder
              4148827738, // Shotgun Ammo Finder
              1050260245, // Sidearm Ammo Finder
              2754084930, // Sniper Rifle Ammo Finder
              1588113119, // Submachine Gun Ammo Finder
              1476367343 // Sword Ammo Finder
            ]
          },
          {
            name: 'Ammo reserves',
            items: [
              1131497704, // Auto Rifle Reserves
              201502208, // Bow Reserves
              3531950723, // Fusion Rifle Reserves
              3330921441, // Grenade Launcher Reserves
              1043617959, // Hand Cannon Reserves
              749060462, // Linear Fusion Rifle Reserves
              3188535145, // Machine Gun Reserves
              1478123840, // Pulse Rifle Reserves
              1303690937, // Rocket Launcher Reserves
              240987419, // Scout Rifle Reserves
              2368162286, // Shotgun Reserves
              3859610803, // Sidearm Reserves
              3926976952, // Sniper Rifle Reserves
              1829115845, // Submachine Gun Reserves
              3543966269 // Sword Reserves
            ]
          },
          {
            name: 'Loaders',
            items: [
              157329321, // Machine Gun Loader,
              178399816, // Linear Fusion Rifle Loader,
              428274928, // Fusion Rifle Loader,
              575217150, // Light Arms Loader,
              667313240, // Scout Rifle Loader,
              762238512, // Sidearm Loader,
              1052494884, // Hand Cannon Loader,
              1129724921, // Pulse Rifle Loader,
              1534061443, // Shotgun Loader,
              2039949393, // Sniper Rifle Loader,
              2571974065, // Auto Rifle Loader,
              2790645726, // Submachine Gun Loader,
              3436675785, // Bow Reloader,
              4140815674, // Grenade Launcher Loader,
              4146282118, // Rifle Loader,
              3493464614, // Large Weapon Loader,
              2324400338, // Rocket Launcher Loader,
              503582313, // Enhanced Rocket Launcher Loader,
              989778135, // Enhanced Hand Cannon Loader,
              1657427196, // Enhanced Shotgun Loader,
              2165754723, // Enhanced Grenade Launcher Loader,
              3333771943, // Enhanced Hand Cannon Loader,
              3333771938, // Enhanced Fusion Rifle Loader,
              3333771939, // Enhanced Auto Rifle Loader,
              3333771940 // Enhanced Submachine Gun Loader,
            ]
          },
          {
            name: 'Dexterity',
            items: [
              101023751, // Sidearm Dexterity,
              201274281, // Submachine Gun Dexterity,
              327265103, // Scout Rifle Dexterity,
              691818084, // Pulse Rifle Dexterity,
              805625272, // Light Arms Dexterity,
              945523359, // Fusion Rifle Dexterity,
              1312062056, // Auto Rifle Dexterity,
              2214082005, // Grenade Launcher Dexterity,
              1819979056, // Sniper Rifle Dexterity,
              2520883911, // Linear Fusion Dexterity,
              3175015261, // Oversize Weapon Dexterity,
              3296399440, // Bow Dexterity,
              3507619526, // Rifle Dexterity,
              3026352437, // Rocket Launcher Dexterity,
              2561450986, // Shotgun Dexterity,
              3484440775, // Hand Cannon Dexterity,
              23817334, // Enhanced Hand Cannon Dexterity,
              294409479, // Enhanced Shotgun Dexterity,
              439107567, // Enhanced Sniper Rifle Dexterity,
              3076533032 // Enhanced Rocket Launcher Dexterity,
            ]
          },
          {
            name: 'Targeting',
            items: [
              631976966, // Scout Rifle Targeting,
              1015337793, // Machine Gun Targeting,
              1507854082, // Sidearm Targeting,
              2307244871, // Sniper Rifle Targeting,
              2080519917, // Bow Targeting,
              2829974286, // Hand Cannon Targeting,
              2919349723, // Shotgun Targeting,
              3319681729, // Pulse Rifle Targeting,
              3901392720, // Fusion Rifle Targeting,
              3857411140, // Submachine Gun Targeting,
              3476502793, // Scatter Projectile Targeting,
              3338875786, // Linear Fusion Rifle Targeting,
              3201675491, // Auto Rifle Targeting,
              3786078704, // Precision Weapon Targeting,
              198889228, // Enhanced Sniper Rifle Targeting,
              1627441143, // Enhanced Linear Fusion Targeting,
              1871240627, // Enhanced Hand Cannon Targeting,
              3993244252 // Enhanced Bow Targeting,
            ]
          },
          {
            name: 'Unflinching aim',
            items: [
              357349821, // Unflinching Shotgun Aim,
              650627622, // Unflinching Linear Fusion Aim,
              807774340, // Unflinching Grenade Launcher Aim,
              1203395203, // Unflinching Sniper Aim,
              1279446438, // Unflinching Scout Rifle Aim,
              1859929470, // Unflinching Hand Cannon Aim,
              1541497724, // Unflinching Light Arms Aim,
              2505824339, // Unflinching Auto Rifle Aim,
              2881057950, // Unflinching Sidearm Aim,
              3626376648, // Unflinching Submachine Gun Aim,
              3662638763, // Unflinching Bow Aim,
              3121039270, // Unflinching Fusion Rifle Aim,
              3084181312, // Unflinching Rifle Aim,
              364819640, // Unflinching Large Arms,
              3091213995, // Unflinching Machine Gun,
              435979054, // Enhanced Unflinching Sniper Aim,
              643703876, // Enhanced Unflinching Bow Aim,
              3673056113 // Enhanced Unflinching Linear Fusion Aim,
            ]
          },
          {
            name: 'Nightmare',
            items: [
              2874957617, // Nightmare Banisher,
              3736152098, // Nightmare Crusher,
              1560574695, // Nightmare Breaker,
              1996040463, // Enhanced Nightmare Banisher,
              1565861116, // Enhanced Nightmare Crusher,
              4193902249, // Enhanced Nightmare Breaker,
              3829100654, // Supreme Nightmare Banisher,
              2045123179, // Supreme Nightmare Crusher,
              2023980600 // Supreme Nightmare Breaker,
            ]
          },
          {
            name: 'Enemy-specific',
            itemGroups: [
              [
                2503471403, // Fallen Armaments,
                3099724909, // Fallen Barrier,
                2276366746, // Fallen Repurposing,
                3395883122 // Fallen Invigoration,
              ],
              [
                927348227, // Hive Armaments,
                3967424085, // Hive Barrier,
                3302924434, // Hive Repurposing,
                2146600970 // Hive Invigoration,
              ],
              [
                2859541905, // Taken Armaments,
                3570105787, // Taken Barrier,
                2589105944, // Taken Repurposing,
                399528760 // Taken Invigoration,
              ]
            ]
          },
          {
            name: 'Finisher mods',
            items: [
              4237638091, // One-Two Finisher,
              4237638090, // Special Finisher,
              4237638094, // Snapload Finisher,
              4237638095, // Explosive Finisher,
              4237638088, // Safe Finisher,
              4237638089, // Healthy Finisher,
              2612707365 // Heavy Finisher,
            ]
          },
          {
            name: 'Mods',
            items: [
              // --- Semi sorted
              531752975, // Minor Resist,
              1313760467, // Major Resist,
              1719752237, // Boss Resist,

              107977982, // Void Resistance,
              1429600943, // Solar Resistance,
              3074491624, // Arc Resistance,

              926084009, // Paragon Mod,
              3961599962, // Mobility Mod,
              3253038666, // Strength Mod,
              2850583378, // Resilience Mod,
              2645858828, // Recovery Mod,
              3355995799, // Intellect Mod,

              // --- Unsorted
              1016705548, // Dynamo,
              1320020854, // Better Already,
              1409526707, // Emperor's Shock,
              1432806784, // Invigoration,
              1489470244, // Power Overwhelming,
              1513970148, // Distribution,
              1708067044, // Traction,
              2280136185, // Giving Hand,
              2375300279, // Remote Connection,
              2402696706, // Ballistic Combo,
              2402696707, // Unstoppable Melee,
              2402696708, // Disruptor Spike,
              2402696709, // Overload Grenades,
              2476831315, // Recuperation,
              2527938402, // Riven's Curse,
              2612707360, // Thunder Coil,
              2612707361, // From the Depths,
              2612707366, // Oppressive Darkness,
              2689994974, // Radiant Largesse,
              2816649701, // Striking Hand,
              2887845822, // Resistant Tether,
              301151651, // Emperor's Balance,
              3065699930, // Hands-On,
              322752304, // Ashes to Assets,
              3320641683, // Absolution,
              3415291596, // Relay Defender,
              3470562293, // Impact Induction,
              3561960031, // Bomber,
              3598368346, // Innervation,
              369171376, // Transcendent Blessing,
              3788210493, // Momentum Transfer,
              3895804619, // Dreambane Mod,
              3974455041, // Outreach,
              4018667352, // Emperor's Blaze,
              403494087, // Fastball,
              4084428384, // Light Reactor,
              4088080601, // Dark Glimmer,
              4088080602, // Labyrinth Miner,
              4088080603, // Biomonetizer,
              4088080604, // Circuit Scavenger,
              4088080605, // Dissection Matrix,
              4092923892, // Pump Action,
              4130296084, // Energized,
              4134680615, // Voltaic Mote Collector,
              4137020505, // Perpetuation,
              4185864113, // Embraced Largesse,
              4240256197, // Empowering Largesse,
              499567183, // Shielding Hand,
              928186993, // Voltaic Ammo Collector,
              973776237, // Insulation,

              2037533514, // Enhanced Resistant Tether,
              3320253353, // Enhanced Ashes to Assets,
              3630287380, // Enhanced Relay Defender,
              3884084138, // Enhanced Bomber,
              4020036031, // Enhanced Voltaic Ammo Collector,
              531981182, // Enhanced Momentum Transfer,
              774147760, // Enhanced Impact Induction,
              865380761 // Enhanced Voltaic Mote Collector,
            ]
          }
        ]
      }
    ]
  }
];
