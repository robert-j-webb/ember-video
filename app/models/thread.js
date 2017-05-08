import DS from 'ember-data';

const path = "threads/";

export default DS.Model.extend({
  timestamp: DS.attr('date'),
  title: DS.attr('string'),
  link: DS.attr('string'),
  video: DS.attr('string')
});
