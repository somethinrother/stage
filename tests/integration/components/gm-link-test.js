import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';
import setupMirage from 'ember-cli-mirage/test-support/setup-mirage';
import { newSession } from 'stage/tests/helpers/sessions/sign-in';

let user, campaign;

module('Integration | Component | gm-link', function(hooks) {
  setupRenderingTest(hooks);
  setupMirage(hooks);

  hooks.beforeEach(async function() {
    user = await newSession(this);
    campaign = server.create('campaign', { user });
    this.set('campaign', campaign);
    this.owner.setupRouter();
  });

  test('it displays if currentUser is the GM', async function(assert) {
    await render(hbs`<GmLink @campaign={{campaign}} />`);
    assert.dom('[data-test-gm-link="campaign-edit"]').exists();
  });

  test('it does not display if currentUser is not the GM', async function(assert) {
    await render(hbs`<GmLink @campaign={{campaign}} />`);
    await render(hbs`<div data-test-div='test'/>`);
    assert.dom('[data-test-div="test"]').exists();
    assert.dom('[data-test-gm-link="campaign-edit"]').doesNotExist();
  });
});
