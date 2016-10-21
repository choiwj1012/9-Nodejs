// extract module
var http = require('http');

// create web server
var server = http.createServer();

// method on server object
// listen(port[, callback]); => 서버를 실행한다
// close([callback]); => 서버를 종료한다

// start web server
server.listen(52273, function(){
	
	console.log('Server Running at http://127.0.0.1:52273');
	
});

// start function after 10 seconds
var test = function(){
	
	// close server
	server.close();
	
};

setTimeout(test, 10000);
