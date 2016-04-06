import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {
    return this.store.findRecord('category', params.category_id);
  },
    actions: {
      save3(params) {
      var newPost = this.store.createRecord('trash', params);
      var category = params.category;
      category.get('trashes').addObject(newPost);
      newPost.save().then(function() {
        return category.save();
      });
      this.transitionTo('category', params.category);
    },
    destroyCategory(category) {
      var trash_deletions = category.get('trashes').map(function(trash) {
        return trash.destroyRecord();
      });
      Ember.RSVP.all(trash_deletions).then(function() {
        return category.destroyRecord();
      });
      this.transitionTo('index');
    }
  }
});
