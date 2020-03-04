//静态资源服务
var http = require('http');
let fs = require('fs')
//nodejs 没有web容器，让nodejs提供一个静态服务都很难,包括加载css，jpg等
//这是缺点也是有点，适合做顶层路由设计
//node相对路径相对的是盘符 "E:\xxx" 想要运行就要cd进具体文件
http.createServer(function (request, response) {
  if (request.url === '/fang') {
    fs.readFile('./test/a.html', function (err, data) {
      response.writeHead(200, { 'Content-Type': 'text/html;charset=UTF-8' });
      response.end(data);
    })
  } else if(request.url === '/yuan'){
    fs.readFile('./test/b.html', function (err, data) {
      response.writeHead(200, { 'Content-Type': 'text/html;charset=UTF-8' });
      response.end(data);
    })
  } else if(request.url === '/test.jpg'){
    fs.readFile('./test/test.jpg', function (err, data) {
      response.writeHead(200, { 'Content-Type': 'image/jpg' });
      response.end(data);
    })
  } else if(request.url === '/bbb.css'){
    fs.readFile('./test/css.css', function (err, data) {
      response.writeHead(200, { 'Content-Type': 'text/css' });
      response.end(data);
    })
  } else {
    response.writeHead(404, { 'Content-Type': 'text/html;charset=UTF-8' });
      response.end('没有这个页面！');
  }
}).listen(8888);

// 终端打印如下信息
console.log('Server running at http://127.0.0.1:8888/');