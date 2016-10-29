function ArticleDao(){

  // method
  // 글쓰기
  this.writeArticle = function(article){

    var isSuccess;

    try{
      var requestString = '/write?title=' + article.getTitle() + '&content=' + article.getContent() + '&writer=' + article.getWriter();
      var request = new XMLHttpRequest();
      request.open('GET', requestString, false);
      request.send();
      isSuccess = eval('(' + request.responseText + ')');

    } catch(e) {

      console.log("client articledao : saveDao 메서드 예외발생");
      console.log(e.message);

    }

    return isSuccess;

  }

  // 글목록
  this.selectAllArticle = function(){

    var articles = null;

    try{

      var requestString = '/selectAll';
      var request = new XMLHttpRequest();
      request.open('GET', requestString, false);
      request.send();

      articles = eval('(' + request.responseText + ')');

    } catch(e) {

      console.log('client articleDao : selectAllArticle 예외발생');
      console.log(e.message);

    }

    return articles;

  }

  // 글읽기
  this.selectOneArticle = function(number){

    var article = null;

    try{

      var requestString = '/selectOne?number=' + number;
      var request = new XMLHttpRequest();
      request.open('GET', requestString, false);
      request.send();

      article = eval( '(' + request.responseText + ')');

    } catch(e) {

      console.log('client articleDao : selectOneArticle 예외발생');
      console.log(e.message);

    }

  }

}
