// commonjs
const fs = require('fs');

// 1. 同步讀取
const res1 = fs.readFileSync('./abc.txt', {
  encoding: 'utf8',
});
console.log(res1);
console.log('後續的代碼');

// 2. 異步讀取: 回調函數
const res2 = fs.readFile(
  './abc.txt',
  {
    encoding: 'utf8',
  },
  (err, data) => {
    if (err) {
      console.log('讀取文件錯誤:', err);
      return;
    }
    console.log('讀取文件結果:', data);
  }
);
console.log('後續的代碼');

// 3. 異步讀取: Promise
fs.promises
  .readFile('./abc.txt', {
    encoding: 'utf8',
  })
  .then((res) => {
    console.log('讀取文件結果:', res);
  })
  .catch((err) => {
    console.log('讀取文件錯誤:', err);
  });
