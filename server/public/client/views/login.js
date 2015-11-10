var login = Backbone.View.extend({


  el: '#app',
  //have a template for the basic layout of the page
  initialize: function() {
    console.log('init',this.checkData);
  },

  template: _.template('<h2>Login</h2>Email: <input class="email" type="text" class="name"><br>Password: <input class="password" type="text"><br><button class="sendNew">Submit</button>'),

  events: {
    "click button" : 'checkData',
  },

  render: function() {
    //take the input and send to the server
    this.$el.html(this.template());
  },

  checkData: function() {
    //take inputs and sends them to the model to process
    var email = $('.email').val();
    var password = $('.password').val();
    this.model.matchClientData({email: email,password: password});
  }


});