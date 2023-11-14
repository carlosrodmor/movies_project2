const { Schema, model } = require("mongoose");

const communitySchema = new Schema(
    {
        name: {
            type: String,
        },
        description: {
            type: String,
        },
        cover: {
            type: String,
            default: "../images/male-avatar-profile-icon-of-smiling-caucasian-man-vector.jpg"
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