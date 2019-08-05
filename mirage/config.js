import { isEmpty } from '@ember/utils';

export default function() {
  // CAMPAIGN ROUTES
  this.get('/campaigns');
  this.get('/campaigns/:id');

  // LOCATION ROUTES
  this.get('/locations', function (schema, request) {
    if (isEmpty(request.queryParams)) {
      return schema.locations.all();
    }

    let query = {};
    if (request.queryParams['filter[campaign_id]']) {
      query.campaignId = request.queryParams['filter[campaign_id]'];
    }

    return schema.locations.where(query);
  });

  this.patch('/locations/:id', function(db, request) {
    const attrs = JSON.parse(request.requestBody).data.attributes;
    const location = db.locations.find(request.params.id);
    return location.update(attrs);
  });

  this.post('/locations', function(db, request) {
    const campaign = db.campaigns.all().models[0];
    const attrs = JSON.parse(request.requestBody).data.attributes;
    attrs['campaignId'] = campaign.id;
    return db.locations.create(attrs);
  });

  // USER ROUTES
  this.get('/me', function(db) {
    return db.users.all()[0];
  });
  this.get('/users/:id', function(db) {
    let user = db.users.all().models[0];
    return user;
  });
  this.post('/users', function(db, request) {
    var attrs = JSON.parse(request.requestBody).data.attributes;
    return db.users.create(attrs);
  });

  // SESSION ROUTES
  this.post('http://localhost:3000/oauth/token', function() {
    return {
      'access_token': 'acbde',
      'token_type': 'Bearer',
      'expires_in': 7200,
      'created_at': 68354867865}
  });
}
