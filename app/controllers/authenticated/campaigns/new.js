import Controller from '@ember/controller';
import { inject as service } from '@ember/service';

export default Controller.extend({
  session: service(),
  store: service(),
  currentUser: service('current-user'),

  actions: {
    async createCampaign() {
      this.model.save().then(() => {
        this.store.createRecord('player', {
          campaign: this.model,
          user: this.currentUser.user,
          role: 'GM'
        }).save();
        this.transitionToRoute('/');
      });
    }
  }
});
