const mongoose = require('mongoose');

const Schema = mongoose.Schema;
const commentSchema = new Schema({
    commentContent: {
        type: String,
        trim: true,
        required: true,
    },

    createdAt: {
        type: Date,
        required: true,
        default: Date.now
    },

    author: {
        type: Schema.Types.ObjectId,
        ref: "User",
        required: true
    },
    
    belongsTo: {
        type: Schema.Types.ObjectId,
        ref: "Article",
        required: true
    },

    parentID: {
        type: Schema.Types.ObjectId,
        ref: "Comment",
    },

    confirm: {
        type: Boolean,
        default: false ,
        required: true
    }


})

module.exports =mongoose.model('Comment',commentSchema)