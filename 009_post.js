var http = require('http');
var querystring = require('querystring');
var util = require('util');

var postHTML = 
    '<html><body><form method="post">a:<input name="a"><br>b:<input name="b"><br><input type="submit"></form></body></html>'


http.createServer(function(req, res){
    var post = '';
    req.on('data', function(chunk){
        post += chunk;
    });

    req.on('end', function(){
        post = querystring.parse(post);
        res.writeHead(200, {'Content-Type':'text/html; charset=utf8'});
        if(post.a && post.b){
            res.write("a: " + post.a);
            res.write("<br>");
            res.write("b: " + post.b);
        }
        else{
            res.write(postHTML);
        }
        res.end();
    }) ;
}).listen(3000);