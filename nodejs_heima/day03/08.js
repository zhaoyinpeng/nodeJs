let express = require('express')

let app = express()
//use，后面参数path
//会匹配/admin 、/admin/xxx、/admin/xxx/xxxx
app.use('/admin', (req, res) => {
  res.send('hello')
})
app.listen(3000)
// 终端打印如下信息
console.log('Server running at http://127.0.0.1:3000/');