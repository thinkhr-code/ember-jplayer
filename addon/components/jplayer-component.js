import Component from '@ember/component';
import layout from 'ember-jplayer/templates/components/jplayer-component';

export default Component.extend({
  // Passed in
  url: null,

  layout,
  enableTooltips: true,

  classNames: ['jplayer-component'],

  didRender() {
    const url = this.get('url');
    const jPlayerElement = this.element.querySelector('.jp-jplayer');

    $(jPlayerElement).jPlayer({
      ready() {
        $(jPlayerElement).jPlayer('setMedia', { mp3: url });
      },

      cssSelectorAncestor: '#jp_container_1',
      swfPath: '/assets'
    });
  },

  willDestroyElement() {
    $(this.element.querySelector('.jp-jplayer')).jPlayer('destroy');
  }
});
