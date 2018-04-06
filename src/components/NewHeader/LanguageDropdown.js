import React, { Fragment, Component } from 'react';
import DropdownMenu from 'app/components/DropdownMenu';
import Icon from 'app/components/Icon';
import { languages } from 'app/lib/i18n';

import styles from './dropdownStyles.styl';

export default class LanguageDropdown extends Component {
  renderContent = () => {
    return (
      <Fragment>
        {languages.map(lang => (
          <div
            key={lang.code}
            className={styles.dropdownItem}
            onClick={() => this.props.setLanguage(lang)}
          >
            {lang.name}
          </div>
        ))}
      </Fragment>
    );
  };

  render() {
    return (
      <DropdownMenu
        className={styles.root}
        renderContent={this.renderContent}
        contentClassName={styles.dropdownWide}
      >
        <div className={styles.main}>{this.props.language.name}</div>

        <div className={styles.fakeButton}>
          <Icon icon="chevron-down" />
        </div>
      </DropdownMenu>
    );
  }
}
