//This file is essentially a 'blueprint' listing out the attributes each of our trashes should contain. Let's add the same attributes we previously used in our hard-coded array of JavaScript objects: Owner, category, type, image, and bedrooms:

//trash.category we'll need to instead use trash.category.name
import DS from 'ember-data';

export default DS.Model.extend({
  author: DS.attr(),
  category: DS.belongsTo('category', { async: true }),
  title: DS.attr(),
  image: DS.attr(),
  body: DS.attr(),
  price: DS.attr()
});
