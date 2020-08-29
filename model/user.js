const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const UserSchema = new Schema({
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    userName: {
        type: String,
        unique: true,
        required: true,
        trim:true
    },
    phones:{
        type:String,
        required:true,
        unique:true,  
        trim:true,
    },
    email:{
        type:String,
        required:true,
        unique:true,  
        trim:true,
    },
    password:{
        type:String,
        required:true,
        trim:true,
        minlength:8
    },

    gender:{
        type:String,
        enum:['male','female']
    },
    avatar:{
        type:String,
        default:'man-default-avatar.jpg'
    },

    role:{
        type:String,
        enum:['user','admin']
    }


}
);


module.exports = mongoose.model('User', UserSchema);