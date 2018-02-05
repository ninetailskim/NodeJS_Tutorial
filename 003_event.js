var events = require('events');
var eventEmitter = new events.EventEmitter();

//eventEmitter.on(eventName,eventHandler);

var connectHandler = function connected(){
    console.log("connect successfully");

    eventEmitter.emit('data_received');
}

eventEmitter.on('connection',connectHandler);

eventEmitter.on('data_received', function(){
    console.log("received successfully");
});

eventEmitter.emit('connection');

console.log("finished!");