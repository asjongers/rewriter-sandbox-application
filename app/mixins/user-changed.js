import Ember from 'ember';

export default Ember.Mixin.create({
  actions: {
    userChanged(){
      let model = this.modelFor(this.get('router').currentRouteName);
      if(!model){ this.refresh(); return null;}

      let refresh = function(record){
        return record.reload().then(record => {
          if(!record) {return null;}
          return record.eachRelationship(function(name, descriptor) {
            record[descriptor.kind](name).reload();
          });
        });
      };
      if(!model.forEach)
      {
        refresh(model);
        return this.refresh();
      }
      else
      {
        model.forEach(item => {
          refresh(item);
        });
        return this.refresh();
      }
    }
  }
});
