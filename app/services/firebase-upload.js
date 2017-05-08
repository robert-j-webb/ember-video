import Ember from 'ember';

export default Ember.Service.extend({
  firebaseApp: Ember.inject.service(),
  uploading: false,
  storageRef: null,
  uploadPath: null,
  progress: 0,
  init:function(){
    this.set('storageRef', this.get('firebaseApp').storage().ref());
    this.newVideo();
  },
  newVideo(){
    this.set('uploadPath', this.get('storageRef').child('videos/' + Math.random().toString(36).substring(7) + '.webm'));
  },
  upload(raw, metadata,finished){
    this.set('uploading', true);
    let uploadTask = this.get('uploadPath').put(raw, {contentType: metadata});
    uploadTask.on('state_changed', (snapshot) => Ember.run(()=>{
      this.set('progress', (snapshot.bytesTransferred / snapshot.totalBytes) * 100);
    }), (error) => {
      throw error;
    }, () => {
      finished(uploadTask.snapshot.downloadURL);
      this.set('uploading', false);
    });
    this.newVideo();
  },
});
