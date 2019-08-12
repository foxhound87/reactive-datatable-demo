import Service from '../../Service';
import UserProfileModel from '../../models/items/UserProfile';

export default class UserProfile extends Service {

  constructor() {
    super();
    this.setup({
      type: 'item',
      service: 'profiles',
      model: UserProfileModel,
    });
  }
}
