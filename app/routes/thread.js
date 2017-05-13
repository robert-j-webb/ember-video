import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {
    return this.store.findRecord('thread', params.thread_id, {include: 'replies'});
  }
});
