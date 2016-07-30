// extract module

var http = require('http');
var fs = require('fs');
var url = require('url');

// create web server and run server

http.createServer(function(request, response){

  // declair variable
  var pathname = url.parse(request.url).pathname;

  // separate page
  if(pathname == '/'){
    // read HTMLpage.html
    fs.readFile('HTMLpage.html', function(error, data){
      // response
      response.writeHead(200, {'Content-Type' : 'text/html'});
      response.end(data);
    });
  }else if(pathname == '/OtherPage'){
    fs.readFile('HTMLpage_2.html', function(error, data){
      // read HTMLpage_2.html
      response.writeHead(200, {'Content-Type' : 'text/html'});
      response.end(data);
    });
  }
}).listen(52273, function(){
  console.log('Server Running at http://127.0.0.1:52273');
});
