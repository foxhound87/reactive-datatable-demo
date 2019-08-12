import { types as t } from 'mobx-state-tree';
import { createTransformer } from 'mobx-utils';
import _ from 'lodash';

import ServiceItemHandler from '../../modules/reactive-datatable/src/extensions/ServiceItemHandler';
import UserProfile from '../items/UserProfile';

const User = t.model('User', {
  _id: t.identifier,
  email: t.string,
  isVerified: t.boolean,
  createdAt: t.string,
  updatedAt: t.string,
  roles: t.array(t.string),
  profile: t.maybeNull(t.late(() => UserProfile)),
})
  .views(self => ({
    hasRoles: createTransformer(roles =>
      (_.intersection(self.roles, roles).length === roles.length)),

    // get profileFullName() {
    //   return self.profile && [self.profile.firstName, self.profile.lastName].join(' ');
    // },
  }));

export default t.compose(
  ServiceItemHandler,
  User,
);
