const axios = require('axios');

const PERKS = [
  // Warlock
  1242428023,
  1510638018,
  1899914236,

  // Titan
  1054437662,
  3082437135,
  4060674255,

  // Hunter
  29391997,
  640149492,
  2883258157,
];

const perkMapping = {};

axios
  .get('https://destiny.plumbing/en/raw/DestinyInventoryItemDefinition.json')
  .then(({ data }) => {
    Object.values(data).forEach(item => {
      if (
        item.perks &&
        item.perks[0] &&
        PERKS.includes(item.perks[0].perkHash)
      ) {
        perkMapping[item.hash] = item.perks[0].perkHash;
      }
    });
  });
