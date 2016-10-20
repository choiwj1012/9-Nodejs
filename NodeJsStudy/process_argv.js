// process객체는 프로그램과 관련된 정보를 나타내는 객체
// 웹 브라우저에서 작동하는 자바스크립트에 존재하지 않는 Node.js만이 가진 객체

// process.argv
process.argv.forEach(function(item, index){

  // 출력합니다
  console.log(index + ' : ' + typeof(item) + ' : ', item);

  // 실행 매개변수에 --exit가 있을 때
  if(item == '--exit'){

    // 다음 실행 매개변수를 얻습니다
    var exitTime = Number(process.argv[index + 1]);

    // 일정 시간 후 프로그램을 종료합니다
    setTimeout(function(){
      process.exit();
    }, exitTime);

  }

});

// process.exit() method는 parameter로 숫자를 하나 입력할 수 있다.
// exit 코드가 0이면 프로그램이 정상적으로 종료되었음을 의미하고
// exit 코드가 1이면 프로그램이 비정상적으로 종료되었다고 의미하자는 것이 개발자 사이의 약속이다.

console.log('-process.env : ', process.env);
console.log('-process.version : ', process.version);
console.log('-process.versions : ', process.versions);
console.log('-process.arch : ', process.arch);
console.log('-process.platform : ', process.platform);
console.log('-process.connected : ', process.connected);
console.log('-process.execArgv : ', process.execArgv);
console.log('-process.exitCode : ', process.exitCode);
console.log('-process.mainModule : ', process.mainModule);
console.log('-process.release : ', process.release);
console.log('-process.memoryUsage() : ', process.memoryUsage());
console.log('-process.uptime() : ', process.uptime());
console.log('-process.uptime() : ', process.uptime());
console.log('-process.uptime() : ', process.uptime());
