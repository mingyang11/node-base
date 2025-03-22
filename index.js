const { exec } = require('node:child_process');
const os = require('node:os');

// plateform: 获取操作平台
console.log(os.platform());

// release: 获取操作系统版本号
console.log(os.release());

// version： 操作系统版本
console.log(os.version());

const open = (url) => {
  const plateform = os.platform();
  if (plateform === 'darwin') {
    exec(`open ${url}`);
  } else if (plateform === 'win32') {
    exec(`start ${url}`);
  } else if (plateform === 'linux') {
    exec(`xdg-open ${url}`);
  }
};

// open('http://www.baidu.com');

// homedir: 读取当前目录
console.log(os.homedir());

// arch: cpu架构
console.log(os.arch());

// cpus: 操作系统线程cpu信息
// console.log(os.cpus());

// 获取网络信息
console.log(os.networkInterfaces());
