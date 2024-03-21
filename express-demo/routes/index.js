var express = require("express");
var router = express.Router();

/* GET home page. */
router.get("/", function (req, res, next) {
  req.session.views = (req.session.views || 0 ) + 1;
  req.session.userName = "Pepe";
  res.render("index", { title: "TDA-252 Programación Web Avanzada", views: req.session.views});
  
  //res.render("index", { title: "TDA-252 Programación Web Avanzada" });
});

/* GET request-headers. */
router.get("/request-headers", function (req, res, next) {
  res.render("headers", { title: "Request Headers", headers: req.headers });
});

router.get("/class-signup", (req, res) => {
  if(req.session.userName == "Pepe"){
    console.log("El usuario en sesion es Pepe");
  }
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
