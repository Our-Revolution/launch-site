var express = require('express');
var router = express.Router();

/* GET Action page. */

router.get('/', function(req, res) {
  res.render('action', { title: 'Our Revolution - Take Action', active: {action: true} });
});

module.exports = router;
