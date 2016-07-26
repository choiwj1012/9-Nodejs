var fs = require('fs');

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
