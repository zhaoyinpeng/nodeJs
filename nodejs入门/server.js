let http = require('http')
let url = require('url')
//模块化 分离出start函数
//注意参数route为路由
/**
 * 我们当然可以通过硬编码的方式将路由绑定到服务器上，但是其他语言的编程经验告诉我们这会是一件非常痛苦的事，因此我们将使用依赖注入的方式较松散地添加路由模块。
 */
let start = (route, handle) => {
  let onRequest = (request, response) => {
    let pathname = url.parse(request.url).pathname
    if (pathname === '/favicon.ico') {
      return
    }
    console.log('request for ' + pathname + ' received')
    route(handle, pathname, response, request)
    //处理post请求，nodeJS会将post请求分成几块，这里用非阻塞来处理，获取完所有对象后触发end后再处理 在最后舍弃了这种，因为request还是放在requestHandlers里面进行处理
    // let postData = ''
    // request.setEncoding('utf8')
    // request.addListener('data', postDataChunk => {
    //   postData += postDataChunk
    //   console.log('接收到post请求数据块为："' + postDataChunk + '"')
    // })
    // request.addListener("end", () => {
    //   route(handle, pathname, response, postData)
    // })
  }
  http.createServer(onRequest).listen(8888)
  // 终端打印如下信息
  console.log('Server running at http://127.0.0.1:8888/');
}
//模块化封装
exports.start = start
