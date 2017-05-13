import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return this.get('store').findAll('thread')
      .forEach((thread) => thread.video = { src: thread.video, type: 'video/mp4' });
  },
});
