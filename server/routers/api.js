var express = require('express');
var request = require('request');
var bcrypt = require('bcrypt');

//db comes from index. This syntax means that I have access to db without having to require it.
module.exports = function(db) {

  var router = express.Router();


  //-----------check existing data--------------------//
  router.post('/login', function(req, res) {

    db.checkDetails('gideon', 'frizbee', function(err, data) {
      if (err) {
        console.log('error checking data:', err);
        res.sendStatus(404);
      } else if (!data) {
        console.log('password does not match');
        res.sendStatus(404);
      } else {
        console.log('password matches!');
        res.sendStatus(200);
      }
    });

  });
  

  //-----------put new data to the store-------------//
  router.post('/signup', function(req, res) {
    
    // var email = req.body.email;
    // var password = req.body.password;

    //ADDED IN FOR TESTING PURPOSES!!!!!!!! REMEMBER TO REMOVE!!!!!
    db.signupUser('gideon','frizbee', function(err, data) {
      if (err) {
        console.log('error insterting data:', err);
        res.sendStatus(500);
      } else {
        //returns true or false
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


