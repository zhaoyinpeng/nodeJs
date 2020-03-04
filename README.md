# nodeJs
node.js

# 基础
* 三特征 单线程 事件驱动 非阻塞I/O！
  * 单线程的好处是8GB内存可供大约4000个用户同时访问，比多线程好处理。
  * nodejs的开发更多的是在设计路由。
  * I/O指的是数据库操作。
  * 因为是单线程所以不适合做大量计算操作，大量计算操作会阻塞单线程。
  * nodejs适用于表单提交、聊天室、抢课系统等大量I/O操作的程序。
  * nodejs无法挑战其他大型后台语言。
* 使用node xx.js 这种方法运行node。
  * 要运行node里面的东西，注意cd到相应跟目录，因为里面路由的./是相对于cd后的目录的。
  * 注意node中的所有请求固态资源都需要写路由！包括不限于图片，css，html等。
* nodejs跟apache有本质区别。node.js没有web容器。

## http创建服务器
helloWorld.js文件
* http.createServer((req,res)=>{}).listen(3000,'127.0.0.1')
  * res
    * res.write
    * res.writeHead
    * res.end
  * req
    * req.url

## fs文件操作方法
* 遍历文件夹中的所有文件，异步方法如何变同步，可以设置迭代器！！