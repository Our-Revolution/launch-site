var express = require('express');
var router = express.Router();
var candidates = require('../data/candidates.json');
var issues = require('../data/issues.json');
var _ = require('lodash');
var pg = require('pg');
var cookieParser = require('cookie-parser');

/* GET home page. */

router.get('/', function(req, res) {
  res.render('index', { title: 'Our Revolution', active: {home: true} });
});

/* GET About page. */

router.get('/about', function(req, res) {
  res.render('about', { title: 'Our Revolution - About', active: {about: true}});
});

/* GET Action page. */

router.get('/action', function(req, res) {
  res.render('action', { title: 'Our Revolution - Take Action', active: {action: true} });
});

/* GET Issues page. */

router.get('/issues', function(req, res) {
  res.render('issues/index', { title: 'Our Revolution - Issues', active: {issues: true}, issues:issues, issue:{'income-inequality':true} });
});

router.get('/issues/:issue', function(req, res) {
  var issueSlug = req.params.issue;
  var activeIssue = {};

  function isIssue(value) {
    var found = issues.some(function(el) {
      return el.slug === value;
    });

    return found;
  }

  if(isIssue(issueSlug)) {
      var issueObject = _.find(issues, ['slug', issueSlug]);

      res.render('issues/issue-' + issueSlug , {title: 'Our Revolution - Issues - ' + issueObject.name , issues: issues, active: {issues:true}});
  } else {
    res.redirect('/issues');
  }
});

/* GET Candidates page. */
router.get('/candidates', function(req, res) {
  res.render('candidates/index', { title: 'Our Revolution - Candidates', data: candidates, active: {candidates: true}});
});

/* GET Candidates page. */
router.get('/candidates/martin-quezeda', function(req, res) {
  res.redirect('/candidates/martin-quezada');
});

router.get('/candidates/elizabeth-thompson', function(req, res) {
  res.redirect('/candidates/elizabeth-thomson');
});

router.get('/candidates/:name', function(req, res) {
  name=req.params.name || false;

  function isCandidate(value) {
    if (value in candidates) {
      if (candidates[value].show) {
        return true;
      }
    }
  }

  if (isCandidate(name)) {
    res.render('candidates/candidate', { title: "Our Revolution - " + candidates[name].name, data: candidates[name], active: {candidates: true}});
  } else {
    res.redirect('/candidates');
  }
});

/* GET stop-tpp-now page. */

router.get('/stop-the-tpp', function(req, res) {
  res.redirect('/stop-tpp-now');
});

router.get('/stop-tpp-now', function(req, res) {
  res.render('stop-the-tpp', { title: 'Our Revolution - Stop the TPP', active: {action: true, revere: true}, meta: {description:'Join our push to stop the disastrous Trans-Pacific Partnership.'} });
});

/* GET Privacy Policy page. */

router.get('/privacy-policy', function(req, res) {
  res.render('privacy-policy', { title: 'Our Revolution - Provacy-Policy'});
});

/* GET success page. */

router.get('/success', function(req, res) {
  res.render('success', { title: 'Our Revolution - Thanks For Signing Up'});
});

/* GET to sign up. */
router.get('/signup', function(req, res) {
  res.redirect('/');
});

/* POST to sign up. */
router.post('/signup', function(req, res) {
  res.redirect('/');
});

/* GET to volunteer sign up. */
router.get('/volunteer-signup', function(req, res) {
  res.redirect('/action');
});

/* POST to volunteer sign up. */
router.post('/volunteer-signup', function(req, res) {
  res.redirect('/action');
});

// redirect to BSD form for /tpp
router.get('/tpp', function(req, res) {
  res.redirect('https://go.berniesanders.com/page/s/stop-the-TPP?source=webslashtpp');
});

// redirect to BSD form for volunteer signup
router.get('/act', function(req, res) {
  res.redirect('https://go.berniesanders.com/page/s/volunteer-our-revolution?source=webslashact');
});

module.exports = router;
