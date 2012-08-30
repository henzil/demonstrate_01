
/**
 * Module dependencies.
 */

var express = require('express')
  , routes = require('./routes')
  , http = require('http')
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

//TODO 数据库存储
var Db = require('mongodb').Db;
var Server = require('mongodb').Server;
//只储存数据的demo
app.post('/saveUser', function (req, res) {
    var user={};
    user.name=req.body.userName;

    var db=new Db('test',new Server('localhost',27017,{auto_reconnect:true}, {}));
    db.open(function(){
        console.log('db opened');
        db.collection('my_users',function(err,collection){
            if (err) callback(err);
            collection.insert(user,{safe:true},function(err,docs){
                console.log(docs[0]._id);
            });
        });
    });
    res.end();
});