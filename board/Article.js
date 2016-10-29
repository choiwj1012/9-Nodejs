function Article(input_title, input_content, input_writer){

  var number = 0;
  var title = input_title;
  var content = input_content;
  var writer = input_writer;
  var readCount = 0;

  this.getNumber = function(){

    return number;

  };

  this.setNumber = function(input_number){

    number = input_number;

  };

  this.getTitle = function(){

    return title;

  }

  this.setTitle = function(input_title){

    title = input_title;

  }

  this.getContent = function(){

    return content;

  }

  this.setContent = function(input_content){

    content = input_content;

  }

  this.getWriter = function(){

    return writer;

  }

  this.setWriter = function(writer){

    writer = input_writer;

  }

  this.getReadCount = function(){

    return readCount;

  }

  this.setReadCount = function(input_readCount){

    readCount = input_readCount;

  }

}
