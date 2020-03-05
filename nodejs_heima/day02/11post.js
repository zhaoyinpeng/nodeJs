//post请求
var http = require('http');
let querystring = require('querystring')
http.createServer(function (req, res) {
  if (req.url === '/favicon.ico') {
    return
  }
  if (req.url === '/dopost' && req.method.toLowerCase() === 'post') {
    let alldata = ''
    //防止提交的表单阻塞后台
    req.addListener('data', function (chunk) {
      alldata += chunk
      console.log(chunk)
    })
    req.addListener('end', function () {
      console.log(alldata.toString())
      let str = querystring.parse(alldata.toString())
      console.log(str.sex)
      console.log(str.name)
      res.writeHead(200, { 'Content-Type': 'text/html;chartset=UTF8' })
      res.end()
    })
  }
}).listen(3000, '127.0.0.1');

// 终端打印如下信息
console.log('Server running at http://127.0.0.1:3000/');