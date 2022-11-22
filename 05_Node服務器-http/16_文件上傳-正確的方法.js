const http = require('http');
const fs = require('fs');

// 1. 創建一個http服務器
const server = http.createServer((req, res) => {
  req.setEncoding('binary');

  // 客戶傳遞的數據是表單數據
  let formData = '';

  req.on('data', (data) => {
    formData += data;
  });

  req.on('end', () => {
    console.log(formData);

    const boundary = req.headers['content-type']
      .split('; ')[1]
      .replace('boundary=', '');

    console.log('boundary', boundary);
    // 1.擷取從image/png位置開始後面所有的數據
    const imageType = 'image/png';
    const imageTypePosition = formData.indexOf('image/png') + imageType.length;
    let imageData = formData.substring(imageTypePosition);

    // 2.imageData 開始位置會有兩個空格
    // 移除 \r\n
    imageData = imageData.replace(/^\s\s*/, '');

    // 3.替換 boundary
    imageData = imageData.substring(0, imageData.indexOf(`--${boundary}--`));

    // 4.將imageData的數據存到文件中
    fs.writeFile('./bar.png', imageData, 'binary', () => {
      console.log('文件儲存成功~');
      res.end('文件上傳成功~');
    });
  });
});

// 2.開啟server服務器
server.listen(8000, () => {
  console.log('服務器啟動成功~');
});
