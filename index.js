/* eslint-env node */
'use strict';

var Funnel = require('broccoli-funnel');
var mergeTrees = require('broccoli-merge-trees');
var path = require('path');

module.exports = {
  name: 'ember-jplayer',

  included(app) {
    this._super.included.apply(this, arguments);

    // see: https://github.com/ember-cli/ember-cli/issues/3718
    while (typeof app.import !== 'function' && app.app) {
      app = app.app;
    }

    this.app = app;
    this.importBrowserDependencies(app);

    return app;
  },

  importBrowserDependencies(app) {
    if (arguments.length < 1) {
      throw new Error('Application instance must be passed to import');
    }

    var vendor = this.treePaths.vendor;
    var jplayerPath = vendor + '/jplayer/jquery.jplayer.min.js';

    [jplayerPath].forEach(function(path) {
      app.import(path);
    });
  },

  treeForVendor(vendorTree) {
    var trees = [];
    var jplayerPath = path.dirname(require.resolve('jplayer'));

    if (vendorTree) {
      trees.push(vendorTree);
    }

    trees.push(new Funnel(jplayerPath, {
      destDir: 'jplayer',
      include: [new RegExp(/\.js$/)],
      exclude: ['tests', 'ender', 'package'].map(function(key) {
        return new RegExp(key + '\.js$');
      })
    }));

    return mergeTrees(trees);
  }
};
