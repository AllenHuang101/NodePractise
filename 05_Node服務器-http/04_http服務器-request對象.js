const http = require('http');

// 1. 創建一個http服務器
const server = http.createServer((req, res) => {
  // 1.url
  console.log(req.url);

  // 2.method
  console.log(req.method);

  // 3.header
  console.log(req.headers);
  
  res.end('Hello World');
});

// 2.開啟server服務器
server.listen(8000, () => {
  console.log('服務器啟動成功~');
});
