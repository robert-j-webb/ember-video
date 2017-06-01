import DS from 'ember-data';

export default DS.Model.extend({
  timestamp: DS.attr('date'),
  order: DS.attr('number'),
  video: DS.attr('string'),
});
