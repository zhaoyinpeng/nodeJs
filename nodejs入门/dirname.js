let path = require('path')
//拼接路径
let p = path.resolve(__dirname, '\dirname.js')
console.log(p)
//获取文件信息，后缀名等
console.log(path.parse(p))