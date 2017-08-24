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
    },
    ready(player, component){
      component.bindPropertyToPlayer(player, 'src');
    },
    loadedMetaData(player){
      let h = player.videoHeight();
      let w = player.videoWidth();
      if(h > 540){
        let ratio = w/h;
        player.height(540);
        player.width(540 * ratio);
      }
    }
  }
});
