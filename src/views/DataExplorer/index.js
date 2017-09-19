import React, { Component } from 'react';
import scrollToElement from 'scroll-to-element';
import Dexie from 'dexie';
import DataViewer from './DataView';

import * as destiny from 'app/lib/destinyLegacy';

import DATA_SOURCES from './definitionSources';
import Item from 'app/components/Item';
import Header from 'app/components/Header';
import Loading from 'app/views/Loading';

import styles from './styles.styl';

const MAX_ITEMS = 50;

const db = new Dexie('destinySetsCache');
db.version(1).stores({
  dataCache: '&key, data',
});

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
      .catch(err => {
        console.error('Error loading data from cache:');
        console.error(err);
        fetchData();
      });
  });
};

export default class DataExplorer extends Component {
  state = {
    loading: true,
    items: [],
    dataStack: [],
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
          console.error(err);
          this.setState({
            error: true,
          });
        });
    });
  }

  onItemClick(item, ev) {
    ev && ev.preventDefault();

    // setTimeout(() => {
    //   if (this.ref) {
    //     scrollToElement(this.ref, { duration: 500 });
    //   }
    // }, 10);

    this.setState({ dataStack: [item] });
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

  pushItem = item => {
    const newDataStack = [...this.state.dataStack, item];
    this.setState({ dataStack: newDataStack });
  };

  popItem = ev => {
    console.log(ev.target);
    if (ev.target.getAttribute('data-pop-item')) {
      const [...newDataStack] = this.state.dataStack;
      newDataStack.pop();
      this.setState({ dataStack: newDataStack });
    }
  };

  render() {
    const {
      loading,
      error,
      items,
      dataStack,
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

        {dataStack.length > 0 && (
          <div className={styles.dataViews}>
            {dataStack.map((data, index) => (
              <div
                className={styles.dataSlide}
                style={{ paddingLeft: (index + 1) * 150 }}
                onClick={this.popItem}
                data-pop-item="true"
              >
                <div className={styles.dataSlideInner}>
                  <DataViewer
                    className={styles.dataView}
                    data={this.data}
                    item={data}
                    onItemClick={this.pushItem}
                  />
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    );
  }
}
