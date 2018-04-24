const axios = require('axios');
const async = require('async');

const url = require('url');
const https = require('https');

const sizeOf = require('image-size');

const LIMIT = 25;

// const imgUrl = 'http://my-amazing-website.com/image.jpeg';
// const options = url.parse(imgUrl);

function getImageDimensions(imageUrl, cb) {
  return new Promise((resolve, reject) => {
    const options = url.parse(imageUrl);

    https.get(options, function(response) {
      const chunks = [];

      response
        .on('data', function(chunk) {
          chunks.push(chunk);
        })
        .on('end', function() {
          const buffer = Buffer.concat(chunks);
          const dimensions = sizeOf(buffer);
          const sizeKey = [dimensions.width, dimensions.height].join('x');
          console.log(sizeKey, imageUrl);
          cb(null, dimensions);
        })
        .on('error', cb);
    });
  });
}

const sizes = {};

axios
  .get('https://destiny.plumbing/en/raw/DestinyInventoryItemDefinition.json')
  .then(({ data }) => {
    async.eachLimit(
      Object.values(data),
      LIMIT,
      (item, cb) => {
        if (!item.screenshot) {
          return cb();
        }

        const imageUrl = `https://www.bungie.net${item.screenshot}`;

        getImageDimensions(imageUrl, (err, dimensions) => {
          if (err) {
            return cb(err);
          }

          const sizeKey = [dimensions.width, dimensions.height].join('x');

          if (!sizes[sizeKey]) {
            sizes[sizeKey] = [];
          }

          sizes[sizeKey].push(item);
          cb();
        });
      },
      err => {
        if (err) {
          console.error('error with everything fucking up');
          console.error(err);
          return;
        }

        console.log('\nAll done:');

        Object.keys(sizes).forEach(sizeKey => {
          console.log('');
          console.log(sizeKey);
          sizes[sizeKey].forEach(item => {
            console.log(
              ` - ${item.hash} // https://destinysets.com/data/${item.hash}`
            );
          });
        });

        console.log('\n');
        Object.keys(sizes).forEach(sizeKey => {
          const count = sizes[sizeKey].length;
          console.log(sizeKey, count);
        });
      }
    );
  });
