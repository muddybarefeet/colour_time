
var colours = Backbone.View.extend({

  //get the collection of data extract the data and render it

  el: '#app',

  initialize: function(){
    //this.render();
    this.model.getPallett();
    this.model.on('change:colours', function(model) {
      this.render();
    }, this);

  },



  render: function() {
    

    var data = this.model.attributes.colours;
  
    var colourWidth = this.model.resize(data);
    
    $('#app').empty();

    data.forEach(function(hex) {
      //each thing in hexVals make a div and append to the screen
      this.$el.append('<div style="background-color:'+hex+';height:'+colourWidth+'px;">'+ hex +'</div>');
      //where to call the render to be triggered on window resize... have an EVENT LISTENER ANNA!

    }.bind(this));


  }

});