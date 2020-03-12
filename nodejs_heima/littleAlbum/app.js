let express = require('express')
let app = express()
// controller文件夹中有package.json文件，里面的main是入口文件
let router = require('./controller')

//设置模板引擎
app.set('view engine', 'ejs')

//路由中间件
//静态页面
app.use(express.static('./public'))
//首页
app.get('/', router.showIndex)
app.get('/:albumName', router.showAlbum)
app.listen(3000)
// 终端打印如下信息
console.log('Server running at http://127.0.0.1:3000/');