let crypto = require('crypto')
let md5 = crypto.createHash('md5')
let mima = '1234'
let password = md5.update(mima).digest('base64')
console.log(password)