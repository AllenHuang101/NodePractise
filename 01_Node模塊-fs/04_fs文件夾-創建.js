const fs = require('fs');

// 創建文件夾 directory
fs.mkdir('./why', (err) => {
  console.log(err);
});

