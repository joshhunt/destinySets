import { createSelector } from 'reselect';

import {
  itemDefsSelector,
  itemHashPropSelector,
  objectiveDefsSelector,
  objectiveInstancesSelector
} from 'app/store/selectors';

export const makeItemDefSelector = () => {
  return createSelector(
    itemDefsSelector,
    itemHashPropSelector,
    (itemDefs, itemHash) => {
      return itemDefs ? itemDefs[itemHash] : null;
    }
  );
};

function calcObjectiveCompletion(objectiveInstances, item, objectiveDefs) {
  const objectives = item.objectives.objectiveHashes.map(
    hash => objectiveInstances[hash]
  );

  if (!objectiveDefs) {
    return 0;
  }

  const eachCompletionIsWorth = 1 / objectives.length;

  const completion = objectives.reduce((acc, objective) => {
    if (!objective) {
      return acc;
    }

    const objectiveDef = objectiveDefs[objective.objectiveHash];

    if (!objectiveDef) {
      return acc;
    }

    const completionValue = objectiveDef.completionValue;
    const percentCompleted = (objective.progress || 0) / completionValue;

    if (objective && objective.complete) {
      return acc + eachCompletionIsWorth;
    }

    return (
      acc +
      Math.min(percentCompleted * eachCompletionIsWorth, eachCompletionIsWorth)
    );
  }, 0);

  return completion;
}

export const makeItemObjectiveProgressSelector = () => {
  return createSelector(
    makeItemDefSelector(),
    objectiveDefsSelector,
    objectiveInstancesSelector,
    (itemDef, objectiveDefs, objectiveInstances) => {
      if (!itemDef || !objectiveDefs || !objectiveInstances) {
        return 0;
      }

      const objectiveHashes =
        itemDef.objectives && itemDef.objectives.objectiveHashes;

      if (!objectiveHashes) {
        return 0;
      }

      return calcObjectiveCompletion(
        objectiveInstances,
        itemDef,
        objectiveDefs
      );
    }
  );
};
