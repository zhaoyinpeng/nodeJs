let http = require('http');
// require 请求 response 响应
let server = http.createServer((require, response) => {
  console.log('开启服务器')
  //响应方法
  response.write('success') //返回响应内容

  //获取请求路径，并做判断
  if (require.url === '/1.html') {
    response.write('1.html')
  } else if (require.url === '/2.html') {
    response.write('2.html')
  } else {
    response.write('404.html')
  }
  response.end()
})
//监听端口 8888
server.listen(8888)
console.log('Server running at http://127.0.0.1:8888/');