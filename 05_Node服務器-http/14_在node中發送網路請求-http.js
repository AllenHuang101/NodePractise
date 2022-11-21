const http = require('http');

// 1. 使用http模塊發送get請求
http.get('http://localhost:8000', (res) => {
  // 從可讀流中獲取數據
  res.on('data', (data) => {
    const dataString = data.toString();
    const dataInfo = JSON.parse(dataString);
    console.log(dataInfo);
  });
});

// 2.使用http模塊發送post請求
const req = http.request(
  {
    method: 'POST',
    hostname: 'localhost',
    port: 8000,
  },
  (res) => {
    res.on('data', (data) => {
      const dataString = data.toString();
      const dataInfo = JSON.parse(dataString);
      console.log(dataInfo);
    });
  }
);

// post 必須調用end, 表示寫入內容完成
req.end();
