import { keyBy, chain } from 'lodash';
import gql from 'graphql-tag';

import { getItemsFromCache, storeItemsInCache } from 'app/lib/manifestData';
import md5 from 'app/lib/md5';
import graphql from 'app/lib/apollo';

const log = require('app/lib/log')('itemStore');

const ITEM_FIELDS = `
  hash
  itemTypeName
  screenshot
  itemTypeDisplayName
  vendorIdentifier
  classType
  itemCategoryHashes
  redacted
  displayProperties {
    name
    description
    icon
  }
  inventory {
    tierTypeName
    tierTypeHash
    stackUniqueLabel
  }
  plug {
    plugCategoryIdentifier
  }
`;

export function getItemsForSet(setData) {
  const data = {
    items: [],
    queries: [],
  };

  setData.forEach(category => {
    category.sets.forEach(set => {
      set.fancySearchTerm && data.queries.push(set.fancySearchTerm);

      set.sections.forEach(section => {
        data.items = data.items.concat(section.items);
        section.fancySearchTerm && data.queries.push(section.fancySearchTerm);
      });
    });
  });

  return Promise.all([
    data.items.length ? getItemsByHashes(data.items) : Promise.resolve({}),
    data.queries.length
      ? getItemsForQueries(data.queries)
      : Promise.resolve({}),
  ]).then(([hashItems, queryItems]) => {
    const allItems = {
      ...hashItems,
      ...queryItems,
    };

    return allItems;
  });
}

export function getItemsForQueries(queries) {
  const query = gql`
    query getItemsForQueries($queries: [String]) {
      itemQueries(queries: $queries) {
        ${ITEM_FIELDS}
      }
    }
  `;

  const promise = graphql.query({
    query: query,
    variables: {
      queries: queries,
    },
  });

  return promise.then(d => {
    return keyBy(
      d.data.itemQueries
        .filter(Boolean)
        .map(item => ({ ...item, hash: parseInt(item.hash, 10) })),
      'hash',
    );
  });
}

export default function getItemsByHashes(items) {
  const queryHash = md5(ITEM_FIELDS);
  let cachedItems;

  log(`Requsting ${Object.keys(items).length} items`);
  log(`queryHash is ${queryHash}`);

  return getItemsFromCache(queryHash)
    .then(_cachedItems => {
      cachedItems = _cachedItems;

      log(`Recieved ${Object.keys(cachedItems).length} items from cache`);

      const hashesToFetch = items.filter(itemHash => {
        return !cachedItems[itemHash];
      });

      if (hashesToFetch.length === 0) {
        log('All items are cached, no need to fetch any');
        return cachedItems;
      } else {
        log(`Fetching ${hashesToFetch.length} uncached items`, hashesToFetch);
      }

      const query = gql`
        query getItemsByHashes($itemHashes: [ID]) {
          items(hashes: $itemHashes) {
            ${ITEM_FIELDS}
          }
      }`;

      return graphql.query({
        query: query,
        variables: { itemHashes: items },
      });
    })
    .then(result => {
      // Cached items
      if (!result.data) {
        return result;
      }

      return chain(result.data.items)
        .filter(Boolean)
        .map(item => ({ ...item, hash: parseInt(item.hash, 10) }))
        .keyBy('hash')
        .value();
    })
    .then(itemDefs => {
      storeItemsInCache(queryHash, itemDefs)
        .then(() => log('Stored items in cache cb'))
        .catch(err => console.error('Error storing items in cache db', err));

      return { ...cachedItems, ...itemDefs };
    });
}
