//and define its attributes:

import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr(),
  trashes: DS.hasMany('trash', { async: true })
});
