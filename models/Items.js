const mongoose = require('mongoose');

const Schema = mongoose.Schema;     // document schema is a json object that allows definition of the shape and content of the documents and embed documents in a collection


// Create Schema
const ItemSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    date:{
        type: Date,
        default: Date.now
    }
});

module.exports = Item = mongoose.model('item', ItemSchema);