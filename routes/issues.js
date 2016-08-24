var express = require('express');
var router = express.Router();
var issues = require('../data/issues.json');
var _ = require('lodash');

/* GET Issues page. */

router.get('/', function(req, res) {
  res.render('issues', { title: 'Our Issues', active: {issues: true}, issues:issues, issue:{'income-inequality':true} });
});

router.get('/:issue', function(req, res) {
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

      res.render('issue-' + issueSlug , {title: 'Our Revolution - Issues - ' + issueObject.name , issues: issues, active: {issues:true}});
  } else {
    res.redirect('/issues');
  }
});

module.exports = router;
