let http = require('http')
let url = require('url')
let querystring = require('querystring')
let server = http.createServer((req, res) => {
  let pathname = url.parse(req.url).pathname
  let query = querystring.parse(url.parse(req.url).query)
  res.writeHead(200, { 'Content-Type': 'text/html;charset=UTF8' })
  console.log('pathname:' + pathname)
  console.log('age:' + query.age)
  console.log('sex:' + query.sex)
  console.log('name:' + query.name)
  res.end("收到了" + pathname + query.age) //end里面必须放置字符串
})

server.listen(3000, 'localhost')

// 终端打印如下信息
console.log('Server running at http://localhost:3000/');