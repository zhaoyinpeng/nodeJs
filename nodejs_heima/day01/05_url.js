let http = require('http')
let url = require('url')
let server = http.createServer((req, res) => {
  let pathname = url.parse(req.url).pathname
  let query = url.parse(req.url).query
  console.log('pathname:' + pathname)
  console.log('query:' + query)
  res.end("success") //end里面必须放置字符串
})

server.listen(3000, 'localhost')

// 终端打印如下信息
console.log('Server running at http://localhost:3000/');