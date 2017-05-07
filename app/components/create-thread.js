import Ember from 'ember';

export default Ember.Component.extend({
  firebaseUpload: Ember.inject.service(),
  title: '',
  link: '',
  actions: {
    saveVideo(video){
      this.firebaseUpload.upload(video, video.type,(url)=>Ember.run(()=>{

      }));
    },
    save(){

    },
    done() {
      this.get('createThread')();

    }
  }
});
