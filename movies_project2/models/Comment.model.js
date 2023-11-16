const { Schema, model } = require("mongoose");

// TODO: INTEGRAR MEJOR VALIDACIÓN EN MODELOS
// TODO: INTEGRAR VALIDACIÓN CUSTOMIZADA

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
            required: true,
            minlength: [20, '20 characters required']
        }
        // likes: [{
        //     type: Schema.Types.ObjectId,
        //     ref: "User",
        // }]
    },
    {
        timestamps: true
    }
);

const Comment = model("Comment", commentSchema);

module.exports = Comment;
