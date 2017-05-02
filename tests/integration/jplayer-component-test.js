import { test, moduleForComponent } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';
import Ember from 'ember';

const { typeOf } = Ember;

moduleForComponent('jplayer-component', 'integration - component - jplayer-component', {
  integration: true,
});

test('it renders', function(assert) {
  assert.expect(1);

  this.render(hbs`
    {{ jplayer-component }}
  `);

  assert.isPresent(this.$('.jplayer-component'), 'It renders');
});

test('jPlayer is initialized', function(assert) {
  assert.expect(1);

  this.render(hbs`
    {{ jplayer-component }}
  `);

  const jPlayer = this.$('.jp-jplayer').jPlayer;

  assert.equal(typeOf(jPlayer), 'function', 'Jplayer exists');
});
