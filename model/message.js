const mongoose = require('mongoose');

const Schema = mongoose.Schema;
const MessageSchema = new Schema({
    messageContent: {
        type: String,
        trim: true,
        required: true,
    },

    createdAt: {
        type: Date,
        required: true,
        default: Date.now
    },

    sender: {
        type: Schema.Types.ObjectId,
        ref: "User",
        required: true
    },
    
    receiver: {
        type: Schema.Types.ObjectId,
        ref: "User",
        required: true
    },

})

module.exports =mongoose.model('Message',MessageSchema)