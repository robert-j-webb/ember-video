import Ember from 'ember';

export default Ember.Controller.extend({
  firebaseUpload:  Ember.inject.service(),
  actions: {
    saveVideo(blob){
      let store = this.get('store');
      this.firebaseUpload.upload(blob, blob.type,(url)=>Ember.run(()=>{
        let post = store.createRecord('post', {videoUrl: url});
        post.save();
      }));
    }
  }
});
