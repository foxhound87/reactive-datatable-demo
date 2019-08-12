import Service from '@/shared/Service';
import UserProfileModel from '@/shared/models/items/UserProfile';

export default class UserProfile extends Service {

  init() {
    this.setup({
      type: 'item',
      service: 'profiles',
      model: UserProfileModel,
    });
  }
}
