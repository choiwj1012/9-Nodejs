function ArticleController(){

  // variable (articleDao)
  var articleDao = new ArticleDao();

  // method
  // write article
  this.requestWriteArticle = function(article){

    var isSuccess = articleDao.writeArticle(article);

    if(isSuccess.message == true){
      alert('글 저장 성공');
    } else {
      alert('글 저장 실패');
    }

    document.location = 'selectAllArticle.html';

  }

  // go to writeArticleView
  this.requestWriteArticleView = function(){

    document.location = "writeArticle.html";

  }

  // selectAll article
  this.requestSelectAll = function(){

    var articles = articleDao.selectAllArticle();
    return articles;

  }

  // go to selectAllView
  this.requestSelectAllView = function(){

    document.location = 'selectAllArticle.html';

  }

  // selectOne article
  this.requestSelectOne = function(number){

    document.location = 'selectOneArticle.html';
    var article = articleDao.selectOne(number);
    

  }

}

// articleController
var articleController = new ArticleController();
