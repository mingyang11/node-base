// 引入本地模块
const { name } = require('./test');
// 引入第内置模块
const fs = require('fs');
// 引入第三方模块
// const md5 = require('md5');
// 引入json文件
const data = require('./data.json');

// 导出
module.exports = {
  name,
  fs,
  //   md5,
  data,
};
