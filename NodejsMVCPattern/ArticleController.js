var fs = require('fs');
eval(fs.readFileSync('ArticleDao.js')+'');

//article controller 객체
function ArticleController() {

	var dao = new ArticleDao();

	// 글전체조회 controller 메서드
	this.requestSelectAll = function(){

		var articles = dao.selectAllDao();
		return articles;

	}

	// 글쓰기 controller 메서드
	this.requestInsert = function(article) {

		var isSuccess = dao.insertDao(article);
		return isSuccess;

	}

	// 글삭제 controller 메서드
	this.requestDelete = function(num) {

		var isSuccess = dao.deleteDao(num);
		return isSuccess;

	}

	// 글수정 controller 메서드
	this.requestUpdate = function(article) {

		var isSuccess = dao.updateDao(article);
		return isSuccess;

	}

	// 글조회 controller 메서드
	this.requestRead = function(num) {

		var article = dao.readDao(num);
		return article;

	}

	// 선택 글삭제 controller 메서드
	this.requestSelectedDelete = function(nums) {

		var isSuccess = dao.selectedDeleteDao(nums);
		return isSuccess;

	}

}
