const path = require('node:path');

// path.basename: 返回路径的目录名
console.log(path.basename('/User'), 'basename');

// path.extname: 返回文件拓展名
console.log(
  path.extname('/Users/yangming/Desktop/projectOwn/node-base/index.js')
);

// path.join: 拼接路径
console.log(
  path.join('/Users', 'yangming', 'Desktop/projectOwn/node-base', 'index.js')
);

// path.resolve: 解析路径, 返回的是绝对路径
// 都是绝对路径返回最后一个
// 如果只有一个相对路径，返回当前工作目录的绝对路径
console.log(path.resolve('/Users/yangming'));
console.log(path.resolve('/Users/yangming', 'fuyao.js'));
console.log(__dirname, '__dirname');
console.log(__filename, '__filename');

// path.parse: 解析路径，返回一个对象path.format()逆向操作
console.log(
  path.parse('/Users/yangming/Desktop/projectOwn/node-base/index.js')
);
// path.format: path.parse的逆向操作
console.log(
  path.format({
    root: '/',
    dir: '/Users/yangming/Desktop/projectOwn/node-base',
    base: 'index.js',
    ext: '.js',
    name: 'index',
  })
);

// path.sep: 如果四window返回 \, 如果是mac返回 / 。为了实现跨平台的路径符号统一
console.log(path.sep);
