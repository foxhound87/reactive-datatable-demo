import Service from '../../Service';
import UsersProfilesModel from '../../models/collections/UsersProfiles';
import UsersProfilesTable from '../../tables/UsersProfilesTable';

export default class UsersProfiles extends Service {

  constructor() {
    super();
    this.setup({
      type: 'collection',
      service: 'profiles',
      model: UsersProfilesModel,
      table: UsersProfilesTable,
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
