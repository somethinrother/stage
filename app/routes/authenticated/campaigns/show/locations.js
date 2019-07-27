import Route from '@ember/routing/route';

export default Route.extend({

  model(params) {
    return this.store.query('location', {
      filter: {
        campaignId: params.id
      }
    }).then(function(locations) {
      return locations;
    });
  }
});
