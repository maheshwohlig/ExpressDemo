express = require("express");
const router = express.Router();

router.get("/users/:id", (req, res) => {
  res.send("user id is ::  " + req.params.id);
});

router.get("/userName/:name/:sureName", (req, res) => {
  res.send(
    "Name and sureName ::  " + req.params.name + "  " + req.params.sureName
  );
});

router.get("/address/:city/:state", (req, res) => {
  res.send(
    "address city and state ::   " + req.params.city + " " + req.params.state
  );
});

router.get("/search-usersNumber/:num[0-9]{6}", (req, res) => {
  res.send("dynamic user names ::  " + req.params.num);
});

router.get("/search-usersName/:name[a-zA-Z]{5}", (req, res) => {
  res.send("dynamic user names ::  " + req.params.name);
});

router.get("*", (req, res) => {
  var resObj = { statusCode: 404, statusMsg: "Url not found" };
  res.send(resObj);
});

module.exports = router;
