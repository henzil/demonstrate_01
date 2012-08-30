//建一个服务器

var http = require('http');
http.createServer(function (req, res) {
    res.writeHead(200, {'Content-Type':'text/plain'});
    res.end('Hello node.js! \n');
}).listen(8080, "0.0.0.0");
//听取1024以下的端口时，启动需要使用sudo node ***.js

console.log('Server running at http://127.0.0.1:80/');