import Controller from '@ember/controller';

export default Controller.extend({
  actions: {
    async saveLocation() {
      const location = this.model;
      const campaign = location.campaign;
      location.save().then(() => {
        this.transitionToRoute('authenticated.campaigns.show.locations', campaign);
      });
    }
  }
});
