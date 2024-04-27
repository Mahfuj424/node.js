const fs = require("fs");

console.log("hello level-1");
fs.readFile("./hello.txt", "utf-8", (err, data) => {
  if (err) {
    console.log(err);
  }
  console.log(data);
});

console.log("hello level-2");
fs.writeFile("./asyncWrite.txt", "Hello Developer!",'utf-8', (err) => {
  if (err) throw new Error("error successfully");
});


