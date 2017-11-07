import Ember from 'ember';

export default Ember.Controller.extend({
  ajax: Ember.inject.service(),

  options: [
    {name: "http://mu.semte.ch/users/principle"},
    {name: "http://mu.semte.ch/users/teacher1"},
    {name: "http://mu.semte.ch/users/student1"}
  ],

  selectedOption: Ember.computed(function(){
    let option = this.get('options')[0];
    Ember.$.post("http://localhost:9000/as/auth", { user: option.name })
    return option;
  }),

  actions: {
    setOption(option) {
      this.set('selectedOption', option);
      return Ember.$.post("http://localhost:9000/as/auth", { user: option.name })
    }
  }
});
