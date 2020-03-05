let ejs = require('ejs')

let string = '高兴，今天买了iphone<%= a %>s';

let data = {
  a: 9
}
let html = ejs.render(string, data)
console.log(html)