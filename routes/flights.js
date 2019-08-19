var express = require('express');
var router = express.Router();
var flightsCtrl = require('../controllers/flights');

// Routes for Form views Flights
router.get('/', flightsCtrl.indexView);
router.get('/new', flightsCtrl.newView);
router.get('/:id', flightsCtrl.showView);
// Routes for Form actions
router.post('/', flightsCtrl.create);


module.exports = router;
