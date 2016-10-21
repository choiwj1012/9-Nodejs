// 모듈을 추출합니다
var http = require("http");

//// 웹 서버를 만들고 실행합니다
// http.createServer(function(request, response){
//   response.writeHead(200, {"Content-Type" : "text/html"});
//   response.end("<h1>Hello World...!</h1>");
// }).listen(52273, function(){
//   console.log("Server running at http://127.0.0.1:52273");
// });

var server = http.createServer();

server.listen(3000, function(){
	
	console.log("http 모듈로 만든 웹서버가 시작 되었습니다");

});

server.on('connection', function(socket){
	
	var address = socket.address();
	console.log("client connected. address : %s, port : %d", address.address, address.port);
	
});

server.on('request', function(req, res){
	
	console.log('request client');
	res.writeHead(200, {'Content-type' : 'text/html; charset=utf-8'});
	var output = "<!DOCTYPE html>";
	output += "<html>";
	output += "<head>";
	output += "<title> response page </title>";
	output += "</head>";
	output += "<body><h1>Hello NodeJs ! this is a html page response to nodejs</h1></body>";
	output += "</html>";
	res.write(output);
	res.end();
		
});

server.on('close', function(){
	
	console.log("stop server!!");
	
});
