var express = require('express');
var router = express.Router();

/* GET Issues page. */

router.get('/', function(req, res) {
  res.render('issues', { title: 'Our Issues', active: {issues: true} });
});

module.exports = router;
