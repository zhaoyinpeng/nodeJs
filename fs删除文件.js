let fs = require('fs')

//unlink 删除文件(不能删除文件夹)
// fs.unlink('./test/file1', (err) => {
//   if (err) {
//     console.log("异常" + err);
//   } else {
//     console.log("删除成功！");
//   }
// })

//unlink 删除文件夹(这能删除空文件夹)
// fs.rmdir('./test', (err) => {
//   if (err) {
//     console.log("异常" + err);
//   } else {
//     console.log("删除成功！");
//   }
// })

//删除非空文件夹时需要用递归
function deleteFolderRecursive(path) {
  if (fs.existsSync(path)) {
    fs.readdirSync(path).forEach(function (file) {
      let curPath = path + "/" + file;
      if (fs.statSync(curPath).isDirectory()) { // recurse
        deleteFolderRecursive(curPath);
      } else { // delete file
        fs.unlinkSync(curPath);
      }
    });
    fs.rmdirSync(path);
  }
}
deleteFolderRecursive('./test')