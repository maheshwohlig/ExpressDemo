const express = require("express");

const path = require("path");
const app = express();
var users = require("./routes/users");
var cookieParser = require("./routes/cookieParser");
var dynamicRouters = require("./routes/dynamicRouters");
const port = 4000;

app.use("/", require(path.join(__dirname, "routes/blog.js")));

app.use("/cookieParser", cookieParser);

app.use("/users", users);

app.use("/dynamicRouters", dynamicRouters);

app.use(express.static(path.join(__dirname, "static")));

app.listen(port, () => {
  console.log(`this app is listening on ${port}`);
});
