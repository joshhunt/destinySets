import * as ls from 'app/lib/ls';
import { setBulkFilters, setLanguage, setProfiles } from 'app/store/reducer';
import { getLastProfile } from 'app/lib/destiny';

const log = require('app/lib/log')('authProvider');

export default function preloadStore(store) {
  const prevFilters = ls.getFilters();
  if (prevFilters) {
    store.dispatch(setBulkFilters(prevFilters));
  }

  const authData = ls.getAuth();
  const profiles = ls.getProfiles();

  if (authData && profiles) {
    const profile = getLastProfile(profiles);
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
