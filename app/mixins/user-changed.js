import Ember from 'ember';

export default Ember.Mixin.create({
  actions: {
    userChanged(){
      this.refresh();
    }
  }
});
