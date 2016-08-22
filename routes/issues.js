var express = require('express');
var router = express.Router();

/* GET Issues page. */

router.get('/', function(req, res) {
  res.render('issues', { title: 'Issues' });
});

module.exports = router;
