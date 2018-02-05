/*var hello = require('./007_export');
hello.world();*/

var Hello = require('./007_export');

hello = new Hello();

hello.setName('ahu');

hello.sayHello();