
var appModel = Backbone.Model.extend({
  
  initialize: function() {

  },

  users: {
    email: 'anna',
    password: 'rogers'
  },
  //calculate the height of the colour bands MAY NEED TO TWEEK SO UPDATES IN WINDOW RESIZE LEAVE FOR MOMENT
  resize: function(array) {
    // $(window).resize(function() {
    var totalHeight = window.innerHeight;
    var eachBand = totalHeight/array.length;

    return eachBand;
    // });
  },

  sendClientData: function(userDetails) {
    //POST
    console.log('in client Data');//YES!!!
    /*this.users.email = data.email;
    this.users.password = data.password;*/
    var that = this;
    $.ajax({
      type: 'POST',
      url: 'http://localhost:3000/api/signup',
      data: userDetails,
      //headers: {'API-Key': '697wgfynhw53p7fzsw7dbder'},
      success: function(data) {
        console.log(data);
        console.log('success!');
      },
      error: function(err) {
        console.log('no available');
      }
    });
  },

  matchClientData: function(data) {
    $.ajax({
      type: 'GET',
      url: 'http://localhost:3000/api/login',
      success: function(data) {
        console.log('checked data',data);
        console.log('success!');
      },
      error: function(err) {
        console.log('no available');
      }
    });
    
  }

});