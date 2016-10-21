// Node.js에서 이벤트를 연결할 수 있는 모든 객체는 EventEmitter 객체의 상속을 받는다.
// EventEmitter 객체는  process 객체의 상속을 받기 때문에 이벤트를 연결할 수 있다.

// EventEmitter 객체의 메서드
// addListener(eventName, eventHandler); 이벤트를 연결합니다.
// on(eventName, eventHandler); 이벤트를 연결합니다.
// setMaxListeners(limit); 이벤트 연결 개수를 조절합니다.
// removeListener(eventName, handler); 특정 이벤트의 이벤트 리스너를 제거한다.
// removeAllListener([eventName]); 모든 이벤트 리스너를 제거합니다.
// once(eventName, eventHandler); 이벤트를 한 번만 연결합니다.

// EventEmitter 객체를 생성
var custom = new process.EventEmitter();

// connect Event
custom.on("tick", function(code){
	
	console.log("이벤트 실행");
	
});

// 이벤트 강제 발생
custom.emit('tick');

// 일반적으로 이벤트를 생성하는 부분과 연결하는 부분을 모듈로 분리해 사용한다.
