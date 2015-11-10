
//how to call the router....?!

var Router = Backbone.Router.extend({

  routes : {
    " " : "index",
    "signin" : "signin",
    "login" : "login"
  },

  signin : function() {
    //make a new signin instance
    var signin = new /*views.signin*/();
  },

  login : function() {
    //make a new login instance
    var login = new /**/;
  },

  index : function() {
    /*var links = new Shortly.Links();
    var linksView = new Shortly.LinksView({ collection: links });*/
    //make a new page instance
    var index = new /**/({collection:});
  },

  swapView: function(view){
    this.$el.html(view.render().el);
  },

/*  loadView : function(view) {
    this.view && this.view.remove();
    this.view = view;
  }*/

});