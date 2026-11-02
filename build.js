const fs = require("fs");
fs.mkdirSync("dist", { recursive: true });
fs.copyFileSync("apps/web/index.html", "dist/index.html");
