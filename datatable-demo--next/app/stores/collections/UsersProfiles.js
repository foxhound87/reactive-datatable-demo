import Service from '@/shared/Service';
import UsersProfilesModel from '@/shared/models/collections/UsersProfiles';
import UsersProfilesTable from '@/app/tables/UsersProfilesTable';

export default class UsersProfiles extends Service {

  init() {
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
