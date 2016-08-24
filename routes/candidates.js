var express = require('express');
var router = express.Router();
var candidates = require('../data/candidates.json');

/* GET Candidates page. */

router.get('/', function(req, res) {
  res.render('candidates', { title: 'Our Revolution - Candidates', data: candidates, active: {candidates: true}});
});

router.get('/:name', function(req, res) {
  name=req.params.name || false;

  function isCandidate(value) {
    if (value in candidates) {
      return true;
    }
  }

  if (isCandidate(name)) {
    res.render('candidate', { title: "Our Revolution - " + candidates[name].name, data: candidates[name], active: {candidates: true}});
  } else {
    res.redirect('/candidates');
  }
});

module.exports = router;
