/* node.js에서 가장 많이 사용되는 web framework인 express framework가 template engine으로
 * ejs module과 jade module을 주로 사용한다. */

// extract module
var http = require('http');
var jade = require('jade');
var fs = require('fs');

// create and run server
http.createServer(function(request, response){

  // read jadePage.jade
  fs.readFile('jadePage.jade','utf-8',function(error, data){
  // jade 페이지를 HTML 페이지로 변환할 때는 complie()을 사용한다. 이는 ejs의 render()와 다르게
  // 문자열을 리턴하는 것이 아니라 함수를 리턴한다는 차이가 있다.
    var fn = jade.compile(data);
    response.writeHead(200,{'Content-Type':'text/html'});
    response.end(fn({
      name : "BizInsight",
      description : "Hello jade with Node.js"
    }));
  });
}).listen(52273,function(){

  console.log('Server Running at http://127.0.0.1:52273');

});
