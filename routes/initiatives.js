var express = require('express');
var router = express.Router();

/* GET initiatives page. */
router.get('/', function(req, res) {
  res.render('initiatives/index', { title: 'Our Revolution - Ballot Initiatives', active: {initiatives: true} });
});

router.get('/:initiative', function(req, res) {
  var initiative = req.params.initiative;

  res.render('initiatives/' + initiative, { title: 'Our Revolution - Ballot Initiatives', active: {initiatives: true} });
});

module.exports = router;
