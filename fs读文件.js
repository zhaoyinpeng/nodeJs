//1.引入fs模块
var fs = require('fs');
//2.判断文件是否存在
fs.stat('fs.txt', (err, stat) => {
  if (err) {
    console.log(err)
  } else {
    //文件如果存在则读取
    // 是否是文件:
    console.log('isFile: ' + stat.isFile());
    // 是否是目录:
    console.log('isDirectory: ' + stat.isDirectory());
    if (stat.isFile()) {
      // 文件大小:
      console.log('size: ' + stat.size);
      // 创建时间, Date对象:
      console.log('birth time: ' + stat.birthtime);
      // 修改时间, Date对象:
      console.log('modified time: ' + stat.mtime);
    }


    //2.读取文件 用的是异步方法
    fs.readFile('fs.txt', 'utf-8', function (err, data) {//err:读取失败   data：表示文件中的内容
      // console.log(err);//没有错就输出null  有错就报错
      if (err) {
        console.log(err);
      } else {
        //console.log(data);//2进制
        console.log('异步读取fs中信息', data);//转化为字符串
      }
    })

    //同步读取 读取时出错应该用try catch
    try {
      let data = fs.readFileSync('fs.txt', 'utf-8')
      console.log('同步读取fs中信息：' + data)
    } catch (err) {
      console.log(err)
    }

  }
})
