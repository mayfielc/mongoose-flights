var Flight = require('../models/flight');

module.exports = {
    indexView,
    create,
    newView
};


function indexView(req, res) {
    Flight.find({}, function(err, flights) {
        res.render('flights/index', { title: 'All Flights', flights});
    });
};

    function create(req, res) {
        var flight = new Flight(req.body);
        flight.save(function(err) {
            if (err) return res.redirect('/flights/new');
            res.redirect('/flights');
        });
    };

    function newView() {
        res.render('flights/new', {title: 'Add Flight'});
    }