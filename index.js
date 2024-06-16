const http = require("http");
const server = http.createServer((req, res) => {
  res.send("server is listening on port 300");
});
server.listen(() => {
  console.log("connected successfully");
});
