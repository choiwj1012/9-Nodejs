// EventEmiiter object
exports.timer = new process.EventEmitter();

// force event
setInterval(function(){
  exports.timer.emit('tick');
},1000);
