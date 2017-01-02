const https = require('https');
const fs = require('fs');

const mkdirp = require('mkdirp');
const path = require('path');
const unzip = require('unzip');

const LOGGING_ENABLED = true;
const DIR_PREFIX = './working'; // relative to project root when ran with yarn

mkdirp(DIR_PREFIX);

function log(...args) {
  if (!LOGGING_ENABLED) return
  console.log(...args);
}

module.exports.changeExt = function changeExt(input, newExt) {
  return path.parse(input).name + '.' + newExt;
}

function downloadToFile(destPath, url) {
  return new Promise((resolve, reject) => {
    const file = fs.createWriteStream(destPath);
    const req = https.get(url, (resp) => {
      const contentLength = parseInt(resp.headers['content-length'], 10)
      let downloaded = 0;

      resp.pipe(file);

      resp.on('data', (chunk) => {
        downloaded += chunk.length
        console.log('Downloaded:', (100.0 * downloaded / contentLength).toFixed(2) + '%');
      });

      file.on('finish', () => file.close(() => {
        resolve(destPath);
      }));
    });

    req.on('error', (err) => {
      fs.unlink(destPath);
      reject(err);
    });
  })
}

module.exports.downloadToFile = function cacheableDownloadToFile(dest, url) {
  const destPath = path.join(DIR_PREFIX, dest);

  return new Promise((resolve, reject) => {
    fs.access(destPath, (err) => {
      if (err) {
        // file doesnt exist, download it
        log(destPath, 'doesnt exist, downloading it');
        downloadToFile(destPath, url)
          .then(resolve)
          .catch(reject);

      } else {
        // File already exists, resolve immediately
        log(destPath, 'already exists, finishing early');
        resolve(destPath);
      }
    })
  });
}

function unzipFile(dest, orig) {
  return new Promise((resolve, reject) => {
    const extractor = unzip.Extract({ path: dest });

    extractor.on('close', () => {
      resolve(orig);
    });
    extractor.on('error', reject);

    fs.createReadStream(orig).pipe(extractor)
  });
}

module.exports.unzipFile = function cacheableUnzipFile(dest, orig) {
  const destPath = path.join(DIR_PREFIX, dest);
  const outputFile = path.join(DIR_PREFIX, module.exports.changeExt(orig, 'content'))

  log(destPath, 'doesnt exist, unzipping it');
  return unzipFile(destPath, orig)
    .then(() => outputFile);
}
