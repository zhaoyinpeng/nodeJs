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
* 使用node xx.js 这种方法运行node
* require()别的js文件时会执行这个js文件

## http创建服务器
helloWorld.js文件


## npm
* package.json管理依赖

## 路径
* require()中的路径，是从当前这个js文件出发，找别人。
* 但是，fs等其他的模块用到路径的时候，都是相对于cmd命令光标所在位置。所以，如果test文件中，有一个1.txt，那么test文件中的js文件想要访问，推荐的写法是用绝对路径：__dirname
```
  fs.readFile(__dirname+'/1.txt',function(err,data){
    console.log(data.toString())
  })

## module模块

```
  //module文件a.js
  let a = 'asdf'
  let b = (x)=>{
    console.log(x)
  }
  exports.a = a
  exports.b = b
  //exports可以暴露很多东西，函数、变量等
```
```
  //其他模块引入
  let xx = require('./xxx/a.js')
  let aa = xx.a
  //xx就相当于引入将模块中的所有暴露东西添加了顶层变量,用于防止污染全局变量
```
