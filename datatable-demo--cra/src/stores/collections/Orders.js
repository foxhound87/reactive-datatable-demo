import Service from '../../Service';
import OrdersModel from '../../models/collections/Orders';
import OrdersTable from '../../tables/OrdersTable';

export default class Users extends Service {

  constructor() {
    super();
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
