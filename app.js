
/**
 * Module dependencies.
 */

//var express = require('express')
//  , routes = require('./routes')
//  , http = require('http')
//  , path = require('path');
//
//var app = express();
//
//app.configure(function(){
//  app.set('port', process.env.PORT || 4000);
//  app.set('views', __dirname + '/views');
//  app.set('view engine', 'jade');
//  app.use(express.favicon());
//  app.use(express.logger('dev'));
//  app.use(express.bodyParser());
//  app.use(express.methodOverride());
//  app.use(app.router);
//  app.use(express.static(path.join(__dirname, 'public')));
//
//
//});
//
//app.configure('development', function(){
//  app.use(express.errorHandler());
//});
//
//app.get('/', routes.index);
//
//http.createServer(app).listen(app.get('port'), function(){
//  console.log("Express server listening on port " + app.get('port'));
//});


var http = require('http');
http.createServer(function (req, res) {
    res.writeHead(200, {'Content-Type':'text/plain'});
    res.end('Hello node.js! \n');
}).listen(8080, "0.0.0.0");
//听取1024以下的端口时，启动需要使用sudo node ***.js

console.log('Server running at http://127.0.0.1:80/');