const API_KEY = __DESTINY_API_KEY__;

const CACHE_ENABLED = false;

const PLATFORMS = {
  0: 'None',
  1: 'TigerXbox',
  2: 'TigerPsn',
  4: 'TigerBlizzard',
  10: 'TigerDemon',
  254: 'BungieNext',
  [-1]: 'All',
};

export function get(url, opts) {
  return fetch(url, opts).then(res => res.json());
}

export function getDestiny(_url, opts = {}, postBody) {
  const url = `${_url}?definitions=false&t=${Date.now()}`;

  const lsKey = `requestCache$$${url}`;
  if (CACHE_ENABLED) {
    const lsItem = localStorage.getItem(lsKey);
    if (lsItem) {
      return Promise.resolve(JSON.parse(lsItem));
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

  console.info('[BNET REQUEST]', url, opts);

  return get(url, opts).then(resp => {
    if (resp.ErrorCode !== 1) {
      throw new Error(
        'Bungie API Error ' + resp.ErrorStatus + ' - ' + resp.Message
      );
    }

    if (CACHE_ENABLED) {
      localStorage.setItem(lsKey, JSON.stringify(resp));
    }

    return resp.Response || resp;
  });
}

export function log(prom) {
  prom.then(result => console.log(result)).catch(err => console.error(err));
}

export function dev(...args) {
  log(getDestiny(...args));
}

export function getAccountSummary({ membershipType, membershipId }) {
  return getDestiny(
    `https://www.bungie.net/Platform/Destiny/${membershipType}/Account/${membershipId}/Summary/`
  ).then(({ data }) => data);
}

export function getCurrentBungieAccount() {
  return getDestiny(
    'https://www.bungie.net/Platform/User/GetMembershipsForCurrentUser/'
  ).then(body => {
    const lastPlayedAccount = body.destinyMemberships.sort(
      (accountA, accountB) => {
        return new Date(accountA.lastPlayed) - new Date(accountB.lastPlayed);
      }
    )[0];

    // lastPlayedAccount.bungieNetUser = body.bungieNetUser;

    window.lastPlayedAccount = lastPlayedAccount;

    return getAccountSummary(lastPlayedAccount);
  });
}

export function getAllInventoryItems(destinyAccount) {
  console.log('getAllInventoryItems');
  const accountPromise = destinyAccount
    ? Promise.resolve(destinyAccount)
    : getCurrentBungieAccount();

  return accountPromise
    .then(account => {
      const membershipType = account.membershipType;
      const destinyMembershipId = account.membershipId;

      const inventoryPromises = account.characters.map(char => {
        const characterId = char.characterBase.characterId;
        const url = `https://www.bungie.net/Platform/Destiny/${membershipType}/Account/${destinyMembershipId}/Character/${characterId}/Inventory/Summary/`;

        return getDestiny(url);
      });

      inventoryPromises.push(
        getDestiny(
          `https://www.bungie.net/Platform/Destiny/${membershipType}/MyAccount/Vault/Summary/`
        )
      );

      return Promise.all(inventoryPromises);
    })
    .then(inventories => {
      const allItems = inventories.reduce((acc, body) => {
        const items = body.data.items.map(item => item.itemHash);
        return acc.concat(items);
      }, []);

      return allItems;
    });
}

export function getVendor(vendorHash) {
  const accountPromise = getCurrentBungieAccount();

  return accountPromise
    .then(account => {
      const membershipType = account.userInfo.membershipType;
      const characterId = account.characters[0].characterId; // TODO: Only first character?

      const url = `https://www.bungie.net/Platform/Destiny/${membershipType}/MyAccount/Character/${characterId}/Vendor/${vendorHash}/Metadata/`;
      return getDestiny(url);
    })
    .then(({ data }) => {
      return data.vendor;
    });
}
