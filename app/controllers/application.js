import Ember from 'ember';

export default Ember.Controller.extend({
  creating: false,
  actions: {
    createThread(){
      this.set('creating',true);
    },
  }
});
