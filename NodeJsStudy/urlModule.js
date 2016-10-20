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
