import * as ls from 'app/lib/ls';
import { setBulkFilters, setLanguage, setProfiles } from 'app/store/reducer';
import { getLastProfile } from 'app/lib/destiny';

const log = require('app/lib/log')('authProvider');

export default function preloadStore(store) {
  const prevFilters = ls.getFilters();
  if (prevFilters) {
    log('Dispatching previous filters', prevFilters);
    store.dispatch(setBulkFilters(prevFilters));
  }

  const authData = ls.getAuth();
  const profiles = ls.getProfiles();

  log('debug', { authData, profiles });

  if (authData && profiles) {
    const profile = getLastProfile(profiles);
    log('Dispaying previous profile', profile);
    store.dispatch(
      setProfiles({
        currentProfile: profile,
        allProfiles: profiles.profiles,
        isCached: true
      })
    );
  }

  store.dispatch(setLanguage(ls.getLanguage()));

  return store;
}
