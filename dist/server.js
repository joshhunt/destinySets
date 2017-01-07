// This is the server that's ran when deployed to serve out the files

var server = require('pushstate-server');

console.log('Starting Dashboard server out of', __dirname);

server.start({
  port: 3001,
  directory: __dirname,
});
