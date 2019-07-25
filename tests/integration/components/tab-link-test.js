import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';
import setupMirage from 'ember-cli-mirage/test-support/setup-mirage';

module('Integration | Component | tab-link', function(hooks) {
  setupRenderingTest(hooks);
  setupMirage(hooks);

  test('it renders with the correct route as href', async function(assert) {
    await render(hbs`<TabLink @link='locations' />`);

    assert.equal(this.element.href.trim(), 'authenticated.campaigns.show.locations');
  });
});
