import Ember from 'ember';

export default Ember.Controller.extend({
  showNewVideo: false,
  videoUrl: null,
  order: null,
  actions: {
    uploadDone(url){
      this.set('videoUrl', url);
    },
    save(){
      let mobile = {
        timestamp: new Date(),
        video: this.get('videoUrl'),
        order: this.get('order')
      };
      this.get('store').createRecord('mobile', mobile).save();
      this.set('showNewVideo', false);
    },
    cancel(){
      this.get('cancelReply')();
    },
    newVideo(order){
      this.set('showNewVideo',true);
      this.set('order', order);
    },
    closeNewVideo(){
      this.set('showNewVideo',false);

    }
  }
});
