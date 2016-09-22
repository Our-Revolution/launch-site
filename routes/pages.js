var express = require('express');
var router = express.Router();

/* August 20th Candidates */
router.get('/august-30-primary-candidates', function(req, res) {

  res.render('pages/august-30-primary-candidates', { title: 'Our Revolution - August 30 Primaries', active: {candidates: true}, meta: {
    description: "Help five of our candidates win today.", url: "https://ourrevolution.com/page/august-30-primary-candidates"} });
});

/* Typeform Candidate Questionnaire */
router.get('/candidate-questionnaire', function(req, res) {

  res.render('pages/candidate-questionnaire', { title: 'Our Revolution - Candidate Questionnaire', meta: {
    description: "Suggest a campaign or candidate for Our Revolution to endorse.", url: "https://ourrevolution.com/page/candidate-questionnaire"}, layout: "typeform"});
});

module.exports = router;
