//请求处理模块
/**
 * querystring用于处理text字段
 * formidable用于处理文档，图片等
 */
let execFile = require('child_process').execFile
let querystring = require('querystring')
let fs = require('fs')
let formidable = require('formidable')
module.exports = {
  start(response, request) {
    console.log('进入start路由')
    /**
     * child_process 是为了实现一个既简单又使用的非阻塞操作：exec()
     * exec()他从Node.js来执行一个sell命令。在下面的例子中我们用它来获取当前目录下所有文件（'ls -lah'）,然后，当/startURL请求时将文件信息输出到浏览器中
     */
    // exec('ls -lah', (error, stdout, stderr) => {
    //   response.writeHead(200, { 'Content-Type': 'text/plain' })
    //   response.write('start:' + stdout)
    //   response.end()
    // })
    /**
     * find /方法会花10秒钟的时间才载入，不会阻塞之后的请求
     */
    // exec('find /', {
    //   timeout: 10000,
    //   maxBuffer: 20000 * 1024
    // }, (error, stdout, stderr) => {
    //   response.writeHead(200, { 'Content-Type': 'text/plain' })
    //   response.write('start:'+stdout)
    //   response.end()
    // })
    /**
     * 测试shell常用命令 !!!注意这里要用.bat文件，上面的命令在window系统里测试无法通过
     * .bat 批处理文件，批处理脚本
     */
    execFile('echo.bat', (error, stdout, stderr) => {
      console.log(error)
      let content = ''
      if (error) {
        content = error
      } else {
        content = stdout
      }
      console.log(stdout)
      console.log(stderr)
      response.writeHead(200, { 'Content-Type': 'text/plain' })
      response.write('start:' + content)
      response.end()
    })
  },
  table(response, request) {
    //创建表单页面
    console.log('进入table路由')
    //表单textarea
    // let body = `
    //   <!DOCTYPE html>
    //   <html lang="en">
    //   <head>
    //     <meta charset="UTF-8">
    //     <meta name="viewport" content="width=device-width, initial-scale=1.0">
    //     <meta http-equiv="Content-Type" content="text/html" charset="UTF-8">
    //     <title>测试</title>
    //   </head>
    //   <body>
    //     <form action="/upload" method="post">
    //       <textarea name="text" cols="30" rows="10"></textarea>
    //       <input type="submit" value="Submit text">
    //     </form>
    //   </body>
    //   </html>
    // `
    //上传文件
    let body = `
    <!DOCTYPE html>
      <html lang="en">
      <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta http-equiv="Content-Type" content="text/html" charset="UTF-8">
        <title>测试</title>
      </head>
      <body>
        <form action="/upload" enctype="multipart/form-data" method="post">
          <input type="file" name="upload">
          <input type="submit" value="Upload file">
        </form>
      </body>
      </html>
    `
    response.writeHead(200, { 'Content-Type': 'text/html' })
    response.write(body)
    response.end()
  },
  upload(response, request) {
    console.log('进入upload路由')
    let form = new formidable.IncomingForm()
    console.log('即将开始解析')
    //form.parse会报cross-device link not permitted错误，解决办法添加下面一行代码
    form.uploadDir = 'tmp'
    form.parse(request, (error, fields, files) => {
      console.log('解析完成')
      fs.renameSync(files.upload.path, './tmp/test.jpg')
      response.writeHead(200, { 'Content-Type': 'text/html' })
      response.write('接收到图片如下：<br/>')
      response.write('<img src="/show">')
      response.end()
    })
  },
  show(response, request) {
    console.log('进入show路由')
    fs.readFile('./tmp/test.jpg', 'binary', (error, file) => {
      if (error) {
        response.writeHead(500, { 'Content-Type': 'text/plain' })
        response.write(error + '\n')
        response.end()
      } else {
        response.writeHead(200, { 'Content-Type': 'image/jpg' })
        response.write(file, 'binary')
        response.end()
      }
    })
  }
}