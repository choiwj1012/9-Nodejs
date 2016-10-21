// extract os module
var os = require('os');

// use os module
console.log("호스트 이름 : %s", os.hostname());
console.log(os.type());
console.log(os.platform());
console.log(os.arch());
console.log(os.release());
console.log(os.uptime());
console.log(os.loadavg());
console.log("총 메모리 : %d", os.totalmem());
console.log(os.freemem());
console.log(os.cpus());
console.log(os.networkInterfaces());
