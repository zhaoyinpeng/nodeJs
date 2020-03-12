const MongoClient = require('mongodb').MongoClient;

// _connectDB内部函数
let _connectDB = (cb) => {
  let url = 'mongodb://localhost:27017/itcast'
  MongoClient.connect(url, function (err, db) {
    console.log(db)
    console.log(err)
    cb && cb(err, db)
  });
}

