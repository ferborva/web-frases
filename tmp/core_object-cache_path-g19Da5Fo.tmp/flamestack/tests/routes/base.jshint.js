define('flamestack/tests/routes/base.jshint', function () {

  'use strict';

  QUnit.module('JSHint - routes');
  QUnit.test('routes/base.js should pass jshint', function(assert) { 
    assert.expect(1);
    assert.ok(false, 'routes/base.js should pass jshint.\nroutes/base.js: line 1, col 1, \'import\' is only available in ES6 (use esnext option).\nroutes/base.js: line 3, col 1, \'export\' is only available in ES6 (use esnext option).\n\n2 errors'); 
  });

});