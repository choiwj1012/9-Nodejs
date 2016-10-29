// extract module
var express = require('express');

// create a Server
var app = express();

// setup router
app.get('/page/:id', function(request, response){

  // declare variable
  var name = request.params.id;

  // response
  response.send('<h1>' + name + 'Page</h1>');

});

// start Server
app.listen(52273, function(){

  console.log('Server running at http://127.0.0.1:52273');
  
});
