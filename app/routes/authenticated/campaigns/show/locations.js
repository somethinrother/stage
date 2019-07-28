import Route from '@ember/routing/route';
import { hash } from 'rsvp';

export default Route.extend({

  model() {
    const campaignId = this.paramsFor('authenticated.campaigns.show').campaign_id;
    let locations = this.store.query('location', {
      filter: {
        campaign_id: campaignId
      }
    }).then(function(locations) {
      return locations;
    });
    let location = this.store.createRecord('location', {
      campaign: this.store.findRecord('campaign', campaignId)
    });
    let promises = {
      locations,
      location
    };

    return hash(promises);
  }
});
