const fs = require("fs");

const writeableStream = fs.createWriteStream("./writeStream.txt");
const readableStream = fs.createReadStream("./hello.txt", "utf-8");

readableStream.on("data", (data) => {
  readableStream.pipe(writeableStream);
});

readableStream.on("error", (err) => {
  throw new Error(err);
});
writeableStream.on("error", (err) => {
  throw new Error(err);
});

writeableStream.on('finish', ()=>{
  console.log('finish writeable stream');
})
