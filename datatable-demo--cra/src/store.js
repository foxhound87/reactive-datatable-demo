import { store } from 'rfx-core';
import { configure } from 'mobx';

// app stores
// import ui from './stores/UI';
// import auth from './stores/Auth';
import extensions from './stores/Extensions';

// items stores
import User from './stores/items/User';
import UserProfile from './stores/items/UserProfile';

// collections stores
import Users from './stores/collections/Users';
import UsersProfiles from './stores/collections/UsersProfiles';
import Orders from './stores/collections/Orders';

/**
  Enables MobX strict mode globally.
  In strict mode, it is not allowed to
  change any state outside of an action
 */
configure({
  enforceActions: 'always',
});

class items {
  User = new User();
  UserProfile = new UserProfile();
}

class collections {
  Users = new Users();
  UsersProfiles = new UsersProfiles();
  Orders = new Orders();
}

/**
  Stores
*/
export default store
  .setup({
    // ui,
    // auth,
    items,
    collections,
    extensions,
  });
