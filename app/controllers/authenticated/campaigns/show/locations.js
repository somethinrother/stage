import Controller from '@ember/controller';
import { alias } from '@ember/object/computed';
import { computed } from '@ember/object';

export default Controller.extend({
  locations: alias('model.locations'),
  campaign: computed('locations', function() {
    return this.locations[0].campaign;
  }),

  actions: {
    async createLocation() {
      // TODO: proper error logging in here
      let location = this.model.location;
      let campaign = location.campaign;
      location.save().then(() => {
        this.transitionToRoute('authenticated.campaigns.show.locations', campaign);
      });
    },
    async updateLocation(location) {
      let campaign = location.campaign;
      location.save().then(() => {
        this.transitionToRoute('authenticated.campaigns.show.locations', campaign);
      });
    },
    async deleteLocation(location) {
      location.destroyRecord();
    },
    async toggleEdit(location) {
      const elements = document.querySelectorAll(`[data-toggle-selector="${location.id}"]`);
      elements.forEach(function(element) {
        const classList = element.classList;
        if (classList.contains('hidden')) {
          classList.remove('hidden')
        } else {
          classList.add('hidden')
        }
      });
    }
  }
});
