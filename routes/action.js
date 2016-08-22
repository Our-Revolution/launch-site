var express = require('express');
var router = express.Router();

/* GET Action page. */

router.get('/', function(req, res) {
  res.render('index', { title: 'Take Action' });
});

module.exports = router;
