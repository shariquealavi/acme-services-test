const http = require("http");
const port = Number(process.env.PORT || 3000);
http.createServer((req, res) => {
  res.setHeader("content-type", "application/json");
  res.end(JSON.stringify({ service: "api", path: req.url }));
}).listen(port, () => console.log("api listening on " + port));
