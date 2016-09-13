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

router.get('/founding-statement-of-our-revolution-board', function(req, res) {
  article = req.params.article;

  res.render('press/founding-statement-of-our-revolution-board', { title: 'Our Revolution', active: {home: true} });
});

router.get('/our-revolution-on-ma-primary-wins', function(req, res) {
  article = req.params.article;

  res.render('press/our-revolution-on-ma-primary-wins', { title: 'Our Revolution', active: {home: true} });
});

router.get('/our-revolution-announces-next-round-of-endorsements', function(req, res) {
  article = req.params.article;

  res.render('press/our-revolution-announces-next-round-of-endorsements', { title: 'Our Revolution', active: {home: true} });
});

module.exports = router;
