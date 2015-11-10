var express = require('express');
var request = require('request');
var app = express();

/*app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});
*/
//app.use('/public', express.static(__dirname + '/public'));

//---------------------------------------------------//

var store = [];

app.get('api/login', function(req, res) {
  //get find the stored info on the database
  console.log('checking login details',req);
});


//post things to database
app.post('/api/signup', function(req, res) {
  //take the request and save to an object
  console.log(req.body);
});

var server = app.listen(3000, function () {
  var host = server.address().address;
  var port = server.address().port;

  console.log('Example app listening at', host, port);
});