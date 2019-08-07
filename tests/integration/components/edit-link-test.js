import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';
import setupMirage from 'ember-cli-mirage/test-support/setup-mirage';
import { newSession } from 'stage/tests/helpers/sessions/sign-in';

let user;

module('Integration | Component | edit-link', function(hooks) {
  setupRenderingTest(hooks);
  setupMirage(hooks);

  hooks.beforeEach(async function() {
    user = await newSession(this);
    this.owner.setupRouter();
    const currentUser = this.owner.factoryFor('service:current-user').create();
    this.set('currentUser', currentUser);
  });

  test('it displays if currentUser is the GM', async function(assert) {
    server.create('campaign', { user });
    await render(hbs`<EditLink @campaign={{campaign}} />`);

    assert.dom('[data-test-gm-link="campaign-edit"]').exists();
  });

  test('it does not display if currentUser is not the GM', async function(assert) {
    const campaign = server.create('campaign');
    this.set('campaign', campaign);
    await render(hbs`<EditLink @campaign={{campaign}} />`);
    await render(hbs`<div data-test-div='test'/>`);

    assert.dom('[data-test-div="test"]').exists();
    assert.dom('[data-test-gm-link="campaign-edit"]').doesNotExist();
  });
});
