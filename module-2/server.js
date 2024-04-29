const http = require("node:http");
const fs = require("fs");

// const posts =[
//   {
//     "id": 1,
//     "title": "Lorem Ipsum",
//     "author": "John Doe",
//     "content": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam eget nunc non ligula cursus mattis. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Sed non metus sit amet sem venenatis sodales vitae quis nulla. Mauris a semper nisl, in sodales eros. In condimentum justo nec elit consequat, ac accumsan justo mattis. Nulla facilisi. Integer id nulla id arcu feugiat tincidunt. Suspendisse quis nisi non magna ultrices lacinia. Nulla vitae cursus orci, vel rhoncus neque. In consectetur purus non odio interdum, quis gravida ligula condimentum. Donec quis justo id ipsum fringilla tincidunt vitae nec lacus. Maecenas eget magna quam. Vivamus tempor tortor ut sapien faucibus, ac malesuada dolor suscipit. Pellentesque aliquet est sit amet libero luctus, eu gravida urna hendrerit."
//   },
//   {
//     "id": 2,
//     "title": "Vestibulum Ante Ipsum",
//     "author": "Jane Smith",
//     "content": "Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Sed non metus sit amet sem venenatis sodales vitae quis nulla. Mauris a semper nisl, in sodales eros. In condimentum justo nec elit consequat, ac accumsan justo mattis. Nulla facilisi. Integer id nulla id arcu feugiat tincidunt. Suspendisse quis nisi non magna ultrices lacinia. Nulla vitae cursus orci, vel rhoncus neque. In consectetur purus non odio interdum, quis gravida ligula condimentum."
//   },
//   {
//     "id": 3,
//     "title": "Sed Non Metus",
//     "author": "Emily Johnson",
//     "content": "Sed non metus sit amet sem venenatis sodales vitae quis nulla. Mauris a semper nisl, in sodales eros. In condimentum justo nec elit consequat, ac accumsan justo mattis. Nulla facilisi. Integer id nulla id arcu feugiat tincidunt. Suspendisse quis nisi non magna ultrices lacinia. Nulla vitae cursus orci, vel rhoncus neque. In consectetur purus non odio interdum, quis gravida ligula condimentum."
//   },
//   {
//     "id": 4,
//     "title": "Maecenas Eget Magna",
//     "author": "David Williams",
//     "content": "Maecenas eget magna quam. Vivamus tempor tortor ut sapien faucibus, ac malesuada dolor suscipit. Pellentesque aliquet est sit amet libero luctus, eu gravida urna hendrerit."
//   },
//   {
//     "id": 5,
//     "title": "Integer Id Nulla",
//     "author": "Sophia Brown",
//     "content": "Integer id nulla id arcu feugiat tincidunt. Suspendisse quis nisi non magna ultrices lacinia. Nulla vitae cursus orci, vel rhoncus neque. In consectetur purus non odio interdum, quis gravida ligula condimentum. Donec quis justo id ipsum fringilla tincidunt vitae nec lacus."
//   }
// ]

const server = http.createServer((req, res) => {
  const parsedURL = new URL(req.url, `http://${req.headers.host}`);

  const pathName = parsedURL.pathname;

  //   res.end("Hello from server world!");
  if (pathName === "/home" && req.method === "GET") {
    res.end("this is home data");
  } else if (pathName === "/post" && req.method === "GET") {
    // res.writeHead(200, {
    //   "content-type": "text/plain",
    //   email: "mahfujahamd424@gmail.com",
    // });

    // const query = parsedURL.searchParams;
    // const postId = (query.get('id'));

    // const singlePost = posts.find(post=> post.id == postId)

    fs.readFile("./posts.json", "utf-8", (err, data) => {
      if (err) {
        throw new Error("post not found");
      }
      res.setHeader("content-type", "application/json");

      const query = parsedURL.searchParams;
      const postId = query.get("id");

      const singlePost = JSON.parse(data).find((post) => post.id == postId);
      res.statusCode = 200;
      res.end(JSON.stringify(singlePost));
      console.log(JSON.stringify(singlePost));
    });
  } else {
    res.end("Not found data");
  }
});

server.listen(5000, "127.0.0.1", () => {
  console.log("server is running on port: 5000");
});
