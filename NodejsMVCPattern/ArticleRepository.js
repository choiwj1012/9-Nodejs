var fs = require('fs');
eval(fs.readFileSync('Article.js')+'');

//article repository 객체
function ArticleRepository() {

	var articleNum = 0; //자동 글번호 증가 및 적용에 사용
	var articles = []; //글목록 저장에 사용

	var article = new Article("제목1", "내용1", "작성자1");
	article.setNum(1);
	articles.push(article);

	article = new Article("제목2", "내용2", "작성자2");
	article.setNum(2);
	articles.push(article);

	article = new Article("제목3", "내용3", "작성자3");
	article.setNum(3);
	articles.push(article);

	article = new Article("제목4", "내용4", "작성자4");
	article.setNum(4);
	articles.push(article);

	article = new Article("제목5", "내용5", "작성자5");
	article.setNum(5);
	articles.push(article);

	article = new Article("제목6", "내용6", "작성자6");
	article.setNum(6);
	articles.push(article);

	article = new Article("제목7", "내용7", "작성자7");
	article.setNum(7);
	articles.push(article);

	articleNum = 7;

	this.getArticleNum = function() {

		return articleNum;

	}

	this.setArticleNum = function(n) {

		articleNum = n;

	}

	this.getArticles = function() {

		return articles;

	}

}
