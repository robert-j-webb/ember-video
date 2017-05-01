import Ember from 'ember';
import msr from 'npm:msr';
import MediaStreamRecorder from 'npm:msr';

export default Ember.Component.extend({
  isRecording: true,
  isNotRecording: false,
  videoHeight: 240,
  videoWidth: 320,
  recorderType: 'WebP encoding into WebM',
  mediaRecorder: null,
  index: 1,
  error: '',
  videoBlob: Ember.Object.create({
    "blob": Ember.A([])
  }),
  bytesToSize(bytes) {
    var k = 1000;
    var sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB'];
    if (bytes === 0) return '0 Bytes';
    var i = parseInt(Math.floor(Math.log(bytes) / Math.log(k)), 10);
    return (bytes / Math.pow(k, i)).toPrecision(3) + ' ' + sizes[i];
  },
  getTimeLength(milliseconds) {
    var data = new Date(milliseconds);
    return data.getUTCHours() + " hours, " + data.getUTCMinutes() + " minutes and " + data.getUTCSeconds() + " second(s)";
  },
  mergeProps(mergein, mergeto) {
    for (var t in mergeto) {
      if (typeof mergeto[t] !== 'function') {
        mergein[t] = mergeto[t];
      }
    }
    return mergein;
  },
  startRecording(recorder, width, height){
    this.mediaRecorder = recorder;
    let recorderType = this.get('recorderType');
    if (recorderType === 'MediaRecorder API') {
      this.mediaRecorder.recorderType = msr.MediaRecorderWrapper;
    }
    if (recorderType === 'WebP encoding into WebM') {
      this.mediaRecorder.recorderType = msr.WhammyRecorder;
    }
    // don't force any mimeType; use above "recorderType" instead.
    // this.mediaRecorder.mimeType = 'video/webm'; // video/webm or video/mp4
    this.mediaRecorder.videoWidth = width;
    this.mediaRecorder.videoHeight = height;
    this.mediaRecorder.ondataavailable = (blob) => {
      this.videoBlob.blob.addObject(blob);
    };
    var timeInterval = 3 * 1000;
    // get blob after specific time interval
    this.mediaRecorder.start(timeInterval);
  },
  actions: {
    start(){
      // https://developer.mozilla.org/en-US/docs/Web/API/MediaDevices/getUserMedia
      navigator.mediaDevices.getUserMedia({
        audio: true, // record both audio/video in Firefox/Chrome
        video: true
      }).then((stream) => {
          this.toggleProperty('isRecording');
          this.toggleProperty('isNotRecording');
          let videosContainer = document.getElementById('videos-container');
          let video = document.createElement('video');
          let videoWidth = this.get('videoWidth');
          let videoHeight = this.get('videoHeight');
          video = this.mergeProps(video, {
            controls: true,
            muted: true,
            width: videoWidth,
            height: videoHeight,
            src: URL.createObjectURL(stream)
          });
          video.play();
          videosContainer.appendChild(video);
          videosContainer.appendChild(document.createElement('hr'));
          let recorder = new MediaStreamRecorder(stream);
          recorder.stream = stream;
          this.startRecording(recorder);
        }
      ).catch((e) => {console.log(e);this.set('error', e)});
    },
    stop(){
      this.toggleProperty('isRecording');
      this.toggleProperty('isNotRecording');
      this.mediaRecorder.stop();
      this.mediaRecorder.stream.stop();
    },
    pause(){
      this.mediaRecorder.pause();
    },
    resume(){
      this.mediaRecorder.resume();
    },
    save(){
      this.toggleProperty('isRecording');
      this.toggleProperty('isNotRecording');
      this.mediaRecorder.stop();
      this.get('saveVideo')(this.videoBlob.blob.toArray());
      this.mediaRecorder.stream.stop();
    }
  }
});
