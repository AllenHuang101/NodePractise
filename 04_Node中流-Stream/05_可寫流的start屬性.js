const fs = require('fs');

const writeStream = fs.createWriteStream('./ddd.txt', {
  // mac 電腦上 work, windows 需使用 r+, start 屬性才會生效
  flags: 'r+',
  start: 5,
});

writeStream.write('my name is allen');
writeStream.close();
