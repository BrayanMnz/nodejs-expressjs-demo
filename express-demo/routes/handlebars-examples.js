var express = require('express');
var router = express.Router();

/* GET /handlebars/examples  */
router.get('/', function(req, res, next) {
  res.render('handlebars/main', {name: 'Pepe', course_name: '<b>TDA 252</b>', layout: 'layouts/handlebar' });
});

module.exports = router;