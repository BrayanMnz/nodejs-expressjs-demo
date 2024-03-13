var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'TDA-252 Programación Web Avanzada' });
});

/* GET request-headers. */
router.get('/request-headers', function(req, res, next) {
  res.render('headers', { title: 'Request Headers', headers: req.headers});
});

module.exports = router;
