var colours = Backbone.View.extend({

  //get the collection of data extract the data and render it

  initialize: function(){
    //this.render();
  },

  render: function() {
    var colourArray = this.model.attributes.colours.models[0].attributes.colors;
    //loop through the array, add '#' to the front of each
    var hexVals = [];
    colourArray.map(function(colour) {
      hexVals.push('#'+colour);
    });
    
    //calculate the screen size and work out the widths this should be in the model
    var colourWidth = this.model.resize(hexVals);
    //put stuff on the screen!
    console.log(hexVals);
    
    hexVals.forEach(function(hex) {
      //each thing in hexVals make a div and append to the screen
      $('body').append('<div style="background-color:'+hex+';height:'+colourWidth+'px;">'+ hex +'</div>');
      //where to call the render to be triggered on window resize... have an EVENT LISTENER ANNA!

    }.bind(this));


  },

/*  renderWithWidth= function(width) {
    //
  }*/

});