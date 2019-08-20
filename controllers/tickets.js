var Flight = require('../models/flight');
var Ticket = require('../models/ticket');

module.exports = {
    new: newTicket,
    create
};


function create(req, res) {
    req.body.flight = req.params.id;
    Ticket.create(req.body, function(err, ticket) {
        res.redirect(`/flights/${req.params.id}`)
    });
};

function newTicket(req, res) {
    Flight.findById(req.params.id, function(err, flight) {
        res.render('tickets/new', {
            title: 'Add Ticket',
            flight
        });
    });
};