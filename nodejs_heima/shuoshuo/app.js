let express = require('express')
let app = express()

app.set('view engine','ejs')

app.use(express.static('./public'))
app.listen(3000)