var express = require('express');
var router = express.Router();

/* GET About page. */

router.get('/', function(req, res) {
  res.render('about', { title: 'Our Revolution - About', active: {about: true}});
});

module.exports = router;
