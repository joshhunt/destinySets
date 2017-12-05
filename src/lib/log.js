import debug from 'debug';

module.exports = function(logName) {
  return debug(`destinySets:${logName}`);
};
