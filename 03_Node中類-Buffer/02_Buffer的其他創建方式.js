// 1.創建 8byte 的 buffer 內存空間
const buf = Buffer.alloc(8);
console.log(buf);

// 2.手動對每個byte進行訪問
console.log(buf[0]);
console.log(buf[1]);

// 3.手動對每個byte進行操作
buf[0] = 100;
buf[1] = 0x66;
console.log(buf);
console.log(buf.toString());

buf[2] = 'm'.charCodeAt();
console.log(buf);
