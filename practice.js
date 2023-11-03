const http = require("http");

const result = [1, 2, 3, 4];

const server = http.createServer(function (_req, res) {
  if ((res.url = "/")) {
    res.write(result);
  } else if ((req.url = "/create")) {
    result.push(Math.random() * 100);
  } else if ((req.url = "/update")) {
    result[0]++;
  } else if (req.url == "/delete") {
    result.pop();
  }

  res.end();
});

server.listen(3000, () => console.log("listening on port 3000"));
