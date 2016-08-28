var express = require('express');
var router = express.Router();

/* redirects */

// redirect to BS for vol signup
router.get('/', function(req, res) {
  res.redirect('https://go.berniesanders.com/page/s/stop-the-TPP?source=webslashtpp');
});

module.exports = router;
