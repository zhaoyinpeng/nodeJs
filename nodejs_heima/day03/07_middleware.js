let express = require('express')

let app = express()
let a = 100
//如果不加next()，默认会阻塞下个请求访问，a+=2不会执行
app.get('/', (req, res, next) => {
  //这里可以检索数据库 ！！！！！！！！
  // if(xxx){
  //   // 检索用户信息，权限
  //   //如果没有权限，跳登录
  // } else {
  //   //有权限
  //   next()
  // }
  a++
  console.log(a.toString())
  res.send(a.toString())
  next()
})
app.get('/', (req, res) => {
  a += 2
  console.log(a.toString())
})
app.listen(3000)
// 终端打印如下信息
console.log('Server running at http://127.0.0.1:3000/');