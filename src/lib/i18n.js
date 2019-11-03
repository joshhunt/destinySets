import { keyBy } from 'lodash';
import browserLocale from 'browser-locale';

export const ENGLISH = {
  code: 'en',
  name: 'English'
};

export const FRENCH = {
  code: 'fr',
  name: 'French'
};

export const GERMAN = {
  code: 'de',
  name: 'German'
};

export const ITALIAN = {
  code: 'it',
  name: 'Italian'
};

export const JAPANESE = {
  code: 'ja',
  name: 'Japanese'
};

export const PORTUGUESE = {
  code: 'pt-br',
  name: 'Portuguese (Brazil)'
};

export const SPANISH = {
  code: 'es',
  name: 'Spanish'
};

export const SPANISH_LATIN = {
  code: 'es-mx',
  name: 'Spanish (Latin America)'
};

export const RUSSIAN = {
  code: 'ru',
  name: 'Russian'
};

export const POLISH = {
  code: 'pl',
  name: 'Polish'
};

export const CHINESE_SIMP = {
  code: 'zh-chs',
  name: 'Chinese (Simplified)'
}

export const CHINESE_TRAD = {
  code: 'zh-cht',
  name: 'Chinese (Traditional)'
};

export const KOREAN = {
  code: 'ko',
  name: 'Korean'
}

export const DEFAULT_LANG = ENGLISH;

export const languages = [
  ENGLISH,
  FRENCH,
  GERMAN,
  ITALIAN,
  JAPANESE,
  PORTUGUESE,
  SPANISH,
  SPANISH_LATIN,
  RUSSIAN,
  POLISH,
  CHINESE_SIMP,
  CHINESE_TRAD,
  KOREAN
];

export const languageByCode = keyBy(languages, lang => lang.code);

export function getBrowserLocale() {
  return browserLocale().toLowerCase();
}

export function getDefaultLanguage() {
  let shortLocale = DEFAULT_LANG.code;
  let fullLocale = DEFAULT_LANG.code;

  try {
    fullLocale = getBrowserLocale();
    shortLocale = getBrowserLocale().split('-')[0];
  } catch (e) {}

  return (
    languageByCode[fullLocale] || languageByCode[shortLocale] || DEFAULT_LANG
  );
}
