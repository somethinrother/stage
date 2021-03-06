import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';
import setupMirage from 'ember-cli-mirage/test-support/setup-mirage';
import { visit } from '@ember/test-helpers';
import { newSession } from 'stage/tests/helpers/sessions/sign-in';

module('Route | Campaign | Index', function(hooks) {
  setupTest(hooks);
  setupMirage(hooks);

  hooks.beforeEach(async function() {
    let user = await newSession(this);
    server.create('campaign', { user: user });
  });

  test('all campaigns are present', async function(assert) {
    await visit('/');

    assert.dom('[data-test-campaigns="header"]').exists();
    assert.dom('[data-test-campaigns="campaign-title"]').exists();
  });
});
