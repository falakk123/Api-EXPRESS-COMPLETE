const { Schema, model } = require('mongoose')
const CategorySchema = new Schema({

    categoryName: {
        type: String,
        required: true,
    },
    categoryImages: {
        type: String,
        required: true
    },
    joining:{
        type: Date,
        default: Date.now
    }
    
})
const Category = model('category', CategorySchema)
module.exports = { Category }