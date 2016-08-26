var express = require('express');
var router = express.Router();

/* GET success page. */

router.get('/', function(req, res) {
  res.render('success', { title: 'Our Revolution - Thanks For Signing Up'});
});

module.exports = router;
