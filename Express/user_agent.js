// extract module
var express = require('express');

// create server
var app = express();

// setup middleware
app.use(function(request, response){

  // extract User-agent property
  var agent = request.header('User-Agent');
  console.log(request.headers);
  console.log(agent);

  // response
  // if you want to send only state code, can use sendStatus() method
  response.sendStatus(200);

});

app.listen(52273, function(){
  console.log('Server running at http://127.0.0.1:52273');
});
