import Ember from 'ember';

export default Ember.Component.extend({
  title: '',
  link: '',
  videoUrl: null,
  transcript: null,
  actions: {
    uploadDone(url){
      this.set('videoUrl', url);
    },
    save(){
      let thread = {
        timestamp: new Date(),
        title: this.get('title'),
        link: this.get('link'),
        video: this.get('url')
      };
      this.get('createThread')(thread);
    },
  }
});
