import Ember from 'ember';

export default Ember.Controller.extend({
  firebaseApp: Ember.inject.service(),
  storageRef: null,
  path: 'posts/',
  numBlobsLeft: 0,
  blobRecords: Ember.Object.create({
    "blob": Ember.A([])
  }),
  upload(raw, metadata){
    this.set('storageRef', this.get('firebaseApp').storage().ref());
    let uploadTask = this.get('storageRef').child(this.get('path')).put(raw, {contentType: metadata});
    uploadTask.on('state_changed', (snapshot) => {
      let progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
      progress.toString();
    }, (error) => {
      error.toString();
    }, () => {
      this.blobRecords.blob.addObject(this.get('store').createRecord('blob', {
        url: uploadTask.snapshot.downloadURL,
        metadata: metadata
      }));
      this.decrementProperty('numBlobsLeft');
    });
  },
  actions: {
    saveVideo(){
      let store = this.get('store');
      let blob = store.createRecord('blob', {url: 'hello', metadata: 'world'});
      store.createRecord('post', {blobs: [blob]}).save();
    },
    testSave(blobArray){

      let store = this.get('store');
      this.set('numBlobsLeft', blobArray.length);
      blobArray.forEach((rawBlob) => {
        this.upload(rawBlob, rawBlob.type);
      });
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
