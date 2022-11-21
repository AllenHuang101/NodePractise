const http = require('http');

// 1. 創建一個http服務器
const server = http.createServer((req, res) => {
  // 響應狀態碼
  // 1. 方式一: statusCode
  res.statusCode = 201;

  // 2. 方式二: writeHead
  res.writeHead(401);
  res.end('Hello World 黃健倫');
});

// 2.開啟server服務器
server.listen(8000, () => {
  console.log('服務器啟動成功~');
});
