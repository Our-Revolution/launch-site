var express = require('express');
var router = express.Router();

/* GET Candidates page. */

router.get('/', function(req, res) {
  res.render('index', { title: 'Candidates' });
});

module.exports = router;
