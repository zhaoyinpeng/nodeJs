//路由
let route = (handle, pathname, response, request) => {
  console.log('即将进入路由路径：' + pathname)
  if (typeof handle[pathname] === 'function') {
    handle[pathname](response, request)
  } else {
    console.error('路由路径错误：' + pathname)
    response.writeHead(404, { 'Content-Type': 'text/plain' })
    response.write('404 Not found')
    response.end()
  }
}
exports.route = route