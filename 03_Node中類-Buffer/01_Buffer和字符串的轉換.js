// 1.創建Buffer(byte 陣列)
// buf 存放 Allen 的二進制內容
const buf = new Buffer('Allen');
console.log(buf);

// 2.創建Buffer
const buf2 = Buffer.from('Allen');
console.log(buf2);

// 3.創建Buffer(中文)
const buf3 = Buffer.from('黃健倫');
console.log(buf3);
console.log(buf3.toString());

// 4.手動指定Buffer的編碼
// 編碼操作
const buf4 = Buffer.from('哈哈哈', 'utf16le');
console.log(buf4);
// 解碼操作
console.log(buf4.toString('utf16le'));
