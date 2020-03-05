// 改名称
let fs = require('fs')
let oldPath = 'xxx'
let newPath = __dirname + '/xxx/' + '文件名等等等'

fs.rename(oldPath, newPath, (err) => {
  console.log(err)
})