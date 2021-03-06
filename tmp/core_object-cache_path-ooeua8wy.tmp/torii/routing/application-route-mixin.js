define('torii/routing/application-route-mixin', ['exports', 'torii/configuration'], function (exports, configuration) {

  'use strict';

  exports['default'] = Ember.Mixin.create({
    beforeModel: function (transition) {
      var route = this;
      var superBefore = this._super.apply(this, arguments);
      if (superBefore && superBefore.then) {
        return superBefore.then(function() {
          return route.checkLogin(transition);
        });
      } else {
        return route.checkLogin(transition);
      }
    },
    checkLogin: function () {
      return this.get(configuration['default'].sessionServiceName).fetch()
        .catch(function(){
          // no-op, cause no session is ok
        });
    }
  });

});