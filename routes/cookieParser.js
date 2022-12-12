var express = require("express");
const router = express.Router();

var cookieParser = require("cookie-parser");

router.use(cookieParser());

router.get("/cookies", function (req, res) {
  res.cookie("cookie_name", "cookie_value");
  res.cookie("company", "javatpoint");
  res.cookie("name", "sonoo");

  res.status(200).send("Cookie is set");
});

router.get("/cookieset", function (req, res) {
  res.cookie("cookies_name", "cookie_value");
  res.cookie("company", "wohlig");
  res.cookie("name", "bunny");

  res.status(200).send("cookie is all set");
});

router.get("/cookiePage", function (req, res) {
  res.status(200).send("welcome to my express.js page");
});

router.get("/cookieget", function (req, res) {
  res.status(200).send(req.cookie);
});

router.get("*", (req, res) => {
  var resObj = { statusCode: 404, statusMsg: "Url not found" };
  res.send(resObj);
});

module.exports = router;
