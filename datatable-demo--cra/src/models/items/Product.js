import { types as t } from 'mobx-state-tree';

import ServiceItemHandler from '../../modules/reactive-datatable/src/extensions/ServiceItemHandler';

const Product = t.model('Product', {
  _id: t.identifier,
  slug: t.string,
  title: t.string,
  name: t.string,
  details: t.string,
  description: t.string,
  price: t.number,
  stock: t.number,
  featured: t.boolean,
  type: t.array(t.string),
  variation: t.array(t.string),
  createdAt: t.string,
  updatedAt: t.string,
});


export default t.compose(
  ServiceItemHandler,
  Product,
);
