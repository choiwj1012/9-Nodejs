// extract module
var http = require('http');
var express = require('express');

// use express
var app = express();
app.use(express.static('public'));
app.use(app.router);





// start server
http.createServer(app).listen(3000, function() {
	console.log('웹서버 실행 중...http://127.0.0.1:3000');
});