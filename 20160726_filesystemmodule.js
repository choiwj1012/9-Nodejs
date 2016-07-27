var fs = require('fs');

/*
var text = fs.readFileSync('textfile.txt','utf8');
console.log(text);

var text = fs.readFile('textfile.txt','utf8',function(error,data){
  console.log(data);
});

var data = "hello nodejs world !!";
fs.writeFile('TextFileOtherWrite.txt',data,'utf8',function(error){
  console.log('WRITE FILE ASYNC COMPLETE');
});

fs.writeFileSync('TextFileOtherWriteSync.txt',data,'utf8');
console.log('WRITE FILE SYNC COMPLETE');
*/

// 동기 처리를 하는 메서드의 예외처리구문

try{
  var data = fs.readFileSync('textfile.txt','utf8');
  console.log(data);
}catch(e){
  console.log(e);
}

try{
  fs.writeFileSync('textfile.txt','Hello World..!','utf8');
  console.log('FILE WRITE COMPLETE');
}catch(e){
  console.log(e);
}

// 비동기 처리를 하는 메서드의 예외처리구문

fs.readFile('textfile.txt','utf8',function(error,data){
  if(error){console.log(error);}
  console.log(data);
});

fs.writeFile('textfile.txt','Hello World..!','utf8',function(error){
  if(error){console.log(error);}
  console.log('FILE WRITE COMPLETE');
});
