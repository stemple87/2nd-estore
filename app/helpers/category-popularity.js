import Ember from 'ember';

export function categoryPopularity(params/*, hash*/) {
  var category = params[0];

  if(category.get('trashes').get('length') >= 5) {
    return Ember.String.htmlSafe('<span class="glyphicon glyphicon-fire"></span>');
  }
}

export default Ember.Helper.helper(categoryPopularity);
