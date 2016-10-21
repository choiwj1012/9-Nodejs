var request = require('request');

var dns = 'http://www.google.com';

request(dns, function(err, res, body){

  console.log(body);

});
