var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var destinationSchema = new Schema({
    airport: {
        type: String,
        enum: ['AUS', 'DAL', 'LAX', 'SEA']
    },
    arrival: {
        type: Date
    }
},{
    timestamps: true
});

var flightSchema = new Schema ({
    airline: {
        type: String,
        enum: ['American', 'Southwest', 'United'],
    },
    flightNo: {
        type: Number,
        min: 10,
        max: 9999
    },
    departs: {
        type: Date,
        default: function () {
            var oneYLater = new Date();
            oneYLater.setFullYear(oneYLater.getFullYear() + 1);
            return oneYLater.toLocaleDateString();
        }
    },
    airport: {
        type: String,
        enum: ['AUS', 'DAL', 'LAX', 'SEA'],
        default: 'SEA'
    },
    destinations: [destinationSchema],
}, {
    timestamps: true
});


module.exports = mongoose.model('Flight', flightSchema);