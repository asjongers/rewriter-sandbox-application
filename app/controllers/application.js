import Ember from 'ember';

export default Ember.Controller.extend({
  ajax: Ember.inject.service(),

  options: [
    {user: "http://mu.semte.ch/users/principle"},
    {user: "http://mu.semte.ch/users/teacher1"},
    {user: "http://mu.semte.ch/users/student1"}
  ],

  init() {
    const _this = this;
    let prom = Ember.$.get("/as/auth");
    prom.catch(error => {
      console.log("Couldn't get user");
      _this.set('selectedOption', null);
    });
    prom.then(result => {
      if(result.user) {
        _this.set('selectedOption', result);
      }
      else {
          _this.set('selectedOption', {user: "[select logged-in user]"});
        }
    });
    this._super();
  },

  selectedOption: null,

  actions: {
    setOption(option) {
      const _this = this;
      this.set('selectedOption', option);
      let prom = Ember.$.post("/as/auth", { user: option.user });
      prom.catch(error => {
        console.log("Couldn't post new user.");
        _this.send('userChanged');
      });
      return prom.then(result => {
        _this.send('userChanged');
      })
    },
    clearData(){
        Ember.$.ajax({ 
            url: "/as/clear",
            type: 'DELETE',
            success: function(){
                alert('Data cleared. Please refresh this page.');
            }
        });
    },
    generateData(){
        Ember.$.post("/generate/generate").then(function(){
            alert('Data being generated asynchronously. Please refresh this page.');
        })
    }
  }
});
