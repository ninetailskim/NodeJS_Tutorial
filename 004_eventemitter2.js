//对于每个时间，eventemitter支持若干个事件监听器，触发时，依次调用。
var events = require('events');

var emitter = new events.EventEmitter();

emitter.on('someEvent', function(arg1, arg2){
    console.log('listener1', arg1, arg2);
});

emitter.on('someEvent', function(arg1, arg2){
    console.log('listener2', arg1, arg2);
});

emitter.emit('someEvent', 'lalala', 'hehehe');