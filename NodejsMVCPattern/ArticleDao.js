var fs = require('fs');
eval(fs.readFileSync('ArticleRepository.js')+'');

//article dao 객체
function ArticleDao() {

	var repository = new ArticleRepository();

	//글전체조회 dao 메서드
	this.selectAllDao = function(){

		var articles = repository.getArticles();
		return articles;

	}

	//글쓰기 dao 메서드
	this.insertDao = function(article) {

		var isSuccess = false;

		try{
			repository.setArticleNum(repository.getArticleNum() + 1);
			article.setNum(repository.getArticleNum());

			var prev_array_length = repository.getArticles().length;
			var next_array_length = repository.getArticles().push(article);

			if((next_array_length - 1) == prev_array_length) {
				console.log('새글이 레파지토리(배열)에 정상적으로 추가되었습니다.')
				isSuccess = true;
			}
		} catch(e) {
			console.log('새글을 레파지토리에서 추가되는 과정에서 예외가 발생했습니다.');
			isSuccess = false;
		} finally {

		}

		return isSuccess;

	}

	//글삭제 dao 메서드
	this.deleteDao = function(num) {

		var isSuccess = false;

		try{
			var articles = repository.getArticles();
			for(var i = 0 ; i < articles.length ; i++) {
				if(num == articles[i].getNum()) {
					var article = articles.splice(i, 1);
					if(article != undefined) {
						isSuccess = true;
						break;
					}
				}
			}
		} catch(e) {
			console.log('기존 글을 레파지토리에서 삭제하는 과정에서 예외가 발생했습니다.')
			isSuccess = false;
		} finally {

		}

		return isSuccess;

	}

	//글수정 dao 메서드
	this.updateDao = function(article) {

		var isSuccess = false;

		try{
			var articles = repository.getArticles();
			for(var i = 0 ; i < articles.length ; i++) {
				if(article.getNum() == articles[i].getNum()) {
					articles[i].setTitle(article.getTitle());
					articles[i].setContent(article.getContent());
					articles[i].setWriter(article.getWriter());
					isSuccess = true;
					break;
				}
			}
		} catch(e) {
			console.log('기존 글을 레파지토리에서 수정하는 과정에서 예외가 발생했습니다.')
			isSuccess = false;
		} finally {

		}

		return isSuccess;

	}

	//글조회 dao 메서드
	this.readDao = function(num) {

		var article = undefined;

		try {
			var articles = repository.getArticles();
			for(var i = 0 ; i < articles.length ; i++) {
				if(num == articles[i].getNum()) {
					articles[i].setReadCount(articles[i].getReadCount() + 1);
					article = articles[i];
					break;
				}
			}
		} catch(e) {
			console.log('선택된 글을 레파지토리에서 삭제하는 과정에서 예외가 발생했습니다.')
			article = undefined;
		} finally {

		}

		return article;

	}

	//선택 글삭제 dao 메서드
	this.selectedDeleteDao = function(nums) {

		var isSuccess = false;

		try {
			var articles = repository.getArticles();

			for(var i = 0 ; i < nums.length ; i++) {
				for(var j = 0 ; j < articles.length ; j++) {
					if(nums[i] == articles[j].getNum()) {
						articles.splice(j,1);
						isSuccess = true;
					}
				}
			}

		} catch(e) {
			console.log('기존 글을 레파지토리에 수정하는 과정에 예외가 발생했습니다.')
			isSuccess = false;
		} finally {
		}

		return isSuccess;

	}

}
