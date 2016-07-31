// extract module
var express = require('express');

// create server
var app = express();

// setup request event listener
app.use(function(request, response){

  // create data
  var output = [];
  for(var i=0; i<3; i++){
    output.push({
      count : i,
      name : 'name - ' + 1
    });
  }

  //response
  response.send(output);
  /* express에서 respose.send()는 매개변수의 자료형에 따라 적절한 형태로 응답한다.
   * 문자열 : html
   * 배열 : json
   * 객체 : json */

});

// running server
app.listen(52273, function(){
  console.log('Server running at http://127.0.0.1:52273');
});
