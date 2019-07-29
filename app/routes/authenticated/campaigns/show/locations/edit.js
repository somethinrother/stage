import Route from '@ember/routing/route';
import { hash } from 'rsvp';

export default Route.extend({
  model(params) {
    return this.store.findRecord('location', params.location_id);
  }
});
