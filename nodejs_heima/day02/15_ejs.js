let ejs = require('ejs')
let fs = require('fs')
var http = require('http');
http.createServer(function (req, res) {
  if (req.url === '/favicon.ico') {
    return
  }
  fs.readFile('./views/index.ejs', (err, data) => {
    let template = data.toString()
    let dictionary = { a: 9 }
    let html = ejs.render(template, dictionary)
    res.writeHead(200, { 'Content-Type': 'text/html;chartset=UTF8' })
    res.end(html)
  })
}).listen(3000, '127.0.0.1');

// 终端打印如下信息
console.log('Server running at http://127.0.0.1:3000/');
