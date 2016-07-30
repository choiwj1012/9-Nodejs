// 쿠키는 request 객체의 headers 속성 안 cookie 속성에서 추출할 수 있다.

// extract module
var http = require('http');

// using module
http.createServer(function(request, response){

  // get cookie
  var cookie = request.headers.cookie;
  // cookie의 속성은 문자열이다.
  // 쿠키를 쉽게 사용하기 위해선 문자열을 분해해 객체의 배열로 생성하는 것이 좋다.

  // set cookie
  response.writeHead(200, {
    'Content-Type' : 'text/html',
    'Set-Cookie' : ['name = akaraka', 'region = ansan']
  });

  // response
  response.end('<h1>' + JSON.stringify(cookie) + "</h1>");

}).listen(52273, function(){

  console.log('Server Running at http://127.0.0.1:52273');
});
