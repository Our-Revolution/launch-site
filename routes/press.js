var express = require('express');
var router = express.Router();

/* GET press page. */
router.get('/our-revolution-announces-formation-of-board', function(req, res) {
  article = req.params.article;

  res.render('press/our-revolution-announces-formation-of-board', { title: 'Our Revolution', active: {home: true} });
});

router.get('/our-revolution-announces-second-round-of-endorsements', function(req, res) {
  article = req.params.article;

  res.render('press/our-revolution-announces-second-round-of-endorsements', { title: 'Our Revolution', active: {home: true} });
});


module.exports = router;
