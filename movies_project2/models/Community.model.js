const { Schema, model } = require("mongoose");

const communitySchema = new Schema(
    {
        name: {
            type: String,
        },
        description: {
            type: String,
        },
        members: [{
            type: Schema.Types.ObjectId,
            ref: 'User'
        }]
    },
    {
        timestamps: true
    }
);

const Community = model("Community", communitySchema);

module.exports = Community;