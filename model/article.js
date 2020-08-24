const mogoose = require('mongoose');

const Schema = mogoose.Schema;
const ArticleSchema = new Schema({
    title: {
        type: String,
        required: true,
        trim: true,
        maxlength: 300,
        minlength: 3
    },
    description: {
        type: String,
        required: true,
        trim: true,

    },
    content: {
        type: String,
        required: true,
        trim: true,
    },
    createdAt: {
        type: Date,
        required: true,
        default: Date.now
    },
    articleImage: {
        type: String,
        required: true,
    },
    views: {
        type: Number,
        required: true,
        default: 0
    },
    author: {
        type: Schema.Types.ObjectId,
        ref: "User",
        required: true
    },
    publish: {
        type: Boolean,
        required: true,
        default: false
    }


})

module.exports = mogoose.model("Article", ArticleSchema)