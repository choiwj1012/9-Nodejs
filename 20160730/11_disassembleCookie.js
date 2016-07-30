// disassemble a cookie
var http = require('http');

// using module
http.createServer(function(request, response){

  // check being a cookie
  if(request.headers.cookie){

    // extract cookie and disassemble
    var cookie = request.headers.cookie.split(';').map(function(element){
      var element = element.split('=');
      return{
        key : element[0],
        value : element[1]
      };
    });

    // response
    response.end('<h1>'+JSON.stringify(cookie)+'</h1>');
  }else{

    //making a cookie
    response.writeHead(200, {
      'Content-Type' : 'text/html',
      'Set-Cookie' : ['name = akaraka', 'region = ansan']
    });

    // response
    response.end('<h1> 쿠키를 생성했습니다 </h1>');
  }
}).listen(52273, function(){

  console.log('Server Running at http://127.0.0.1:52273');
});
