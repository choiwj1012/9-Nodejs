// crypto모듈은 hash 생성과 암호화를 수행하는 모듈이다.
// 프로그래밍 언어에서 'hash'라는 말이 나오면 2가지의 의미로 사용된다.
// 1. 키와 값을 갖는 자료형 : 대표적으로 자바스크립트의 객체가 해시이다.
// 2. 전자 지문

// extract module
var crypto = require('crypto');

// create a hash
var shasum = crypto.createHash('sha256');
shasum.update('crypto_hash');
var output = shasum.digest('hex');

// print
console.log('crypto_hash : ', output);

// 원본 문자열이 조금이라도 다르면 해시 형태가 굉장히 많이 달라진다.
// 이를 눈사태 효과(avalanche_effect)라고 부른다.

// hash는 다른 문자열이라도 같게 나올 수 있다.
// 따라서 해시를 원래 값으로 돌리는 것은 완전히 불가능하다.

// encrypt using crypto module

// declare variable
var key = '아무도 알지 못하는 나만의 비밀 키';
var input = 'PASSWORD';

// encryption
var cipher = crypto.createCipher('aes192', key);
cipher.update(input, 'utf8', 'base64');
var cipheredOutput = cipher.final('base64');

// decryption
var decipher = crypto.createDecipher('aes192', key);
decipher.update(cipheredOutput, 'base64', 'utf8');
var decipheredOutput = decipher.final('utf8');

// print
console.log('원래 문자열 : ' + input);
console.log('암호화 : ' + cipheredOutput);
console.log('암호화 해제 : ' + decipheredOutput);
