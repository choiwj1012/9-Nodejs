var articles = [];
articles.push({num : 1, title : '제목', content : '내용', writer : '작성자', readCount : 0});

var http = require('http');
var express = require('express');

var app = express();
app.use(express.static('public'));
app.use(app.router);

app.all('/', function(req, res){

  res.send(articles);

});

app.all('/selectOne', function(req, res){

  var num = parseInt(req.param('num'));

  var article;

  for(var i=0; i<articles.length; i++){
    if(articles[i].num == num){
      article = articles[i];
      break;
    }
  }

  res.send(article);

  var name = req.param('name');
  console.log(num + ',' + name);

});

app.all('/insert', function(req, res){

  var num = parseInt(req.param('num'));
  var title = req.param('title');
  var content = req.param('content');
  var writer = req.param('writer');
  var readCount = 0;
  articles.push({num : num, title : title, content : content, writer : writer, readCount : readCount});

});


http.createServer(app).listen(3000, function(){
  console.log('웹 서버 실행 중 ... http://127.0.0.1:3000')
})
