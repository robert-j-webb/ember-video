import Ember from 'ember';
/* global MediaRecorder  */
export default Ember.Component.extend({
  isRecording: true,
  isNotRecording: false,
  videoHeight: 480,
  videoWidth: 640,
  mediaRecorder: null,
  index: 1,
  error: '',
  videoBlob: Ember.Object.create({
    "blob": Ember.A([])
  }),
  success: '',
  startRecording(stream){
    this.videoBlob.blob = Ember.A([]);
    let options = {mimeType: 'video/webm;codecs=vp9'};
    if (!MediaRecorder['isTypeSupported'](options.mimeType)) {
      console.log(options.mimeType + ' is not Supported');
      options = {mimeType: 'video/webm;codecs=vp8'};
      if (!MediaRecorder['isTypeSupported'](options.mimeType)) {
        console.log(options.mimeType + ' is not Supported');
        options = {mimeType: 'video/webm'};
        if (!MediaRecorder['isTypeSupported'](options.mimeType)) {
          console.log(options.mimeType + ' is not Supported');
          options = {mimeType: ''};
        }
      }
    }
    let mediaRecorder = null;
    try {
      mediaRecorder = new MediaRecorder(stream, options);
    } catch (e) {
      console.error('Exception while creating MediaRecorder: ' + e);
      this.set('error',e);
      return;
    }
    mediaRecorder.ondataavailable = (blob)=>this.handleDataAvailable(blob);
    mediaRecorder.start(10); // collect 10ms of data
    this.set('mediaRecorder', mediaRecorder);
  },
  handleSuccess(stream){
    this.toggleProperty('isRecording');
    this.toggleProperty('isNotRecording');
    let videosContainer = document.getElementById('videos-container');
    let video = document.createElement('video');
    let videoWidth = this.get('videoWidth');
    let videoHeight = this.get('videoHeight');
    video.controls = false;
    video.muted = false;
    video.width = videoWidth;
    video.height = videoHeight;
    if (window.URL) {
      video.srcObject = stream;
    } else {
      video.src = stream;
    }
    video.play();
    videosContainer.appendChild(video);
    Ember.run(() => this.startRecording(stream));
  },
  handleDataAvailable(event) {
    if (event.data && event.data.size > 0) {
      this.videoBlob.blob.push(event.data);
    }
  },
  actions: {
    start(){
      navigator['mediaDevices'].getUserMedia({
        audio: true, // record both audio/video in Firefox/Chrome
        video: {width: {exact: 640}, height: {exact: 480}}
      }).
      then((stream)=>this.handleSuccess(stream)).catch((e) => {
        console.log(e);
        this.set('error', e)
      });
    },
    cancel(){
      this.mediaRecorder.stop();
    },
    save(){
      this.toggleProperty('isRecording');
      this.toggleProperty('isNotRecording');
      Ember.run(() => {
        this.mediaRecorder.stop();
        let videoContainer = document.getElementById('videos-container');
        while (videoContainer.hasChildNodes()) {
          videoContainer.removeChild(videoContainer.lastChild);
        }
        Ember.run(() => {
          this.get('saveVideo')(new Blob(this.videoBlob.blob.toArray(), {type: 'video/webm'}));
          this.set('success', `Recorded a video of length ${this.videoBlob.blob.length / 100}`);
        });
      });
    }
  }
});
