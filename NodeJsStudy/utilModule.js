// extract util module
var util = require('util');

// use module
var data = util.format('%d + %d = %d', 52, 273, 52 + 273);
console.log(data);

// util module method
// format(format[, ...]);
// 매개변수로 입력한 문자열을 조합해 리턴한다.
// console.log()와 비슷하나 util module의 차이점은 출력하지 않고 문자열을 반환한다는 점이다.
