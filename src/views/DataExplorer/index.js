import React, { Component } from 'react';
import DataViewer from './DataView';

import * as destiny from 'app/lib/destiny';
import { getDefinition } from 'app/lib/manifestData';

import DATA_SOURCES from './definitionSources';
import Item from 'app/components/Item';
import Header from 'app/components/Header';
import Loading from 'app/views/Loading';

import DestinyAuthProvider from 'app/lib/DestinyAuthProvider';

import styles from './styles.styl';

const MAX_ITEMS = 50;

function getRandom(arr, n) {
  var result = new Array(n),
    len = arr.length,
    taken = new Array(len);
  if (n > len)
    throw new RangeError('getRandom: more elements taken than available');
  while (n--) {
    var x = Math.floor(Math.random() * len);
    result[n] = arr[x in taken ? taken[x] : x];
    taken[x] = --len;
  }
  return result;
}

class DataExplorer extends Component {
  state = {
    loading: true,
    items: [],
    dataStack: [],
    selectedItems: [],
    numLoaded: 0,
    totalToLoad: DATA_SOURCES.length,
  };

  componentDidMount() {
    const dataPromises = DATA_SOURCES.map(src => getDefinition(src.url));

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

        const items = getRandom(
          this.allItems.filter(item => !item.redacted),
          MAX_ITEMS
        );

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
  }

  onItemClick(item, ev) {
    ev && ev.preventDefault();

    if (localStorage && localStorage.getItem('collectMode')) {
      if (!window.collection) {
        window.collection = [];
      }

      window.collection.push(item);

      const toStr = window.collection.map(item => {
        return `${item.hash}, // ${item.displayProperties.name}`;
      });

      window.collectionStr = toStr.join('\n');

      console.log(`\n\n${window.collectionStr}`);

      return;
    }

    if (item.secondarySpecial) {
      this.setState({ headerBg: item.secondarySpecial });
    }

    this.setState({ dataStack: [item] });
  }

  updateFilter(text) {
    const filterItems = func => {
      const items = this.allItems.filter(func);
      this.setState({ items });
    };

    if (text.length === 0) {
      const items = getRandom(
        this.allItems.filter(item => !item.redacted),
        MAX_ITEMS
      );

      this.setState({ items });
      return;
    }

    if (text.length < 3) {
      return null;
    }

    const search = text.toLowerCase();

    if (search === 'is:transmat') {
      return filterItems(
        item =>
          item.itemTypeDisplayName &&
          item.itemTypeDisplayName.includes &&
          item.itemTypeDisplayName.includes('Transmat Effect')
      );
    }

    if (search === 'is:exotic') {
      return filterItems(item => item.inventory.tierTypeName === 'Exotic');
    }

    if (search === 'is:legendary') {
      return filterItems(item => item.inventory.tierTypeName === 'Legendary');
    }

    const searchAsNum = parseInt(text, 10);

    const filteredItems = this.allItems
      .filter(item => {
        const name = (item.displayProperties.name || '').toLowerCase();
        const description = (item.displayProperties.description || '')
          .toLowerCase();
        const itemType = (item.itemTypeDisplayName || '').toLowerCase();

        return (
          name.includes(search) ||
          description.includes(search) ||
          itemType.includes(search) ||
          item.hash === searchAsNum
        );
      })
      .slice(0, MAX_ITEMS);

    this.setState({ items: filteredItems });
  }

  loadProfile = () => {
    if (!this.props.isAuthenticated) {
      alert('Not authenticated yet. Please wait!');
      return;
    }

    destiny.getCurrentProfiles().then(profiles => {
      this.pushItem(profiles);
    });
  };

  onFilterChange = ev => {
    this.updateFilter(ev.target.value);
  };

  pushItem = item => {
    const newDataStack = [...this.state.dataStack, item];

    if (item.secondarySpecial) {
      this.setState({ headerBg: item.secondarySpecial });
    }

    this.setState({ dataStack: newDataStack });
  };

  popItem = ev => {
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
        <Header
          bg={this.state.headerBg}
          onFilterChange={() => {}}
          legacy={false}
        />

        {localStorage && localStorage.getItem('collectMode') ? (
          <p className={styles.beta} style={{ opacity: 1, fontSize: 20 }}>
            <strong>
              <em>Collect mode is on.</em>
            </strong>
          </p>
        ) : (
          <p className={styles.beta}>
            This page is in beta and is for developers and those who are super
            curious. Search is limited, may be slow, and buggy.
          </p>
        )}

        <div className={styles.searchBox}>
          Search item
          <input
            type="text"
            placeholder="Item name or hash"
            className={styles.searchField}
            onChange={this.onFilterChange}
          />
        </div>

        {/*<button onClick={this.loadProfile}>View Profile</button>*/}

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

        {/*<pre>
          {items.map(item => (
            <span style={{ display: 'block' }}>
              {item.hash}, // {item.displayProperties.name}
            </span>
          ))}
        </pre>*/}

        {dataStack.length > 0 && (
          <div className={styles.dataViews}>
            {dataStack.map((data, index) => (
              <div
                className={styles.dataSlide}
                key={index}
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

export default DestinyAuthProvider(DataExplorer);
