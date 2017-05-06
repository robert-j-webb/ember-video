import Ember from 'ember';

export default Ember.Controller.extend({
  firebaseApp: Ember.inject.service(),
  storageRef: null,
  uploadPath: null,
  progress: null,
  init:function(){
    this.set('storageRef', this.get('firebaseApp').storage().ref());
    this.set('uploadPath', this.get('storageRef').child('posts/v' + Math.random().toString(36).substring(7) + '.webm'));
  },
  upload(raw, metadata,finished){
    let uploadTask = this.get('uploadPath').put(raw, {contentType: metadata});
    uploadTask.on('state_changed', (snapshot) => Ember.run(()=>{
      this.set('progress', (snapshot.bytesTransferred / snapshot.totalBytes) * 100);
    }), (error) => {
      throw error;
    }, () => {
      finished(uploadTask.snapshot.downloadURL);
    });
  },
  actions: {
    saveVideo(blob){
      let store = this.get('store');
      this.upload(blob, blob.type,(url)=>Ember.run(()=>{
        let post = store.createRecord('post', {videoUrl: url});
        post.save();
      }));
    }
  }
});
