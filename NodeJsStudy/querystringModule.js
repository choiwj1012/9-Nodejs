// extract querystring module
var url = require('url');
var querystring = require('querystring');

// use querystring module
var parsedObject = url.parse('http://choiwj1012.cafe24.com');
console.log(querystring.parse(parsedObject.query));

// stringify(obj[, sep='&'][, eq='='][, options]);
// 쿼리 객체를 쿼리 문자열로 변환해 리턴한다.
// parse(str[, sep='&'][, eq='='][, options]);
// 쿼리 문자열을 쿼리 객체로 변환해 리턴한다.
