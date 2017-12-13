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
