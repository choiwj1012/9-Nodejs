// 생성한 모듈(본 예제에서는 module.js)을 다른 자바스크립트 파일에서 추출할 때는
// require() 함수를 사용한다.

// extract module
var module = require("./module.js");

// use module
console.log('abs(-273) = %d', module.abs(-273));
console.log('circleArea(3) = %d', module.circleArea(3));
