import Ember from 'ember';

export default Ember.Component.extend({
  addNewPost: false,
  actions: {
    trashFormShow() {
      this.set('addNewPost', true);
    },

    save1() {
      var params = {
        author: this.get('author'),
        category: this.get('category'),
        title: this.get('title'),
        image: this.get('image'),
        body: this.get('body'),
        price: parseInt(this.get('price'))
      };
      this.set('addNewPost', false);
      this.sendAction('save2', params);
    }
  }
});
