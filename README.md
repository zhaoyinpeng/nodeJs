# nodeJs
node.js

# 基础
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
```
