import { moduleFor, test } from 'ember-qunit';

moduleFor('controller:mosaic/mobile', 'Unit | Controller | mosaic/mobile', {
  // Specify the other units that are required for this test.
  // needs: ['controller:foo']
});

// Replace this with your real tests.
test('it exists', function(assert) {
  let controller = this.subject();
  assert.ok(controller);
});

test('it ensures the first 12 model data are sequentially ordered', function (assert) {
  let controller = this.subject();
  let modelArray = [];
  for(let i = 0; i < 15; i++){
    let num = Math.floor(Math.random() * 11);
    modelArray.push({
      get: (key) => {
        if(key === 'order'){
          return num;
        } else {
          return new Date();
        }
      }
    });
  }
  controller.set('model', modelArray);
  let prevOrder = -1;
  for(let i =0; i <12; i++){
    assert.equal(controller.get('sortedModel')[i].get('order') >= prevOrder,true,
      `Expected order to increase, did not. ${controller.get('sortedModel')[i].get('order')} !< ${prevOrder}
      ${controller.get('sortedModel').map((v)=>v.get('order')).join(', ')}`);

    prevOrder = controller.get('sortedModel')[i].get('order');
  }
});

test('it will save a video if it is asked to', function(assert) {
  let controller = this.subject();
  controller.set('videoUrl', 'testUrl');
  controller.set('order', 0);
  let wasSaved = false;
  controller.set('store',
    {
      createRecord (string, model) {
        return {
          save() {
            wasSaved = true;
          }
        }
      }
    });
  controller.send('save');
  assert.equal(wasSaved, true, "Expected save to be called, was not");
});
