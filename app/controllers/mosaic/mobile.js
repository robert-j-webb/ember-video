import Ember from 'ember';

export default Ember.Controller.extend({
  showNewVideo: false,
  videoUrl: null,
  order: [],
  sortedModel: Ember.computed.sort('model', function (a, b) {
    if (a.get('order') < b.get('order')) {
      return -1;
    } else if (a.get('order') > b.get('order')) {
      return 1;
    } else {
      return (a.get('timestamp') > b.get('timestamp')) ? -1 : 1;
    }
  }),
  newestItems: Ember.computed.uniqBy('sortedModel','order'),
  actions: {
    uploadDone(url){
      this.set('videoUrl', url);
    },
    save(){
      let mobile = {
        timestamp: new Date(),
        video: this.get('videoUrl'),
        order: this.get('order')
      };
      this.get('store').createRecord('mobile', mobile).save();
      this.set('showNewVideo', false);
    },
    newVideo(order){
      this.set('showNewVideo', true);
      this.set('order', order);
    },
    closeNewVideo(){
      this.set('showNewVideo', false);

    }
  }
});
