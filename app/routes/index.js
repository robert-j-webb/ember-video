import Ember from 'ember';

export default Ember.Route.extend({
  beforeModel() {
    this.transitionTo('/mosaic/mobile');
  },
  model() {
    return this.get('store').findAll('thread', {include: 'replies'})
      .forEach((thread) => thread.video = { src: thread.video, type: 'video/mp4' });
  },
});
