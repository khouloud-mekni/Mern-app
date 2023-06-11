const mongoose = require("mongoose");
const userSchema = new mongoose.Schema(
    {
        email: {
          type: String,
          required: true,
        },
        password: {
          type: String,
          required: true,
        },
        userName: {
          type: String,
          required: true,
        },
        userImg: {
          type: String,
        },
        isBanned: {
          type: Boolean,
          default: false,
        },
        isAdmin: {
          type: Boolean,
          default: false,
        },
        isVerified: {
          type: Boolean,
          default: false,
        },
        releaseDate: {
          type: String,
        },
      },
      { timestamps: true }
)
module.exports = User = mongoose.model("User", userSchema);