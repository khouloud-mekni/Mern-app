const mongoose = require("mongoose");
const authorSchema = new mongoose.Schema(
  {
    email: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
    fullName: {
      type: String,
      required: true,
    },
    bio: {
      type: String,
    },
    authImg: {
      type: String,
    },
    isAuthor: {
      type: Boolean,
      default: true,
    },
    isBanned: {
      type: Boolean,
      default: false,
    },
    isVerified: {
      type: Boolean,
      default: false,
    },
  //   books:[{
  //     book:{type: mongoose.Schema.Types.ObjectId, 
  //     ref: "Book" }
  // }]
  },
  { timestamps: true }
);

module.exports = Author = mongoose.model("Author", authorSchema);