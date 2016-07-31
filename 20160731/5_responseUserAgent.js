// extract module
var express = require('express');

// create a server
var app = express();

// setup a middleware
app.use(function(request, response){

  // extract user-agent property
  var agent = request.header('User-Agent');

  // classify a browser
  if(agent.toLowerCase().match(/chrome/)){
    // print a page
    response.send('<h1> Hello Chrome </h1>');
  }else{
    // print a page
    response.send('<h1> Hello express </h1>');
  }

});

// running a server
app.listen(52273, function(){
  console.log('Server running at http://127.0.0.1:52273');
});

/* 이 예제를 활용하면, 사용자가 특정 웹 브라우저를 사용할 때 라는 필터 기능을 사용할 수 있다.
 * 이를 구현하면 같은 경로로 접속해도 모바일과 데스크톱 페이지를 구분하는 것은 물론 robot.txt를
 * 무시하는 검색엔진이 무단으로 웹 페이지를 탐색하는 것을 막을 수 있고 간단한 해킹도 대비할 수 있다. */
