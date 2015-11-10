var signup = Backbone.View.extend({

  //have a template for the basic layout of the page
  el: '#app',

  template: _.template('<h2>Sign Up</h2>Email: <input type="text" class="email"><br>Password: <input class="password" type="text"><br><input class="submit" type="submit" value="Submit">'),

  events: {
    "click .submit" : "sendData",
  },

  render: function() {
    //take the input and send to the server
    console.log('in send data function');
    this.$el.html(this.template());
  },

  sendData: function() {
    //take inputs and sends them to the model to process
    //take inputs and sends them to the model to process
    var email = $('.email').val();
    var password = $('.password').val();
    this.model.sendClientData([email,password]);
  }


});