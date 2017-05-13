import DS from 'ember-data';

const path = "replies/";

export default DS.Model.extend({
  timestamp: DS.attr('date'),
  thread: DS.belongsTo('thread'),
  video: DS.attr('string')
});
