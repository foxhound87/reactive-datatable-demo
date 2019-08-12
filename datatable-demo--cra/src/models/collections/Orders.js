import { types as t } from 'mobx-state-tree';
import Order from '../items/Order';
import ServiceCollectionHandler from '../../modules/reactive-datatable/src/extensions/ServiceCollectionHandler';

const OrdersCollection = t.model(
  'OrdersCollection', {
    data: t.maybeNull(t.array(Order)),
  },
);

export default t.compose(
  ServiceCollectionHandler,
  OrdersCollection,
);
