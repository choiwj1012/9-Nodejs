// GET 인지 POST 인지 구분하기
// // extract module
// var http = require('http');
//
// // use http module
// http.createServer(function(request, response){
//
//   // method 속성이 GET인지 POST인지 구분
//   if(request.method == 'GET'){
//
//     console.log('GET 요청입니다');
//
//   } else if (request.method == 'POST') {
//
//     console.log('POST 요청입니다');
//
//   }
//
// }).listen(52273, function(){
//
//   console.log('Server Running at http://127.0.0.1:52273');
//
// });



// // GET 요청 매개변수 추출하기
// var http = require('http');
// var url = require('url');
//
// // use module
// http.createServer(function(request, response){
//
//   // 요청 매개변수를 추출합니다
//   var query = url.parse(request.url, true).query;
//
//   // Get 요청 매개변수 출력
//   response.writeHead(200, { 'Content-Type' : 'text/html' });
//   response.end('<h1>' + JSON.stringify(query) + '</h1>');
//
// }).listen(52273, function(){
//
//   console.log('Server Running at http://127.0.0.1:52273');
//
// });



// POST 요청 매개변수 추출하기
// POST 방식은 GET 방식과 달리 데이터를 더 많이 담을 수 있고 보안 측면에서도 좋다.
// GET 방식은 요청하면서 매개변수 형식으로 노출되어 데이터를 전달하지만
// POST 방식은 요청한 후 데이터를 별도로 전달하기 때문이다.
// extract module
var http = require('http');

// use module
http.createServer(function(request, response){

  request.on('data', function(data){

    console.log('POST Data :', data);

  });

}).listen(52273);
