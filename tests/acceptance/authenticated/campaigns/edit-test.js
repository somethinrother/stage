import { module, test } from 'qunit';
import { setupApplicationTest } from 'ember-qunit';
import setupMirage from 'ember-cli-mirage/test-support/setup-mirage';
import { visit } from '@ember/test-helpers';
import { newSession } from 'stage/tests/helpers/sessions/sign-in';

let currentUser, campaign;

module('Acceptance | Campaigns | Edit', function(hooks) {
  setupApplicationTest(hooks);
  setupMirage(hooks);

  hooks.beforeEach(async function() {
    await newSession(this);
    currentUser = this.owner.factoryFor('service:current-user').create();
    this.set('currentUser', currentUser);
    campaign = server.create('campaign');
  });

  test('page renders correctly', async function(assert) {
    await visit(`/campaigns/${campaign.id}/edit`);

    assert.dom('[data-test-campaigns="edit-form"]').exists();
  });
});
