const http = require('http');

// 創建一個http服務器
const server1 = http.createServer((req, res) => {
  res.end('2000端口服務器返回的結果');
});

server1.listen(2000, () => {
  console.log('2000端口對應的服務器啟動成功~');
});

const server2 = http.createServer((req, res) => {
  res.end('3000端口服務器返回的結果');
});

server2.listen(3000, () => {
  console.log('3000端口對應的服務器啟動成功~');
});
