// response object method
// writeHead(statusCode[, statusMessage][, headers]) => 응답 헤더를 작성
// end([data][, encoding][, callback]) => 응답 본문을 작성

// create web server and start
require('http').createServer(function(request, response){
	
	// response
	response.writeHead(200, {'Content-Type' : 'text/html'});
	response.end('<h1> Hello Web Server with Node.js </h1>');
	
}).listen(52273, function(){
	
	console.log('Server Running at http://127.0.0.1:52273');
	
});

