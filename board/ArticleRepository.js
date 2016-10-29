var fs = require('fs');
eval(fs.readFileSync('Article.js')+'');

function ArticleRepository(){

  var articleNumber = 0;
  var articles = [];

  this.getArticleNumber = function(){

    return articleNumber;

  };

  this.setArticleNumber = function(input_number){

    articleNumber = input_number;

  };

  this.getArticles = function(){

    return articles;

  };

}
