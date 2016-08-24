var express = require('express');
var router = express.Router();

/* GET stop-tpp-now page. */

router.get('/', function(req, res) {
  res.render('stop-the-tpp', { title: 'Our Revolution - Stop the TPP', active: {action: true} });
});

module.exports = router;
