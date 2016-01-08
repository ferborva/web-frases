define('torii/lib/parse-query-string', ['exports'], function (exports) {

  'use strict';

  exports['default'] = Ember.Object.extend({
    init: function() {
      this.validKeys = this.keys;
    },

    parse: function(){
      var url       = this.url,
          validKeys = this.validKeys,
          data      = {};

      for (var i = 0; i < validKeys.length; i++) {
        var key = validKeys[i],
            regex = new RegExp(key + "=([^&#]*)"),
            match = regex.exec(url);
        if (match) {
          data[key] = match[1];
        }
      }
      return data;
    }
  });

});