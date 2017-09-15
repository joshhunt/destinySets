import React, { Component } from 'react';

import * as destiny from 'app/lib/destinyLegacy';
import DestinyAuthProvider from 'app/lib/DestinyAuthProvider';

import Header from 'app/components/Header';
import Footer from 'app/components/Footer';
import ActivityList from 'app/components/ActivityList';
import Loading from 'app/views/Loading';
import LoginUpsell from 'app/components/LoginUpsell';

import styles from './styles.styl';

const ALL_ITEMS = 'https://destiny.plumbing/en/items/All.json';
const KIOSK_EMBLEMS = 3301500998;
const KIOSK_SHADERS = 2420628997;
const KIOSK_SHIPS = 2244880194;
const KIOSK_SPARROWS = 44395194;
const VENDOR_OUTFITTER = 134701236;
const VENDOR_SHIPWRIGHT = 459708109;

function processSaleItem(allItems, isVendor, saleItem) {
  const itemDef = allItems[saleItem.item.itemHash];

  if (!isVendor) {
    itemDef.owned = saleItem.failureIndexes.length === 0;
  }

  itemDef.saleItem = saleItem;

  return itemDef;
}

function processKiosk(kiosk, title, allItems, isVendor = false) {
  const emblemSections = kiosk.saleItemCategories.map((cat, index) => {
    return {
      id: index,
      title: cat.categoryTitle,
      items: cat.saleItems.map(processSaleItem.bind(null, allItems, isVendor)),
    };
  });

  return {
    title,
    sections: emblemSections,
  };
}

class KioskLegacy extends Component {
  state = {
    loading: true,
    vendorItems: [],
    selectedItems: [],
  };

  componentDidMount() {
    if (this.props.isAuthenticated) {
      this.getData();
    }
  }

  componentWillReceiveProps(newProps) {
    if (!this.props.isAuthenticated && newProps.isAuthenticated) {
      this.getData();
    }
  }

  getData() {
    const promise = Promise.all([
      destiny.getVendor(KIOSK_EMBLEMS),
      destiny.getVendor(KIOSK_SHADERS),
      destiny.getVendor(KIOSK_SHIPS),
      destiny.getVendor(KIOSK_SPARROWS),
      destiny.getVendor(VENDOR_OUTFITTER),
      destiny.getVendor(VENDOR_SHIPWRIGHT),
      destiny.get(ALL_ITEMS),
    ]);

    promise.then(data => {
      const [
        emblemKiosk,
        shadersKiosk,
        shipsKiosk,
        sparrowsKiosk,
        outfitterVendor,
        shipwrightVendor,
        allItems,
      ] = data;

      const kiosks = [
        processKiosk(emblemKiosk, 'Emblems', allItems),
        processKiosk(shadersKiosk, 'Shaders', allItems),
        processKiosk(shipsKiosk, 'Ships', allItems),
        processKiosk(sparrowsKiosk, 'Sparrows', allItems),
      ];

      const _vendors = [
        processKiosk(
          outfitterVendor,
          'Eva Levante, Guardian Outfitter',
          allItems,
          true
        ),
        processKiosk(
          shipwrightVendor,
          'Amanda Holliday, Shipwright',
          allItems,
          true
        ),
      ];

      const itemsToObtain = [];
      kiosks.forEach(({ sections }) => {
        sections.forEach(({ items }) => {
          items.forEach(item => {
            if (!item.owned) {
              itemsToObtain.push(item.itemHash);
            }
          });
        });
      });

      const itemsForSale = [];
      const vendors = _vendors.map(vendor => {
        vendor.sections = vendor.sections
          .map(section => {
            section.items = section.items
              .map(item => {
                if (itemsToObtain.includes(item.itemHash)) {
                  itemsForSale.push(item.itemHash);
                  return item;
                }

                return false;
              })
              .filter(Boolean);

            return section;
          })
          .filter(section => section.items.length > 0);

        return vendor;
      });

      kiosks.forEach(({ sections }) => {
        sections.forEach(({ items }) => {
          items.forEach(item => {
            item.forSale = itemsForSale.includes(item.itemHash);
          });
        });
      });

      this.setState({ loading: false, kiosks, vendors });
    });
  }

  updateFilter() {}

  render() {
    if (!this.props.authLoaded) {
      return <Loading>Loading...</Loading>;
    }

    if (this.props.authLoaded && !this.props.isAuthenticated) {
      // TODO: remove duplication with below
      return (
        <div>
          <Header onFilterChange={this.updateFilter} legacy={true} />

          <LoginUpsell>
            Track kiosk completion and missing items for sale, plus more for
            raids and strikes.
          </LoginUpsell>
        </div>
      );
    }

    if (this.state.loading) {
      return (
        <Loading>
          <div>Loading items...</div>
          <div style={{ color: '#bdc3c7', fontSize: '.9em' }}>
            This might take a while.
          </div>
        </Loading>
      );
    }

    return (
      <div className={styles.root}>
        <Header onFilterChange={this.updateFilter} />

        {this.state.vendors && (
          <ActivityList
            title="Missing Items For Sale"
            activities={this.state.vendors}
            tinyItems={true}
          />
        )}

        <hr />

        {this.state.kiosks && (
          <ActivityList
            title="Kiosks"
            activities={this.state.kiosks}
            tinyItems={true}
          />
        )}

        <Footer />
      </div>
    );
  }
}

export default DestinyAuthProvider(KioskLegacy);
