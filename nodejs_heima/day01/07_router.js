//请求链接获取请求体中的学生id
//
var http = require('http')
// let querystring = require('querystring')
http.createServer(function (req, res) {
  let userurl = req.url
  // let query = querystring.parse(url.parse(req.url).query)
  res.writeHead(200, { 'Content-Type': 'text/html;charset=UTF8' })
  if (userurl.substr(0,9) === '/student/') {
    let studentid = userurl.substr(9)
    if (/\d{10}/.test(studentid)){
      res.end('您要查询的学生信息，id为' + studentid)
    } else {
      res.end('学生学号位数不对')
    }
  } else if (userurl.substr(0,9) === '/teacher/') {
    let teacherid = userurl.substr(9)
    if (/\d{10}/.test(teacherid)){
      res.end('您要查询的老师信息，id为' + teacherid)
    } else {
      res.end('老师学号位数不对')
    }
  }
}).listen(3000);

// 终端打印如下信息
console.log('Server running at http://127.0.0.1:3000/student/1234567890');