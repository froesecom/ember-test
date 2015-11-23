import Ember from 'ember';

export default Ember.Route.extend({
  model(){
    return [{
      name: "Zig Zags",
      website: "www.nhl.com"
    },{
      name: "Turnip",
      country: "www.google.com"
    },{
      name: "Freddy Twoshoes",
      country: "www.pants.com"
    }];
  }
});
