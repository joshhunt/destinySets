const { downloadToFile, unzipFile, changeExt } = require('./utils');
const { processDatabase } = require('./processDatabase');

const axios = require('axios');

const MANIFEST_URL = 'https://www.bungie.net/platform/Destiny/Manifest/';
const API_KEY = '07ccdc0787034cabb78110651e94ccfc';
const LANGUAGE = 'en';

axios.get(MANIFEST_URL, {
  headers: { 'X-API-Key': API_KEY }
})
  .then((resp) => {
    const dumpPath = resp.data.Response.mobileWorldContentPaths[LANGUAGE];
    const dumpUrl = 'https://www.bungie.net' + dumpPath;
    return downloadToFile(changeExt(dumpPath, 'zip'), dumpUrl);
  })
  .then((zipFile) => {
    console.log('Downloaded zip file:');
    console.log(zipFile);
    return unzipFile('', zipFile);
  }).then((sqlFile) => {
    return processDatabase(sqlFile);
  })
  .catch(console.error.bind(console));
