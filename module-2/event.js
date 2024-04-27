const EventEmitter = require('node:events');

class myBirthday extends EventEmitter{};

const myBirthday1 = new myBirthday() 

myBirthday1.on('birthday', ()=>{
    console.log('happy birthday');
})

myBirthday1.on('birthday', (bike)=>{
    console.log(`I will send a ${bike}`);
})

myBirthday1.emit('birthday', 'car')