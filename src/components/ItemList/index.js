import React, { Component } from 'react';
import { has } from 'lodash';
import cx from 'classnames';

import { CLASS_ITEMS } from 'app/lib/destinyEnums';

import Item from '../Item';

import styles from './styles.styl';

const MAP = {
  '270846462': 1899914236,
  '609567286': 1899914236,
  '3003456207': 1899914236,
  '3262209356': 1899914236,

  '1008588205': 29391997,
  '3156820619': 29391997,
  '3551200371': 29391997,
  '3686266706': 29391997,

  '1097155916': 2883258157,
  '1779420771': 2883258157,
  '1895044987': 2883258157,
  '4198375581': 2883258157,

  '1097521167': 1510638018,
  '2287852220': 1510638018,
  '2604400628': 1510638018,
  '3563749202': 1510638018,

  '1204269313': 3082437135,
  '2823081959': 3082437135,
  '3404948861': 3082437135,
  '3768545060': 3082437135,

  '1248391073': 1054437662,
  '3590894000': 1054437662,
  '3979417222': 1054437662,
  '4015706356': 1054437662,

  '1466306887': 4060674255,
  '1728041517': 4060674255,
  '2000319334': 4060674255,
  '2936258449': 4060674255,

  '1531403410': 640149492,
  '2114652868': 640149492,
  '3838406119': 640149492,
  '4163227370': 640149492,

  '2951930089': 1242428023,
  '3364488990': 1242428023,
  '3715888615': 1242428023,
  '3800753361': 1242428023
};

const fmtName = perkName => {
  if (
    perkName === 'Mobile Hunter Armor' ||
    perkName === 'Mobile Warlock Armor' ||
    perkName === 'Mobile Titan Armor'
  ) {
    return 'Mobile';
  }

  if (
    perkName === 'Heavy Hunter Armor' ||
    perkName === 'Heavy Warlock Armor' ||
    perkName === 'Heavy Titan Armor'
  ) {
    return 'Heavy';
  }

  if (perkName === 'Survivalist Hunter Armor') {
    return 'Survivalist';
  }

  if (
    perkName === 'Survivalist Hunter Armor' || // Doesnt exist
    perkName === 'Restorative Warlock Armor' ||
    perkName === 'Restorative Titan Armor'
  ) {
    return 'Restorative';
  }

  return perkName;
};

const getIntrinsic = items => {
  const first = items[0];
  if (!first.$intrinsicStatPerk) {
    return null;
  }

  const withSame = items.filter(item => {
    return (
      item.itemCategoryHashes.includes(CLASS_ITEMS) ||
      (item.$intrinsicStatPerk &&
        MAP[item.$intrinsicStatPerk.hash] ===
          MAP[first.$intrinsicStatPerk.hash])
    );
  });

  if (withSame.length !== items.length) {
    return null;
  }

  return first.$intrinsicStatPerk;
};

const bigItems = section =>
  has(section, 'bigItems') ? section.bigItems : false;

export default class ItemList extends Component {
  render() {
    const { className, drops, sections, tinyItems, onItemClick } = this.props;

    return (
      <div className={cx(className, styles.root)}>
        {(drops || []).length ? (
          <div className={styles.drops}>
            {drops.map(item => (
              <Item
                onClick={onItemClick}
                className={styles.item}
                key={item.hash}
                item={item}
                dev={true}
              />
            ))}
          </div>
        ) : null}

        {sections && sections.length
          ? sections.map((section, index) => {
              const intrinsic = getIntrinsic(section.items);
              return (
                <div
                  className={cx(styles.section, tinyItems && styles.inline)}
                  key={index}
                >
                  {section.title && (
                    <div className={styles.sectionName}>
                      <span className={styles.name}>{section.title}</span>
                      {intrinsic ? (
                        <div className={styles.intrinsic} alt="omg help">
                          {fmtName(intrinsic.displayProperties.name)}
                        </div>
                      ) : null}
                    </div>
                  )}

                  <div className={styles.sectionItems}>
                    {section.items.map(item => (
                      <Item
                        onClick={onItemClick}
                        key={item.itemHash || item.hash}
                        item={item}
                        small={!bigItems(section)}
                        className={styles.item}
                      />
                    ))}
                  </div>
                </div>
              );
            })
          : null}
      </div>
    );
  }
}
