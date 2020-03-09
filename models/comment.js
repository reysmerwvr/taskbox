const mongoose = require("mongoose");
const mongooseStringQuery = require("mongoose-string-query");
const timestamps = require("mongoose-timestamp");
const User = require("./user");

const CommentSchema = new mongoose.Schema(
  {
    body: {
      type: String,
      required: true,
      trim: true
    },
    author: {
      type: User,
      required: true
    },
    likes: {
      type: Number,
      required: false,
      default: 0
    },
    deletedAt: {
      type: Date,
      required: false
    }
  },
  { minimize: false }
);

CommentSchema.plugin(timestamps);
CommentSchema.plugin(mongooseStringQuery);

const Comment = mongoose.model("Comment", CommentSchema);
module.exports = Comment;
