require('isomorphic-fetch');
const async = require('async');
const fs = require('fs');
const request = require('request');
const slug = require('slug');

function download(uri, filename, callback) {
  request.head(uri, function(err, res, body) {
    request(uri)
      .pipe(fs.createWriteStream(filename))
      .on('close', callback);
  });
}

function downloadWorker(item, cb) {
  console.log('Downloading', item.displayProperties.name);
  const url = 'http://bungie.net/' + item.displayProperties.icon;
  const name =
    './icons/' + slug(item.displayProperties.name).toLowerCase() + '.png';

  download(url, name, cb);
}

const queue = async.queue(downloadWorker, 5);

fetch('https://destiny.plumbing/en/raw/DestinyInventoryItemDefinition.json')
  .then(r => r.json())
  .then(data => {
    Object.values(data).forEach(item => {
      if (!item.itemTypeDisplayName) {
        return;
      }

      if (item.itemTypeDisplayName.includes('Ornament')) {
        return;
      }
      if (item.itemTypeDisplayName.includes('Shader')) {
        return;
      }
      if (item.itemTypeDisplayName.includes(' Mod')) {
        return;
      }

      if (item.itemCategoryHashes && item.itemCategoryHashes.includes(59)) {
        queue.push(item);
      }
    });
  });
