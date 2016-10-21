// Node.js는 한 이벤트에 10개가 넘는 이벤트 리스너를 연결할 경우
// 이를 개발자 실수로 간주한다.

// 이벤트 연결 개수 제한을 15개까지 늘린다 (기본은 10개까지)
process.setMaxListeners(15);

process.on('exit', function(){});
process.on('exit', function(){});
process.on('exit', function(){});
process.on('exit', function(){});
process.on('exit', function(){});
process.on('exit', function(){});
process.on('exit', function(){});
process.on('exit', function(){});
process.on('exit', function(){});
process.on('exit', function(){});
process.on('exit', function(){});
process.on('exit', function(){});
process.on('exit', function(){});
process.on('exit', function(){});