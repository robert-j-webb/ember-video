/* global Promise */
import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';
import wait from 'ember-test-helpers/wait';
moduleForComponent('video-upload', 'Integration | Component | video upload', {
  integration: true
});

test('it accepts audio and video', function(assert) {

  this.render(hbs`{{video-upload}}`);
  navigator.mediaDevices.getUserMedia = function(audioOrVideo){
    assert.equal(audioOrVideo.video, true);
    assert.equal(audioOrVideo.audio, true);
    return new Promise((resolve) => {
      resolve(null);
    });
  };
  this.$('#start').click();
});

test('start appends a video', function(assert) {

  this.render(hbs`{{video-upload}}`);
  navigator.mediaDevices.getUserMedia = function(){
    return new Promise((resolve) => {
      resolve(null);
    });
  };
  this.$('#start').click();
  return wait().then(() => {
    assert.notEqual(this.$('video'), null);
  });
});


test('records video', function(assert) {

  this.render(hbs`{{video-upload}}`);
  this.$('#start').click();

  this.$('#save').click();
  this.set('success', (value) => {
    assert.equal(value, `Recorded a video of length 3`);
  });

  return wait().then(()=>{
    assert.equal(this.$('#success').text(), `Recorded a video of length 3`);
  });
});

/**
 * This test is failing... I can't figure out why. Refer to
 * app/components/video-upload.js with the start function to see what's going on.
 * Essentially there's code like this
 * start(){
      navigator.mediaDevices.getUserMedia({
        ...
      }).then((stream) => {
         ...
        }
      ).catch((e) => {console.log(e);this.set('error', e)});
    }
 * I'm trying to test the catch function by throwing an error when the promise runs.
 * However it doesn't work... but when I run the tests, Test Error is printed by the console.
 */
test('Recording video errors get printed to error', function(assert) {

  this.render(hbs`{{video-upload}}`);
  let errorString = 'Test error';
  navigator.mediaDevices.getUserMedia = function(){
    return new Promise(() => {
      throw errorString;
    });
  };

  this.$('#start').click();
  return wait().then(() => {
    assert.equal(this.$('#error').text(), `Error: ${errorString}`);
  });
});
