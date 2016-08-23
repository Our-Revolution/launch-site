var express = require('express');
var router = express.Router();
var candidates = require('../data/candidates.json');

/* GET Candidates page. */

router.get('/', function(req, res) {
  res.render('candidates', { title: 'Candidates', data: candidates, active: {candidates: true}});
});

module.exports = router;
