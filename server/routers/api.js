var express = require('express');
var router = express.Router();
var request = require('request');
var bcrypt = require('bcrypt');

router.store = [{email:'a', password:'a'}];

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

  var password = req.body.password;
  
  bcrypt.genSalt(10, function(err, salt) {
    bcrypt.hash(password, salt, function(err, hash) {
      var toStore = {};
      toStore.email = req.body.email;
      toStore.password = hash;
      router.store.push(toStore);
      res.sendStatus(200);
    });
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




module.exports = router;