var url = require('url');
var querystring = require('querystring');

var parseObject = url.parse('http://choiwj1012.cafe24.com');
console.log(querystring.parse(parseObject.query));
