var express = require("express");
var router = express.Router();
const multiparty = require("multiparty");

router.get("/signup", (req, res) => {
  res.render("forms/person-signup", { layout: "layouts/handlebar" });
});

router.post("/signup", (req, res) => {
  const form = new multiparty.Form();

  /* 
  Estamos utilizando el método parse de multiparty para procesar los datos 
  de la petición y dividirlos en (fields, files). 
  
  Este método almacenará los archivos en un directorio temporal en el servidor 
  y esa información se devolverá en el arreglo files.
  */
  form.parse(req, (err, fields, files) => {
    //Si ocurre un error leyendo el formulario, retorna 500 y el mensaje de error.
    if (err) return res.status(500).send({ error: err.message });

    //Si no hay error, procesamos el formulario.
    console.log("Campos recibidos : ", fields);
    console.log("Archivos : ", files);

    res.redirect(303, "/person/signup-thank-you");
  });

  router.get("/signup-thank-you", (req, res) => {
    res.render("forms/person-signup-thankyou");
  });
});

module.exports = router;
