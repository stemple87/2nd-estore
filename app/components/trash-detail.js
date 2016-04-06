import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    delete(trash) {
      if (confirm('Are you sure you want to delete this trash?')) {
        this.sendAction('destroyPost', trash);
      }
    }
  }
});
