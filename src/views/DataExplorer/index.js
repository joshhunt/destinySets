import React, { Component } from 'react';
import JSONTree from 'react-json-tree';
import scrollToElement from 'scroll-to-element';
import Dexie from 'dexie';
import { isString } from 'lodash';

import * as destiny from 'app/lib/destinyLegacy';

import DATA_SOURCES from './definitionSources';
import Item from 'app/components/Item';
import Header from 'app/components/Header';
import Loading from 'app/views/Loading';
import styles from './styles.styl';

const MAX_ITEMS = 100;

const db = new Dexie('destinySetsCache');
db.version(1).stores({
  dataCache: '&key, data',
});

const tc = func => (...args) => {
  try {
    func(...args);
  } catch (e) {
    console.error(e);
  }
};

const ls = {
  get: tc(key => JSON.parse(localStorage.getItem(key))),
  set: tc((key, value) => localStorage.setItem(key, JSON.stringify(value))),
};

const cachedGet = (path, id) => {
  return new Promise((resolve, reject) => {
    const key = id + path;

    const fetchData = () => {
      const url = `https://destiny.plumbing/2${path}?id=${id}`;
      return destiny.get(url).then(data => {
        const stringified = JSON.stringify(data);

        db.dataCache.put({ key, data: stringified });

        resolve(data);
      });
    };

    db.dataCache
      .get(key)
      .then(cachedData => {
        console.log(`Loaded ${path} from cache`);

        if (cachedData) {
          resolve(JSON.parse(cachedData.data));
        } else {
          fetchData();
        }
      })
      .catch(() => {
        fetchData();
      });
  });
};

export default class DataExplorer extends Component {
  state = {
    loading: true,
    items: [],
    selectedItems: [],
    numLoaded: 0,
    totalToLoad: DATA_SOURCES.length,
  };

  componentDidMount() {
    destiny.get('https://destiny.plumbing/2/index.json').then(({ id }) => {
      const dataPromises = DATA_SOURCES.map(src => cachedGet(src.url, id));

      dataPromises.forEach(p =>
        p.then(() => {
          this.setState({
            numLoaded: this.state.numLoaded + 1,
          });
        })
      );

      Promise.all(dataPromises)
        .then(results => {
          this.data = results.reduce((acc, defs, index) => {
            const src = DATA_SOURCES[index];
            const blob = { name: src.name, defs };

            src.fields.forEach(field => {
              acc[field] = blob;
            });

            return acc;
          }, {});

          this.allItems = Object.values(this.data.itemHash.defs);

          const items = this.allItems
            .filter(item => !item.redacted)
            .slice(0, MAX_ITEMS);

          this.setState({
            loading: false,
            items,
          });
        })
        .catch(err => {
          this.setState({
            error: true,
          });
        });
    });
  }

  onItemClick(item, ev) {
    ev.preventDefault();

    setTimeout(() => {
      if (this.ref) {
        scrollToElement(this.ref, { duration: 500 });
      }
    }, 10);

    this.setState({ activeItem: item });
  }

  updateFilter(text) {
    if (text.length < 3) {
      return null;
    }

    const search = text.toLowerCase();
    const searchAsNum = parseInt(text, 10);

    const filteredItems = this.allItems
      .filter(item => {
        const name = (item.displayProperties.name || '').toLowerCase();

        return name.includes(search) || item.hash === searchAsNum;
      })
      .slice(0, MAX_ITEMS);

    this.setState({ items: filteredItems });
  }

  onFilterChange = ev => {
    this.updateFilter(ev.target.value);
  };

  valueRenderer = (prettyValue, rawValue, fieldName, parentFieldName) => {
    // console.log('***', prettyValue, rawValue, fieldName);

    if (isString(rawValue) && rawValue.match(/\.(png|jpg|jpeg)$/)) {
      const imageUrl = `https://bungie.net${rawValue}`;

      return (
        <span>
          <a href={imageUrl} target="_blank">
            <img className={styles.jsonImage} src={imageUrl} />
          </a>

          {/* prettyValue */}
        </span>
      );
      // return prettyValue;
    }

    // TODO: should we really be falling back like this?
    const defsForHash = this.data[fieldName] || this.data[parentFieldName];

    if (!defsForHash) {
      return prettyValue;
    }

    const item = defsForHash.defs[rawValue] || {};
    const { displayProperties } = item;

    if (!item) {
      return (
        <span
          className={styles.nonLinkedValue}
        >{`<${defsForHash.name} ${prettyValue}>`}</span>
      );
    }

    const displayName =
      displayProperties && displayProperties.name
        ? `"${displayProperties.name}"`
        : '';

    return (
      <span
        onClick={this.onItemClick.bind(this, item)}
        className={styles.linkedValue}
      >{`<${defsForHash.name} ${displayName} ${prettyValue}>`}</span>
    );
  };

  render() {
    const {
      loading,
      error,
      items,
      activeItem,
      numLoaded,
      totalToLoad,
    } = this.state;

    if (error) {
      return (
        <Loading>Error loading required data files. Try refreshing?</Loading>
      );
    }

    if (loading) {
      return (
        <Loading>
          <p>
            Loading... {numLoaded} / {totalToLoad}
          </p>
          <p className={styles.beta}>This might take a while.</p>
        </Loading>
      );
    }

    return (
      <div className={styles.root}>
        <Header onFilterChange={() => {}} legacy={false} />

        <p className={styles.beta}>
          This page is in beta and is for developers and those who are super
          curious. Search is limited, may be slow, and buggy.
        </p>

        <div className={styles.searchBox}>
          Search item
          <input
            type="text"
            placeholder="Item name or hash"
            className={styles.searchField}
            onChange={this.onFilterChange}
          />
        </div>

        <div className={styles.itemList}>
          {items.map(item => (
            <Item
              onClick={this.onItemClick.bind(this, item)}
              className={styles.item}
              key={item.hash}
              item={item}
            />
          ))}
        </div>

        {activeItem && (
          <div className={styles.json} ref={r => (this.ref = r)}>
            <h2 className={styles.activeItem}>
              {activeItem.displayProperties &&
              activeItem.displayProperties.name ? (
                activeItem.displayProperties.name
              ) : (
                <em>No name</em>
              )}
            </h2>

            {activeItem.displayProperties &&
            activeItem.displayProperties.description && (
              <p className={styles.activeItemDesc}>
                {activeItem.displayProperties.description}
              </p>
            )}

            <JSONTree data={activeItem} valueRenderer={this.valueRenderer} />
          </div>
        )}
      </div>
    );
  }
}
