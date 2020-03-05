//创建文件夹
var http = require('http');
let a = 100
http.createServer(function (req, res) {
  if (req.url === '/favicon.ico') {
    return
  }
  a++
  res.end(a.toString())
}).listen(3000, '127.0.0.1');

// 终端打印如下信息
console.log('Server running at http://127.0.0.1:3000/');