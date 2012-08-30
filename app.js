
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

});

app.use(express.logger({stream: fs.createWriteStream('./myLogFile.log', {flags: 'a'})}));

app.configure('development', function(){
    app.use(express.errorHandler());
});

app.get('/', routes.index);

http.createServer(app).listen(app.get('port'), function(){
    console.log("Express server listening on port " + app.get('port'));
});

//TODO file 收到文件并储存
app.post('/saveFile', function (req, res) {
    console.log(req.files);

    var tmp_path = req.files.file.path;
    var target_path = './public/images/' + req.files.file.name;
    fs.rename(tmp_path, target_path, function (err) {
        if (err) throw err;
        fs.unlink(tmp_path, function () {
            if (err) throw err;
        });
    });
    res.end();
});