const http = require("http");
const port = Number(process.env.PORT || 4000);
http.createServer((req, res) => {
  res.setHeader("content-type", "application/json");
  res.end(JSON.stringify({ service: "admin", path: req.url }));
}).listen(port, () => console.log("admin listening on " + port));
