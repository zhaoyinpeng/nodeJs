let express = require('express')
let app = express()
let http = require('http').Server(app)
let io = require('socket.io')(http)
app.set('view engine', 'ejs')
app.get('/', (req, res, next) => {
  res.render(index)
})
http.listen(3000)