const { execFile } = require('node:child_process');
const path = require('node:path');
// 1. exec：异步的方法，回调函数，返回buffer，可以执行命令或与软件进行交互
// 2. execSync：同步的方法

// exec('node -v', (err, stdout, stderr) => {
//   // stdout是一个buffer，需要转化
//   console.log(stdout.toString());
// });

// 同步执行命令
// console.log(execSync('node -v').toString());

// 与电脑软件进行交互，比如打开我电脑上的抖音，一般mac的安装位置都在Applications下面，后面就直接跟应用程序名称
// execSync('open "/Applications/抖音.app"');

// 3.spawn: 返回没有字节上线，返回是流数据，且是实时返回
// 4.spawnSync: 这个用的少
// const { stdout } = spawn('netstat');

// stdout.on('data', (msg) => {
//   console.log(msg.toString());
// });

// stdout.on('close', () => {
//   console.log('结束');
// });

// execFile: 执行可执行文件
execFile(path.resolve(__dirname, './bat.cmd'), null, (err, stdout) => {
  console.log(err);

  console.log(stdout.toString());
});
