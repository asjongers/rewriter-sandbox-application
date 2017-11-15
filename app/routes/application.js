import Ember from 'ember';

export default Ember.Route.extend({
  actions: {
    error(error, transition) {
      let controller = this.controllerFor('error');
      controller.set('id', transition.params[transition.targetName].id);
      controller.set('error', error);
      return true;
    }
  }
});
