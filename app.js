const http = require("http");
const fs = require("fs");
const { threadId } = require("worker_threads");
const PORT = 4000;

const server = http.createServer();

server.on("request", (req, res) => {
  if (req.url === "/") {
    res.writeHead(200, { "Content-Type": "text/html" });
    fs.readFile("pages/home.html", "utf-8", (err, data) => {
      if (err) throw err;
      res.write(data);
      res.end();
    });
  } else if (req.url === "/about") {
    res.writeHead(200, { "Content-Type": "text/html" });
    fs.readFile("pages/about.html", "utf-8", (err, data) => {
      if (err) throw err;
      res.write(data);
      res.end();
    });
  } else {
    res.writeHead(404, { "Content-Type": "text/html" });
    res.write("<h1>Page Not Found</h1>");
    res.end();
  }
});
console.log(`sever is running on: http://localhost:/${PORT}`);

server.listen(PORT);
