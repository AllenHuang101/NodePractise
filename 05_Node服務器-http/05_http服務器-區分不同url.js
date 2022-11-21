const http = require('http');

// 1. 創建一個http服務器
const server = http.createServer((req, res) => {
  const url = req.url;
  const method = req.method;

  if (url === '/login') {
    if (method === 'POST') {
      res.end('login成功~');
    }
  } else if (url === '/products') {
    res.end('商品列表~');
  }

  res.end('Hello World');
});

// 2.開啟server服務器
server.listen(8000, () => {
  console.log('服務器啟動成功~');
});
