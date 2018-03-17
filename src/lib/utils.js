import { get } from 'lodash';

export function getLower(obj, path, fallback = '') {
  return get(obj, path, fallback).toLowerCase();
}
