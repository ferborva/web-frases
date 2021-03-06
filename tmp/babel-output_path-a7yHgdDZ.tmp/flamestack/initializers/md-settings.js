export { initialize };
import config from '../config/environment';
import MaterializeSettings from 'ember-cli-materialize/services/md-settings';

function initialize(container, application) {
  var materializeDefaults = config.materializeDefaults;

  application.register('config:materialize', materializeDefaults, { instantiate: false });
  application.register('service:materialize-settings', MaterializeSettings);
  application.inject('service:materialize-settings', 'materializeDefaults', 'config:materialize');
}

export default {
  name: 'md-settings',
  initialize: initialize
};