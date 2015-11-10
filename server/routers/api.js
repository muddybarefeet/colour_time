var express = require('express');
var router = express.Router();
var request = require('request');

router.post('/login', function(req, res) {
  //get find the stored info on the database
  console.log('checking login details',req.body);
});

//post things to database
router.post('/signup', function(req, res) {
  //take the request and save to an object
  console.log('storing signin details',req.body);
});

router.get('/colours', function(req, res) {
  //send request to the coulour api
  request('http://www.colourlovers.com/api/palettes/random?format=json', function(err, response, body) {
    //package the response Anna!
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