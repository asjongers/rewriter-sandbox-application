import Ember from 'ember';
import UserChangedMixin from 'query-rewriter-frontend/mixins/user-changed';
import { module, test } from 'qunit';

module('Unit | Mixin | user changed');

// Replace this with your real tests.
test('it works', function(assert) {
  let UserChangedObject = Ember.Object.extend(UserChangedMixin);
  let subject = UserChangedObject.create();
  assert.ok(subject);
});
