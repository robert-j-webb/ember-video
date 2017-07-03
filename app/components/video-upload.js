import Ember from 'ember';
/* global MediaRecorder  */
export default Ember.Component.extend({
  firebaseUpload: Ember.inject.service(),
  isRecording: false,
  videoHeight: 480,
  videoWidth: 640,
  mediaRecorder: null,
  stream: null,
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
    this.set('stream', stream);
  },
  handleSuccess(stream){
    let videosContainer = document.getElementById('videos-container');
    let video = document.createElement('video');
    let videoWidth = this.get('videoWidth');
    let videoHeight = this.get('videoHeight');
    video.controls = false;
    video.muted = true;
    video.width = videoWidth;
    video.height = videoHeight;
    if (window.URL) {
      video.srcObject = stream;
    } else {
      video.src = stream;
    }
    videosContainer.appendChild(video);
    video.play();
    this.set('stream', stream);
  },
  handleDataAvailable(event) {
    if (event.data && event.data.size > 0) {
      this.videoBlob.blob.push(event.data);
    }
  },
  stop(){
    if(this.get('stream'))
      this.get('stream').getTracks().forEach((track) => track.stop());
    if(this.get('mediaRecorder').state !== 'inactive')
      this.get('mediaRecorder').stop();
    let videoContainer = document.getElementById('videos-container');
    while (videoContainer.hasChildNodes()) {
      videoContainer.removeChild(videoContainer.lastChild);
    }
  },
  init() {
    this._super(...arguments);
    Ember.run.later(()=> {
      navigator['mediaDevices'].getUserMedia({
        audio: true, // record both audio/video in Firefox/Chrome
        video: true
      }).then((stream) => Ember.run(()=>this.handleSuccess(stream))).catch((e) => {
        console.log(e);
        this.set('error', e)
      })
    },1500);

  },
  willDestroy(){
    this.stop();
  },
  actions: {
    start(){
      this.toggleProperty('isRecording');
      Ember.run(() => this.startRecording(this.get('stream')));
    },
    cancel(){
      this.stop();
    },
    save(){
      this.toggleProperty('isRecording');
      this.stop();
      Ember.run(() => {
        let video = new Blob(this.videoBlob.blob.toArray(), {type: 'video/webm'});
        if(video.size === 0){
          this.set('error', "Your video failed to record. Please try updating your browser or using a different one.");
          return;
        }
        this.get('firebaseUpload').upload(video, video.type,(url)=>
          this.get('saveVideo')(url));
      });
    }
  }
});
