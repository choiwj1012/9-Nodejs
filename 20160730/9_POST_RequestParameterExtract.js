/* POST 방식은 GET 방식과 달리 데이터를 더 많이 담을 수 있고 보안 측면에서도 더 좋다.
 * GET 방식은 요청하면서 매개변수 형식으로 노출되어 데이터를 전달하지만
 * POST 방식은 요청한 후 데이터를 별도로 전달하기 때문이다. */

// extract POST requested data
var http = require('http');

// using module
http.createServer(function(request, response){
  request.on('data', function(data){
    console.log('POST Data:', data);
  });
}).listen(52273);
