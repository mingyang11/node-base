// 基于发布订阅模式的
const eventEmiter = require('node:events');

const bus = new eventEmiter();
// 默认只能监听10，这个可以修改监听事件数量
bus.setMaxListeners(20);

// 获取最大监听数量
console.log(bus.getMaxListeners());

const fn = (msg) => {
  console.log(msg);
};

bus.on('test', fn);
// off需要判断事件名和事件处理函数都一致的情况下才会关掉
bus.off('test', fn);

// 只会触发一次
bus.emit('test', 'wqnmd');
bus.emit('test', 'wqnmd');
