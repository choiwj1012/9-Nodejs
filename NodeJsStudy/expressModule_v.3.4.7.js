var http = require('http');
var express = require('express');

var app = express();

app.use(function(req, res){

  res.send("<h1>안녕</h1>");

});

http.createServer(app).listen(3000, function(){

  console.log('start web server 127.0.0.1:3000');

});
