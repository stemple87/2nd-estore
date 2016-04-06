// Params is not speficic to trash???
//  Where is the trash model being past in?

import Ember from 'ember';

export function trashCost(params) {
  var trashPrice = params[0].get('cost');
  // console.log(params[0]);
  if (trashPrice >= 150){
    return '$$$$';
  } else if (trashPrice >= 100){
    return '$$$';
  } else if (trashPrice >= 50){
    return '$$';
  } else if (trashPrice <= 49){
    return '$';
  }
}

export default Ember.Helper.helper(trashCost);
