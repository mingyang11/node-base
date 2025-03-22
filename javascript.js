function fn() {}

fn.prototype.name = 'fuyao';

const a = new fn();
console.log(Object.getPrototypeOf(a));
