import Controller from '@ember/controller';

export default Controller.extend({

  actions: {
    async updateCampaign() {
      this.model.save().then(() => {
        this.transitionToRoute('authenticated.campaigns.show', this.model);
      });
    }
  }
});
