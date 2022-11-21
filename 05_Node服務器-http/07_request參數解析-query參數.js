const http = require('http');
const url = require('url');
const qs = require('querystring');

// 1. 創建一個http服務器
const server = http.createServer((req, res) => {
  // 1.參數一: query 類型參數
  // /home/list?offset=100&size=20

  // 1.1 解析url
  const urlString = req.url;
  const urlInfo = url.parse(urlString);
  console.log(urlInfo.query, urlInfo.pathname);

  // 1.2 解析query
  const queryString = urlInfo.query;
  const queryInfo = qs.parse(queryString);
  console.log(queryInfo);
  
  res.end('Hello World~');
});

// 2.開啟server服務器
server.listen(8000, () => {
  console.log('服務器啟動成功~');
});
