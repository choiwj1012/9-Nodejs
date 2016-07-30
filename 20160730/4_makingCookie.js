/* cookie는 key와 value가 들어있는 작은 data piece로 name, value, destroy data, path infomation 등이 있다.
   cookie는 server와 client에서 모두 save, use 가능하고, 일정 기간 동안 data를 save할 수 있으므로 log-in상태를
   일정기간 동안 유지해야 하는 facebook과 같은 web site에 사용한다. */

// extract module
var http = require('http');

// create server and run server
http.createServer(function(request, response){

  // declare variable
  var date = new Date();
  date.setDate(date.getDate() + 7);

  // input cookie
  response.writeHead(200, {
    'Content-Type' : 'text/html',
    'Set-Cookie' : [
      'breakfast = toast;Expires = ' + date.toUTCString(),
      'dinner = chicken'
    ]
  });

  // output cookie
  response.end('<h1>' + request.headers.cookie + "</h1>")

}).listen(52273, function(){

  console.log('Server Running at http://127.0.0.1:52273');

});
