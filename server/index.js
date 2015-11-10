var apiRouter = require('./routers/api.js');
var express = require('express');
var request = require('request');
//make body visible to me from request
var bodyParser = require('body-parser');
var morgan = require("morgan");


var app = express();

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});


app.use(morgan('dev'));
app.use(bodyParser.json()); // for parsing application/json format so body can be read
app.use('/api', apiRouter);

app.use('/', express.static(__dirname + '/public/')); //for serving the first page as a static file

//---------------------------------------------------//

var store = [];

var server = app.listen(3000, function () {
  var host = server.address().address;
  var port = server.address().port;

  console.log('Example app listening at', host, port);
});