
var appModel = Backbone.Model.extend({
  
  initialize: function() {

  },

  //calculate the height of the colour bands MAY NEED TO TWEEK SO UPDATES IN WINDOW RESIZE LEAVE FOR MOMENT
  resize: function(array) {
    // $(window).resize(function() {
    var totalHeight = window.innerHeight;
    var eachBand = totalHeight/array.length;
    return eachBand;
    // });
  },

  getPallett: function() {
    console.log('in pallett getter');
    var that = this;
    $.ajax({
      type: 'GET',
      url: 'http://localhost:3000/api/colours',
      success: function(data) {
        that.set('colours', data);
        console.log('return this', that);
      },
      error: function(err) {
        console.log('no available');
      }
    });
  },

  sendClientData: function(userDetails) {
    console.log(userDetails);
    console.log('in client Data');
    $.ajax({
      type: 'POST',
      url: 'http://localhost:3000/api/signup',
      contentType: "application/json; charset=utf-8",
      data: JSON.stringify(userDetails),
      success: function(data) {
        console.log(data);
        console.log('success!');
      },
      error: function(err) {
        console.log('no available');
      }
    });
  },

  matchClientData: function(userDetails) {

    $.ajax({
      type: 'POST',
      url: 'http://localhost:3000/api/login',
      contentType: "application/json; charset=utf-8",
      data: JSON.stringify(userDetails),
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