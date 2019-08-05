import { module, test } from 'qunit';
import { setupApplicationTest } from 'ember-qunit';
import setupMirage from 'ember-cli-mirage/test-support/setup-mirage';
import { visit, click, fillIn } from '@ember/test-helpers';
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
    await visit(`/campaigns/${campaign.id}/locations`);
    await click('[data-test-locations="create"] a');
    await fillIn('[data-test-form="name"] input', 'Three Rivers');
    await fillIn('[data-test-form="description"] input', 'A small town, full of ta\'veren');
    await click('[data-test-locations-form="submit"]');
    await visit(`/campaigns/${campaign.id}/locations`);
    assert.dom('[data-test-locations="info"]').hasText('Three Rivers - A small town, full of ta\'veren');
  });

  test('can update a location', async function(assert) {
    server.create('location', { campaignId: campaign.id });
    await visit(`/campaigns/${campaign.id}/locations`);
    await click('[data-test-locations="edit"] a');
    await fillIn('[data-test-form="name"] input', 'Three Rivers');
    await fillIn('[data-test-form="description"] input', 'A small town, full of ta\'veren');
    await click('[data-test-locations-form="submit"]');
    await visit(`/campaigns/${campaign.id}/locations`);
    assert.dom('[data-test-locations="info"]').hasText('Three Rivers - A small town, full of ta\'veren');
  });

  test('can delete a new location', async function(assert) {
    server.create('location', { campaignId: campaign.id });
    await visit(`/campaigns/${campaign.id}/locations`);
    assert.dom('[data-test-locations="info"]').exists();
    await click('[data-test-locations="delete"]');
    assert.dom('[data-test-locations="info"]').doesNotExist();
  });
});
