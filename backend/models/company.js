const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const companySchema = new Schema({
    market_cap: {
        type: String,
        trim: true,
        maxlength: 20,
        required: true
    },
    current_price: {
        type: String,
        trim: true,
        maxlength: 20,
        required: true
    },
    stock: {
        type: String,
        trim: true,
        maxlength: 20,
        required: true
    },
    yeald: {
        type: String,
        trim: true,
        maxlength: 20,
        required: true
    },
    roce: {
        type: String,
        trim: true,
        maxlength: 20,
        required: true
    },
    roe: {
        type: String,
        trim: true,
        maxlength: 20,
        required: true
    },
    equity: {
        type: String,
        trim: true,
        maxlength: 20,
        required: true
    },
    eps: {
        type: String,
        trim: true,
        maxlength: 20,
        required: true
    },
    reserves: {
        type: String,
        trim: true,
        maxlength: 20,
        required: true
    },
    Debt: {
        type: String,
        trim: true,
        maxlength: 20,
        required: true
    },
    about: {
        type: String,
        trim: true,
        maxlength: 200,
        require: true
    },
    website: {
        type: String,
        trim: true,
        maxlength: 50,
        require: true
    },
    keypoint: {
        type: String,
        trim: true,
        maxlength: 50,
        require: true
    },
    featured: false
})

companySchema.index({'$**': 'text'});
module.exports = mongoose.model("Company", companySchema);