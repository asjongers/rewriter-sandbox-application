import Ember from 'ember';
import Model from 'ember-data/model';
import attr from 'ember-data/attr';
import { hasMany } from 'ember-data/relationships';

export default Model.extend({
  // A string representation of this model, based on its attributes.
  // This is what mu-cl-resources uses to search on, and how the model will be presented while editing relationships.
  stringRep: Ember.computed.collect.apply(this,['name', 'role']),

  name: attr('string'),
  email: attr('string'),
  role: attr('string'),
  classesTaught: hasMany('class', {inverse: null }),
  classesTaken: hasMany('class', {inverse: null }),
  earnedGrades: hasMany('grade', {inverse: null })
});
