const fs = require('fs');

// 1.一次性讀取
// 缺點1: 無法精準控制從哪裡讀取，讀取到什麼位置
// 缺點2: 讀去到某一個位置, 先暫停讀取, 之後再恢復讀取
// 缺點3: 文件非常大時，多次讀取
// fs.readFile('./aaa.txt', (err, data) => {
//   console.log(data);
// });

// 2.通過流讀取文件
// 2.1 創建一個可讀流
// start: 從什麼位置開始讀取
// end: 讀取到什麼位置(包括end)
// highWaterMark: 每次讀取的 byte 數, default: 64kb
const readStream = fs.createReadStream('./aaa.txt', {
  start: 8,
  end: 22,
  highWaterMark: 3,
});

readStream.on('data', (data) => {
  console.log(data, data.toString());

  readStream.pause();

  setTimeout(() => {
    readStream.resume();
  }, 2000);
});
