var fs = require('fs');
eval(fs.readFileSync('ArticleController.js')+'');

var http = require('http');
var express = require('express');

var app = express();
app.use(express.static('public'));
app.use(app.router);

http.createServer(app).listen(52273, function(){
  console.log('start web server... http://127.0.0.1:52273');
});

var articleController = new ArticleController();

// mainpage 설정
app.all('/', function(request, response){

  response.redirect('view/article/selectAllArticle.html');

});

// server단 글쓰기 요청
app.all('/write', function(request, response){

  console.log('/write 를 요청 받음');
  var title = request.param('title');
  var content = request.param('content');
  var writer = request.param('writer');

  var article = new Article(title, content, writer);
  var isSuccess = articleController.requestWriteArticle(article);

  console.log('응답 데이터');
  console.log(isSuccess);
  response.send(isSuccess);

});

// server단 글 리스트 요청
app.all('/selectAll', function(request, response){

  console.log('/selectAll 요청');
  var send_articles = articleController.requestSelectAll();

  console.log('응답 데이터');
  console.log(send_articles);
  response.send(send_articles);

});

// server단 선택글 요청
app.all('/selectOne', function(request, response){

  var number = request.param('number');

  console.log('/selectOne 요청');
  var send_article = articleController.requestSelectOne(number);

  console.log('응답 데이터');
  console.log(send_article);
  response.send(send_article);

});
