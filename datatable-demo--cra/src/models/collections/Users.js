import { types as t } from 'mobx-state-tree';
import User from '../items/User';
import ServiceCollectionHandler from '../../modules/reactive-datatable/src/extensions/ServiceCollectionHandler';

const UsersCollection = t.model(
  'UsersCollection', {
    data: t.maybeNull(t.array(User)),
  },
)
  .actions(self => ({

    afterCreate: () =>
      self.on('created', self.unshift),

    unshift: resource =>
      self.data.unshift(resource),

  }));

export default t.compose(
  ServiceCollectionHandler,
  UsersCollection,
);
