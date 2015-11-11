var signup = Backbone.View.extend({


  //have a template for the basic layout of the page
  el: '#app',

  initialize: function() {
    this.render();
  },

  template: _.template('<div class="inset"><h2>Sign Up</h2>Email: <input type="text" class="email space"><br>Password: <input class="password space" type="password"><br><input class="submit btn" type="submit" value="Submit"></div>'),

  events: {
    "click .submit" : "sendData",
  },

  render: function() {
    //take the input and send to the server
    this.$el.html(this.template());
  },

  sendData: function() {
    //take inputs and sends them to the model to process
    //take inputs and sends them to the model to process
    var email = $('.email').val();
    var password = $('.password').val();
    this.model.sendClientData({email:email,password:password});
  }


});