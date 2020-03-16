# web Socket之前
  * 长轮询：客户端每隔很短时间就会向服务器发送请求，查看是否有新数据。客户端和浏览器大量性能浪费。
  * 长连接：客户端只求一次，但是一直保持连接，不反回结果，（一直没有写res.end()，页面一直在加载）浪费性能。
  
# web Socket
  * 聊天室适合专用
  * 原理
    * 利用http请求产生握手，http头部带有webSocket协议的请求，所以握手后，二者专用TCP协议进行交流（QQ协议）
  * 需要浏览器和服务器支持
    * chrome4,火狐4，ie10。。 
    * node0,apach7.0.2,nginx1.3
# node天生适合做长连接 使用socket.io
  * 服务器和客户端都有一个socket对象
  * socket对象都有emit和on方法
http:127.0.0.1:3000/socket.io/socket.io.js