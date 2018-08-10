import React, { Component } from 'react';
import { connect } from 'react-redux';
import cx from 'classnames';

import * as ls from 'app/lib/ls';
import Item from 'app/components/Item';
import Icon from 'app/components/Icon';

import MasterworkCatalyst from 'app/components/MasterworkCatalyst';

import TheRealLazyLoad from 'react-lazyload';

import styles from './styles.styl';

import { setHiddenItemSet as setHiddenItemSetAction } from 'app/store/reducer';

const ITEM_TYPE_COMPONENTS = {
  exoticCatalysts: MasterworkCatalyst
};

const LAZY_LOAD = true;

const LazyLoad = LAZY_LOAD ? TheRealLazyLoad : ({ children }) => children;

class ItemSet extends Component {
  toggleHidden = () => {
    const {
      setHiddenItemSet,
      set: { id, hidden }
    } = this.props;

    ls.saveHiddenItemSets(id, !hidden);
    setHiddenItemSet(id, !hidden);
  };

  render() {
    const { className, setPopper, setModal, set } = this.props;
    const { name, noUi, description, sections, image, hidden } = set;

    return (
      <div
        className={cx(
          className,
          styles.root,
          noUi && styles.noUi,
          hidden && styles.hidden
        )}
      >
        <div className={styles.inner}>
          {!noUi && (
            <div className={styles.header}>
              {image && (
                <img
                  alt=""
                  className={styles.headerImage}
                  src={`https://www.bungie.net${image}`}
                />
              )}
              <div className={styles.headerText}>
                <div className={styles.split}>
                  <div className={styles.splitMain}>
                    <h3 className={styles.title}>{name}</h3>
                  </div>

                  <div className={styles.headerAccessory}>
                    <button
                      className={styles.hiddenToggle}
                      onClick={this.toggleHidden}
                    >
                      <Icon light name={hidden ? 'eye-slash' : 'eye'} />

                      {true && (
                        <span className={styles.hiddenToggleText}>
                          {' '}
                          {hidden ? 'Hidden' : 'Hide'}
                        </span>
                      )}
                    </button>
                  </div>
                </div>

                {description && <p className={styles.desc}>{description}</p>}
              </div>
            </div>
          )}

          {sections.map((section, index) => (
            <LazyLoad height={85} key={index}>
              <div className={styles.section}>
                {!noUi && (
                  <h4 className={styles.sectionName}>
                    {section.name}{' '}
                    {section.season && (
                      <span className={styles.seasonLabel}>
                        S{section.season}
                      </span>
                    )}
                  </h4>
                )}

                <div className={styles.itemListWrapper}>
                  {section.itemGroups.map((itemList, index2) => (
                    <div className={styles.itemList} key={index2}>
                      {itemList.map(itemHash => {
                        const ItemComponent =
                          ITEM_TYPE_COMPONENTS[section.itemType] || Item;

                        return (
                          <ItemComponent
                            itemHash={itemHash}
                            key={itemHash}
                            extended={section.bigItems}
                            className={!section.type && styles.item}
                            setPopper={setPopper}
                            onItemClick={setModal}
                          />
                        );
                      })}
                    </div>
                  ))}
                </div>
              </div>
            </LazyLoad>
          ))}
        </div>
      </div>
    );
  }
}

const mapDispatchToActions = {
  setHiddenItemSet: setHiddenItemSetAction
};

export default connect(null, mapDispatchToActions)(ItemSet);
