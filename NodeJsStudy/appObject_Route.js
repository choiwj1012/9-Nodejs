var articles = [];
articles.push({num : 1, title : '1', content : '1'});
articles.push({num : 2, title : '2', content : '2'});
articles.push({num : 3, title : '3', content : '3'});

// extract module
var http = require('http');
var express = require('express');

// create web server
var app = express();
app.use(express.static('public'));
app.use(app.router);

app.all('/', function(req, res){
  res.send(articles); // JSON 형태로 내보낸다.
});

app.all('/selectOne', function(req, res){
  res.send("<h1>selectOne을 라우팅함</h1>");
});

app.all('/insert', function(req, res){
  res.send("<h1>insert을 라우팅함</h1>");
});

app.all('/update', function(req, res){
  res.send("<h1>update을 라우팅함</h1>");
});

app.all('/delete', function(req, res){
  res.send("<h1>delete을 라우팅함</h1>");
});

http.createServer(app).listen(3000, function(){
  console.log('웹 서버 실행 중 ... http://127.0.0.1:3000')
})
