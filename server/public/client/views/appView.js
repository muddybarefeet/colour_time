var appView = Backbone.View.extend({


  initialize: function() {

    console.log('appView');
    var app = this.model;
    this.router = new Router(app);


    this.router.navigate('/signup', true);

    Backbone.history.start();
    Backbone.history.loadUrl(Backbone.history.fragment);

  }

});
