// extract module
var eventCreate_main = require('./eventCreate_main.js');

// connect event
eventCreate_main.timer.on('tick', function(code){
	
	console.log("이벤트 실행");
	
});