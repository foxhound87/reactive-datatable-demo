import { types as t } from 'mobx-state-tree';
import Product from '../items/Product';
import ServiceCollectionHandler from '../../modules/reactive-datatable/src/extensions/ServiceCollectionHandler';

const ProductsCollection = t.model(
  'ProductsCollection', {
    data: t.maybeNull(t.array(Product)),
  },
);

export default t.compose(
  ServiceCollectionHandler,
  ProductsCollection,
);
