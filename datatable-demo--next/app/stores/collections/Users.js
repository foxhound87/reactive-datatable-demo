import Service from '@/shared/Service';
import UsersModel from '@/shared/models/collections/Users';
import UsersTable from '@/app/tables/UsersTable';
import UserForm from '@/app/forms/UserForm';

export default class Users extends Service {

  init() {
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
