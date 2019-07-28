import { module, test } from 'qunit';
import { setupApplicationTest } from 'ember-qunit';
import setupMirage from 'ember-cli-mirage/test-support/setup-mirage';
import { visit } from '@ember/test-helpers';
import { newSession } from 'stage/tests/helpers/sessions/sign-in';

let currentUser, campaign;

module('Acceptance | Campaigns | Show | Locations', function(hooks) {
  setupApplicationTest(hooks);
  setupMirage(hooks);

  hooks.beforeEach(async function() {
    await newSession(this);
    currentUser = this.owner.factoryFor('service:current-user').create();
    this.set('currentUser', currentUser);
    campaign = server.create('campaign');
  });

  test('can create a new location', async function(assert) {
  });

  test('can update a new location', async function(assert) {
  });

  test('can delete a new location', async function(assert) {
  });
});
