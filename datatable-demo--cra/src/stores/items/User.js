import Service from '../../Service';
import UserModel from '../../models/items/User';

export default class UserProfile extends Service {

  constructor() {
    super();
    this.setup({
      type: 'item',
      service: 'users',
      model: UserModel,
    });
  }
}
