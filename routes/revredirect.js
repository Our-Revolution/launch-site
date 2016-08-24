var express = require('express');
var router = express.Router();

/* redirect to BSD */

// redirect to BS for vol signup
router.get('/', function(req, res) {
  res.redirect('https://go.berniesanders.com/page/s/volunteer-our-revolution?source=webslashact');
});

module.exports = router;
