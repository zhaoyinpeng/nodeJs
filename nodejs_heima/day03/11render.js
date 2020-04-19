let express = require('express')

let app = express()

//ejs好像必须放在views文件中才能访问
app.set('views', 'static') //修改文件夹
app.set('view engine', 'ejs')
app.get('/', (req, res) => {
  res.render('form')
})
app.listen(3000)
// 终端打印如下信息
console.log('Server running at http://127.0.0.1:3000/');