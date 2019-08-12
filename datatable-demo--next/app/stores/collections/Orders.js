import Service from '@/shared/Service';
import OrdersModel from '@/shared/models/collections/Orders';
import OrdersTable from '@/app/tables/OrdersTable';

export default class Users extends Service {

  init() {
    this.setup({
      type: 'collection',
      service: 'orders',
      model: OrdersModel,
      table: OrdersTable,
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
