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

router.get('/dakota-access-filmmaker', function(req, res) {

  res.render('pages/dakota-access-filmmaker', { title: 'Our Revolution - 45 years in prison for filming a pipeline protest?', meta: {
    description: "Sign our petition for the government to drop all charges against Deia Schlosberg, a filmmaker and journalist who was arrested just for filming a protest.", url: "https://ourrevolution.com/page/dakota-access-filmmaker"}});
});

router.get('/bylaws', function(req, res) {

  res.render('pages/bylaws', { title: 'Our Revolution - Bylaws', meta: {
    description: "Bylaws of Our Revolution", url: "https://ourrevolution.com/page/bylaws"}});
});

// router.get('/polling-locator', function(req, res) {
// 
//   res.render('pages/polling-widget', { title: 'Our Revolution - Find Your Polling Location', meta: {
//     description: "Make sure you're ready to vote by finding your polling location.", url: "https://ourrevolution.com/page/polling-locator"}});
// });

router.get('/polling-locator', function(req, res) {

  res.render('pages/polling-locator', { title: 'Our Revolution - Find Your Polling Location', meta: {
    description: "Make sure you're ready to vote by finding your polling location.", url: "https://ourrevolution.com/page/polling-locator"}, layout:"no-footer"});
});


module.exports = router;
