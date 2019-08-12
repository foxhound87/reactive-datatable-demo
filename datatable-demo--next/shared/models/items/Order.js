import { types as t } from 'mobx-state-tree';

import ServiceItemHandler from 'reactive-datatable/src/extensions/ServiceItemHandler';
import User from '@/shared/models/items/User';

const Order = t.model('Order', {
  _id: t.identifier,
  userId: t.string,
  products: t.array(t.string),
  amount: t.number,
  tax: t.number,
  discount: t.number,
  createdAt: t.string,
  updatedAt: t.string,
  user: t.maybeNull(t.late(() => User)),
})
  .views(self => ({
    get total() {
      const tax = ((self.amount / 100) * self.tax);
      const discount = (((self.amount + tax) / 100) * self.discount);
      return (self.amount + tax - discount).toFixed(2);
    },
  }));


export default t.compose(
  ServiceItemHandler,
  Order,
);
