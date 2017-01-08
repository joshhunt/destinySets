require('isomorphic-fetch');
const _ = require('lodash');

const strikeDropsSourceData = require('./strikeDrops.json');

function get(url, opts) {
  return fetch(url, opts).then(res => res.json());
}

const ARMOUR_DEFS_URL = 'https://destiny.plumbing/new/en/Armor.json';
const WEAPON_DEFS_URL = 'https://destiny.plumbing/new/en/Weapon.json';
const ACTIVITY_DEFS_URL = 'https://destiny.plumbing/new/en/DestinyActivityDefinition.json';
const DESTINATION_DEFS_URL = 'https://destiny.plumbing/new/en/DestinyDestinationDefinition.json';
const PLACE_DEFS_URL = 'https://destiny.plumbing/new/en/DestinyPlaceDefinition.json';
const ACTIVITY_TYPES_DEFS_URL = 'https://destiny.plumbing/new/en/DestinyActivityTypeDefinition.json';

const CLASSES = {
  0: 'Titan',
  1: 'Hunter',
  2: 'Warlock',
};

const promises = [
  get(ARMOUR_DEFS_URL),
  get(WEAPON_DEFS_URL),
  get(ACTIVITY_DEFS_URL),
  get(DESTINATION_DEFS_URL),
  get(PLACE_DEFS_URL),
  get(ACTIVITY_TYPES_DEFS_URL),
];

const destinationFallback = {};
const placeFallback = {};
const activityTypeFallback = {};

Promise.all(promises)
  .then((results) => {
    const [
      armourDefs,
      weaponDefs,
      activityDefs,
      destinationDefs,
      placeDefs,
      activityTypeDefs,
    ] = results;

    const itemDefs = _.extend({}, weaponDefs, armourDefs);

    const activities = _.mapValues(activityDefs, (activity) => {
      const cleaned = _.pick(activity, ['activityHash', 'activityName', 'icon', 'releaseIcon', 'pgcrImage']);
      const destination = destinationDefs[activity.destinationHash] || destinationFallback;
      const place = placeDefs[activity.placeHash] || placeFallback;
      const activityType = activityTypeDefs[activity.activityTypeHash] || activityTypeFallback;

      return _.extend(cleaned, {
        isClassified: activity.activityName === 'Classified',
        destinationName: destination.destinationName,
        destinationIcon: destination.icon,
        placeName: place.placeName,
        activityTypeName: activityType.activityTypeName,
      });
    });

    const dropLists = _(strikeDropsSourceData)
      .map((dropList) => {
        const baseActivity = activities[dropList.activityHash];

        const matchingActivities = _.values(activities).filter((activity) => {
          return activity.activityName === baseActivity.activityName;
        }).map((activity) => activity.activityHash);

        // mutate the activities
        matchingActivities.forEach((activityHash) => {
          const activity = activities[activityHash];
          activity.dropListID = dropList.id;
        });

        return {
          id: dropList.id,
          baseActivityHash: dropList.activityHash,
          items: dropList.items,
        }
      })
      .value();

    const strikeItemHashes = dropLists
      .reduce((acc, dropList) => {
        const newItems = dropList.items.filter(itemHash => !acc.includes(itemHash));

        return acc.concat(newItems);
      }, [])
      .reduce((acc, itemHash) => {
        const item = itemDefs[itemHash];
        const refinedItem = _.pick(item, [
          'itemName',
          'icon',
          'itemHash',
          'itemTypeName',
        ]);

        const className = CLASSES[item.classType];

        if (className && !refinedItem.itemTypeName.includes(className)) {
          refinedItem.itemTypeName = `${className} ${refinedItem.itemTypeName}`;
        }

        return _.extend({}, acc, {
          [item.itemHash]: refinedItem,
        });
      }, {});

    const data = {
      activities,
      dropLists: _.keyBy(dropLists, 'id'),
      strikeItemHashes,
    }

    require('fs').writeFileSync('activity-drop-data.json', JSON.stringify(data));
  })
  .catch(console.error.bind(console));
