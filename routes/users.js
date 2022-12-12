express = require("express");
const router = express.Router();

router.get("/create-users", (req, res) => {
  res.send("you can create user here");
  res.cookie("name", "express").send("cookie set");
  console.log("Cookies: ", req.cookies);
});

router.get("/update-users", (req, res) => {
  res.send("this is a user update page");
});

router.get("/delete-users", (req, res) => {
  res.send("this is a user delete page");
});

router.get("/about-users", (req, res) => {
  res.send("this is a user update page");
});

router.get("*", (req, res) => {
  var resObj = { statusCode: 404, statusMsg: "Url not found" };
  res.send(resObj);
});
module.exports = router;
