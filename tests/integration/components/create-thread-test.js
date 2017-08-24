import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('create-thread', 'Integration | Component | create thread', {
  integration: true
});

test('it renders', function(assert) {

  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{create-thread}}`);

  assert.equal(this.$().text().trim(), `Title


  

  
  




          Link


  

  
  




        

     start recording


      
    
        Upload a video to Submit

      Cancel thread Create`);
});
