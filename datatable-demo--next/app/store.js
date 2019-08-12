import { store, extend } from 'rfx-core';
import { configure } from 'mobx';

// app stores
import ui from '@/app/stores/UI';
import auth from '@/app/stores/Auth';
import extensions from '@/app/stores/Extensions';

// items stores
import User from '@/app/stores/items/User';
import UserProfile from '@/app/stores/items/UserProfile';

// collections stores
import Users from '@/app/stores/collections/Users';
import UsersProfiles from '@/app/stores/collections/UsersProfiles';
import Orders from '@/app/stores/collections/Orders';

/**
  Enables MobX strict mode globally.
  In strict mode, it is not allowed to
  change any state outside of an action
 */
configure({
  enforceActions: 'always',
});

@extend({
  User,
  UserProfile,
}) class items {}

@extend({
  Users,
  UsersProfiles,
  Orders,
}) class collections {}

/**
  Stores
*/
export default store
  .setup({
    ui,
    auth,
    items,
    collections,
    extensions,
  });
