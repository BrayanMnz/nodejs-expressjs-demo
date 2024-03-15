var express = require('express');
var router = express.Router();

/* GET /handlebars/examples  */
router.get('/', function(req, res, next) {
  res.render('handlebars/main', {name: 'Pepe', course_name: '<b>TDA 252</b>', layout: 'layouts/handlebar' });
});


/* GET /handlebars/examples  */
router.get('/blocks', function(req, res, next) {
  const students= {
    names: [
      "Saúl",
      "David",
      "Salomón",
      "",
      "Otro"
    ],
  }
  
  res.render('handlebars/blocks', {students: students.names, layout: 'layouts/handlebar' });
});

router.get('/with-block', function(req, res, next) {
  const student = {
    person: {
      firstname: "Pepe",
      lastname: "Perez",
    },
  }
  
  res.render('handlebars/with-block', {student: student, layout: 'layouts/handlebar' });
});

module.exports = router;