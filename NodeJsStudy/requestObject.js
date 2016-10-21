// request 객체의 속성
// method => 클라이언트의 요청 방식을 나타냅니다
// url => 클라이언트가 요청한 URL을 나타냅니다
// header => 요청 메시지 헤더를 나타냅니다
// trailers => 요청 메시지 트레일러를 나타냅니다
// httpVerstion => HTTP 프로토콜 버전을 나타냅니다

// extract module
var http = require("http");
var fs = require("fs");
var url = require("url");

// create a server and start
http.createServer(function(request, response){

  // declare variable
  var pathname = url.parse(request.url).pathname;

  // pathname은 http://127.0.0.1:52273/, 에서 마지막 '/'뒤가 pathname이다.
  // seperate page
  if(pathname == '/'){

    // read index.html file
    fs.readFile('index.html', function(error, data){
      // response
      response.writeHead(200, { 'Content-Type' : 'text/html' });
      response.end(data);
    });

  } else if (pathname == '/Otherpage'){

    // read OtherPage.html file
    fs.readFile('OtherPage.html', function(error, data){
      // response
      response.writeHead(200, { 'Content-Type' : 'text/html' });
      response.end(data);
    });

  }

}).listen(52273, function(){

  console.log('Server Running at http://127.0.0.1:52273');

});
