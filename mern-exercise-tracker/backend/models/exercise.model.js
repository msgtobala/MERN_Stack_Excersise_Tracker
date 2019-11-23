const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const exerciseSchema = new Schema(
  {
    username: { type: String, required: true },
    description: { type: String, required: true },
    duration: { type: Number, required: true },
    date: { type: Date, required: true }
  },
  {
    timestamps: true // automatically creates a field for time which says when it is modified or created
  }
);

const Exercise = mongoose.model('Exercise', exerciseSchema); // collection name

module.exports = Exercise;
