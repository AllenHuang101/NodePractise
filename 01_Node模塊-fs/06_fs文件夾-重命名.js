const fs = require('fs');

// 1.對文件夾重命名
fs.rename('./why', './kobe', (err) => {
  console.log('重命名結果:', err);
});

// 2.對文件重命名
fs.rename('./ccc.txt', './ddd.txt', (err) => {
  console.log('重命名結果:', err);
});
