const http = require('http');
const fs = require('fs');

// 1. 創建一個http服務器
const server = http.createServer((req, res) => {
  // 創建writable的stream
  const writeStream = fs.createWriteStream('./foo.png', {
    flags: 'a+',
  });

  // req.pipe(writeStream);

  // 客戶傳遞的數據是表單數據
  req.on('data', (data) => {
    console.log(data);
    writeStream.write(data);
  });

  req.on('end', () => {
    console.log('數據傳輸完成~');
    writeStream.close();
    res.end('文件上傳成功~');
  });
});

// 2.開啟server服務器
server.listen(8000, () => {
  console.log('服務器啟動成功~');
});
