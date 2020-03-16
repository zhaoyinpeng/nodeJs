let http = require('http')
let fs = require('fs')
let server = http.createServer((req, res) => {
  // res.end('hello')
  if (req.url === '/') {
    //显示首页
    fs.readFile('./index.html', function (err, data) {
      res.end(data)
    })
  }
})
let io = require('socket.io')(server)
io.on('connection', function (socket) {
  console.log('连接了一个请求')
  socket.on('tiwen', function (msg) {
    console.log('服务器得到提问' + msg)
    //一对一的请求回答
    //没有个连接上来的用户都有一个socket
    socket.emit('huida','hello zyp')
    //如果是要做广播
    io.emit('huida','hello zyp')
  })
})
server.listen(3000)