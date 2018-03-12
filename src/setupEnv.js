window.DESTINYSETS_ENV = 'prod';
if (window.location.href.includes('localhost')) {
  window.DESTINYSETS_ENV = 'dev';
}

if (window.DESTINYSETS_ENV !== 'prod') {
  localStorage.debug = localStorage.debug || 'destinySets:*';
}
