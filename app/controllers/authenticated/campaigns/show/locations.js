import Controller from '@ember/controller';
import { alias } from '@ember/object/computed';

export default Controller.extend({
  locations: alias('model'),

  actions: {
    async createLocation() {
    },
    async updateLocation() {
    },
    async deleteLocation() {
    }
  }
});
