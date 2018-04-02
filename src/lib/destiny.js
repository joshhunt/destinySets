import { sortBy } from 'lodash';

import { setUser } from 'app/lib/telemetry';
import * as ls from 'app/lib/ls';

const XUR_URL = 'https://api.destiny.plumbing/xur';

const log = require('app/lib/log')('http');

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

const PROFILE_COMPONENTS = [
  componentProfiles,
  componentVendorReceipts,
  componentProfileInventories,
  componentProfileCurrencies,
  componentCharacters,
  componentCharacterInventories,
  componentCharacterProgressions,
  componentCharacterRenderData,
  componentCharacterActivities,
  componentCharacterEquipment,
  componentItemInstances,
  componentItemObjectives,
  componentItemPerks,
  componentItemRenderData,
  componentItemStats,
  componentItemSockets,
  componentItemTalentGrids,
  componentItemCommonData,
  componentItemPlugStates,
  componentVendors,
  componentVendorCategories,
  componentVendorSales,
  componentKiosks
];

const VENDOR_COMPONENTS = [
  componentProfiles,
  componentVendorReceipts,
  componentProfileInventories,
  componentProfileCurrencies,
  componentCharacters,
  componentCharacterInventories,
  componentCharacterProgressions,
  componentCharacterRenderData,
  componentCharacterActivities,
  componentCharacterEquipment,
  componentItemInstances,
  componentItemObjectives,
  componentItemPerks,
  componentItemRenderData,
  componentItemStats,
  componentItemSockets,
  componentItemTalentGrids,
  componentItemCommonData,
  componentItemPlugStates,
  componentVendors,
  componentVendorCategories,
  componentVendorSales,
  componentKiosks
];

export function get(url, opts) {
  return fetch(url, opts).then(res => res.json());
}

export function getDestiny(_pathname, opts = {}, postBody) {
  const url = `https://www.bungie.net${_pathname}`;
  const { pathname } = new URL(url);

  const lsCacheKey = `__apiCache|${url}`;
  if (window.__CACHE_API) {
    const cached = localStorage.getItem(lsCacheKey);
    if (cached) {
      return Promise.resolve(JSON.parse(cached));
    }
  }

  const apiKey = process.env.REACT_APP_API_KEY;

  opts.headers = opts.headers || {};
  opts.headers['x-api-key'] = apiKey;

  if (window.AUTH_DATA) {
    opts.headers['Authorization'] = `Bearer ${window.AUTH_DATA.accessToken}`;
  }

  if (postBody) {
    opts.method = 'POST';
    opts.headers['Content-Type'] = 'application/json';
    opts.body =
      typeof postBody === 'string' ? postBody : JSON.stringify(postBody);
  }

  log(`REQUEST: ${pathname}`, opts);

  return get(url, opts).then(resp => {
    log(`RESPONSE: ${pathname}`, resp);

    if (resp.ErrorStatus === 'DestinyAccountNotFound') {
      return null;
    }

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

    const result = resp.Response || resp;

    if (window.__CACHE_API) {
      localStorage.setItem(lsCacheKey, JSON.stringify(result));
    }

    return result;
  });
}

export function getVendors(membership, characterId) {
  const { membershipType, membershipId } = membership;

  return getDestiny(
    `/Platform/Destiny2/${membershipType}/Profile/${membershipId}/Character/${
      characterId
    }/Vendors/?components=${VENDOR_COMPONENTS.join(',')}`
  ).catch(err => {
    console.error('Error fetching vendors for', {
      membershipType,
      membershipId,
      characterId
    });

    console.error(err);
    return null;
  });
}

export function getProfile({ membershipType, membershipId }) {
  return getDestiny(
    `/Platform/Destiny2/${membershipType}/Profile/${
      membershipId
    }/?components=${PROFILE_COMPONENTS.join(',')}`
  );
}

export function getExtendedProfile(ship) {
  let profile;
  return getProfile(ship)
    .then(_profile => {
      profile = _profile;

      return Promise.all(
        Object.keys(profile.characters.data).map(characterId => {
          return getVendors(ship, characterId);
        })
      );
    })
    .then(characterVendors => {
      profile.$vendors = { data: {} };
      Object.keys(profile.characters.data).forEach((characterId, index) => {
        profile.$vendors.data[characterId] = characterVendors[index];
      });

      return profile;
    });
}

export function getCurrentProfiles() {
  let bungieNetUser;

  return getDestiny('/Platform/User/GetMembershipsForCurrentUser/')
    .then(body => {
      bungieNetUser = body.bungieNetUser;

      setUser(bungieNetUser);

      return Promise.all(body.destinyMemberships.map(getExtendedProfile));
    })
    .then(profiles => {
      log('profiles:', profiles);
      const sortedProfiles = sortBy(
        profiles
          .filter(Boolean)
          .filter(profile => profile.profile.data.versionsOwned !== 0),
        profile => {
          return new Date(profile.profile.data.dateLastPlayed).getTime();
        }
      ).reverse();

      log('sortedProfiles:', sortedProfiles);

      return {
        profiles: sortedProfiles,
        bungieNetUser
      };
    });
}

export function getCurrentProfilesWithCache(cb) {
  const cached = ls.getProfiles();

  if (cached) {
    cb(null, cached);
  }

  getCurrentProfiles()
    .then(resp => {
      ls.saveProfiles(resp);
      cb(null, resp);
    })
    .catch(err => cb(err));
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

export function xur() {
  return get(XUR_URL).then(xurData => {
    const isLive =
      window.location.href.indexOf('forceXur') > -1 || xurData.isLive;
    return isLive
      ? { xurItems: xurData.itemHashes, xurLocation: xurData.location }
      : [];
  });
}
