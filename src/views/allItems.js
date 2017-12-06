module.exports = [
  {
    name: 'Gear',
    sets: [
      {
        name: 'Exotics',
        big: true,
        fancySearchTerm: 'is:exotic is:gear',
        sections: []
      },
      {
        name: 'Weapons',
        big: true,
        sections: [
          {
            title: 'Kinetic',
            fancySearchTerm: 'is:legendary is:weapon is:kinetic'
          },
          {
            title: 'Energy',
            fancySearchTerm: 'is:legendary is:weapon is:energy'
          },
          {
            title: 'Power',
            fancySearchTerm: 'is:legendary is:weapon is:power'
          }
        ]
      },
      {
        name: 'Armor',
        big: true,
        fancySearchTerm: 'is:legendary is:armor',
        sections: []
      }
    ]
  },

  {
    name: 'Eververse',
    sets: [
      {
        name: 'Eververse, Season 1',
        big: true,
        sections: [
          {
            title: 'Hunter Armor',
            items: [
              1869779952, // Mask of Optimacy
              1625986881, // Arms of Optimacy
              369186071, // Vest of Optimacy
              2696374963, // Legs of Optimacy
              2497505510 // Cloak of Optimacy
            ]
          },
          {
            title: 'Titan Armor',
            items: [
              1638376198, // Helm of Optimacy
              652336087, // Arms of Optimacy
              415074081, // Plate of Optimacy
              2460870905, // Legs of Optimacy
              1197579132 // Mark of Optimacy
            ]
          },
          {
            title: 'Warlock Armor',
            items: [
              2956899553, // Hood of Optimacy
              3794819064, // Arms of Optimacy
              199852048, // Robes of Optimacy
              1830086706, // Legs of Optimacy
              3421974605 // Bond of Optimacy
            ]
          },
          {
            title: 'Ghosts',
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
            title: 'Emotes',
            items: [
              93029343, // Salty
              93029342, // Flip Out
              292778444, // Spicy Ramen
              454583975, // Six Shooter
              2543806755, // Funky Dance
              412299646, // Dancehall
              664042851, // Cranking Dance
              938804347, // Odd Dance
              3129418034, // Taunt Dance
              3872116425, // Confused
              1120064792, // Flowing Dance
              718136887, // Bureaucratic Walk
              2741695224, // Floss Dance
              1061186327, // Shuffle Dance
              4223882778, // Shoulder Dance
              2649911453, // Dancy Dance
              1177179936, // Play Dead
              1954221115, // You're the Guardian
              2870168892, // Sneaky
              4187524534, // Don the Hat
              3199368173, // Huddle Up
              3811760832, // Gallop
              1294717622, // Sick
              2526538979, // Get Up
              3526028978, // Sadness
              333041308 // Good Idea
            ]
          },
          {
            title: 'Sparrows',
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
              904825093, // Wayfarer Delta
              904825092, // Wayfarer Tri
              904825094, // Warbird
              904825089, // Hyperion
              904825088 // Dead-End Pro
            ]
          },
          {
            title: 'Ships',
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
              3213307848 // High Line
            ]
          }
        ]
      }
    ]
  },

  {
    name: 'Cosmetics',
    sets: [
      {
        name: 'Emblems',
        big: true,
        sections: [
          {
            title: 'Legendary',
            fancySearchTerm: 'is:legendary is:emblem'
          },
          {
            title: 'Rare',
            fancySearchTerm: 'is:rare is:emblem'
          },
          {
            title: 'Uncommon',
            fancySearchTerm: 'is:uncommon is:emblem'
          },
          {
            title: 'Common',
            fancySearchTerm: 'is:common is:emblem'
          }
        ]
      },

      {
        name: 'Shaders',
        big: true,
        sections: [
          {
            title: 'Legendary',
            fancySearchTerm: 'is:legendary is:shader'
          },
          {
            title: 'Rare',
            fancySearchTerm: 'is:rare is:shader'
          },
          {
            title: 'Uncommon',
            fancySearchTerm: 'is:uncommon is:shader'
          }
        ]
      },

      {
        name: 'Emotes',
        big: true,
        fancySearchTerm: 'is:emote',
        sections: []
      },

      {
        name: 'Ornaments',
        big: true,
        fancySearchTerm: 'is:ornament',
        sections: []
      }
    ]
  },

  {
    name: 'Vehicles',
    sets: [
      {
        name: 'Sparrows',
        fancySearchTerm: 'is:sparrow',
        sections: []
      },

      {
        name: 'Ships',
        fancySearchTerm: 'is:ship',
        sections: []
      }
    ]
  }
];
