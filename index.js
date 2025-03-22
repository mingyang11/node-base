import util from 'node:util';
import { exec } from 'node:child_process';

// promisify：将回调函数变为promise函数
const execPromise = util.promisify(exec);
// 将promise转为promise
const execCallbackify = util.callbackify();

execPromise('node -v').then(({ stdout, stderr }) => {
  console.log(stdout);
});

// 转换匹配占位符
util.format('%s---%s', 'chuze', 'fuyao');
