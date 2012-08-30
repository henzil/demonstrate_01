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