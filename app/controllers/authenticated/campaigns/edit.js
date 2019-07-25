import Controller from '@ember/controller';
import { inject as service } from '@ember/service';

export default Controller.extend({
  // session: service(),
  // store: service(),
  // currentUser: service('current-user'),

  actions: {
    async updateCampaign() {
      console.log('hello');
    }
  }
});
