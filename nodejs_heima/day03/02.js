let express = require('express')

let app = express()

//开启静态功能！！！欧力给
app.use(express.static('./static'))
app.listen(3000)
// 终端打印如下信息
console.log('Server running at http://127.0.0.1:3000/');