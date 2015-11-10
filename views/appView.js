var appView = Backbone.View.extend({

  initialize: function() {
    //here instantiate the other views
    // this.render
    // this.main = new colours({});
    // this.login = new login({});
    // this.signup = new signup({});
    //$('#app').append(this.render().el);

    this.router = new Router();
    // this.router.on('route', this.updateNav, this);
    //Backbone.history.start({ pushState: true });

  },

  render: function() {
    //add the new elements to the page
  }


});
