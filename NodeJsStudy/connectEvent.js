// 자바스크립트에서 했던 이벤트 연결

// window 객체에 load 이벤트를 연결
// window.addEventListener('load', function(){
//
// });

// Node.js는 자바스크립트의 addEventListener() 보다 이름이 간단한 메서드를 제공한다
// on(eventName, eventHandler);

// process 객체에 exit 이벤트를 연결합니다.
process.on('exit' function(code){

});

// process 객체에 uncaughtException 이벤트를 연결합니다.
process.on('uncaughtException', function(error){
  console.log('예외가 발생함');
});

// 2초 간격으로 3번 예외를 발생시킨다.
var count = 0;
var test = function(){

  // 탈출 코드
  count = count + 1;
  if(count > 3){
    return;
  }

  // 예외를 강제로 발생시킨다.
  setTimeout(test, 2000);
  error.error.error();

};

setTimeout(test, 2000);
