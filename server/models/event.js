const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const EventSchema = new Schema({
    type : {
        type: String,
        required: true
    },
    productId: {
        type: Number
    }
});
const Event = mongoose.model('event', EventSchema)

module.exports = Event