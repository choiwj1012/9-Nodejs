// extract module
var express = require('express');

// create Server
var app = express();

// setup router
app.get('/a', function(request, response){

  response.send('<a href="/b"> Go to B </a>');

});

app.get('/b', function(request, response){

  response.send('<a href="/a"> Go to A </a>');

});

app.listen(52273, function(){

  console.log('Server running at http://127.0.0.1:52273');
  
});
