
var appModel = Backbone.Model.extend({
  
  initialize: function() {
    console.log('in model');
  },

  //calculate the height of the colour bands MAY NEED TO TWEEK SO UPDATES IN WINDOW RESIZE LEAVE FOR MOMENT
  resize: function(array) {
    // $(window).resize(function() {
    var totalHeight = window.innerHeight;
    var eachBand = totalHeight/array.length;

    return eachBand;
    // });
  },

  getColor: function(title){
    var that = this;
    $.ajax({
      type: 'GET',
      url: 'http://www.colourlovers.com/api/palette/444?format=json',
      headers: {'API-Key': '697wgfynhw53p7fzsw7dbder'},
      success: function(data) {
        console.log('data',data);
        console.log('success!');
      },
      error: function(err) {
        console.log('no available');
      }
    });
  },

  sendClientData: function(data) {
    //POST
    console.log('in client Data');//YES!!!
    //take the data and send a request to the server
    // request("http://localhost:3000/api/signup", function(err, response) {

    // });
  },

  matchClientData: function(data) {
    //POST
    //take the data and send a request to the server
    console.log('incoming data', data);
    /*request("http://localhost:3000/api/longin", function(err, response) {

    });*/
  }

});