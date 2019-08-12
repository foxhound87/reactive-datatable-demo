import { types as t } from 'mobx-state-tree';

import ServiceItemHandler from '../../modules/reactive-datatable/src/extensions/ServiceItemHandler';
import User from '../items/User';

const UserProfile = t.model('UserProfile', {
  _id: t.identifier,
  userId: t.string,
  firstName: t.string,
  lastName: t.string,
  country: t.string,
  phone: t.string,
  createdAt: t.string,
  updatedAt: t.string,
  user: t.maybeNull(t.late(() => User)),
});

export default t.compose(
  ServiceItemHandler,
  UserProfile,
);
