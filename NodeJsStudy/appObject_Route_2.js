var items = [];
items.push({name : '우유', price : 2000});
items.push({name : '홍차', price : 5000});
items.push({name : '커피', price : 5000});

// extract module
var http = require('http');
var express = require('express');

// create web server
var app = express();
app.use(express.static('public'));
app.use(app.router);

app.all('/html', function(req, res){

  var output = '<div>';
  for(var i=0; i<items.length; i++){
    output = output + '<h1>' + items[i].name + '</h1><br>';
    output = output + '<h1>' + items[i].price + '</h1><br>';
  }
  output = output + '</div>';

  res.send(output);

});

app.all('/json', function(req, res){

  res.send(items);

});

app.all('/xml', function(req, res){
  var output = '<?xml version="1.0" encoding="UTF-8" ?>';
  output = output + '<items>';
  for(var i=0; i<items.length; i++){
    output = output + '<item>';
    output = output + '<name>' + items[i].name + '</name><br>';
    output = output + '<price>' + items[i].price + '</price><br>';
    output = output + '</item>';
  }
  output = output + '</items>';

  res.type('text/xml');
  res.send(output);

});

http.createServer(app).listen(3000, function(){
  console.log('웹 서버 실행 중 ... http://127.0.0.1:3000')
})
