//notice the findRecord(2 args) instead of findAll()

import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {
    return this.store.findRecord('trash', params.trash_id);
  },
  actions: {
    update(trash, params) {
      Object.keys(params).forEach(function(key) {
        if(params[key]!==undefined) {
          trash.set(key,params[key]);
        }
      });
      trash.save();
      this.transitionTo('trash');
    },
    destroyPost(trash) {
      trash.destroyRecord();
      this.transitionTo('index');
    }
  }
});
