var express = require('express');
var router = express.Router();
var initiatives = require('../data/initiatives.json');
var categories = require('../data/initiative-categories.json');
var _ = require('lodash');

/* GET initiatives page. */
router.get('/', function(req, res) {
  var category = req.query.category || false;

  if (_.includes(categories, category)) {
    var meta = {
      title: 'Our Revolution - Initiatives', description: "Find a ballot initiative near you to push the political revolution forward.", image:"https://ourrevolution.com/img/meta/" + category + ".png", url: "https://ourrevolution.com/page/ballot-initiatives?" + category
    }
  }

  res.render('initiatives/index', { title: 'Our Revolution - Initiatives', data: initiatives, active: {initiatives: true}, meta: meta});

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
