// cookie가 생기면 cookie 정보 출력함

// extract module
var http = require('http');

// use module
http.createServer(function(request, response){

  // GET COOKIE
  var cookie = request.headers.cookie;

  // SET cookie
  response.writeHead(200, {

    'Content-Type' : 'text/html',
    'Set-Cookie' : ['name = RintIanTta', 'region = Seoul']

  });

  // response
  response.end('<h1>' + JSON.stringify(cookie) + '</h1>');

}).listen(52273, function(){

  console.log('Server Running at http://127.0.0.1:52273');

});
