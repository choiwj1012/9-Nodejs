// declare variable
var articles = [];

// extract module
var http = require('http');
var express = require('express');

// use express
var app = express();
console.log("express 기반 웹 서버 생성 성공");
app.use(express.static('views/article'));
app.use(express.bodyParser());
app.use(app.router);

// insert
app.all('/insert', function(request, response){

  // requestString으로 넘어온 parameter value 추출
  var number = request.param('number');
  var title = request.param('title');
  var content = request.param('content');
  var writer = request.param('writer');

  var article = {
    'number' : number,
    'title' : title,
    'content' : content,
    'writer' : writer
  };

  var prev_array_length = articles.length;
  articles.push(article);
  var next_array_length = articles.length;

  var isSuccess = false;
  if((next_array_length - prev_array_length) == 1){
    isSuccess = true;
  }

  response.send(isSuccess);

});

// selectAll
app.all('/selectAll', function(request, response){

  response.send(articles);

});

// create a Server
http.createServer(app).listen(52273, function(){
  console.log('Server Running at http://127.0.0.1:52273');
});
