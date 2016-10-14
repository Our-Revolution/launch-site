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

router.get('/join-lucy-flores-support-women-leaders', function(req, res) {

  res.render('pages/join-lucy-flores-support-women-leaders', { title: 'Our Revolution - Women Leaders', meta: {
    description: "Join Lucy Flores in supporting seven outstanding women leaders.", url: "https://ourrevolution.com/page/join-lucy-flores-support-women-leaders"}});
});

router.get('/register-to-vote', function(req, res) {

  res.render('pages/register-to-vote', { title: 'Our Revolution - Register to Vote', meta: {
    description: "Register to vote today.", url: "https://ourrevolution.com/page/register-to-vote"}});
});

router.get('/check-registration', function(req, res) {

  res.render('pages/check-registration', { title: 'Our Revolution - Check Voter Registration', meta: {
    description: "Voter registration deadlines are coming up fast - make sure you're registered to vote.", url: "https://ourrevolution.com/page/check-registration"}});
});

router.get('/prop-61-toolkit', function(req, res) {

  res.render('pages/prop-61-toolkit', { title: 'Our Revolution - Prop 61 Toolkit', meta: {
    description: "Together we can stop drug companies from overcharging by billions of dollars each year for life-saving drugs. ", url: "https://ourrevolution.com/page/prop-61-toolkit", image: "https://ourrevolution.com/img/prop-61-fb.png", app_id:"166371677138082"}, active: {revere: true, action: true}});
});

module.exports = router;
