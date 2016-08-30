var express = require('express');
var router = express.Router();

/* August 20th Candidates */
router.get('/august-30-primary-candidates', function(req, res) {

  res.render('pages/august-30-primary-candidates', { title: 'Our Revolution - August 30 Primaries', active: {candidates: true}, meta: {
    description: "Help five of our candidates win today.", url: "https://ourrevolution.com/page/august-30-primary-candidates"} });
});


module.exports = router;
