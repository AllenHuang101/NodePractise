const fs = require('fs');

// 1.方式一: 一次性讀取和寫入
fs.readFile('./foo.txt', (err, data) => {
  console.log(data);
  fs.writeFile('./foo_copy01.txt', data, (err) => {
    console.log('寫入文件完成', err);
  });
});

// 2.方式二: 創建可讀流和可寫流
const readStream = fs.createReadStream('./foo.txt');
const writeStream = fs.createWriteStream('./foo_copy02.txt');

readStream.on('data', (data) => {
  writeStream.write(data);
});

// 讀取完成, 將 writeStream close
readStream.on('end', () => {
  writeStream.close();
});

// 3.方式三: 在可讀流和可寫流之間建立一個管道
// 將可讀流讀到的數據，直接輸入到可寫流
const readStream1 = fs.createReadStream('./foo.txt');
const writeStream1 = fs.createWriteStream('./foo_copy03.txt');

readStream1.pipe(writeStream1);
