import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('login');

  this.route('users', function() {
    this.route('new', { path: 'sign_up' });
  });

  this.route('authenticated', { path: '' }, function() {
    this.route('campaigns', { path: '' }, function() {
      this.route('index', { path: '/' });
      this.route('show', { path: '/campaigns/:campaign_id' }, function() {
        this.route('overview');
        this.route('chapters');
        this.route('locations', function() {
          this.route('form', { path: '/:location_id/form' })
        });
        this.route('party');
        this.route('blue-booking');
        this.route('characters');
      });
      this.route('new', { path: '/campaigns/new' });
      this.route('edit', { path: '/campaigns/:id/edit' })
    });
  });
});

export default Router;
