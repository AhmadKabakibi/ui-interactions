const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const EventSchema = new Schema({

    type : {
        type: String,
        required: true
    },
    data: {
        type: Object
    }
});
const Event = mongoose.model('event', EventSchema)

module.exports = Event