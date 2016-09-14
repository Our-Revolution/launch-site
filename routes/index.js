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

router.get('/candidates/:name', function(req, res) {
  name=req.params.name || false;

  function isCandidate(value) {
    if (value in candidates) {
      return true;
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
  res.render('stop-the-tpp', { title: 'Our Revolution - Stop the TPP', active: {action: true, revere: true}, meta: {description:'Join our push to stop the disastrous Trans-Pacific Partnership.'} });
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
  var error = null;
  try {
    if (!req.body.email)
      error = 'Please provide an email address.';
    else if (!req.body.zip)
      error = 'Please provide a zip code.';
    else {
      pg.connect(process.env.POSTGRES_URL, function(err, client, done) {
        client.query('INSERT INTO subscribers(email, zip) values($1, $2)', [req.body.email, req.body.zip], function(err, result) {
          done();
          if (err) {
            console.error(err);
            error = 'Something went wrong - please try again.';
          }
        });
      });
    }
  }
  catch(ex) {
  	error = ex.message;
  }

  if (error)
  	res.render('index', {
  		title: 'Our Revolution',
  		email: req.body.email,
  		zip: req.body.zip,
  		error: error,
      description: "The next step for Bernie Sanders' movement is a new group called Our Revolution, which will fight to transform America and advance the progressive agenda that we believe in.",
      url: 'https://ourrevolution.com',
      imagePath: 'https://ourrevolution.com/img/fb.png',
      type: 'website'
  	});
  else
  	res.redirect('/success?utm_source=websignuphomepage');
});

/* GET to volunteer sign up. */
router.get('/volunteer-signup', function(req, res) {
  res.redirect('/action');
});

/* POST to volunteer sign up. */
router.post('/volunteer-signup', function(req, res) {
  var error = null;
  try {
    if (!req.body.email)
      error = 'Please provide an email address.';
    else if (!req.body.firstName)
      error = 'Please provide a first name.';
    else if (!req.body.lastName)
      error = 'Please provide a last name.';
    else if (!req.body.zip)
      error = 'Please provide a zip code.';
    else if (!req.body.phone)
      error = 'Please provide a phone number.';
    else {
      pg.connect(process.env.POSTGRES_URL, function(err, client, done) {
        client.query('INSERT INTO volunteers(email, firstName, lastName, zip, phone) values($1, $2, $3, $4, $5)', [req.body.email, req.body.firstName, req.body.lastName, req.body.zip, req.body.phone], function(err, result) {
          done();
          if (err) {
            console.error(err);
            error = 'Something went wrong - please try again.';
          }
        });
      });
    }
  }
  catch(ex) {
  	error = ex.message;
  }

  if (error)
  	res.render('action', {
  		title: 'Our Revolution',
  		email: req.body.email,
  		zip: req.body.zip,
  		error: error,
      description: "The next step for Bernie Sanders' movement is a new group called Our Revolution, which will fight to transform America and advance the progressive agenda that we believe in.",
      url: 'https://ourrevolution.com',
      imagePath: 'https://ourrevolution.com/img/fb.png',
      type: 'website'
  	});
  else
  	res.redirect('/success?utm_source=webvolunteersignup');
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
