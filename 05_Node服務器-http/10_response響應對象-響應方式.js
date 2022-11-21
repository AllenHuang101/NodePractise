const http = require('http');

// 1. 創建一個http服務器
const server = http.createServer((req, res) => {
  // res: response對象 => Writable 可寫流
  // 1. 響應數據方式一: write, 但是並沒有關閉流, 最後還是需要使用 end 關閉流
  res.write('Hello World');
  res.write('Allen');

  // 2. 響應數據方式二: end, 寫出最後的數據, 並且關閉流
  res.end('本次寫結束');
});

// 2.開啟server服務器
server.listen(8000, () => {
  console.log('服務器啟動成功~');
});
