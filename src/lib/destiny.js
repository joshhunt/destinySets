const API_KEY = __DESTINY_API_KEY__;

const CACHE_ENABLED = false;

export function get(url, opts) {
  return fetch(url, opts).then(res => res.json());
}

export function getDestiny(_url, opts = {}, postBody) {
  const url = _url + '?definitions=false';

  const lsKey = `requestCache$$${url}`;
  if (CACHE_ENABLED) {
    const lsItem = localStorage.getItem(lsKey)
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
    opts.body = (typeof postBody === 'string') ? postBody : JSON.stringify(postBody);
  }

  return get(url, opts)
    .then((resp) => {
      if (resp.ErrorCode !== 1) {
        throw new Error('Bungie API Error ' + resp.ErrorStatus + ' - ' + resp.Message);
      }

      if (CACHE_ENABLED) {
        localStorage.setItem(lsKey, JSON.stringify(resp));
      }

      return resp.Response || resp;
    });
}

export function getCurrentBungieAccount() {
  return getDestiny('https://www.bungie.net/Platform/User/GetCurrentBungieAccount/')
}

export function getAccountSummary(account) {
}

export function getAllInventoryItems() {
  return getCurrentBungieAccount()
    .then((body) => {
      const account = body.destinyAccounts[0];
      const membershipType = account.userInfo.membershipType;
      const destinyMembershipId = account.userInfo.membershipId;

      const inventoryPromises = account.characters.map((char) => {
        const characterId = char.characterId;
        const url = `https://www.bungie.net/Platform/Destiny/${membershipType}/Account/${destinyMembershipId}/Character/${characterId}/Inventory/Summary/`;

        return getDestiny(url)
      });

      inventoryPromises.push(
        getDestiny( `https://www.bungie.net/Platform/Destiny/${membershipType}/MyAccount/Vault/Summary/`)
      );

      return Promise.all(inventoryPromises);
    })
    .then((inventories) => {
      console.log(inventories);

      const allItems = inventories.reduce((acc, body) => {
        const items = body.data.items.map(item => item.itemHash);
        return acc.concat(items);
      }, []);

      return allItems;
    });
}
