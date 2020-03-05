let express = require('express')

let app = express()

//路由能力！！！
app.get('/', (req, res) => {
  res.send('你好')
})
app.get('/haha', (req, res) => {
  res.send('haha')
})
app.get(/\/student\/([\d]{10})$/, (req, res) => {
  res.send('学生信息，学号：' + req.params[0])
})

app.get('/teacher/:gonghao', (req, res) => {
  res.send('老师信息，工号：' + req.params['gonghao'])
})
app.listen(3000)