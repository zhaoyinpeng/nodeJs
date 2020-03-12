let express = require('express')

let app = express()
const MongoClient = require('mongodb').MongoClient;
//路由能力！！！
app.get('/', (req, res) => {
  const url = 'mongodb://localhost:27017'; //服务
  const dbName = 'itcast'; //数据库名称
  MongoClient.connect(url, function (err, client) {
    if (err) {
      console.log(err)
      return
    }
    console.log('数据库连接成功')
    // client.close()
    const adminDb = client.db(dbName).admin();
    adminDb.listDatabases(function (err, dbs) {
      if(err){
        console.log(err)
      }
      console.log(dbs)
      client.close();
      res.send('你好')
    });
  });
})
app.listen(3000)