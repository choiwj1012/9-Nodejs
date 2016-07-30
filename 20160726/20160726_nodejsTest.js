/* console.log('filename : ',__filename);
console.log('dirname : ',__dirname);
console.log('output : %d', 273);
console.log('%d + %d = %d',273, 52, 273 + 52);
console.log('%d + %d = %d',273, 52, 273 + 52, 52273);
console.log('%d + %d = %d & %d', 273, 52, 273 + 52);
console.log('문자열 : %s', 'HELLO WORLD..!','특수 기호와 상관 없음');
console.log('JSON : %j',{name : 'RintIanTta'});

console.time('alpha');
var output = 1;
for(var i=1; i<=10; i++){
  output *= i;
}
console.log('Result : ', output);

console.timeEnd('alpha');

console.log('\u001b[31m','Hello World');
console.log('\u001b[32m','Hello World');
console.log('\u001b[33m','Hello World');
console.log('\u001b[34m','Hello World');
console.log('\u001b[35m','Hello World');
console.log('\u001b[36m','Hello World');
console.log('\u001b[37m','Hello World');
console.log('\u001b[40m','Hello World');
console.log('\u001b[41m','Hello World');
console.log('\u001b[42m','Hello World');
console.log('\u001b[43m','Hello World');
console.log('\u001b[44m','Hello World');
console.log('\u001b[45m','Hello World');
console.log('\u001b[46m','Hello World');
console.log('\u001b[47m','Hello World');
console.log('\u001b[0m','reset'); */

process.argv.forEach(function(item, index){
  console.log(index + ':' + typeof(item) + ':', item);
  if(item == '--exit'){
      var exitTime = Number(process.argv[index+1]);
      setTimeout(function(){
        process.exit();
      },exitTime);
  }
});

console.log('- process.env : ', process.env);
console.log("---------------------------------------");
console.log('- process.version : ', process.version);
console.log("---------------------------------------");
console.log('- process.versions : ', process.versions);
console.log("---------------------------------------");
console.log('- process.arch : ', process.arch);
console.log("---------------------------------------");
console.log('- process.platform : ', process.platform);
console.log("---------------------------------------");
console.log('- process.connected : ', process.connected);
console.log("---------------------------------------");
console.log('- process.execArgv : ', process.execArgv);
console.log("---------------------------------------");
console.log('- process.exitCode : ', process.exitCode);
console.log("---------------------------------------");
console.log('- process.mainModule : ', process.mainModule);
console.log("---------------------------------------");
console.log('- process.release : ', process.release);
console.log("---------------------------------------");
console.log('- process.memoryUsage : ', process.memoryUsage);
console.log("---------------------------------------");
console.log('- process.uptime() : ', process.uptime());
console.log("---------------------------------------");
console.log('- process.uptime() : ', process.uptime());
console.log("---------------------------------------");
console.log('- process.uptime() : ', process.uptime());
