import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('create-reply', 'Integration | Component | create reply', {
  integration: true
});

test('create reply renders', function(assert) {

  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{create-reply}}`);

  assert.equal(this.$().text().trim(), `start recording


    
  
      Upload a video to Submit

    Cancel reply Create`);
});
