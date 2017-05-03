import {moduleFor, test} from 'ember-qunit';

moduleFor('controller:index', 'Unit | Controller | index', {
  // Specify the other units that are required for this test.
  needs: ['service:firebaseApp']
});

test('save video creates a post and uses it', function (assert) {
  let isSaved = false;
  let controller = this.subject();
  controller.upload = function(){
    this.decrementProperty('numBlobsLeft');
  };
  controller.set('store', {
    createRecord: function (model, data) {
      assert.equal(model, 'post');
      return {
        save: function(){
          isSaved = true;
        }
      }
    }
  });
  controller.actions.saveVideo([0, 1, 1]);

  assert.equal(isSaved, true);
});
test('upload saves to firebase', function (assert) {
  let controller = this.subject();
  let refCalled = false;
  controller.set('numBlobsLeft', 1);
  let uploadTask = {
    on: function(listener, progress, error, success){
      success();
    },
    snapshot: {
      downloadUrl: 'mockUrl'
    }
  };
  let put = function(data, options) {
    assert.equal(data.type, 'webm', 'Put accepts a file');
    assert.equal(options.contentType, 'mock', 'Put accepts a file witha  content type');
    refCalled = true;
    return uploadTask;
  };
  controller.set('firebaseApp', {
    storage:function(){
      return {
        ref: function(){
          return {
            child: function(path){
              assert.equal(path, 'posts/', 'Uses the posts endpoint for firebase');
              return {
                put: put
              }
            }
          }
        }
      }
    }
  });

  controller.set('store', {
    createRecord: function (model, data) {
      assert.equal(model, 'blob');
    }
  });
  controller.upload(new File([], 'blob.webm',{ type: 'webm'}), 'mock');
  assert.equal(controller.get('numBlobsLeft'), 0);
  assert.equal(refCalled, true, "Reference is called to the firebase app");
  assert.ok(controller);
});
