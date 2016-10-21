// extract module
var http = require('http');

create web server and start
http.createServer(function(request, response){

  response.writeHead(302, { 'Location' : 'http://choiwj1012.cafe24.com' });
  response.end();

}).listen(52273, function(){

  console.log('Server Running at http://127.0.0.1:52273')

});

// HTTP Status Code Example
// 1xx : 처리 중 : 100 Continue
// 2xx : 성공 : 200 OK
// 3xx : 리다이렉트 : 300 Multiple Choices
// 4xx : 클라이언트 오류 : 400 Bad request
// 5xx : 서버 오류 : 500 Internal Server Error

// 404 page
// http.createServer(function(request, response){
//
//   response.writeHead(404);
//   response.end();
//
// }).listen(52273, function(){
//
//   console.log('Server Running at http://127.0.0.1:52273');
//
// });
