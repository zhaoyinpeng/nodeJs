//创建文件夹
var http = require('http');
let fs = require('fs')
http.createServer(function (req, res) {
  if(req.url === '/favicon.ico'){
    return
  }
  //stat监测文件状态
  fs.stat(('./album/aaa'),(err,data)=>{
    //测试路径是不是文件夹
    console.log(data.isDirectory())
  })
  res.end()
}).listen(3000);

// 终端打印如下信息
console.log('Server running at http://127.0.0.1:3000/');