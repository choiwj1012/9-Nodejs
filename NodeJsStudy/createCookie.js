// cookie는 key와 value가 들어있는 작은 데이터 조각이다.
// cookie에는 이름, 값, 파기 날짜와 경로 정보가 있다.
// cookie는 server와 client에서 모두 저장하고 사용할 수 있다.
// cookie는 일정 기간 동안 데이터를 저장할 수 있으므로 로그인 상태를
// 일정 시간 동안 유지해야 하는 페이스북과 같은 웹 사이트에 사용한다.

// extract http module
var http = require('http');

// create a server and start
http.createServer(function(request, response){

  // declare variable
  var date = new Date();
  date.setDate(date.getDate() + 7);

  // cookie
  response.writeHead(200, {

    'Content-Type' : 'text/html',
    'Set-Cookie' : [
      'breakfast = toast; Expires = ' + date.toUTCString(),
      'dinner = chicken'
    ]

  });

  // print cookie
  response.end('<h1>' + request.headers.cookie + '</h1>');

}).listen(52273, function(){

  console.log('Server Running at http://127.0.0.1:52273');

});
