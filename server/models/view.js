const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ViewSchema = new Schema({

    type : {
        type: String,
        required: true
    },
    pageName: {
        type: String
    },
    productsCount: {
        type: Number
    }
});
const View = mongoose.model('View', ViewSchema)

module.exports = View