var express = require('express');
var router = express.Router();

/* GET home page. */

router.get('/', function(req, res) {
  res.render('index', { title: 'Our Revolution', active: {home: true} });
});

module.exports = router;
