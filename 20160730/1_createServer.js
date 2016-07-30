// extract module

var fs = require('fs');
var http = require('http');

// create web server and run server

http.createServer(function(request, response){

  // read HTML file
  fs.readFile('HTMLpage.html',function(error, data){
    response.writeHead(200, {'Content-Type':'text/html'});
    response.end(data);
  });

}).listen(52273, function()
{
  console.log('Server Running at http://127.0.0.1:52273');
});
