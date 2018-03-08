import React from 'react';
import cx from 'classnames';

import styles from './dropdownStyles.styl';

import { languages, languageByCode } from 'app/lib/i18n';

export default function LanguageSwitcher(props) {
  const {
    displayInline,
    activeLanguage,
    langSwitcherActive,
    toggleLangSwitcher,
    setLang
  } = props;
  return (
    <div
      className={cx(
        styles.languageSwitcher,
        displayInline && styles.displayInline
      )}
      onClick={toggleLangSwitcher}
    >
      <div>
        <span className={styles.displayName}>
          {activeLanguage && languageByCode[activeLanguage.code].name}
        </span>
      </div>

      <div className={styles.switchButton}>
        <i className="fa fa-caret-down" aria-hidden="true" />
      </div>

      {langSwitcherActive && (
        <div className={styles.langDropdown}>
          {languages.map(lang => (
            <div
              key={lang.code}
              className={styles.langOption}
              onClick={() => setLang(lang)}
            >
              {lang.name}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
