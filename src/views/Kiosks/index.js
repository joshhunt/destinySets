import React, { Component } from 'react';

import * as destiny from 'app/lib/destiny';
import DestinyAuthProvider from 'app/lib/DestinyAuthProvider';

import Header from 'app/components/Header';
import ActivityList from 'app/components/ActivityList';
import Loading from 'app/views/Loading';
import styles from './styles.styl';

const ALL_ITEMS = 'https://destiny.plumbing/en/items/All.json';
const KIOSK_EMBLEMS = 3301500998;
const KIOSK_SHADERS = 2420628997;
const KIOSK_SHIPS = 2244880194;
const KIOSK_SPARROWS = 44395194;

function processSaleItem(allItems, saleItem) {
  const itemDef = allItems[saleItem.item.itemHash];

  itemDef.owned = saleItem.failureIndexes.length === 0;
  itemDef.saleItem = saleItem;

  // if (!itemDef.owned) {
  //   itemsToObtain.push(saleItem.item.itemHash);
  // }

  return itemDef;
}

function processKiosk(kiosk, title, allItems) {
  const emblemSections = kiosk.saleItemCategories.map((cat, index) => {
    return {
      id: index,
      title: cat.categoryTitle,
      items: cat.saleItems.map(processSaleItem.bind(null, allItems)),
    };
  });

  return {
    title,
    sections: emblemSections,
  };
}

class Kiosk extends Component {
  state = {
    loading: true,
    vendorItems: [],
    selectedItems: [],
  }

  componentDidMount() {
    if (this.props.isAuthenticated) {
      this.getData();
    }
  }

  componentWillReceiveProps(newProps) {
    if (!this.props.isAuthenticated && newProps.isAuthenticated){
      this.getData();
    }
  }

  getData() {
    const promise = Promise.all([
      destiny.getVendor(KIOSK_EMBLEMS),
      destiny.getVendor(KIOSK_SHADERS),
      destiny.getVendor(KIOSK_SHIPS),
      destiny.getVendor(KIOSK_SPARROWS),
      destiny.get(ALL_ITEMS),
    ]);

    promise.then(([emblemKiosk, shadersKiosk, shipsKiosk, sparrowsKiosk, allItems]) => {
      this.setState({
        loading: false,
        kiosks: [
          processKiosk(emblemKiosk, "Emblems", allItems),
          processKiosk(shadersKiosk, "Shaders", allItems),
          processKiosk(shipsKiosk, "Ships", allItems),
          processKiosk(sparrowsKiosk, "Sparrows", allItems),
        ],
      })
    });
  }

  updateFilter() {}

  render() {
    if (this.state.loading) {
      return <Loading>Loading...</Loading>
    }

    return (
      <div className={styles.root}>
        <Header onFilterChange={this.updateFilter}/>

        { this.state.kiosks &&
          <ActivityList title="Kiosks" activities={this.state.kiosks} tinyItems={true}/>
        }
      </div>
    );
  }
}

export default DestinyAuthProvider(Kiosk);
