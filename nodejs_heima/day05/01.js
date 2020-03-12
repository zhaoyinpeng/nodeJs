let express = require('express')
let session = require('express-session')
let app = express()
// app.set('trust proxy', 1)
app.use(session({
  secret: 'keyboard cat',
  resave: false,
  saveUninitialized: true
}))
//路由能力！！！
app.get('/', (req, res) => {
  if (req.session.login) {
    res.send('你好,' + req.session.username)
  } else {
    res.send('你没有登录')
  }
})
app.get('/login', (req, res) => {
  req.session.login = true
  req.session.username = 'zhaoyp'
  res.send('成功登陆')
})
app.listen(3000)