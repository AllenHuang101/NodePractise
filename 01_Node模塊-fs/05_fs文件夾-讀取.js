const fs = require('fs');

// 讀取文件夾
// 1.讀取文件夾，獲取到文件夾中文件的字串
// fs.readdir('./why', (err, files) => {
//   console.log(files);
// });

// // 2.讀取文件夾，獲取到文件夾中文件的訊息
// fs.readdir('./why', { withFileTypes: true }, (err, files) => {
//   files.forEach((item) => {
//     if (item.isDirectory()) {
//       console.log('item 是一個文件夾', item.name);

//       fs.readdir(
//         `./why/${item.name}`,
//         { withFileTypes: true },
//         (err, files) => {
//           console.log(files);
//         }
//       );
//     } else {
//       console.log('item 是一個文件', item.name);
//     }
//   });
// });

// 3.遞迴的讀取文件夾中所有文件
function readDirectory(path) {
  fs.readdir(path, { withFileTypes: true }, (err, files) => {
    files.forEach((item) => {
      if (item.isDirectory()) {
        readDirectory(`${path}/${item.name}`);
      } else {
        console.log('item 是一個文件', item.name);
      }
    });
  });
}
readDirectory('./why');
