var events = require('events');

var eventEmitter = new events.EventEmitter();

var listener1 = function listener1(){
    console.log('listener1 works');
}

var listener2 = function listener2(){
    console.log('listener2 works');
}

eventEmitter.addListener('connection', listener1);

eventEmitter.on('connection', listener2);

var eventListeners = events.EventEmitter.listenerCount(eventEmitter, 'connection');
console.log(eventListeners + "listener(s)");

eventEmitter.emit('connection');

eventEmitter.removeListener('connection', listener1);
console.log('listener1 stops working');

eventEmitter.emit('connection');

var eventListeners = events.EventEmitter.listenerCount(eventEmitter, 'connection');
console.log(eventListeners + "listener(s)");

console.log("finished!");

//当error被触发，eventemitter规定如果没有响应的监听器，nodejs会当做异常，推出并输出错误信息。