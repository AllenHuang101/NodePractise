const http = require('http');
const url = require('url');
const qs = require('querystring');

// 1. 創建一個http服務器
const server = http.createServer((req, res) => {
  // 獲取 body 參數
  req.setEncoding('utf-8');

  // request 對象是一個 ReadableStream 可讀流
  let isLogin = false;
  req.on('data', (data) => {
    const loginInfo = JSON.parse(data);

    if (loginInfo.name === 'coderwhy' && loginInfo.password === '123456') {
      isLogin = true;
    } else {
      isLogin = false;
    }
    console.log(loginInfo);
  });

  req.on('end', () => {
    if (isLogin) {
      res.end('登入成功');
    } else {
      res.end('登入失敗');
    }
  });
});

// 2.開啟server服務器
server.listen(8000, () => {
  console.log('服務器啟動成功~');
});
