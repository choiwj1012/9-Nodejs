/* var onUncaughtException = function(error){
  console.log('예외가 발생했군');
  process.removeListener('uncaughtException',onUncaughtException);
};

process.on('uncaughtException',onUncaughtException);

var test = function(){
  setTimeout(test,2000);
  error.error.error();
};
setTimeout(test,2000); */


// 이벤트를 한번만 발생시키는 메서드 once()
process.once('uncaughtException',function(error){
  console.log('예외가 발생했군');
});

var test = function(){
  setTimeout(test,2000);
  error.error.error();
};

setTimeout(test,2000);
