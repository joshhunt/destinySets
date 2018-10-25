import { createSelector } from 'reselect';

import { makeItemSelector, itemDefsSelector } from 'app/store/selectors';

export const makePerksSelector = () =>
  createSelector(makeItemSelector(), itemDefsSelector, (item, itemDefs) => {
    if (!item) {
      return {};
    }

    const socketCategory =
      item &&
      item.sockets &&
      item.sockets.socketCategories.find(
        ({ socketCategoryHash }) => (socketCategoryHash = 4241085061)
      );

    const perks =
      socketCategory &&
      socketCategory.socketIndexes
        .map(socketIndex => item.sockets.socketEntries[socketIndex])
        .map(socket => {
          return {
            mainPerk: itemDefs[socket.singleInitialItemHash],
            altPerks: socket.reusablePlugItems
              .filter(
                ({ plugItemHash }) =>
                  socket.singleInitialItemHash !== plugItemHash
              )
              .map(({ plugItemHash }) => ({
                plugItem: itemDefs[plugItemHash]
              })),

            randomPerks:
              socket.randomizedPlugItems.length > 0 &&
              socket.randomizedPlugItems
                .map(randomRoll => itemDefs[randomRoll.plugItemHash])
                .filter(Boolean)
          };
        });

    return {
      socketCategory,
      perks
    };
  });
