import Ember from 'ember';

export default Ember.Controller.extend({
  replying: false,
  actions: {
    toggleReply(){
      this.toggleProperty('replying');
    },
    saveReply(rawReply){
      let thread = this.get('model');
      let reply = this.get('store').createRecord('reply', rawReply);
      thread.get('replies').pushObject(reply);
      thread.save().then(function () {
        reply.save();
      });
      this.toggleProperty('replying');
    }
  }
});
