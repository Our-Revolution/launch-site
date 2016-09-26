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

router.get('/our-revolution-statement-on-ri-and-ny', function(req, res) {
  article = req.params.article;

  res.render('press/our-revolution-statement-on-ri-and-ny', { title: 'Our Revolution', active: {home: true} });
});

router.get('/our-revolution-announces-latest-round-of-endorsements', function(req, res) {
  article = req.params.article;

  res.render('press/our-revolution-announces-latest-round-of-endorsements', { title: 'Our Revolution', active: {home: true} });
});

router.get('/our-revolution-statement-on-shootings', function(req, res) {
  article = req.params.article;

  res.render('press/our-revolution-statement-on-shootings', { title: 'Our Revolution', active: {home: true} });
});

router.get('/josh-fox-and-our-revolution-team-up', function(req, res) {
  article = req.params.article;

  res.render('press/josh-fox-and-our-revolution-team-up', { title: 'Our Revolution', active: {home: true} });
});

module.exports = router;
