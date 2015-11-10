var appView = Backbone.View.extend({

  el: '#app',

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

  render: function(page) {
    //add the new page to the page
    this.$el.append(page);
  }


});
