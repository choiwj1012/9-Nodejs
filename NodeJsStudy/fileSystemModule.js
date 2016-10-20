// extract fileSystem module
var fs = require('fs');

// fileSystem Module Method

// readFile(file, encoding, callback);
// 파일을 비동기적으로 읽는다

// readFileSync(file, encoding);
// 파일을 동기적으로 읽는다

// writeFile(file, data, encoding, callback);
// 파일을 비동기적으로 쓴다

// writeFileSync(file, data, encoding);
// 파일을 동기적으로 쓴다


// 1. readFileSync()
try{

  var text = fs.readFileSync('../textfile.txt', 'utf8');
  console.log(text);

} catch(e) {
  console.log(e);
}

// 2. readFile()
fs.readFile('../textfile.txt', 'utf8', function(error, data){

  if(error){
    return console.log(error);
  }

  console.log(data);

});

// 3. writeFile()
var data = 'this is writeFile method test code';

fs.writeFile('writeFileMethodTestCodeAsync.txt', data, 'utf8', function(error){

  if(error){
    return console.log(error);
  }

  console.log('WRITE FILE ASYNC COMPLETE');

});

// 4. writeFileSync()
try{

  fs.writeFileSync('writeFileMethodTestCodeSync.txt', data, 'utf8');
  console.log('WRITE FILE SYNC COMPLETE');

} catch(e) {
  console.log(e);
}


// 자바스크립트는 조건문 안에 undefined 자료형의 변수를 넣을 경우 자동으로 false로 변환된다.
// 다음의 코드는 모두 false로 변환되어 출력된다.
console.log(Boolean(0));
console.log(Boolean(NaN));
console.log(Boolean(''));
console.log(Boolean(null));
console.log(Boolean(undefined));
