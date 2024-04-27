const http = require("node:http");

const server = http.createServer((req, res) => {
  //   res.end("Hello from server world!");
  if (req.url === "/home" && req.method === "GET") {
    res.end("this is home data");
  } else if (req.url === "/post" && req.method === "GET") {
    res.writeHead(200, {
      "content-type": "text/plain",
      email: "mahfujahamd424@gmail.com",
    });
    res.end("this is posts data");
  } else {
    res.end("Not found data");
  }
});

server.listen(5000, "127.0.0.1", () => {
  console.log("server is running on port: 5000");
});
