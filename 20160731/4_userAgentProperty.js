// extract module
var express = require('express');

// create a server
var app = express();

// setup a middleware
app.use(function(request, response){

  // extract User-agent property
  var agent = request.header('User-Agent');
  console.log(request.headers);
  console.log(agent);

  // response
  // 상태 코드만 보낼 때는 sendStatus() 메서드를 사용한다.
  response.sendStatus(200);

});

// running a server
app.listen(52273, function(){
  console.log('Server running at http://127.0.0.1:52273');
});
