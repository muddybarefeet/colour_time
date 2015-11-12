var db = require('./db/pre_db');
var apiRouter = require('./routers/api.js');//function that when invoked will return a router to user

var express = require('express');
var request = require('request');
//make body visible to me from request
var bodyParser = require('body-parser');
var morgan = require("morgan");
var app = express();

apiRouter = apiRouter(db);

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.use(morgan('dev'));
app.use(bodyParser.json()); // for parsing application/json format so body can be read
// app.use(function(req, res, next){
//   //do stuff to request and response
//   //if note calling next, better bloody well do res.send(SOMETHING);
//   next();
// });
app.use('/api', apiRouter);

app.use('/', express.static(__dirname + '/public/')); //for serving the first page as a static file

//---------------------------------------------------//

var server = app.listen(3000, function () {
  var host = server.address().address;
  var port = server.address().port;

  console.log('Example app listening at', host, port);
});