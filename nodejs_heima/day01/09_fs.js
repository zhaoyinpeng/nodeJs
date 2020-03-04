//创建文件夹
var http = require('http');
let fs = require('fs')
http.createServer(function (req, res) {
  if(req.url === '/favicon.ico'){
    return
  }
  fs.mkdir(('./album/aaa'),(err,data)=>{
    console.log(err)
    console.log(data)
  })
  res.end()
}).listen(3000);

// 终端打印如下信息
console.log('Server running at http://127.0.0.1:3000/');