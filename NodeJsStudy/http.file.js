// extract module
var fs = require('fs');
var http = require('http');

// create web server and start
http.createServer(function(request, response){

  // read HTML file
  // fs.readFile('HTMLpage.html', function(error, data){
  //   response.writeHead(200, {'Content-Type' : 'text/html'});
  //   response.end(data);
  // });

  fs.readFile('pic.jpg', function(error, data){
    response.writeHead(200, {'Content-Type' : 'image/jpg'});
    response.end(data);
  });

  // Content-Type 속성을 이용해 어떠한 데이터든 제공이 가능하다.
  // 예)
  // text/plain, text/html, text/css, text/xml
  // image/jped, image/png, video/mpeg, audio/mp3

  // fs.readFile()은 한가지만 실행된다. 두개 연속해서 실행하면
  // 맨 위 하나만 실행된다.
  
}).listen(52273, function(){
  console.log('Server Running at http://127.0.0.1:52273');
});
