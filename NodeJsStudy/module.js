// Node.js는 모듈을 사용해 기능을 확장한다.
// 모듈은 기능을 쉽게 사용하고자 메서드와 속성을 미리 정의해 모아 놓은 것이다.

// 모듈을 생성하려면 별도의 자바스크립트 파일을 생성해야 한다.
// module.js 파일은 생성할 모듈 파일
// main.js 파일은 생성한 모듈을 불러올 파일
// 외부에서 사용하려면 exports. ~~ 로 써야한다.

// 절대값을 구하는 메서드
exports.abs = function(number){

  if(0 < number){
      return number;
  } else {
      return -number;
  }

};

// 원의 넓이를 구하는 메소드
exports.circleArea = function(radius){

  radius = radius * Math.PI;

  return radius;

};


// module로 쓰기 위한 추가 연결
// module.exports = 객체이름;
// 객체이름.메서드이름 = function(){}



