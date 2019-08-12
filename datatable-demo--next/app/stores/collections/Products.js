import Service from '@/shared/Service';
import ProductsModel from '@/shared/models/collections/Products';
import ProductsTable from '@/app/tables/ProductsTable';

export default class Products extends Service {

  init() {
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
