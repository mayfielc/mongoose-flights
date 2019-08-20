var express = require('express');
var router = express.Router();
var flightsCtrl = require('../controllers/flights');

// Routes for Form views Flights
router.get('/', flightsCtrl.index);
router.get('/new', flightsCtrl.new);
router.get('/:id', flightsCtrl.show);
// Routes for Form actions
router.post('/', flightsCtrl.create);


module.exports = router;
