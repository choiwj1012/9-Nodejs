function Article(t, c, w) {

	var num = 0;
	var title = t;
	var content = c;
	var writer = w;
	var readCount = 0;

	this.getNum = function() {
		
		return num;
		
	};
	
	this.setNum = function(n) {
		
		num = n;
		
	};

	this.getTitle = function() {
		
		return title;
		
	};

	this.setTitle = function(t) {
		
		title = t;
		
	};

	this.getContent = function() {
		
		return content;
		
	};

	this.setContent = function(c) {
		
		content = c;
		
	};
	
	this.getWriter = function() {
		
		return writer;
		
	};

	this.setWriter = function(w) {
		
		writer = w;
		
	};
	
	this.getReadCount = function() {
		
		return readCount;
		
	};

	this.setReadCount = function(rc) {
		
		readCount = rc;
		
	};

}

//article repository 객체
function ArticleRepository() {
	
	var articleNum = 0; //자동 글번호 증가 및 적용에 사용
	var articles = []; //글목록 저장에 사용
	
	this.getArticleNum = function() {
		
		return articleNum;
		
	};
	
	this.setArticleNum = function(n) {
		
		articleNum = n;
		
	};
	
	this.getArticles = function() {
		
		return articles;
		
	};
	
}

//article dao 객체
function ArticleDao() {
	
	var repository = new ArticleRepository();
		
//	글저장 dao 메서드
	this.saveDao = function(article) {
	
		var isSuccess;
		
		try {			
			repository.setArticleNum(repository.getArticleNum() + 1);
			article.setNum(repository.getArticleNum());
			
			var saved_article = {
				num : article.getNum(),
				title : article.getTitle(),
				content : article.getContent(),
				writer : article.getWriter(),
				readCount : 0
			};
			
			repository.getArticles().push(saved_article);
			isSuccess = { message : true };
		} catch(e) {
			console.log('ArticleDao 객체 : saveDao 메서드에서 예외 발생');
			console.log(e.message);
			isSuccess = { message : false };
		}		
		
		return isSuccess;
		
	};	
	
//	글목록 dao 메서드
	this.selectAllDao = function() {
	
		var send_articles = [];
		
		try {
			var articles = repository.getArticles();
			
			for(var i = 0 ; i < articles.length ; i++) {				
				var article = {
					num : articles[i].num,
					title : articles[i].title,
					writer : articles[i].writer,
					readCount : articles[i].readCount
				};
				
				send_articles.push(article);
			}
		} catch(e) {
			console.log('ArticleDao 객체 : readAllDao 메서드에서 예외 발생');
			console.log(e.message);
		}		
		
		return send_articles;
		
	};
	
//	글수정 dao 메서드
	this.updateDao = function(article) {
	
		var isSuccess;
		console.log('[알림]서버의 D: Dao(updateDao)에 도착함!');

		try {			
			
			var articles= repository.getArticles();
			for (var i = 0; i < articles.length; i++){
				console.log(articles[i]);

				if (articles[i].num == article.getNum()){
					articles[i].title = article.getTitle();
					articles[i].content = article.getContent();
					articles[i].writer = article.getWriter();
				}
			}
			isSuccess = { message : true };
		} catch(e) {
			console.log('ArticleDao 객체 : updateDao 메서드에서 예외 발생');
			console.log(e.message);
			isSuccess = { message : false };
		}		
		
		console.log('[알림]서버의 D: Dao(updateDao)는 서버의 컨트롤러(requestUpdate)를 호출!');

		return isSuccess;
		
	};
	
//	글삭제 dao 메서드
	this.deleteDao = function(num) {
	
		var isSuccess;
		console.log('[알림]서버의 D: Dao(deleteDao)에 도착함!');

		try {			
			
			var articles= repository.getArticles();
			for (var i = 0; i < articles.length; i++){
				console.log(articles[i]);

				if (articles[i].num == num){
					articles.splice(i, 1);
				}
			}
			isSuccess = { message : true };
		} catch(e) {
			console.log('ArticleDao 객체 : deleteDao 메서드에서 예외 발생');
			console.log(e.message);
			isSuccess = { message : false };
		}		
		
		console.log('[알림]서버의 D: Dao(deleteDao)는 서버의 컨트롤러(requestDelete)를 호출!');

		return isSuccess;
		
	};
	
//	글조회 dao 메서드
	this.selectOneDao = function(num) {
	
		console.log('[알림]서버의 D: Dao(selectOneDao)에 도착함!');

		var article ={};
		
		try {			
			
			var articles= repository.getArticles();
			for (var i = 0; i < articles.length; i++){
				console.log(articles[i]);

				if (articles[i].num == num){
					articles[i].readCount = articles[i].readCount + 1;
					article = {
							num : articles[i].num,
							title : articles[i].title,
							writer : articles[i].writer,
							readCount : articles[i].readCount
						};
				}
			}
		} catch(e) {
			console.log('ArticleDao 객체 : deleteDao 메서드에서 예외 발생');
			console.log(e.message);
		}		
		
		console.log('[알림]서버의 D: Dao(deleteDao)는 서버의 컨트롤러(requestDelete)를 호출!');

		return article;
		
	};
	
}

