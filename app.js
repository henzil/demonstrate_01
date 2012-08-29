
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


var $ = require('jquery');
var http = require('http');

var options = {
    host:'marshal.easymorse.com',
    port:80,
    path:'/'
};

var html ='';

http.get(options, function (res) {
    res.on('data',function (data) {
        html += data;
    }).on('end', function () {
            var dom = $(html);
            var now = new Date();
            console.log('本页有', dom.find('div .post').length, '篇文章');
            console.log('耗时：' + (new Date().getTime() - now.getTime()) + 'ms');
        });
});