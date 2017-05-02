import Ember from 'ember';
import layout from 'ember-jplayer/templates/components/jplayer-component';
import jquery from 'jquery';

export default Ember.Component.extend({
  // Passed in
  url: null,

  layout,
  enableTooltips: true,

  classNames: ['jplayer-component'],

  didRender() {
    const url = this.get('url');

    this.$('.jp-jplayer').jPlayer({
      ready() {
        jquery(this).jPlayer('setMedia', { mp3: url });
      },

      cssSelectorAncestor: '#jp_container_1',
      swfPath: '/assets'
    });
  },

  willDestroyElement() {
    this.$('.jp-jplayer').jPlayer('destroy');
  }
});
