const mongoose = require('mongoose');
const {ObjectId} = mongoose.Schema;

const UserSchema = new mongoose.Schema({
    username : {    
        type : String,
        required : true,
        unique : true
    },
    about   : {
        type : String,
        required : true
    },
    email : {
        type : String,
        required : true,
        trim : true,
        unique : true
    },
    phoneNumber : {
        type : String,
        required : true,
        unique : true
    },
    password : {
        type : String,
        required : true
    },
    firstName : {
        type : String,
        required : true
    },
    lastName : {
        type : String,
        required : true
    },
    isAdmin : {
        type : Boolean,
        default : false
    },
    birthDate : {
        type : Date,
        required : true
    },
    country : {
        type : String,
        required : true
    },
    channelId : {
        type : String,
        
    },
    sexuality : {
        type : String,
        required : true
    },
    following : [{type: ObjectId, ref: 'User'}],
    followers : [{type: ObjectId, ref: 'User'}],
    timestamp : {
        type : Date,
        default : Date.now
    }
});


module.exports = mongoose.model('User', UserSchema);