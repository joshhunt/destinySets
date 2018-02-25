function mergeInstancedItem(_allItems, item, itemComponents, extraData = {}) {
  const allItems = { ..._allItems };

  if (!allItems[item.itemHash]) {
    allItems[item.itemHash] = [];
  }

  const instancedItem = {
    ...item,
    ...extraData,
    $instanceData: itemComponents[item.itemInstanceId]
  };

  allItems[item.itemHash].push(instancedItem);

  return allItems;
}

function collectKioskItems(kiosks, vendorDefs, _allItems, extraData, statTrackData) {
  let allItems = _allItems;

  Object.keys(kiosks).forEach(vendorHash => {
    const vendor = vendorDefs[vendorHash];
    const kiosk = kiosks[vendorHash];

    kiosk.forEach(kioskEntry => {
      const vendorItem = vendor.itemList.find(
        i => i.vendorItemIndex === kioskEntry.index
      );

      if (!vendorItem) {
        console.error(
          `Was not able to find vendorItem for kiosk ${
            vendorHash
          } / kioskEntry.index ${kioskEntry.index}`
        );

        return null;
      }

      if (!kioskEntry.canAcquire) {
        return null;
      }

      if (kioskEntry.flavorObjective) {
        statTrackData[vendorItem.itemHash] = {
          itemHash: vendorItem.itemHash,
          $instanceData: kioskEntry
        }
      }

      allItems = mergeInstancedItem(
        allItems,
        { itemHash: vendorItem.itemHash },
        {},
        extraData
      );
    });
  });

  return allItems;
}

function collectItemsFromKiosks(profile, vendorDefs, _allItems, statTrackData) {
  const { characterKiosks, profileKiosks } = profile;
  let allItems = _allItems;

  allItems = collectKioskItems(
    profileKiosks.data.kioskItems,
    vendorDefs,
    allItems,
    {
      $location: 'profileKiosk'
    },
    statTrackData
  );

  Object.keys(characterKiosks.data).forEach(characterHash => {
    const kiosk = characterKiosks.data[characterHash];
    allItems = collectKioskItems(kiosk.kioskItems, vendorDefs, allItems, {
      $characterHash: characterHash,
      $location: 'characterKiosk'
    }, statTrackData);
  });

  // return profileKioskItems.concat(charKioskItems);

  return allItems;
}

export default function collectInventory(profile, vendorDefs) {
  const {
    characterInventories,
    profileInventory,
    characterEquipment,
    itemComponents
  } = profile;

  let allItems = {};
  const plugData = {};
  let statTrackData = {};

  Object.values(profile.$vendors).forEach(vendors => {
    Object.values(vendors.itemComponents).forEach(itemComponents => {
      Object.values(itemComponents.sockets).forEach(socket => {
        Object.values(socket).forEach(ss => {
          Object.values(ss.sockets).forEach(sss => {
            if (!sss.reusablePlugs) {
              return;
            }
            Object.values(sss.reusablePlugs).forEach(plug => {
              if (plug.canInsert) {
                allItems[plug.plugItemHash] = [
                  {
                    itemHash: plug.plugItemHash,
                    $location: '$vendor',
                    $instanceData: [plug]
                  }
                ];
              }
            });
          });
        });
      });
    });
  });

  Object.keys(profile.itemComponents.sockets.data).forEach(instanceId => {
    const { sockets } = profile.itemComponents.sockets.data[instanceId];
    sockets.forEach(socket => {
      if (socket.reusablePlugs) {
        socket.reusablePlugs.forEach(itemPlug => {
          plugData[itemPlug.plugItemHash] = {
            itemHash: itemPlug.plugItemHash,
            $hostItemInstanceHash: instanceId,
            $instanceData: itemPlug
          };

          if (itemPlug.canInsert) {
            allItems[itemPlug.plugItemHash] = [
              {
                itemHash: itemPlug.plugItemHash,
                $hostItemInstanceHash: instanceId,
                $location: '$reusablePlugHashes',
                $instanceData: [itemPlug]
              }
            ];
          }
        });
      }
    });
  });

  Object.keys(characterInventories.data).forEach(characterHash => {
    const { items } = characterInventories.data[characterHash];
    items.forEach(item => {
      allItems = mergeInstancedItem(
        allItems,
        item,
        itemComponents.instances.data,
        {
          $characterHash: characterHash,
          $location: 'characterInventory'
        }
      );
    });
  });

  Object.keys(characterEquipment.data).forEach(characterHash => {
    const { items } = characterEquipment.data[characterHash];
    items.forEach(item => {
      allItems = mergeInstancedItem(
        allItems,
        item,
        itemComponents.instances.data,
        {
          $characterHash: characterHash,
          $location: 'characterEquipment'
        }
      );
    });
  });

  profileInventory.data.items.forEach(item => {
    allItems = mergeInstancedItem(
      allItems,
      item,
      itemComponents.instances.data,
      { $location: 'profileInventory' }
    );
  });

  if (vendorDefs) {
    allItems = collectItemsFromKiosks(profile, vendorDefs, allItems, statTrackData);

  }

  return { inventory: allItems, plugData, statTrackData };
}
