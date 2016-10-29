// extract module
var express = require('express');

// create a server
var app = express();

// setup middleware
app.use(function(request, response, next){

  request.number = 52;
  response.number = 273;
  next();

});

// 미들웨어를 사용하면 특정한 작업을 수행하는 모듈을 분리해서 만들 수 있다.

app.use(function(request, response, next){

  response.send('<h1>' + request.number + ' : ' + response.number + '</h1>');

});

app.listen(52273, function(){

  console.log('Server running at http://127.0.0.1:52273');

});
