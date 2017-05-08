import Ember from 'ember';

export default Ember.Controller.extend({
  firebaseUpload:  Ember.inject.service(),
  creating: false,
  actions: {
    toggleThread(){
      this.toggleProperty('creating');
    },
    saveThread(thread){
      this.store.createRecord('thread', thread).save();
      this.toggleProperty('creating');
    }
  }
});