//article controller 객체
var ArticleController = function() {

	var dao = new ArticleDao();

//	글저장 controller 메서드
	this.requestSave = function(article) {
				
		var isSuccess = dao.saveDao(article);
		return isSuccess;
		
	};
	
//	글목록 controller 메서드
	this.requestSelectAll = function() {
				
		var send_articles = dao.selectAllDao();
		return send_articles;
		
	};

//	글수정 controller 메서드
	this.requestUpdate = function(article) {
		console.log('[알림]서버의 C: 컨트롤러(requestUpdate)에 도착함!');
		console.log('[알림]서버의 C: 컨트롤러(requestUpdate)는 서버의 D: Dao(updateDao)를 호출!');
		var isSuccess = dao.updateDao(article);
		console.log('[알림]서버의 C: 컨트롤러(requestUpdate)로 돌아옴!');
		console.log('[알림]서버의 C: 컨트롤러(requestUpdate)는 서버의 라우터를 호출!');
		return isSuccess;
	};
//	글삭제 controller 메서드
	this.requestDelete = function(num) {
		console.log('[알림]서버의 C: 컨트롤러(requestDelete)에 도착함!');
		console.log('[알림]서버의 C: 컨트롤러(requestDelete)는 서버의 D: Dao(updateDelete)를 호출!');
		var isSuccess = dao.deleteDao(num);
		console.log('[알림]서버의 C: 컨트롤러(requestDelete)로 돌아옴!');
		console.log('[알림]서버의 C: 컨트롤러(requestDelete)는 서버의 라우터를 호출!');
		return isSuccess;
	}
//	글조회 controller 메서드
	this.requestSelectOne = function(num) {
		console.log('[알림]서버의 C: 컨트롤러(requestSelectOne)에 도착함!');
		console.log('[알림]서버의 C: 컨트롤러(requestSelectOne)는 서버의 D: Dao(selectOneDao)를 호출!');
		var isSuccess = dao.selectOneDao(num);
		console.log('[알림]서버의 C: 컨트롤러(requestSelectOne)로 돌아옴!');
		console.log('[알림]서버의 C: 컨트롤러(requestSelectOne)는 서버의 라우터를 호출!');
		return isSuccess;
	}
	
	
};

//Node 서버 및 라우터
var http = require('http');
var express = require('express');

var app = express();
app.use(express.static('public'));
app.use(app.router);

http.createServer(app).listen(3000, function() {
	
	console.log('웹서버 실행 중...http://127.0.0.1:3000');
	
});

var articleController = new ArticleController();

app.all('/save', function(req, res) {
	
	console.log('/save 를 요청 받음.');	
	var title = req.param('title');
	var content = req.param('content');
	var writer = req.param('writer');
	
	var article = new Article(title, content, writer);
	var isSuccess = articleController.requestSave(article);
	
	console.log('응답 데이터');
	console.log(isSuccess);	
	res.send(isSuccess);
	
});

app.all('/selectAll', function(req, res) {
	
	console.log('/selectAll 를 요청 받음.');
	var send_articles = articleController.requestSelectAll();
	
	console.log('응답 데이터');
	console.log(send_articles);	
	res.send(send_articles);
	
});

app.all('/update', function(req, res) {
	
	console.log('/update를 요청 받음.');
	console.log('[알림]서버의 라우터에 도착함');
	
	var num = req.param('num');
	var title = req.param('title');
	var content = req.param('content');
	var writer = req.param('writer');

	var article = new Article(title, content, writer);
	article.setNum(num);
	
	console.log('[알림]서버의 라우터는 서버의 C: 컨트롤러(requestUpdate)를 호출!');
	var isSuccess = articleController.requestUpdate(article);
	console.log('[알림]서버의 라우터로 돌아옴');
	console.log('응답 데이터');
	console.log(isSuccess);	
	console.log('[알림]서버의 라우터는 클라이언트의 D: Dao(updateDao)를 호출!');
	res.send(isSuccess);
	
});

app.all('/delete', function(req, res) {
	
	console.log('/delete를 요청 받음.');
	console.log('[알림]서버의 라우터에 도착함');
	
	var num = req.param('num');

	console.log('[알림]서버의 라우터는 서버의 C: 컨트롤러(requestDelete)를 호출!');
	var isSuccess = articleController.requestDelete(num);
	
	console.log('응답 데이터');
	console.log(isSuccess);	
	console.log('[알림]서버의 라우터는 클라이언트의 D: Dao(requestDelete)를 호출!');
	res.send(isSuccess);
	
});

app.all('/selectOne', function(req, res) {
	
	console.log('/selectOne를 요청 받음.');
	console.log('[알림]서버의 라우터에 도착함');
	
	var num = req.param('num');

	console.log('[알림]서버의 라우터는 서버의 C: 컨트롤러(requestSelectOne)를 호출!');
	var article = articleController.requestSelectOne(num);
	
	console.log('응답 데이터');
	console.log(article);	
	console.log('[알림]서버의 라우터는 클라이언트의 D: Dao(requestDelete)를 호출!');
	res.send(article);
	
});

