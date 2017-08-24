import Ember from 'ember';

export function initialize(application) {
  // appInstance.inject('route', 'foo', 'service:foo');
  var container = application.lookup ? application : application.container;
  var store = container.lookup('service:store');
  Ember.onerror = (error) => {
    store.createRecord('error', {msg: error}).save();
    // Ember.get('store').createRecord('error', {msg: error}).save();
    Ember.logger.error(error);
  };
  Ember.RSVP.on('error', (error) => {
    store.createRecord('error', {msg: error}).save();
    Ember.logger.error(error);
  });
}

export default {
  name: 'error-logger',
  initialize,
  after: 'ember-data'
};
