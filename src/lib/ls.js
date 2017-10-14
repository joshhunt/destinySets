const INVENTORY = '$inventory';
const FILTERS = '$filters';
const ACCOUNT = '$account';
const AUTH = '$auth';

function get(key, defaultx) {
  const lsValue = localStorage.getItem(key);

  if (!lsValue) {
    return defaultx;
  }

  try {
    return JSON.parse(lsValue) || defaultx;
  } catch (err) {
    console.error(`Unable to retrieve ${key} from local storage as JSON:`);
    console.error(err);

    return defaultx;
  }
}

function save(key, value) {
  const jason = JSON.stringify(value);
  localStorage.setItem(key, jason);
}

export function saveInventory(inventory) {
  save(INVENTORY, inventory);
}

export function getInventory() {
  return get(INVENTORY, []);
}

export function saveFilters(filters) {
  save(FILTERS, filters);
}

export function getFilters() {
  return get(FILTERS);
}

export function savePreviousAccount(id, type) {
  save(ACCOUNT, { id, type });
}

export function getPreviousAccount(id, type) {
  return get(ACCOUNT, {});
}

export function removePreviousAccount() {
  localStorage.removeItem(ACCOUNT);
}

export function saveAuth(authData) {
  save(AUTH, authData);
}

export function getAuth() {
  return get(AUTH);
}

export function removeAuth() {
  localStorage.removeItem(AUTH);
}
