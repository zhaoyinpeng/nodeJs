let express = require('express')

let app = express()

//开启静态功能！！！欧力给 中间件
app.use('/static', express.static('./static'))
// app.use('/', express.static('./static')) //默认

//静态资源服务放在其他get上面好点
app.get('/', (req, res) => {
  res.send('哈哈')
})

//会自动识别err参数
app.use('*', (req, res) => {
  res.send('没有这个页面')
})
app.listen(3000)
// 终端打印如下信息
console.log('Server running at http://127.0.0.1:3000/');