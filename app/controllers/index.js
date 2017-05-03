import Ember from 'ember';

export default Ember.Controller.extend({
  firebaseApp: Ember.inject.service(),
  storageRef: null,
  uploadPath: null,
  numBlobsLeft: 0,
  blobRecords: Ember.Object.create({
    "blob": Ember.A([])
  }),
  progress: null,
  init:function(){
    this.set('storageRef', this.get('firebaseApp').storage().ref());
    this.set('uploadPath', this.get('storageRef').child('posts/'));
  },
  upload(raw, metadata){
    let uploadTask = this.get('uploadPath').put(raw, {contentType: metadata});
    uploadTask.on('state_changed', (snapshot) => {
      this.set('progress', (snapshot.bytesTransferred / snapshot.totalBytes) * 100);
    }, (error) => {
      throw error;
    }, () => {
      this.blobRecords.blob.addObject(this.get('store').createRecord('blob', {
        url: uploadTask.snapshot.downloadURL,
        metadata: metadata
      }));
      this.decrementProperty('numBlobsLeft');
      this.set('progress', 100);
    });
  },
  actions: {
    saveVideo(blobArray){
      let store = this.get('store');
      this.set('numBlobsLeft', blobArray.length);
      blobArray.forEach((rawBlob) => {
        this.upload(rawBlob, rawBlob.type);
      });
      //Constantly check until all blobs are uploaded. Then we're done uploading.
      let interval = setInterval(()=>{
        if(this.get('numBlobsLeft') == 0){
          let post = store.createRecord('post', {blobs: this.blobRecords.blob.toArray()});
          post.save();
          clearInterval(interval);
        }
      },500);
    }
  }
});
