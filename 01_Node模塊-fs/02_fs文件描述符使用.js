const fs = require('fs');

// 打開一個文件
fs.open('./bbb.txt', (err, fd) => {
  if (err) {
    console.log('打開文件錯誤', err);
  }

  // 1.獲取文件描述符
  console.log(fd);

  // 2.讀取文件訊息
  fs.fstat(fd, (err, status) => {
    if (err) return;
    console.log(status);

    // 3.手動關閉文件
    fs.close(fd);
  });
});
