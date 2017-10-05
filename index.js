/* eslint-env node */
'use strict';

module.exports = {
  name: 'ember-jplayer',

  included(app) {
    this._super.included.apply(this, arguments);

    app.import('node_modules/jplayer/dist/jplayer/jquery.jplayer.min.js');

    return app;
  },
};
