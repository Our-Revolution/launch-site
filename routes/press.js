var express = require('express');
var router = express.Router();

/* GET press page. */

router.get('/:article', function(req, res) {
  article = req.params.article;

  res.render('press/' + article, { title: 'Our Revolution', active: {home: true} });
});


module.exports = router;
