var fs = require('fs');
eval(fs.readFileSync('ArticleController.js')+'');

// create and connect server
var controller = new ArticleController();

// extract module
var http = require('http');
var express = require('express');

var app = express();
app.use(express.static('public'));
app.use(app.router);

app.all('/', function(req, res) {

	var articles = controller.requestSelectAll();
	var output ="<div><table>";
	output = output + "<thead><tr><th>글번호</th><th>제목</th><th>내용</th><th>작성자</th><th>조회수</th></tr></thead>"
	for(var i=0; i<articles.length; i++){
		output = output + '<tr>'
		output = output + '<td>' + articles[i].getNum() + '</td>';
		output = output + '<td>' + articles[i].getTitle() + '</td>';
		output = output + '<td>' + articles[i].getContent() + '</td>';
		output = output + '<td>' + articles[i].getWriter() + '</td>';
		output = output + '<td>' + articles[i].getReadCount() + '</td>';
		output = output + '</tr>'
	}
	output = output + "</table></div>";

	res.send(output);

});

app.all('/selectOne', function(req, res) {

	var num = parseInt(req.param('num'));
	var articles = controller.requestSelectAll();
	var article = controller.requestRead(num);

	for(var i = 0 ; i < articles.length ; i++) {
		if(num == articles[i].getNum()) {
			article = articles[i];
			break;
		}
	}

	var output = "<div><table>";
	output = output + "<thead><tr><th>글번호</th><th>제목</th><th>내용</th><th>작성자</th><th>조회수</th></tr></thead>"
	output = output + '<tr>';
	output = output + '<td>' + article.getNum() + '</td>';
	output = output + '<td>' + article.getTitle() + '</td>';
	output = output + '<td>' + article.getContent() + '</td>';
	output = output + '<td>' + article.getWriter() + '</td>';
	output = output + '<td>' + article.getReadCount() + '</td>';
	output = output + '</tr>';
	output = output + "</table></div>";
	res.send(output);

});

app.all('/insert', function(req, res) {

	var title = req.param('title');
	var content = req.param('content');
	var writer = req.param('writer');
	var article = new Article(title, content, writer);
	var isSuccess = controller.requestInsert(article);
	if(isSuccess){
		console.log("글이 성공적으로 들어갔음");
	} else {
		console.log("글쓰기 실패");
	}

});

app.all('/update', function(req, res) {

	var num = parseInt(req.param('num'));
	var title = req.param('title')
	var content = req.param('content');
	var writer = req.param('writer');
	var article = new Article(title, content, writer);
	article.setNum(num);

	var isSuccess = controller.requestUpdate(article);
	if(isSucess){
		console.log("글이 성공적으로 수정되었음");
	} else {
		console.log("글수정 실패함");
	}

});

app.all('/delete', function(req, res) {

	var num = parseInt(req.param('num'));
	var isSuccess = controller.requestDelete(num);
	if(isSuccess){
		console.log("글이 성공적으로 삭제됨");
	} else {
		console.log("글 삭제 실패");
	}

});

http.createServer(app).listen(3000, function() {
	console.log('웹서버 실행 중...http://127.0.0.1:3000');
});
