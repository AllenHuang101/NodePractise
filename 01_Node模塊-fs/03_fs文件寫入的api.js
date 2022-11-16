const fs = require('fs');

const content = 'hello world, my name is allen';

// 文件的寫入操作
fs.writeFile('./ccc.txt', content, { encoding: 'utf8', flag: 'w' }, (err) => {
  if (err) {
    console.log('文件寫入錯誤:', err);
  } else {
    console.log('文件寫入成功');
  }
});
