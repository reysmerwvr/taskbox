const mongoose = require('mongoose');
const mongooseStringQuery = require('mongoose-string-query');
const timestamps = require('mongoose-timestamp');

const UserSchema = new mongoose.Schema(
    {
      name: {
        type: String,
        required: false,
        trim: true,
        maxlength: 100,
      },
      gender: {
        type: String,
        required: false,
        trim: true,
        enum: ['M', 'F'],
      },
      birthOfDate: {
        type: Date,
        required: false,
      },
      profilePicture: {
        type: String,
        required: false,
        trim: true,
        maxlength: 254,
      },
      email: {
        type: String,
        required: true,
        trim: true,
        maxlength: 254,
        index: true,
        unique: true,
        lowercase: true,
      },
      password: {
        type: String,
        required: false,
        trim: true,
        maxlength: 254,
      },
      deletedAt: {
        type: Date,
        required: false,
      },
    },
    {minimize: false}
);

UserSchema.methods.toJSON = function() {
  const obj = this.toObject();
  delete obj.password;
  return obj;
};

UserSchema.plugin(timestamps);
UserSchema.plugin(mongooseStringQuery);

const User = mongoose.model('User', UserSchema);
module.exports = User;