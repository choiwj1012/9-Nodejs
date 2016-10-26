// extract module
var express = require('express');

// create server
var app = express();

// setup request event listener
// app.use(function(request, response){
//
//   // create data
//   var output = [];
//   for (var i = 0; i < 3; i++){
//     output.push({
//       count : i,
//       name : 'name - ' + i
//     });
//   }
//
//   response.send(output);
//
// });

// setup request event listener
app.use(function(request, response, next){

  // -- request 객체의 속성과 메서드 --
  // param 라우팅 매개변수를 추출한다
  // query 요청 매개변수를 추출한다
  // headers 요청 헤더를 추출한다
  // header() 요청 헤더의 속성을 지정 또는 추출한다
  // accepts(type) 요청 헤더의 Accept 속성을 확인한다
  // is(type) 요청 헤더의 Content-Type 속성을 확인한다

  // response
  // 상태 코드만 전달하고 싶을 때는 response.sendStatus(404) 형태로 sendStatus() 메서드를 사용한다.
  response.status(404).send('<h1>ERROR</h1>');

});

// start server
app.listen(52273, function(){

  console.log("Server Running at http://127.0.0.1:52273");

});
