var express = require("express");
var router = express.Router();

/* GET home page. */
router.get("/", function (req, res, next) {
  //req.session.userName = "Pepe";
  if (req.session.userName) {
    res.render("index", {
      title: "TDA-252 Programación Web Avanzada",
      usuario: req.session.userName,
      layout: "layouts/handlebar" 
    });
  } else {
    res.render("login", {});
  }
});


router.get("/class-signup", (req, res) => {
  res.render("forms/class-signup", { layout: "layouts/handlebar" });
});

function handleClassSignup(req, res) {
  console.log("Nombre enviado desde el formulario: " + req.body.name);
  console.log("Email enviado desde el formulario: " + req.body.email);

  if (req.url.includes("api")) {
    return res.send({ result: "success" });
  }
  return res.redirect(303, "/class-signup/thank-you");
}

router.post("/class-signup/process", (req, res) => {
  handleClassSignup(req, res);
});

router.post("/api/class-signup/process", (req, res) => {
  handleClassSignup(req, res);
});

router.get("/class-signup/thank-you", (req, res) =>
  res.render("forms/class-signup-thankyou", { layout: "layouts/handlebar" })
);

module.exports = router;
