import DS from 'ember-data';

export default DS.Model.extend({
  video: DS.attr('string'),
  post: DS.belongsTo('post')
});
