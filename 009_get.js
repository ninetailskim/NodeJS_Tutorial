var http = require('http');
var url = require('url');
var util = require('util');

/*
http.createServer(function(request, response){
    response.writeHead(200, {'Content-Type':'text/plain; charset=utf-8'});
    response.end(util.inspect(url.parse(request.url, true)));
}).listen(3000);
*/

http.createServer(function(req, res){
    res.writeHead(200, {'Content-Type':'text/plain'});
    var params = url.parse(req.url, true).query;
    res.write(util.inspect(url.parse(req.url, true)));
    res.write('\n');
    res.write(util.inspect(params));
    res.write('\n');
    res.write('website: '+ params.a);
    res.write('\n');
    res.write('url: '+ params.b);
    res.end();
}).listen(3000);