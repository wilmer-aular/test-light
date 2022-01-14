const router = require("express-promise-router")();
const verifyRoom = require("../controllers/ligth.controllers");

router.get("/", (req, res) => {
  const data = verifyRoom();
  res.render("index", {
    title: "bulb test",
    data,
  });
});

module.exports = router;
