const mongoose = require("mongoose");
const mongooseStringQuery = require("mongoose-string-query");
const timestamps = require("mongoose-timestamp");
const User = require("./user");
const Comment = require("./comment");

const ConversationSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      trim: true,
      maxlength: 100
    },
    author: {
      type: User,
      required: true
    },
    description: {
      type: String,
      required: false,
      trim: true,
      maxlength: 254
    },
    permaLink: {
      type: String,
      required: false,
      trim: true,
      maxlength: 100
    },
    likes: {
      type: Number,
      required: false,
      default: 0
    },
    comments: [Comment],
    collaborators: [User],
    deletedAt: {
      type: Date,
      required: false
    }
  },
  { minimize: false }
);

ConversationSchema.plugin(timestamps);
ConversationSchema.plugin(mongooseStringQuery);

const Conversation = mongoose.model("Conversation", ConversationSchema);
module.exports = Conversation;
