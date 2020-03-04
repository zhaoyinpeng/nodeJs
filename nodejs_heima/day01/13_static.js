//静态服务器！！
let http = require('http')
let url = require('url')
let querystring = require('querystring')
let fs = require('fs')
let path = require('path')
http.createServer((req, res) => {
  if (req.url === '/favicon.ico') {
    return
  }
  //获取用户路径
  let pathname = url.parse(req.url).pathname
  if (pathname === '/') {
    pathname = 'index.html'
  }
  let extname = path.extname(pathname)
  //真正读取文件
  fs.readFile('./static/' + pathname, (err, data) => {
    if (err) {
      //出错跳转404
      fs.readFile('./static/404.html', (err, data) => {
        res.writeHead(200, { 'Content-Type': 'text/html;charset=UTF-8' });
        res.end(data);
      })
      return
    }
    //设置MIME类型，就是content-type类型
    //网页： text/hltml
    //jpg: image/jpg
    //返回扩展名
    res.writeHead(200, { 'Content-Type': getMime(extname) })
    res.end(data)
  })
}).listen(3000, '127.0.0.1')

let getMime = (extname) => {
  switch (extname) {
    case '.html':
      return 'text/html'
      break
    case '.jpg':
      return 'image/jpg'
      break
    case '.css':
      return 'text/css'
      break
  }
}
// 终端打印如下信息
console.log('Server running at http://127.0.0.1:3000/');