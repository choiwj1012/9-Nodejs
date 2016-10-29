var fs = require('fs');
eval(fs.readFileSync('ArticleDao.js')+'');

function ArticleController(){

  // variable
  var articleDao = new ArticleDao();

  // method
  // request write
  this.requestWriteArticle = function(article){

    var isSuccess = articleDao.writeArticle(article);
    return isSuccess;

  }

  // request articleList
  this.requestSelectAll = function(){

    var send_articles = articleDao.selectAll();
    return send_articles;

  }

  // request selecteOne
  this.requestSelectOne = function(number){

    var isSuccess = articleDao.selectOne(number);
    return isSuccess;

  }

}
