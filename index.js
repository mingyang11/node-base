// 获取cpu架构和系统，和os的一样
console.log(process.arch);
console.log(process.platform);

// argv：获取命令的参数
console.log(
  process.argv,
  process.argv.includes('--version') ? '--version' : '无'
);

// cwd: 获取工作目录，和__dirname一样，但是在esm模式下是不能使用__dirname的，这时候就需要用cwd来代替
console.log(process.cwd(), __dirname);

// 获取内存信息
// console.log(process.memoryUsage());

// exit: 退出进程
// process.exit();

// env：环境变量，获取操作系统所有的环境变量
// console.log(process.env);

// cross-env：设置对应的环境变量，是一个跨平台的，不同操作系统都可以使用
console.log(process.env.NODE_ENV);
