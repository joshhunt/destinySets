// @flow
import type { I18nDefinitionString } from '../types';

export const i18nDefinitionString = (
  path: string,
  fallback: string
): I18nDefinitionString => {
  return { path, fallback };
};
