// extract module
var http = require('http');
var express = require('express');

// declare variable
var items = [{
  name : '우유',
  price : '2000'
}, {
  name : '홍차',
  price : '5000'
},{
  name : '커피',
  price : '5000'
}];

// create a webserver
var app = express();
app.use(express.static('public'));
app.use(express.bodyParser());
app.use(app.router);

// route
app.all('/data.html', function(request, response){

  var output = '';
  output += '<!DOCTYPE html>';
  output += '<html>';
  output += '<head>';
  output +=   '<title>Data HTML</title>';
  output += '</head>';
  output += '<body>';

  items.forEach(function(item){
    output += '<div>';
    output += ' <h1>' + item.name + '</h1>';
    output += ' <h2>' + item.name + '</h2>';
    output += '</div>';
  });

  output += '</body>';
  output += '</html>';
  response.send(output);

});

app.all('/data.json', function(request, response){

  response.send(items);

});

app.all('/data.xml', function(request, response){

  var output = '';
  output += '<?xml version="1.0" encoding="UTF-8" ?>';
  output += '<products>';

  items.forEach(function(item){
      output += '<product>';
      output += '   <name>' + item.name + '</name>';
      output += '   <price>' + item.price + '</price>';
      output += '</product>';
  });

  output += '</products>';
  response.sed(output);

});

// static route
// app.all('/parameter', function(request, response){
//
//   // variable declare
//   var name = request.param('name');
//   var region = request.param('region');
//
//   // response
//   response.send('<h1>' + name + ':' + region + '</h1>');
//
// });

// dynamic route
app.all('/parameter/:id', function(request, response){

  // variable
  var id = request.param('id');

  // response
  response.send('<h1>' + id + '</h1>');

});

// 요청 방식
// GET : 자원 조회
// EX) (GET 요청) 127.0.0.1:52273/products : 제품 전체를 조회한다.
// EX) (GET 요청) 127.0.0.1:52273/products/273 : 273번 제품을 조회한다.

// POST : 자원 추가
// EX) (POST 요청) 127.0.0.1:52273/products : 제품을 추가한다.

// PUT : 자원 수정
// EX) (PUT 요청) 127.0.0.1:52273/products/273 : 273번 제품을 수정한다.

// DELETE : 자원 삭제
// EX) (DELETE 요청) 127.0.0.1:52273/products/273 : 273번 제품을 제거한다.

// HEAD : 자원의 메타 데이터 조회
// OPTIONS : 사용 가능한 요청 방식 조회
// TRACE : 테스트 목적의 데이터 조회
// CONNECT : 연결 요청

// 위의 방식으로 구성되는 웹 서비스를 RESTful 웹 서비스라고 한다.
// 이러한 요청 방식은 밑의 메서드로 처리한다.

// var app = express();
// app.get() : 클라이언트의 GET 요청을 처리한다.
// app.post() : 클라이언트의 POST 요청을 처리한다.
// app.put() : 클라이언트의 PUT 요청을 처리한다.
// app.del() : 클라이언트의 DELETE 요청을 처리한다.

// GET 요청 이외의 요청에서 요청 매개변수를 추출하려면 body parser middleware가 필요하다.
// var app = express();
// app.use(express.static('public'));
// app.use(express.bodyParser());
// app.use(app.router);

// search all data
app.get('/products', function(request, response){

  response.send(items);

});

// search one data
app.get('/products/:id', function(request, response){

  // declare variable
  var id = Number(request.param('id'));

  if(isNaN(id)){

    response.send({error : '숫자를 입력하세요!'});

  } else if(items[id]){

    response.send(items[id]);

  } else {

    response.send({error : '존재하지 않는 데이터입니다!'});

  }

});

// add one data
app.post('/products', function(request, response){

  // declare varialbe
  var name = request.param('name');
  var price = request.param('price');
  var item = {
    name : name,
    price : price
  };

  // add data
  items.push(item);

  // response
  response.send({
    message : '데이터를 추가했습니다',
    data : item
  });

});

// modify one data
app.put('/products/:id', function(request, response){

  // declare variable
  var id = Number(request.param('id'));
  var name = request.param('name');
  var price = request.param('price');

  if(items[id]){

    // modify data
    if(name) {items[id].name = name;}
    if(price) {items[id].price = price;}

    // response
    response.send({
      message : '데이터를 수정했습니다',
      data : items[id]
    });

  } else {

    response.send({error : '존재하지 않는 데이터입니다!'});

  }

});

// delete one data
app.del('/products/:id', function(request, response){

  // declare variable
  var id = Number(request.param('id'));

  if(isNaN(id)){

    response.send({ error : '숫자를 입력하세요' });

  } else if (items[id]) {

    items.splice(id, 1);
    response.send({ message : '데이터를 삭제했습니다' });

  } else {

    response.send({ error : '존재하지 않는 데이터입니다' });

  }

});

// start webserver
http.createServer(app).listen(52273, function(){

  console.log('Server Running at http://127.0.0.1:52273');

});
