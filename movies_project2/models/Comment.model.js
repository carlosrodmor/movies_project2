const { Schema, model } = require("mongoose");

const commentSchema = new Schema(
    {
        community: {
            type: Schema.Types.ObjectId,
            ref: 'Community'
        },
        user: {
            type: Schema.Types.ObjectId,
            ref: 'User'
        },
        text: {
            type: String,
            required: true
        },
        likes: [{
            type: Schema.Types.ObjectId,
            ref: "User",
        }]
    },
    {
        timestamps: true
    }
);

const Comment = model("Comment", commentSchema);

module.exports = Comment;
