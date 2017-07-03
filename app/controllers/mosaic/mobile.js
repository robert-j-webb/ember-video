import Ember from 'ember';

export default Ember.Controller.extend({
    canSubmit: false,
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
    newestItems: Ember.computed.uniqBy('sortedModel', 'order'),
    hideVideo: (player,$container, $overlay)=>{
      $container.removeAttr('style'); //this removes all inline styles
      $container.removeClass("fullscreen");
      $(document.body).removeAttr('style');
      $overlay.hide();
      player.pause();
    },
    actions: {
      uploadDone(url){
        this.set('videoUrl', url);
        this.set('canSubmit', true);
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
      },
      fullscreen(player, b, event){
        let container = event.target.parentElement.parentElement;
        let videoHeight = player.videoHeight();
        let videoWidth = player.videoWidth();
        let xRatio = window.innerWidth / videoWidth;
        let yRatio = window.innerHeight / videoHeight;
        let margin = 0;
        if (xRatio > yRatio) { //video is wider than it is tall
          videoHeight = window.innerHeight;
          videoWidth = yRatio * videoWidth;
          margin = `30px ${(window.innerWidth - videoWidth) / 2}px`;
        } else { //video is taller than it is wide
          videoWidth = window.innerWidth;
          videoHeight = xRatio * videoHeight;
          margin = `${(window.innerWidth - videoWidth) / 2}px 20px`;
        }
        let $container = $(container);
        let $overlay = $("#overlay");
        $container.addClass("fullscreen");
        $container.css({
          'margin': margin,
          'height': videoHeight,
          'width': videoWidth
        });
        $overlay.show();
        $(document.body).css('overflow', 'hidden');
        let self = this;
        $(document).on('keyup', function () {
          self.hideVideo(player,$container, $overlay);
          $(this).off('keyup');
        });
        $overlay.on('click', function(){
          self.hideVideo(player,$container, $overlay);
          $(this).off('click');
        });
      },
    },
  });
