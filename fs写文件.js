const fs = require("fs");  //文件操作

//异步创建文件
let writeFile = (data) => {
  //   异步操作 数据 写入文件
  fs.writeFile('test/test.txt', data, function (err) {
    if (err) {
      console.log(err);
    } else {
      console.log('ok');
    }
  });
}

//同步创建文件
let writeFileSync = (data) => {
  try {
    var result = fs.writeFileSync('test/test.txt', data);
    console.log(result)
  } catch (e) {
    console.log(e)
  }
}

const writeFileRecursive = function (path, buffer, callback) {
  let lastPath = path.substring(0, path.lastIndexOf("/"));
  fs.mkdir(lastPath, { recursive: true }, (err) => {
    if (err) return callback(err);
    fs.writeFile(path, buffer, function (err) {
      if (err) return callback(err);
      return callback(null);
    });
  });
}

const buffer = "test hahahhhhh";
writeFileRecursive('./test/file1', buffer, (err) => {
  if (err) console.error(err);
  console.info("write success");
  writeFile('异步创建text文件')
})


