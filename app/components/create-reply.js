import Ember from 'ember';

export default Ember.Component.extend({
  videoUrl: null,
  actions: {
    uploadDone(url){
      this.set('videoUrl', url);
    },
    save(){
      let reply = {
        timestamp: new Date(),
        video: this.get('videoUrl')
      };
      this.get('createReply')(reply);
    },
    cancel(){
      this.get('cancelReply')();
    }
  }
});
