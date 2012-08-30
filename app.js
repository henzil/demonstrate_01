
/**
 * Module dependencies.
 */

var express = require('express')
  , routes = require('./routes')
  , http = require('http')
  , ejs=require('ejs')
  , fs = require('fs')
  , path = require('path');

var app = express();

app.configure(function(){
  app.set('port', process.env.PORT || 4000);
  app.set('views', __dirname + '/views');
  app.set('view engine', 'jade');
  app.use(express.favicon());
  app.use(express.logger('dev'));
  app.use(express.bodyParser());
  app.use(express.methodOverride());
  app.use(app.router);
  app.use(express.static(path.join(__dirname, 'public')));
  app.use(express.logger({stream: fs.createWriteStream('./myLogFile.log', {flags: 'a'})}))

});

app.configure('development', function(){
  app.use(express.errorHandler());
});

app.get('/', routes.index);

http.createServer(app).listen(app.get('port'), function(){
  console.log("Express server listening on port " + app.get('port'));
});

app.post('/saveUser', function(req,res){
    var data=req.body;
    var template='<html><body><h1>你好，<%=userName%></h1></body></html>';
    //res.send('hello:'+req.body.userName);
    res.send(ejs.render(template,data));
    res.end();
});
app.get('/saveUser', function(req,res){
    res.send('hello:'+req.query.userName);
    res.end();
});