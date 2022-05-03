// IF TESS HAS ANOTHER UPDATE MID-SEASON FOR EXAMPLE, COMPARE THE OLD CHANGES TO MAKE SURE IT'S NOT HIDING ITEMS ALREADY SOLD FOR BRIGHT DUST

// ! IMPORTANT TO UPDATE THIS
const currentSeason = '16';

const path = require('path');
const fs = require('fs');
const { promisify } = require('util');
const crypto = require('crypto');
const prettier = require('prettier');

const axios = require('axios');
const lodash = require('lodash');
const tempDirectory = require('temp-dir');
const result = require('dotenv').config({ path: path.resolve('./.env.local') });

const readFile = promisify(fs.readFile);
const writeFile = promisify(fs.writeFile);

const API_KEY = process.env.REACT_APP_API_KEY;

const hashString = string =>
  crypto
    .createHash('md5')
    .update(string)
    .digest('hex');

async function getDefinitions() {
  const manifestResponse = await axios.get(
    'https://www.bungie.net/Platform/Destiny2/Manifest/',
    { headers: { 'x-api-key': API_KEY } }
  );

  const definitonsPath =
    manifestResponse.data.Response.jsonWorldContentPaths.en;
  const definitionsUrl = `https://www.bungie.net${definitonsPath}`;

  const hash = hashString(definitionsUrl);

  const tempDefsPath = path.join(tempDirectory, hash);
  let tempDefs;

  try {
    const tempDefsFile = await readFile(tempDefsPath);
    console.log('Using cached definitions');
    tempDefs = JSON.parse(tempDefsFile.toString());
  } catch (e) {}

  if (tempDefs) {
    return tempDefs;
  }

  console.log('requesting definitions from remote');

  const defsResponse = await axios.get(definitionsUrl, {
    headers: { 'x-api-key': API_KEY }
  });

  const defs = defsResponse.data;

  await writeFile(tempDefsPath, JSON.stringify(defs));

  return defs;
}

let setsFile;
let brightDustItems = [];
let silverItems = [];
let hashesNotFound = [];

function sortSeasonalItems(
  DestinyInventoryItemDefinition,
  DestinyVendorDefinition
) {
  console.log('Sorting Tess Everis items');
  const tessEveris = DestinyVendorDefinition[3361454721];

  tessEveris.itemList.forEach(i => {
    if (
      i.displayCategoryIndex === 1 ||
      i.displayCategoryIndex === 2 ||
      i.displayCategoryIndex === 3 ||
      // i.displayCategoryIndex === 4 ||
      i.displayCategoryIndex === 5 ||
      i.displayCategoryIndex === 8 ||
      i.displayCategoryIndex === 9
    ) {
      if (
        DestinyInventoryItemDefinition &&
        DestinyInventoryItemDefinition[i.itemHash]
      ) {
        if (i.currencies && i.currencies[0] && i.currencies[0].itemHash) {
          if (i.currencies[0].itemHash === 2817410917) {
            brightDustItems.push(i.itemHash);
          } else if (i.currencies[0].itemHash === 3147280338) {
            silverItems.push(i.itemHash);
          }
        }
      }
    }
  });

  console.log('Sorted Tess Everis items');

  return;
}

function removeDuplicates() {
  console.log('Removing duplicates');
  brightDustItems = brightDustItems.filter(function(elem, index, self) {
    return index === self.indexOf(elem);
  });

  silverItems = silverItems.filter(function(elem, index, self) {
    return index === self.indexOf(elem);
  });
  console.log('Removed duplicates');

  return;
}

function itemsNotSilverOnly() {
  console.log('Removing items not silver only');

  brightDustItems.forEach(i => {
    if (silverItems.includes(i)) {
      silverItems.splice(silverItems.indexOf(i), 1);
    }
  });
  console.log('Removed items not silver only');

  return;
}

function removeOtherItems(DestinyInventoryItemDefinition) {
  console.log('Removing dummies and packages');

  let bdIndexes = [];
  let sIndexes = [];

  brightDustItems.forEach(i => {
    if (
      DestinyInventoryItemDefinition[i] &&
      DestinyInventoryItemDefinition[i].itemCategoryHashes
    ) {
      DestinyInventoryItemDefinition[i].itemCategoryHashes.forEach(c => {
        if (c === 3109687656 || c === 268598612) {
          bdIndexes.push(brightDustItems.indexOf(i));
        }
      });
    }
  });

  silverItems.forEach(i => {
    if (
      DestinyInventoryItemDefinition[i] &&
      DestinyInventoryItemDefinition[i].itemCategoryHashes
    ) {
      DestinyInventoryItemDefinition[i].itemCategoryHashes.forEach(c => {
        if (c === 3109687656 || c === 268598612) {
          sIndexes.push(silverItems.indexOf(i));
          // silverItems.splice(silverItems.indexOf(i), 1);
        }
      });
    }
  });

  bdIndexes
    .slice()
    .reverse()
    .forEach(i => {
      brightDustItems.splice(i, 1);
    });

  sIndexes
    .slice()
    .reverse()
    .forEach(i => {
      silverItems.splice(i, 1);
    });

  console.log('Removed dummies and packages');

  return;
}

