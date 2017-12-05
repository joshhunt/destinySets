const log = require('app/lib/log')('analytics');

export function trackEvent(...args) {
  try {
    log(`Track event ${args.join('|')}`);
    window.ga('send', 'event', ...args);
  } catch (err) {
    console.error('Unable to trackEvent', err);
  }
}
