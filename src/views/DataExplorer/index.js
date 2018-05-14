import React, { Component } from 'react';
import { find, mapValues } from 'lodash';

import * as ls from 'app/lib/ls';
import { getDefinition } from 'app/lib/manifestData';

import Item from 'app/components/Item';
import Header from 'app/components/Header';
import Loading from 'app/views/Loading';

import copy from 'app/lib/copyToClipboard';
import { fancySearchTerms } from 'app/lib/fancySearch';
import sortItemsIntoSections from 'app/lib/sortItemsIntoSections';

import DataViewer from './DataView';
import CollectionSidebar from './CollectionSidebar';
import filterDefinitions from './filterItems';

import DATA_SOURCES from './definitionSources';

import DestinyAuthProvider from 'app/lib/DestinyAuthProvider';

import styles from './styles.styl';

class DataExplorer extends Component {
  state = {
    loading: true,
    items: [],
    dataStack: [],
    selectedItems: [],
    numLoaded: 0,
    totalToLoad: DATA_SOURCES.length,
    collectMode: false
  };

  collection = [];
  inventory = [];

  toggleCollectMode = () => {
    this.setState({ collectMode: !this.state.collectMode });
  };

  componentDidMount() {
    try {
      this.inventory = JSON.parse(localStorage.getItem('inventory')) || [];
    } catch (e) {}

    const lang = ls.getLanguage();
    const dataPromises = DATA_SOURCES.map(src =>
      getDefinition(src.url, lang.code)
    );

    dataPromises.forEach(p =>
      p.then(() => {
        this.setState({ numLoaded: this.state.numLoaded + 1 });
      })
    );

    Promise.all(dataPromises)
      .then(results => {
        const { defs, defsByField } = results.reduce(
          (acc, defs, index) => {
            const src = DATA_SOURCES[index];
            const typedDefs = mapValues(defs, d => ({ $type: src.name, ...d }));
            const blob = { name: src.name, defs: typedDefs };

            acc.defs[src.name] = typedDefs;

            src.fields.forEach(field => {
              acc.defsByField[field] = blob;
            });

            return acc;
          },
          { defs: {}, defsByField: {} }
        );

        this.defs = defs;
        this.defsByField = defsByField;

        this.setState({ loading: false });
        this.onFilterChange();

        const itemDefs = defs.item;
        const itemHash = this.props.routeParams.itemHash;

        if (itemHash && itemDefs[itemHash]) {
          this.pushItem(itemDefs[itemHash]);
        }
      })
      .catch(err => {
        console.error(err);
        this.setState({
          error: true
        });
      });
  }

  onItemClick(item, ev) {
    ev && ev.preventDefault();

    if (this.state.collectMode) {
      this.collection.push(item);
      this.updateCollection();
      return;
    }

    if (item.secondarySpecial) {
      this.setState({ headerBg: item.secondarySpecial });
    }

    this.setState({ dataStack: [item] });
  }

  updateCollection() {
    const sections = sortItemsIntoSections(this.collection);
    const verboseSections = sortItemsIntoSections(this.collection, true);

    let jason = JSON.stringify(sections, null, 2);

    (jason.match(/(\d{5,})(,?)/g) || []).forEach(match => {
      const hash = +match.match(/\d+/)[0];
      const item = find(this.collection, item => item.hash === hash);
      const newline = match + ' // ' + item.displayProperties.name;
      jason = jason.replace(match, newline);
    });

    copy(jason);

    this.setState({
      collectSections: verboseSections,
      collectSectionsStr: jason
    });
  }

  removeItemFromCollection = itemHash => {
    this.collection = this.collection.filter(({ hash }) => {
      return hash !== itemHash;
    });

    this.updateCollection();
  };

  onFilterChange = ev => {
    const search = ev ? ev.target.value : '';
    const filteredItems = filterDefinitions(search, this.defs);

    filteredItems &&
      this.setState({
        items: filteredItems.sort(
          (a, b) => (a.isDisplayable || a.redacted ? 1 : -1)
        )
      });
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
      collectMode,
      collectSections
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
      <div className={styles.root} data-id="root">
        <Header />

        <div className={styles.view}>
          <div className={styles.main}>
            <div onClick={this.toggleCollectMode}>
              {collectMode ? (
                <p className={styles.beta} style={{ opacity: 1, fontSize: 20 }}>
                  <strong>
                    <em>Collect mode is on.</em>
                  </strong>
                </p>
              ) : (
                <p className={styles.beta}>
                  Explore the entire Destiny 2 database.<br />Search by name or
                  item hash, or by chainable search expressions. See bottom of
                  page for terms.
                </p>
              )}
            </div>

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
              {items.map((item, index) => (
                <Item
                  onClick={this.onItemClick.bind(this, item)}
                  className={styles.item}
                  key={index}
                  supressTooltip={this.state.collectMode}
                  item={item}
                />
              ))}
            </div>

            <p className={styles.beta}>
              {fancySearchTerms.join(', ')}
              <br />
              <br />
              {DATA_SOURCES.map(d => `data:${d.name}`).join(', ')}
            </p>

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
                        data={this.defs}
                        item={data}
                        onItemClick={this.pushItem}
                      />
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>

          {collectMode &&
            collectSections && (
              <CollectionSidebar
                removeItem={this.removeItemFromCollection}
                className={styles.sidebar}
                sections={this.state.collectSections}
              />
            )}
        </div>
      </div>
    );
  }
}

export default DestinyAuthProvider(DataExplorer);
