
var appModel = Backbone.Model.extend({
  
  initialize: function() {
    this.router = new Router(this);
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
      },
      error: function(err) {
        console.log('not available');
      }
    });
  },

  sendClientData: function(userDetails) {
    var that = this;
    $.ajax({
      type: 'POST',
      url: 'http://localhost:3000/api/signup',
      contentType: "application/json; charset=utf-8",
      data: JSON.stringify(userDetails),
      success: function(data) {
        if (data === 'OK') {
          that.router.navigate('/displayMain', true);
          console.log('in if', that);
        }
      },
      error: function(err) {
        console.log('not available');
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
        if (data === 404) {
          that.router.navigate('/signup', true);
        } else {
          that.router.navigate('/main', true);
        }
      },
      error: function(err) {
        console.log('not available');
      }
    });
    
  }

});