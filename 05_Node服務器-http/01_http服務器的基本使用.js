const http = require('http');

// 創建一個http服務器
const server = http.createServer((req, res) => {
  // req: request 對象中包含本次客戶端請求的所有訊息 => 可讀流
  // res: response 對象用於給客戶端返回結果的 => 可寫流
  res.end('Hello World');
});

// 開啟對應的服務器，告知需要監聽的端口
// 1024 以下的端口一般是分配給特殊服務使用
// 監聽端口時，一般監聽1024~65535 之間的端口
server.listen(8000, () => {
  console.log('服務器已經開啟成功~');
});
