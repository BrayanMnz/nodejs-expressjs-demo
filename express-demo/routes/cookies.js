var router = require("express").Router();

router.get("/", (req, res) => {
  console.log(req.cookies);
  res.cookie("server_cookie", "Cookie desde el servidor");
  res.send(req.cookies);
});

router.get("/:cookie_name/:cookie_value", (req, res) => {
  res.cookie(req.params.cookie_name, req.params.cookie_value, { maxAge: 10000, path: '/class-signup'});
  res.send("Revisa las cookies");
});

router.get("/clear/:cookie_name", function (req, res) {
  res.clearCookie(req.params.cookie_name);
  res.send("La cookie fue eliminada");
});

module.exports = router;
