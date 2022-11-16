//  events 模塊中的 event bus
const EventEmiiter = require('events');

// 創建 EventEmitter 的實例
const emitter = new EventEmiiter();

// 監聽事件/發射事件
emitter.on('finish', () => {
  console.log('監聽finish的事件');
});

// 發射事件
emitter.emit('finish');
