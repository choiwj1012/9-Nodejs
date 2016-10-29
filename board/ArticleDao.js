var fs = require('fs');
eval(fs.readFileSync('ArticleRepository.js')+'');

function ArticleDao(){

  // variable
  var articleRepository = new ArticleRepository();

  // method
  // write
  this.writeArticle = function(article){

    var isSuccess;

    try{

      articleRepository.setArticleNumber(articleRepository.getArticleNumber() + 1);
      article.setNumber(articleRepository.getArticleNumber());

      var saved_article = {

        number : article.getNumber(),
        title : article.getTitle(),
        content : article.getContent(),
        writer : article.getWriter(),
        readCount : 0

      }

      var articles = articleRepository.getArticles();
      articles.push(saved_article);
      isSuccess = { message : true };

    } catch(e) {

      console.log('backend articleDao : writeArticle() 예외발생');
      console.log(e.message);
      isSuccess = { message : false };

    }

    return isSuccess;

  }

  // 글목록 dao 메서드
  this.selectAll = function(){

    var send_articles = [];

    try{

      var articles = articleRepository.getArticles();
      for(var i=0; i<articles.length; i++){

        var article = {
          number : articles[i].number,
          title : articles[i].title,
          writer : articles[i].writer,
          readCount : articles[i].readCount
        };

        send_articles.push(article);

      }

    } catch(e) {
      console.log('backend articleDao : selectAll method exception');
      console.log(e.message);
    }

    return send_articles;

  };

}
