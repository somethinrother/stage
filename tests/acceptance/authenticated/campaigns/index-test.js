import { module, test } from 'qunit';
import { setupApplicationTest } from 'ember-qunit';
import setupMirage from 'ember-cli-mirage/test-support/setup-mirage';
import { visit } from '@ember/test-helpers';
import { newSession } from 'stage/tests/helpers/sessions/sign-in';

let user, currentUser;

module('Acceptance | Campaigns | Index', function(hooks) {
  setupApplicationTest(hooks);
  setupMirage(hooks);

  hooks.beforeEach(async function() {
    user = await newSession(this);
    currentUser = this.owner.factoryFor('service:current-user').create();
    this.set('currentUser', currentUser);
    server.create('campaign', { user });
  });

  test('all campaigns are present', async function(assert) {
    await visit('/');

    assert.dom('[data-test-campaigns="header"]').exists();
    assert.dom('[data-test-campaigns="campaign-title"]').exists();
    assert.dom('[data-test-campaigns="new"]').exists();
  });
});
