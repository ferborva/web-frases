define('flamestack/tests/routes/application.jshint', function () {

  'use strict';

  QUnit.module('JSHint - routes');
  QUnit.test('routes/application.js should pass jshint', function(assert) { 
    assert.expect(1);
    assert.ok(false, 'routes/application.js should pass jshint.\nroutes/application.js: line 1, col 1, \'import\' is only available in ES6 (use esnext option).\nroutes/application.js: line 4, col 1, \'export\' is only available in ES6 (use esnext option).\nroutes/application.js: line 29, col 6, Missing semicolon.\nroutes/application.js: line 113, col 8, Missing semicolon.\n\n4 errors'); 
  });

});