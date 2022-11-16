//  events 模塊中的 event bus
const EventEmiiter = require('events');

// 創建 EventEmitter 的實例
const emitter = new EventEmiiter();

// 監聽事件
function handleFn(name, age, height) {
  console.log('監聽finish的事件', name, age, height);
}
emitter.on('finish', handleFn);

// 發射事件
emitter.emit('finish', 'Allen', 18, 1.88);

// 取消事件監聽
emitter.off('finish', handleFn);

emitter.emit('finish');
