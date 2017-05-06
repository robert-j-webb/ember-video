import DS from 'ember-data';

const path = "replies/";

export default DS.Model.extend({
  video: DS.belongsTo('video')
});
