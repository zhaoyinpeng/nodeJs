# NoSQL数据库

## 非结构数据库
  * 没有行和列的概念
  * 用JSON来存储数据

## 特点
  * 数据模型简单
  * 需要灵活性更强的IT系统
  * 对数据库性能要求高
  * 不需要高度一致的数据
  * 不擅长筛选，没有资格挑战老牌数据库

# MongoDB
## 安装

## 运行
* mongod --dbpath '创建的文件夹'
* 得另起一个cmd 运行mongo
 * show dbs 列出所有数据库
 * use 数据库名称 创建或使用某个数据库
 * db 显示当前数据库
 * db.xxx 创建集合 或者使用集合
  * show collections 显示集合
  * db.student.insert({"name":"xiaoming","age":12}) 创建数据，添加到student集合中
  * db.student.find({}) 显示student当前集合中的所有数据
  * db.student.find({}).count() 显示student当前集合中所有数据的数量