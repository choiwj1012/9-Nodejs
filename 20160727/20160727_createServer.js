/*
// module 추출
var http = require('http');
// create web server
var server = http.createServer();
*/

var server = require('http').createServer();

// start web server
server.listen(52273,function(){
  console.log('Server Running at http://127.0.0.1:52273');
});

var test = function(){
  server.close();
};

setTimeout(test, 10000);

/* 길이가 짧은 웹 서버의 생성과 실행
require('http').createServer(function(request,response){
  response.writeHead(200, {'Content-Type' : 'text/html'});
  response.end('<h1> Hello World .. ! </h1>');
}).listen(52273); */
