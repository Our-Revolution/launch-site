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

router.get('/our-revolution-announces-more-endorsements', function(req, res) {
  article = req.params.article;

  res.render('press/our-revolution-announces-more-endorsements', { title: 'Our Revolution', active: {home: true} });
});

router.get('/our-revolution-announces-final-round-of-endorsements', function(req, res) {
  article = req.params.article;

  res.render('press/our-revolution-announces-final-round-of-endorsements', { title: 'Our Revolution', active: {home: true} });
});

router.get('/our-revolution-statement-on-shailene-woodley-arrest', function(req, res) {
  article = req.params.article;

  res.render('press/our-revolution-statement-on-shailene-woodley-arrest', { title: 'Our Revolution', meta: {description: "Our Revolution stands with board member Shailene Woodley following her arrest at Standing Rock Reservation protesting the Dakota Access Pipeline.", url:"https://ourrevolution.com/press/our-revolution-statement-on-shailene-woodley-arrest"}, active: {home: true} });
});

router.get('/our-revolution-substantive-discussion', function(req, res) {
  article = req.params.article;

  res.render('press/our-revolution-substantive-discussion', { title: 'Our Revolution - Give the Voters What They Want: A Substantive Discussion', meta: {description: "One of the most valuable lessons Sen. Bernie Sanders and his presidential campaign taught us was that it's possible to have substantive debates and inspire people to engage in the political process-- and it can be done with respect and dignity.", url:"https://ourrevolution.com/press/our-revolution-substantive-discussion"}, active: {home: true} });
});

router.get('/our-revolution-reacts-final-presidential-debate', function(req, res) {
  article = req.params.article;

  res.render('press/our-revolution-reacts-final-presidential-debate', {active: {home: true}});
});

module.exports = router;
