// create a server and run
require('http').createServer(function(request, response){
  // if, client가 default path로 connect하는 경우
  if(request.url == '/'){
    // response
    response.write('<!DOCTYPE html>');
    response.write('<html>');
    response.write('<head>');
    response.write(' <title>forever</title>');
    response.write('</head>');
    response.write('<body>');
    response.write('  <h1>forever</h1>');
    response.write('</body>');
    response.write('</html>');
  }else{
    // occur error
    error.error.error();
  }
}).listen(52273,function(){
  console.log('Server running at http://127.0.0.1:52273');
})
