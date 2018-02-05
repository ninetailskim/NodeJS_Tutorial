var server = require('./008_server');
var router = require('./008_router');

server.start(router.route);