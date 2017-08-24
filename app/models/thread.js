import DS from 'ember-data';

export default DS.Model.extend({
  timestamp: DS.attr('date'),
  title: DS.attr('string'),
  link: DS.attr('string'),
  video: DS.attr('string'),
  replies: DS.hasMany('reply')
});
