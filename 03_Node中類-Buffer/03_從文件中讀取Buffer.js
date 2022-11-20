const fs = require('fs');

// 1.從文件中讀取buffer
fs.readFile('./aaa.txt', { encoding: 'utf-8' }, (err, data) => {
  console.log(data);
});

fs.readFile('./aaa.txt', (err, data) => {
  console.log(data.toString());
});

fs.readFile('./aaa.txt', (err, data) => {
  data[0] = 0x6d;
  console.log(data.toString());
});
