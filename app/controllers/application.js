import Ember from 'ember';

export default Ember.Controller.extend({
  ajax: Ember.inject.service(),

  options: [
    {name: "http://mu.semte.ch/users/principle"},
    {name: "http://mu.semte.ch/users/teacher1"},
    {name: "http://mu.semte.ch/users/student1"}
  ],

  selectedOption: null,

  actions: {
    setOption(option) {
      const _this = this;
      this.set('selectedOption', option);
      let prom = Ember.$.post("http://localhost:9000/as/auth", { user: option.name });
      prom.catch(error => {
        console.log("error");
        _this.send('userChanged');
      });
      return prom.then(result => {
        _this.send('userChanged');
      })
    }
  }
});
