import { types as t } from 'mobx-state-tree';
import UserProfile from '../items/UserProfile';
import ServiceCollectionHandler from '../../modules/reactive-datatable/src/extensions/ServiceCollectionHandler';

const ProfilesCollection = t.model(
  'UsersProfilesCollection', {
    data: t.maybeNull(t.array(UserProfile)),
  },
);

export default t.compose(
  ServiceCollectionHandler,
  ProfilesCollection,
);
