// extract module
var express = require('express');

// create a server
var app = express();

// setup a middleware
app.use(function(request, response, next){

  // declare variable
  var name = request.query.name;
  var region = request.query.region;

  // reponse
  response.send('<h1>' + name + '-' + region + '</h1>');
});

// running a server
app.listen(52273, function(){
  console.log('Server running at http://127.0.0.1:52273');
});
