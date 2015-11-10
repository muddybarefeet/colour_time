var login = Backbone.View.extend({


  el: '#app',
  //have a template for the basic layout of the page
  initialize: function() {
    console.log('init',this.checkData);
  },

  template: _.template('<h2>Login</h2>Email: <input type="text" class="name"><br>Password: <input class="password" type="text"><br><button class="sendNew">Submit</button>'),

  events: {
    "click button" : 'checkData',
  },

  render: function() {
    //take the input and send to the server
    console.log('in send data function', this.$el);
    this.$el.html(this.template());
  },

  checkData: function() {
    console.log('checking data');
    //take inputs and sends them to the model to process
    var email = $('.email').val();
    var password = $('.password').val();
    this.model.matchClientData([email,password]);
  }


});