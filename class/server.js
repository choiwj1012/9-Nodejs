// extract module
var http = require('http');
var express = require('express');

// declare variable
var items = [{
	name : '우유',
	price : '2000'
}, {
	name : '홍차',
	price : '5000'
}, {
	name : '커피',
	price : '5000'
}];

// use express
var app = express();
app.use(express.static('public'));
app.use(express.bodyParser());
app.use(app.router);

// route
app.all('/data.html', function(request, response){

  var output = '';
  output += '<!DOCTYPE html>';
  output += '<html>';
  output += '<head>';
  output +=   '<title>Data HTML</title>';
  output += '</head>';
  output += '<body>';

  items.forEach(function(item){
    output += '<div>';
    output += ' <h1>' + item.name + '</h1>';
    output += ' <h2>' + item.price + '</h2>';
    output += '</div>';
  });

  output += '</body>';
  output += '</html>';
  response.send(output);

});

// start server
http.createServer(app).listen(3000, function() {
	console.log('웹서버 실행 중...http://127.0.0.1:3000');
});
