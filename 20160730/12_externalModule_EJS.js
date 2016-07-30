// node.js는 npm(node package manage)을 기반으로 모듈을 공유한다.
// external module 설치시 => $ npm install moduleName

// ejs module => template engine module로 특정 형식의 문자열을 HTML 형식의 문자열로 변환함
// 목적은 확장자가 ejs인 페이지를 HTML 페이지로 바꾸어서 제공하는 서버를 만듬

// extract module
var http = require('http');
var fs = require('fs');
var ejs = require('ejs');

// create server and Running
http.createServer(function(request, response){

  // read ejsPage.js
  fs.readFile('ejsPage.ejs', 'utf-8', function(error, data){
    // ejs페이지를 HTML페이지로 변환해 client에게 제공하기 위해서는 ejs 모듈의 render() 메서드를 사용한다.
    response.writeHead(200, {'Content-Type':'text/html'});
    // ejs 페이지에 데이터를 전달하기 위해서는 render() 메서드의 두 번째 매개변수에 전달하고자 하는 데이터를 입력한다.
    response.end(ejs.render(data,{
      name : 'Akaraka',
      description : 'Hello ejs With Node.js...!'
    }));
  });
}).listen(52273,function(){

  console.log('Server Running at http://127.0.0.1:52273');

});

// ejs module과 같은 template engine은 dynamic web page를 만들때 사용한다.
