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
  success: '',
  mergeProps(mergein, mergeto) {
    for (let t in mergeto) {
      if (typeof mergeto[t] !== 'function') {
        mergein[t] = mergeto[t];
      }
    }
    return mergein;
  },
  concatenateBlobs(blobs, type, callback) {
    var buffers = [];

    var index = 0;

    function readAsArrayBuffer() {
      if (!blobs[index]) {
        return concatenateBuffers();
      }
      var reader = new FileReader();
      reader.onload = function (event) {
        buffers.push(event.target.result);
        index++;
        readAsArrayBuffer();
      };
      reader.readAsArrayBuffer(blobs[index]);
    }

    readAsArrayBuffer();

    function concatenateBuffers() {
      var byteLength = 0;
      buffers.forEach(function (buffer) {
        byteLength += buffer.byteLength;
      });

      var tmp = new Uint16Array(byteLength);
      var lastOffset = 0;
      buffers.forEach(function (buffer) {
        // BYTES_PER_ELEMENT == 2 for Uint16Array
        var reusableByteLength = buffer.byteLength;
        if (reusableByteLength % 2 != 0) {
          buffer = buffer.slice(0, reusableByteLength - 1)
        }
        tmp.set(new Uint16Array(buffer), lastOffset);
        lastOffset += reusableByteLength;
      });

      var blob = new Blob([tmp.buffer], {
        type: type
      });

      callback(blob);
    }
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
      Ember.run(() => {
        this.videoBlob.blob.addObject(blob);
        this.actions.save();
      });
    };
    let timeInterval = 30 * 1000;
    // get blob after specific time interval
    this.mediaRecorder.start(timeInterval);
  },
  actions: {
    start(){

      // https://developer.mozilla.org/en-US/docs/Web/API/MediaDevices/getUserMedia
      navigator['mediaDevices'].getUserMedia({
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
            muted: false,
            width: videoWidth,
            height: videoHeight,
            src: URL['createObjectURL'](stream)
          });
          video.play();
          videosContainer.appendChild(video);
          let recorder = new MediaStreamRecorder(stream);
          recorder.stream = stream;
          Ember.run(() => this.startRecording(recorder));
        }
      ).catch((e) => {
        console.log(e);
        this.set('error', e)
      });
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
      Ember.run(() => {
        this.mediaRecorder.stop();
        this.mediaRecorder.stream.stop();
        let videoContainer = document.getElementById('videos-container');
        while (videoContainer.hasChildNodes()) {
          videoContainer.removeChild(videoContainer.lastChild);
        }
        Ember.run.later(() => {
          //see node_modules/msr/common/ConcatenateBlobs.js
          this.concatenateBlobs(this.videoBlob.blob.toArray(), this.videoBlob.blob.objectAt(0).type,
            (blobs) =>
              Ember.run(() =>
                this.get('saveVideo')(blobs)
              )
          );
          this.set('success', `Recorded a video of length ${this.videoBlob.blob.length * 1}`);
        }, 1000);
      });
    }
  }
});
