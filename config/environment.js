/* eslint-env node */

module.exports = function(environment) {
  var ENV = {
    modulePrefix: 'ember-quickstart',
    environment: environment,
    rootURL: '/',
    locationType: 'auto',
    EmberENV: {
      FEATURES: {
        // Here you can enable experimental features on an ember canary build
        // e.g. 'with-controller': true
      },
      EXTEND_PROTOTYPES: {
        // Prevent Ember Data from overriding Date.parse.
        Date: false
      },

    },
    firebase: {
      apiKey: "AIzaSyAdXyc3mdKCXkIMZE3ARdw0ER3RWoFTwy4",
      authDomain: "ember-app-f4f0c.firebaseapp.com",
      databaseURL: "https://ember-app-f4f0c.firebaseio.com",
      projectId: "ember-app-f4f0c",
      storageBucket: "ember-app-f4f0c.appspot.com",
      messagingSenderId: "801914110900",
    },
    APP: {

    }
  };

  if (environment === 'development') {
    // ENV.APP.LOG_RESOLVER = true;
    // ENV.APP.LOG_ACTIVE_GENERATION = true;
    // ENV.APP.LOG_TRANSITIONS = true;
    // ENV.APP.LOG_TRANSITIONS_INTERNAL = true;
    // ENV.APP.LOG_VIEW_LOOKUPS = true;
  }

  if (environment === 'test') {
    // Testem prefers this...
    ENV.locationType = 'none';

    // keep test console output quieter
    ENV.APP.LOG_ACTIVE_GENERATION = false;
    ENV.APP.LOG_VIEW_LOOKUPS = false;

    ENV.APP.rootElement = '#ember-testing';
  }

  if (environment === 'production') {

  }

  return ENV;
};
