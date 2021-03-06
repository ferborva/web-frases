import Ember from 'ember';
import MaterializeButton from './md-btn';

export default MaterializeButton.extend({
  init: function init() {
    this._super.apply(this, arguments);
    Ember.deprecate("{{materialize-button}} has been deprecated. Please use {{md-btn}} instead", false, { url: "https://github.com/sgasser/ember-cli-materialize/issues/67" });
  }
});