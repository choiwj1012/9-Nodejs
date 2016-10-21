/**
 * http://usejsdoc.org/
 */

// 이벤트 제거시 사용하는 메서드
// removeListener(eventName, handler); => 특정 이벤트의 이벤트 리스너를 제거한다
// removeAllListener([eventName]); => 모든 이벤트 리스너를 제거한다

// declare variable
var onUncaughtException = function(error){
	
	console.log("예외가 발생했다");
	
	// remove event listener
	process.removeListener('uncaughtException', onUncaughtException);
	
};

// connect event uncaughtException on process object
process.on('uncaughtException', onUncaughtException);

// occur exception every 2 seconds
var test = function(){
	setTimeout(test, 2000);
	error.error.error();
};

setTimeout(test, 2000);






