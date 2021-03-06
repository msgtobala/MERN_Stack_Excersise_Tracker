const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const userSchema = new Schema(
  {
    userName: {
      type: String,
      required: true,
      unique: true,
      trim: true,
      minLength: 3
    }
  },
  {
    timestamps: true // automatically creates a field for time which says when it is modified or created
  }
);

const User = mongoose.model('User', userSchema); // collection name

module.exports = User;
