const API_KEY = 'f6de961e2a2041f9b3fd1a6c4dddd05c';

const CACHE_ENABLED = false;

export function get(url, opts) {
  return fetch(url, opts).then(res => res.json());
}

export function getDestiny(url, opts = {}, postBody) {
  const shouldCache = CACHE_ENABLED && opts._cache;

  const lsKey = `requestCache$$${url}`;
  if (shouldCache) {
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

      if (shouldCache) {
        localStorage.setItem(lsKey, JSON.stringify(resp));
      }

      return resp;
    });
}

export function getAllInventoryItems() {
  return getDestiny('https://www.bungie.net/Platform/User/GetCurrentBungieAccount/', { _cache: true })
    .then((data) => {
      console.log(data);
      if (data.Message !== 'Ok') {
        console.error(data);
        throw new Error('API Error - ' + data.Message);
      }

      const account = data.Response.destinyAccounts[0];
      const membershipType = account.userInfo.membershipType;
      const destinyMembershipId = account.userInfo.membershipId;

      const inventoryPromises = account.characters.map((char) => {
        const characterId = char.characterId;
        const url = `https://www.bungie.net/Platform/Destiny/${membershipType}/Account/${destinyMembershipId}/Character/${characterId}/Inventory/Summary/`;

        return getDestiny(url, { _cache: true })
      });

      inventoryPromises.push(
        getDestiny( `https://www.bungie.net/Platform/Destiny/${membershipType}/MyAccount/Vault/Summary/`, { _cache: true })
      );

      return Promise.all(inventoryPromises);
    })
    .then((inventories) => {
      console.log(inventories);

      const allItems = inventories.reduce((acc, { Response }) => {
        const items = Response.data.items.map(item => item.itemHash);
        return acc.concat(items);
      }, []);

      return allItems;
    });
}
