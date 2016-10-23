// extract module
var http = require('http');
var fs = require('fs');

// use module
http.createServer(function(request, response){

  if(request.method == 'GET'){

    // GET request
    fs.readFile('HTMLPage_2.html', function(error, data){

      response.writeHead(200, { 'Content-Type' : 'text/html' });
      response.end(data);

    });

  } else if(request.method == 'POST'){

    // POST request
    request.on('data', function(data){

      response.writeHead(200, { 'Content-Type' : 'text/html' });
      response.end('<h1>' + data + '</h1>');

    });
    
  }

}).listen(52273, function(){

  console.log('Server Running at http://127.0.0.1:52273');

});
