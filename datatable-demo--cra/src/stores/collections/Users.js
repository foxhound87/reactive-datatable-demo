import Service from '../../Service';
import UsersModel from '../../models/collections/Users';
import UsersTable from '../../tables/UsersTable';
import UserForm from '../../forms/UserForm';

export default class Users extends Service {

  constructor() {
    super();
    this.setup({
      type: 'collection',
      service: 'users',
      model: UsersModel,
      table: UsersTable,
      form: UserForm,
      params: {
        all: true,
        role: 'admin',
        relation: 'profile',
      },
      query: {
        $sort: {
          createdAt: -1,
        },
      },
    });
  }
}
