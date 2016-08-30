var express = require('express');
var router = express.Router();

/* August 20th Candidates */
router.get('/august-30-primary-candidates', function(req, res) {

  res.render('pages/august-30-primary-candidates', { title: 'Our Revolution - Help Candidates Win Today', active: {candidates: true}, meta: {
    description: "You can help five Our Revolution candidates win today."} });
});


module.exports = router;
