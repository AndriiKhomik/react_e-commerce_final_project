const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const AuthorSchema = new Schema(
  {
    name: {
      type: String,
      required: true
    },
    dateOfBirth: {
      type: String
    },
    dateOfDeath: {
      type: String
    },
    biography: {
      type: String,
      required: true
    },
    popularBooks: [{
      type: String
    }],
    authorUrl: {
      type: String
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
