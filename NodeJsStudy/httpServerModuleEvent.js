// extract module 
var http = require('http');

// create server object
var server = http.createServer();

// server object Event
// request => 클라이언트가 요청할 때 발생하는 이벤트
// connection => 클라이언트가 접속할 때 발생하는 이벤트
// close => 서버가 종료될 때 발생하는 이벤트
// checkContinue => 클라이언트가 지속적인 연결을 하고 있을 때 연결하는 이벤트
// upgrade => 클라이언트가 HTTP 업그레이드를 요청할 때 발생하는 이벤트
// clientError => 클라이언트에서 오류가 발생할 때 발생하는 이벤트


// connect event on server object
server.on('request', function(code){
	
	console.log('Request On');
	
});


server.on('connection', function(code){
	
	console.log('Connection On');
	
});


server.on('close', function(code){
	
	console.log('Close On');
	
});


// start listen() method
server.listen(52273);

