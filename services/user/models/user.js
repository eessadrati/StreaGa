const mongoose = require('mongoose');
const {ObjectId} = mongoose.Schema;

const UserSchema = new mongoose.Schema({
    username : {    
        type : String,
        required : true,
        unique : true
    },
    about   : {
        type : String
    },
    email : {
        type : String,
        trim : true,
        unique : true
    },
    phoneNumber : {
        type : String,
        unique : true
    },salt: {type : String},
    hashed_password: {
        type: String
    },
    firstName : {
        type : String,
        required : true
    },
    profileImg: {
        url: {
          type: String,
          default: "",
        },
        cloudinary_id: {
          type: String,
          default: "",
        },
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
        default:''
    },
    country : {
        type : String,
        default:''
    },
    channelId : {
        type : String,
    },
    gender : {
        type : String,
        default:''
    },
    followedChannels:{
        type:Array,
        default:[]
    },
    channels:{
        type:Array,
        default:[]
    },
    timestamp : {
        type : Date,
        default : Date.now
    }
});


module.exports = mongoose.model('User', UserSchema);