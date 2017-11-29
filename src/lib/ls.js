const INVENTORY = '$inventory2';
const CLOUD_INVENTORY = '$cloudinventory';
const FILTERS = '$filters';
const ACCOUNT = '$account';
const GDRIVE_FILE_ID = '$googleDriveFileId';
const LANGUAGE = '$lang';
const AUTH = '$auth';
const GOOGLE_LOGIN_UPSELL = 'googleLoginUpsell';

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
  save(LANGUAGE, langCode);
}

export function getLanguage() {
  return get(LANGUAGE, getDefaultLanguage());
}

export function saveInventory(inventory) {
  save(INVENTORY, inventory);
}

export function getInventory() {
  return get(INVENTORY, []);
}

export function saveGoogleLoginUpsell(bool) {
  save(GOOGLE_LOGIN_UPSELL, bool);
}

export function getGoogleLoginUpsell() {
  return get(GOOGLE_LOGIN_UPSELL, false);
}

export function saveCloudInventory(inventory) {
  save(CLOUD_INVENTORY, inventory);
}

export function getCloudInventory() {
  return get(CLOUD_INVENTORY, []);
}

export function removeInventory() {
  return localStorage.removeItem(INVENTORY);
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

export function getGoogleDriveInventoryFileId() {
  return get(GDRIVE_FILE_ID, null);
}

export function saveGoogleDriveInventoryFileId(fileId) {
  save(GDRIVE_FILE_ID, fileId);
}
