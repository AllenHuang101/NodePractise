const fs = require('fs');

// 1.一次寫入內容
fs.writeFile(
  './bbb.txt',
  'hello world',
  { encoding: 'utf-8', fla: 'a+' },
  (err) => {
    console.log('寫入文件結果:', err);
  }
);

// 2.創建一個寫入流
const writeSream = fs.createWriteStream('./ccc.txt', {
  flags: 'a',
});

writeSream.on('open', (fd) => {
  console.log('文件被打開', fd);
});
writeSream.write('aaa');
writeSream.write('bbb');
writeSream.write('ccc', (err) => {
  console.log('寫入完成', err);
});

writeSream.on('finish', () => {
  console.log('文件寫入結束');
});

writeSream.on('close', () => {
  console.log('文件被關閉');
});

// 3.寫入完成時, 需要手動去掉用 close 方法
// writeSream.close();

// 4.end方法: 1.最後的內容寫入到文件中, 並且關閉文件
writeSream.end('哈哈哈');
