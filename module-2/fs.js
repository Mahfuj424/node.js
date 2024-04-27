const fs = require('fs');


console.log('hello level-1');
const output = fs.readFileSync('./hello.txt', 'utf-8')
console.log(output);

console.log('hello level-2');

// fs.writeFileSync('./write.txt', "hello level-2")