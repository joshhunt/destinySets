const keys = {
  INVENTORY: '$inventory2',
  CLOUD_INVENTORY: '$cloudinventory',
  FILTERS: '$filters',
  ACCOUNT: '$account',
  LANGUAGE: '$lang',
  AUTH: '$auth',
  GDRIVE_FILE_ID: '$googleDriveFileId' + window.DESTINYSETS_ENV,
  GOOGLE_LOGIN_UPSELL: '$googleLoginUpsell'
};

import { getDefaultLanguage } from './i18n';

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

export function saveLanguage(langCode) {
  save(keys.LANGUAGE, langCode);
}

export function getLanguage() {
  return get(keys.LANGUAGE, getDefaultLanguage());
}

export function saveInventory(inventory) {
  save(keys.INVENTORY, inventory);
}

export function getInventory() {
  return get(keys.INVENTORY, []);
}

export function saveGoogleLoginUpsell(bool) {
  save(keys.GOOGLE_LOGIN_UPSELL, bool);
}

export function getGoogleLoginUpsell() {
  return get(keys.GOOGLE_LOGIN_UPSELL, false);
}

export function saveCloudInventory(inventory) {
  save(keys.CLOUD_INVENTORY, inventory);
}

export function getCloudInventory() {
  return get(keys.CLOUD_INVENTORY, []);
}

export function removeInventory() {
  return localStorage.removeItem(keys.INVENTORY);
}

export function saveFilters(filters) {
  save(keys.FILTERS, filters);
}

export function getFilters() {
  return get(keys.FILTERS);
}

export function savePreviousAccount(id, type) {
  save(keys.ACCOUNT, { id, type });
}

export function getPreviousAccount(id, type) {
  return get(keys.ACCOUNT, {});
}

export function removePreviousAccount() {
  localStorage.removeItem(keys.ACCOUNT);
}

export function saveAuth(authData) {
  save(keys.AUTH, authData);
}

export function getAuth() {
  return get(keys.AUTH);
}

export function removeAuth() {
  localStorage.removeItem(keys.AUTH);
}

export function getGoogleDriveInventoryFileId() {
  return get(keys.GDRIVE_FILE_ID, null);
}

export function saveGoogleDriveInventoryFileId(fileId) {
  save(keys.GDRIVE_FILE_ID, fileId);
}

export function clearAll() {
  Object.values(keys).forEach(k => {
    localStorage.removeItem(k);
  });
}
