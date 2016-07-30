// extract module
var http = require('http');
var url = require('url');

// using module
http.createServer(function(request,response){
  // extract requested parameter
  var query = url.parse(request.url, true).query;

  // output GET requested parameter
  response.writeHead(200, {'Content-Type' : 'text/html'});
  response.end('<h1>' + JSON.stringify(query) + '</h1>');

}).listen(52273, function(){

  console.log('Server Running at http://127.0.0.1:52273');

});

// http://127.0.0.1:52273?name=blabla&region=ansan 과 같은 형식으로 실행
