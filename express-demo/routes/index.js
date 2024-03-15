var express = require("express");
var router = express.Router();

/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("index", { title: "TDA-252 Programación Web Avanzada" });
});

/* GET request-headers. */
router.get("/request-headers", function (req, res, next) {
  res.render("headers", { title: "Request Headers", headers: req.headers });
});

router.get("/class-signup", (req, res) => {

  res.render("forms/class-signup");
});

router.post("/class-signup/process", (req, res) => {

  console.log("Name (from visible form field): " + req.body.name);
  console.log("Email (from visible form field): " + req.body.email);
  res.redirect(303, "/class-signup/thank-you");

});

router.get("/class-signup/thank-you", (req, res) =>
  res.render("forms/class-signup-thankyou")
);

module.exports = router;
