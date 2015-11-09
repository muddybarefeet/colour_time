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
  }

});