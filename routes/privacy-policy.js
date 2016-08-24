var express = require('express');
var router = express.Router();

/* GET Privacy Policy page. */

router.get('/', function(req, res) {
  res.render('privacy-policy', { title: 'Our Revolution - Provacy-Policy'});
});

module.exports = router;
