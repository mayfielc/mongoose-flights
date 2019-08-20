var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.redirect('/flights', { title: 'Add Flight'});
});

module.exports = router;
