var express = require('express');
var router = express.Router();
var initiatives = require('../data/initiatives.json');

/* GET initiatives page. */
router.get('/', function(req, res) {
  res.render('initiatives/index', { title: 'Our Revolution - Initiatives', data: initiatives, active: {initiatives: true}});
});

router.get('/:name', function(req, res) {
  var name=req.params.name || false;

  function isInitiative(value) {
    if (value in initiatives) {
      if (initiatives[value].show) {
        return true;
      }
    }
  }

  if (isInitiative(name)) {

    var similarInitiatives, initialCategory, localInitiatives;
    similarInitiatives = [];
    localInitiatives = []
    initialCategory = initiatives[name].category;

    for (var key in initiatives) {
      var initiative = initiatives[key];

      if (initiative.slug != name) {
        if (initiative.category == initialCategory) {
          similarInitiatives.push(initiative);
        }

        if (initiative.state == initiatives[name].state) {
          localInitiatives.push(initiative);
        }
      }
    }

    res.render('initiatives/initiative', { title: "Our Revolution - " + initiatives[name].name, data: initiatives[name],  similarInitiatives: similarInitiatives, localInitiatives: localInitiatives, active: {initiatives: true}});
  } else {
    res.redirect('/ballot-initiatives');
  }
});


module.exports = router;
