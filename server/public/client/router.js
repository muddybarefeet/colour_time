
//how to call the router....?!

var Router = Backbone.Router.extend({

  routes : {
    "signup" : "signup",
    "login" : "login",
    "displayMain" : "displayMain"
  },

  model: undefined,

  initialize : function(arg) {
  //keep hold of the model for the views passed from index to appView to here
    this.model = arg;
  },

  signup: function() {
    $('div.pages').hide();
    $('div#app').show(new signup({model: this.model}));
  },

 /* login : function() {
    console.log('in login');
    $('div.pages').hide();
    $('div#app').show(new login({model: this.model}));
  },
*/
  displayMain : function() {
    $('div.pages').hide();
    $('div#app').show(new colours({model: this.model}));
  }

});
