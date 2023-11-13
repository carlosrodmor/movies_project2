const { Schema, model } = require("mongoose");

const userSchema = new Schema(
  {
    username: {
      type: String,
      trim: true,
      required: true,
      unique: true
    },
    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
      trim: true
    },
    password: {
      type: String,
      required: true
    },
    role: {
      type: String,
      enum: ['USER', 'ADMIN'],
      default: 'USER'
    },
    avatar: {
      type: String,
      default: "../images/male-avatar-profile-icon-of-smiling-caucasian-man-vector.jpg"
    }
  },
  {
    timestamps: true
  }
);

const User = model("User", userSchema);

module.exports = User;
