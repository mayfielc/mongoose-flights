var Flight = require('../models/flight');

module.exports = {
    index,
    create
};


function index(req, res) {
    Flight.find({}, function(err, flights) {
        res.render('flights/index', { title: 'All Flights', flights});
    });
};

    function create(req, res) {

    };