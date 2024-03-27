var express = require("express");
var userModel = require("../models/user");
var router = express.Router();

router.get("/signup", (req, res) => {
  res.render("forms/person-signup", { layout: "layouts/handlebar" });
});

router.post("/signup", (req, res) => {
  const body = req.body;
  if (body.username && body.email && body.password && body.name) {
    var newUser = {
      id: userModel.length + 1,
      username: body.username,
      password: body.password,
      role: "non-admin",
    };

    userModel.push(newUser);

    res.redirect(303, "/person/signup-thank-you");
  }

  res.send("Falló el registro");
});

router.get("/signup-thank-you", (req, res) => {
  res.render("forms/person-signup-thankyou");
});

module.exports = router;
