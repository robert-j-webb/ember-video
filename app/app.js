import Ember from 'ember';
import Resolver from './resolver';
import loadInitializers from 'ember-load-initializers';
import config from './config/environment';
import firebase from 'firebase';

let App;

Ember.MODEL_FACTORY_INJECTIONS = true;

App = Ember.Application.extend({
  modulePrefix: config.modulePrefix,
  podModulePrefix: config.podModulePrefix,
  Resolver
});
Ember.onerror = function (error) {
  console.error(error);
  firebase.database().ref('errors/' + new Date()).set({
    description: error
  });
}
Ember.RSVP.on('error', function(error) {
  console.error(error);
  firebase.database().ref('errors/' + new Date()).set({
    description: error
  });
});

loadInitializers(App, config.modulePrefix);

export default App;
