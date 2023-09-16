const { Schema, model } = require('mongoose')

const UserSchema = new Schema({
    username: {
        type: String,
        required: true
    }
    ,
    password: {
        type: String,
        required: true
    }
    ,
    email: {
        type: String,
        required: true,
        unique: true
    },
    role: {
        type: String,
        required: true,
        default: "user"
    },
    profilepic: {
        type: String,
        default: "https://thumbs.dreamstime.com/b/default-avatar-profile-icon-vector-social-media-user-image-182145777.jpg"
    },
    joining:{
        type: Date,
        default: Date.now
    }
})
const User = model('user', UserSchema)
module.exports = User

