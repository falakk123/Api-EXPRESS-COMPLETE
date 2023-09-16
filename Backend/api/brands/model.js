const { Schema, model } = require('mongoose')
const BrandsSchema = new Schema({

    brand: {
        type: String,
        required: true,
    },
    Images: {
        type: String,
        required: true
    },
    joining:{
        type: Date,
        default: Date.now
    }
    
})
const  Brands= model('brands', BrandsSchema)
module.exports = { Brands }