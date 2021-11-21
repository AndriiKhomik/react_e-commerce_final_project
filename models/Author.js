const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const AuthorSchema = new Schema(
  {
    name: {
      type: String,
      required: true
    },
    dateOfBirth: {
      type: String,
      required: true
    },
    dateOfDeath: {
      type: String
    },
    biography: {
      type: String,
      required: true
    },
    popularBooks: [{
      type: String,
      required: true
    }],
    authorUrl: {
      type: String,
      required: true
    },
    date: {
      type: Date,
      default: Date.now
    }
  },
  { strict: false }
);

AuthorSchema.index({ "$**": "text" });

module.exports = Author = mongoose.model("authors", AuthorSchema);
