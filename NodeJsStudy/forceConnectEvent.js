// connect exit event
process.on('exit', function(code){

	console.log("bye bye");
	
});

// 이벤트 강제 발생
// emit() 메서드를 사용해 이벤트를 강제로 호출하면 이벤트 리스너만 실행된다
process.emit('exit');
process.emit('exit');
process.emit('exit');
process.emit('exit');

// processing a program
console.log('프로그램 실행 중');
