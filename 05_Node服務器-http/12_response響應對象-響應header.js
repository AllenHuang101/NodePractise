const http = require('http');

// 1. 創建一個http服務器
const server = http.createServer((req, res) => {
  // 1.單獨設置某一個header
  res.setHeader('Content-Type', 'application/json;charset=utf8');

  // 2.和http status code 一起設置
  // res.writeHead(200, {
  //   'Content-Type': 'application/json;charset=utf8;',
  // });

  const list = [
    { name: 'allen', age: 19 },
    { name: 'tommy', age: 20 },
  ];
  res.end(JSON.stringify(list));
});

// 2.開啟server服務器
server.listen(8000, () => {
  console.log('服務器啟動成功~');
});
