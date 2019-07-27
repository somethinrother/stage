import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';
import setupMirage from 'ember-cli-mirage/test-support/setup-mirage';
import { newSession } from 'stage/tests/helpers/sessions/sign-in';

module('Integration | Component | tab-link', function(hooks) {
  setupRenderingTest(hooks);
  setupMirage(hooks);

  hooks.beforeEach(async function() {
    const user = await newSession(this);
    const campaign = server.create('campaign', { user });
    this.set('campaign', campaign);
    this.owner.setupRouter();
  });

  test('it renders with the correct route as href', async function(assert) {
    await render(hbs`<TabLink @link='locations' @model={{campaign}} />`);

    assert.dom('[data-test-tab-link="locations"]').exists();
    assert.dom('[data-test-tab-link="locations"]').hasAttribute('href', '/campaigns/1/locations')
  });
});
