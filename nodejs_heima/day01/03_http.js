let http = require('http')
let server = http.createServer((req, res) => {
  console.log('服务器接收到了：' + req.url)
  res.writeHead(200, { 'Content-Type': 'text/html;charset=UTF8' })
  res.write('<h1>h1</h1>')
  res.write('<h2>h2</h2>')
  res.end("success") //end里面必须放置字符串
})

server.listen(3000, 'localhost')

// 终端打印如下信息
console.log('Server running at http://localhost:3000/');