function changeFromSilverOnlyToBrightDust() {
  console.log('Changing items that are now available for Bright Dust');

  brightDustItems.forEach(hash => {
    if (setsFile.includes(hash) === true) {
      const index = setsFile.indexOf(hash);

      if (setsFile[index - 1] === '/' && setsFile[index - 2] === '/') {
        // No formatting gap between // & hash
        setsFile = setsFile.substr(0, index - 2) + setsFile.substr(index);
      } else if (setsFile[index - 2] === '/' && setsFile[index - 3] === '/') {
        // With formatting gap between // & hash
        setsFile = setsFile.substr(0, index - 3) + setsFile.substr(index);
      }
    } else {
      hashesNotFound.push(hash);
    }
  });
  console.log('Changed items that are now available for Bright Dust');

  return;
}

function changeFromBrightDustToSilverOnly() {
  console.log(
    `Changing items that are only available for Silver in Season ${currentSeason}`
  );

  silverItems.forEach(hash => {
    if (setsFile.includes(hash) === true) {
      const index = setsFile.indexOf(hash);

      let currentString =
        setsFile[index - 8] +
        '' +
        setsFile[index - 7] +
        '' +
        setsFile[index - 6] +
        '' +
        setsFile[index - 5] +
        '' +
        setsFile[index - 4] +
        '' +
        setsFile[index - 3] +
        '' +
        setsFile[index - 2] +
        '' +
        setsFile[index - 1];

      for (
        let seasonNumberIndex = index;
        currentString !== 'season: ' && seasonNumberIndex > -1;
        seasonNumberIndex--
      ) {
        currentString =
          setsFile[seasonNumberIndex - 8] +
          '' +
          setsFile[seasonNumberIndex - 7] +
          '' +
          setsFile[seasonNumberIndex - 6] +
          '' +
          setsFile[seasonNumberIndex - 5] +
          '' +
          setsFile[seasonNumberIndex - 4] +
          '' +
          setsFile[seasonNumberIndex - 3] +
          '' +
          setsFile[seasonNumberIndex - 2] +
          '' +
          setsFile[seasonNumberIndex - 1];
        if (
          currentString === 'season: ' &&
          setsFile[seasonNumberIndex] + '' + setsFile[seasonNumberIndex + 1] ===
            currentSeason
        ) {
          if (
            setsFile[index - 1] !== '/' &&
            setsFile[index - 2] !== '/' &&
            setsFile[index - 3] !== '/'
          ) {
            const stringToAdd = '// ';
            setsFile =
              setsFile.slice(0, index) + stringToAdd + setsFile.slice(index);
          }
        }
      }
    } else {
      hashesNotFound.push(hash);
    }
  });
  console.log(
    `Changed items that are only available for Silver in Season ${currentSeason}`
  );

  return;
}

(async function run() {
  const {
    DestinyInventoryItemDefinition,
    DestinyVendorDefinition
  } = await getDefinitions();

  console.log('Recieved definitions');

  const readDataPath = path.join(
    '.',
    'src',
    'setData',
    'common',
    'eververseAndEvents.js'
  );
  console.log('Reading file', readDataPath);
  setsFile = await readFile(readDataPath);

  setsFile = setsFile.toString();

  sortSeasonalItems(DestinyInventoryItemDefinition, DestinyVendorDefinition);

  removeDuplicates();

  itemsNotSilverOnly();

  removeOtherItems(DestinyInventoryItemDefinition);

  changeFromSilverOnlyToBrightDust();

  changeFromBrightDustToSilverOnly();

  if (hashesNotFound.length) {
    console.log('');
    console.log(
      'There were no references to the following hashes in the file - '
    );

    hashesNotFound.forEach(hash => {
      if (
        DestinyInventoryItemDefinition &&
        DestinyInventoryItemDefinition[hash] &&
        DestinyInventoryItemDefinition[hash].displayProperties &&
        DestinyInventoryItemDefinition[hash].displayProperties.name
      ) {
        if (
          DestinyInventoryItemDefinition[
            hash
          ].displayProperties.name.toLowerCase() === 'classified' &&
          DestinyVendorDefinition &&
          DestinyVendorDefinition[hash] &&
          DestinyVendorDefinition[hash].displayProperties &&
          DestinyVendorDefinition[hash].displayProperties.name
        ) {
          console.log(
            DestinyInventoryItemDefinition[hash].displayProperties.name +
              ' / ' +
              DestinyVendorDefinition[hash].displayProperties.name +
              ' ' +
              '(' +
              hash +
              ')'
          );
        } else {
          console.log(
            DestinyInventoryItemDefinition[hash].displayProperties.name +
              ' ' +
              '(' +
              hash +
              ')'
          );
        }
      } else {
        console.log(
          DestinyInventoryItemDefinition[hash].displayProperties.name +
            ' ' +
            hash
        );
      }
    });
    console.log('');
  }

  // console.log(brightDustItems.length);
  // console.log(silverItems.length);

  const dataPath = path.join(
    '.',
    'src',
    'setData',
    'common',
    'eververseAndEvents.js'
  );

  console.log('Writing to file', dataPath);
  writeFile(path.resolve(dataPath), setsFile);
})();
