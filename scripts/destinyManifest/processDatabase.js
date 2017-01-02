const fs = require('fs');
const path = require('path');

const mkdirp = require('mkdirp-promise/lib/node6')
const sqlite3 = require('sqlite3').verbose();
const _ = require('lodash');

const TABLES = {
  DestinyActivityDefinition: 'hash',
  DestinyActivityTypeDefinition: 'hash',
  DestinyClassDefinition: 'hash',
  DestinyGenderDefinition: 'hash',
  DestinyInventoryBucketDefinition: 'hash',
  DestinyInventoryItemDefinition: 'hash',
  DestinyProgressionDefinition: 'hash',
  DestinyRaceDefinition: 'hash',
  DestinyTalentGridDefinition: 'hash',
  DestinyUnlockFlagDefinition: 'hash',
  DestinyVendorDefinition: 'hash',
  DestinyHistoricalStatsDefinition: 'hash',
  DestinyDirectorBookDefinition: 'hash',
  DestinyStatDefinition: 'hash',
  DestinySandboxPerkDefinition: 'hash',
  DestinyDestinationDefinition: 'hash',
  DestinyPlaceDefinition: 'hash',
  DestinyActivityBundleDefinition: 'hash',
  DestinyStatGroupDefinition: 'hash',
  DestinySpecialEventDefinition: 'hash',
  DestinyFactionDefinition: 'hash',
  DestinyVendorCategoryDefinition: 'hash',
  DestinyEnemyRaceDefinition: 'hash',
  DestinyScriptedSkullDefinition: 'hash',
  DestinyTriumphSetDefinition: 'hash',
  DestinyItemCategoryDefinition: 'hash',
  DestinyRewardSourceDefinition: 'hash',
  DestinyObjectiveDefinition: 'hash',
  DestinyDamageTypeDefinition: 'hash',
  DestinyCombatantDefinition: 'hash',
  DestinyActivityCategoryDefinition: 'hash',
  DestinyRecordDefinition: 'hash',
  DestinyRecordBookDefinition: 'hash',
  DestinyActivityModeDefinition: 'hash',
  DestinyMedalTierDefinition: 'hash',
  DestinyBondDefinition: 'hash',
  DestinyLocationDefinition: 'hash',
  DestinyGrimoireDefinition: 'hash',
  DestinyGrimoireCardDefinition: 'hash',
};

function openSqlFile(filePath) {
  return new Promise((resolve, reject) => {
    resolve(new sqlite3.Database(filePath));
  });
}

function query(db, table) {
  return new Promise((resolve, reject) => {
    db.all(`select * from ${table}`, (err, rows) => {
      if (err) return reject(err);
      resolve(rows);
    });
  });
}

function processTable(db, tableName, hashName) {
  return query(db, tableName)
    .then((rows) => {

      const items = rows.reduce((acc, row) => {
        const rowData = JSON.parse(row.json);
        return Object.assign({ [rowData[hashName]]: rowData}, acc);
      }, {})

      return { tableName, items }
    });
}

function saveFile(dest, data) {
  const fileDir = path.parse(dest).dir;

  return new Promise((resolve, reject) => {
    mkdirp(fileDir)
      .then(() => {
        fs.writeFile(dest, JSON.stringify(data, null, 2), resolve);
      })
      .catch(reject);
  });
}

function saveAll(rows) {
  const promises = rows.map(({ tableName, items }) => {
    const dest = './data/raw/' + tableName + '.json'; // relative to project root when ran with yarn
    return saveFile(dest, items);
  });

  return Promise.all(rows);
}

module.exports.processDatabase = function processDatabase(filePath) {
  console.log('Opening database', filePath);
  openSqlFile(filePath)
    .then((db) => {

      const promises = _.map(TABLES, (hashName, tableName) => {
        console.log('Processing table', tableName);
        return processTable(db, tableName, hashName);
      });

      return Promise.all(promises);
    })
    .then(saveAll)
    .catch(console.error.bind(console));
}
