const fs = require('fs');

// 1.通過流讀取文件
const readStream = fs.createReadStream('./aaa.txt', {
  start: 8,
  end: 22,
  highWaterMark: 3,
});

// 2.監聽讀取到的數據
readStream.on('data', (data) => {
  console.log(data, data.toString());
});

// 3.補充其他的事件監聽
readStream.on('open', (fd) => {
  console.log('通過流將文件打開~', fd);
});

readStream.on('end', () => {
  console.log('讀取結束');
});

readStream.on('close', () => {
  console.log('文件讀取結束, 並且被關閉');
});
