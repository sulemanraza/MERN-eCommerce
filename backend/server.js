const http = require("http");
const server = http.createServer(require("./app"));
const connect = require("./src/config/db");
const env = require("./src/config/envConfig");

// run server
connect(); // mongodb database connection
const PORT = env.PORT || 5000;
server.listen(PORT, () =>
  console.log(`Example app listening on port http://localhost:${PORT}`)
);
