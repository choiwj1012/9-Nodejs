// extract module
var http = require('http');

// create web server and run server
http.createServer(function(request,response){

  // writeHead(Status Code,...) Status Code 302는 강제 페이지 이동을 구현할 때 가장 많이 사용함

  // HTTP Status Code example
  /* 1xx // 처리중          // ex) 100 continue
   * 2xx // 성공            // ex) 200 OK
   * 3xx // 리다이렉트      // ex) 300 Multiple Choices
   * 4xx // 클라이언트 오류 // ex) 400 Bad request
   * 5xx // 서버 오류      // ex) 500 Internal Server Error */
   
  response.writeHead(404);
  //response.writeHead(302, {'Location':'http://choiwj1012.cafe24.com'});
  response.end();

}).listen(52273, function(){

  console.log('Server Running at http://127.0.0.1:52273');

});
