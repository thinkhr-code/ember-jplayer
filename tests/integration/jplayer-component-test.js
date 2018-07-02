import { render } from '@ember/test-helpers';
import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';
import stubTooltips from 'mammoth-test-helpers/test-support/stubs/ember-tooltips';
import Ember from 'ember';


const { typeOf } = Ember;

module('integration - component - jplayer-component', function(hooks) {
  setupRenderingTest(hooks);

  hooks.beforeEach(function() {
    stubTooltips(this.owner);
  });

  test('it renders', async function(assert) {
    assert.expect(1);

    await render(hbs`
      {{ jplayer-component }}
    `);

    assert.exists(this.$('.jplayer-component'), 'It renders');
  });

  test('jPlayer is initialized', async function(assert) {
    assert.expect(1);

    await render(hbs`
      {{ jplayer-component }}
    `);

    const jPlayer = this.$('.jp-jplayer').jPlayer;

    assert.equal(typeOf(jPlayer), 'function', 'Jplayer exists');
  });
});
