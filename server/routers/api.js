var express = require('express');
var request = require('request');
var bcrypt = require('bcrypt');

//db comes from index. This syntax means that I have access to db without having to require it.
module.exports = function(db) {

  var router = express.Router();

  //router.store = [{email:'a', password:'a'}];

  //-----------check existing data--------------------//
  router.post('/login', function(req, res) {

    for(var i=0; i<router.store.length; i++) {
      if (router.store[i].email === req.body.email) {
        //compare the password
        bcrypt.compare(req.body.password, router.store[i].password, function(err, res) {
          //of the password matches
          if (res) {
            console.log('match',res);
            res.sendStatus(200);
          } else {
            console.log('not matched');
            res.sendStatus(404);
          }
        });

      }
    }

  });

  //-----------put new data to the store-------------//
  router.post('/signup', function(req, res) {
    
    // var email = req.body.email;
    // var password = req.body.password;

    //ADDED IN FOR TESTING PURPOSES!!!!!!!! REMEMBER TO REMOVE!!!!!
    db.signupUser('anna','huggada', function(err, data) {
      if (err) {
        console.log('error insterting data:', err);
        res.sendStatus(500);
      } else {
        //might need content type application json??!!
        res.status(200).send(data);
      }
    });

  });

  //-----------send a request to the colour api-------------//
  router.get('/colours', function(req, res) {

    request('http://www.colourlovers.com/api/palettes/random?format=json', function(err, response, body) {
      if (err) {
        console.log('err in getting colours:',err);
      } else {
        var colourArray = JSON.parse(body);
        var colours = colourArray[0].colors;
        //add hashes to the front of the colours
        var hexVals = [];
        colours.map(function(colour) {
          hexVals.push('#'+colour);
        });
        //then send this back to the model to be sent to the function to work out the widths
        res.status(200).send(hexVals);
      }

    });

  });

  return router;

};
