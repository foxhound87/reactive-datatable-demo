import Service from '@/shared/Service';
import UserModel from '@/shared/models/items/User';

export default class UserProfile extends Service {

  init() {
    this.setup({
      type: 'item',
      service: 'users',
      model: UserModel,
    });
  }
}
