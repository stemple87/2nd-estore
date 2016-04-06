//only route handlers may create, delete or update objects in our data store
import Ember from 'ember';

export default Ember.Component.extend({
  isImageShowing: false,
 actions: {
   delete(trash) {
     if(confirm('Are you sure you want to delete this trash forever? ever ever!')) {
       this.sendAction('destroyPost', trash);
     }
   },
    imageShow: function() {
      this.set('isImageShowing', true);
    },
    imageHide: function() {
      this.set('isImageShowing', false);
    },
    update(trash, params) {
      this.sendAction('update', trash, params);
    }
  }
});
