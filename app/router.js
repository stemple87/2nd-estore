import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('about');
  this.route('contact');
  this.route('trash', {path: '/trash/:trash_id'});
  this.route('category', {path: '/category/:category_id'});
});

export default Router;