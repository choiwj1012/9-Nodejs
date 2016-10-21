// extract url module
var url = require('url');

// use url module
var parsedObject = url.parse('http://choiwj1012.cafe24.com');
console.log(parsedObject);

// URL Module method
// parse(urlStr[, parseQueryString = false][, slashesDenoteHost = false]);
// URL 문자열을 URL 객체로 변환해 리턴한다.
// format(urlObj);
// URL 객체를 URL 문자열로 변환해 리턴한다.
// resolve(from, to);
// 매개변수를 조합해 완전한 URL 문자열을 생성해 리턴한다.

var urlString = "http://endic.naver.com/search.nhn?sLn=kr&isOnlyViewEE=N&query=2%EC%B4%88%EB%A7%88%EB%8B%A4";
console.log(urlString);

var realUrl = url.parse(urlString);
console.log(realUrl);

var querystring = require('querystring');
var params = querystring.parse(realUrl.query);
console.log(params);

var origin = querystring.stringify(params);
console.log(origin);
