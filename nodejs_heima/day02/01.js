//创建文件夹
var http = require('http');
let fs = require('fs')
http.createServer(function (req, res) {
  if (req.url === '/favicon.ico') {
    return
  }
  res.writeHead(200, { 'Content-Type': 'text/html;chartset=UTF8' })
  res.end('success')
}).listen(3000, '127.0.0.1');

// 终端打印如下信息
console.log('Server running at http://127.0.0.1:3000/');