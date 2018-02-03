import { keyBy } from 'lodash';
import gql from 'graphql-tag';

import graphql from './apollo';

export default function getItems(items) {
  const query = gql`
    query ItemsForSet($itemHashes: [ID]) {
      items(hashes: $itemHashes) {
        hash
        screenshot
        itemTypeName
        itemTypeDisplayName
        vendorIdentifier
        classType
        displayProperties {
          name
          description
          icon
        }
        inventory {
          tierTypeHash
        }
      }
    }
  `;

  const promise = graphql.query({
    query: query,
    variables: {
      itemHashes: items,
    },
  });

  promise.then(d => console.log(d));

  return promise.then(d => {
    return keyBy(
      d.data.items
        .filter(Boolean)
        .map(item => ({ ...item, hash: parseInt(item.hash, 10) })),
      'hash',
    );
  });
}
