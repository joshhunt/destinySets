const API_KEY = __DESTINY_API_KEY__;

const CACHE_ENABLED = false;

const DESTINY_2 = 1;

const componentNone = 0;
const componentProfiles = 100;
const componentVendorReceipts = 101;
const componentProfileInventories = 102;
const componentProfileCurrencies = 103;
const componentCharacters = 200;
const componentCharacterInventories = 201;
const componentCharacterProgressions = 202;
const componentCharacterRenderData = 203;
const componentCharacterActivities = 204;
const componentCharacterEquipment = 205;
const componentItemInstances = 300;
const componentItemObjectives = 301;
const componentItemPerks = 302;
const componentItemRenderData = 303;
const componentItemStats = 304;
const componentItemSockets = 305;
const componentItemTalentGrids = 306;
const componentItemCommonData = 307;
const componentItemPlugStates = 308;
const componentVendors = 400;
const componentVendorCategories = 401;
const componentVendorSales = 402;
const componentKiosks = 500;

const COMPONENTS = [
  componentProfiles,
  componentProfileInventories,
  componentCharacters,
  componentCharacterInventories,
  componentCharacterActivities,
  componentCharacterEquipment,
  componentItemInstances,
  componentItemCommonData,
  componentKiosks,
];

export function get(url, opts) {
  return fetch(url, opts).then(res => res.json());
}

export function getDestiny(_pathname, opts = {}, postBody) {
  const url = `https://www.bungie.net${_pathname}`;
  const { pathname } = new URL(url);

  const lsKey = `requestCache$$${url}`;
  if (CACHE_ENABLED) {
    const lsItem = localStorage.getItem(lsKey);
    if (lsItem) {
      const resp = JSON.parse(lsItem);
      const result = resp.Response || resp;
      return Promise.resolve(result);
    }
  }

  opts.headers = opts.headers || {};
  opts.headers['x-api-key'] = API_KEY;

  if (window.AUTH_DATA) {
    opts.headers['Authorization'] = `Bearer ${window.AUTH_DATA.accessToken}`;
  }

  if (postBody) {
    opts.method = 'POST';
    opts.headers['Content-Type'] = 'application/json';
    opts.body =
      typeof postBody === 'string' ? postBody : JSON.stringify(postBody);
  }

  console.info(`[REQUEST]%c ${pathname}`, 'color: blue', opts);

  return get(url, opts).then(resp => {
    if (resp.ErrorCode !== 1) {
      throw new Error(
        'Bungie API Error ' +
          resp.ErrorStatus +
          ' - ' +
          resp.Message +
          '\nURL: ' +
          url
      );
    }

    if (CACHE_ENABLED) {
      localStorage.setItem(lsKey, JSON.stringify(resp));
    }

    const result = resp.Response || resp;

    console.info(`[RESULT]%c  ${pathname}`, 'color: blue', result);

    return result;
  });
}

export function log(prom) {
  prom.then(result => console.log(result)).catch(err => console.error(err));
}

export function dev(...args) {
  log(getDestiny(...args));
}

export function getProfile({ membershipType, membershipId }, components) {
  return getDestiny(
    `/Platform/Destiny2/${membershipType}/Profile/${membershipId}/?components=${components.join(
      ','
    )}`
  );
}

export function getCurrentProfiles() {
  return getDestiny('/Platform/User/GetMembershipsForCurrentUser/')
    .then(body => {
      return Promise.all(
        body.destinyMemberships.map(ship => getProfile(ship, COMPONENTS))
      );
    })
    .then(profiles => {
      return profiles.filter(
        profile => profile.profile.data.versionsOwned === DESTINY_2
      );
    });
}

export function getCurrentProfile() {
  return getCurrentProfiles().then(profiles => {
    const latestChars = profiles.sort((profileA, profileB) => {
      return (
        new Date(profileB.profile.data.dateLastPlayed) -
        new Date(profileA.profile.data.dateLastPlayed)
      );
    })[0];

    // TODO: validate that all fields got their data

    return latestChars;
  });
}

export function collectItemsFromProfile(profile) {
  const { characterInventories, profileInventory } = profile;

  const charItems = Object.values(
    characterInventories.data
  ).reduce((acc, { items }) => {
    return acc.concat(items.map(item => item.itemHash));
  }, []);

  const profileItems = profileInventory.data.items.map(item => item.itemHash);

  return charItems.concat(profileItems);
}
