import Service from '../../Service';
import ProductsModel from '../../models/collections/Products';
import ProductsTable from '../../tables/ProductsTable';

export default class Products extends Service {

  constructor() {
    super();
    this.setup({
      type: 'collection',
      service: 'products',
      model: ProductsModel,
      table: ProductsTable,
      params: {
        all: true,
        role: 'admin',
        // relation: '...',
      },
      query: {
        $sort: {
          createdAt: -1,
        },
      },
    });
  }
}
