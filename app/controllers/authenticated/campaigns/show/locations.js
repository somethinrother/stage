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
    },
    async updateLocation() {
    },
    async deleteLocation() {
    }
  }
});
