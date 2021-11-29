const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const LinkSchema = new Schema(
  {
    title: {
      type: String
    },
    links: [
      {
        description: {
          type: String,
          required: true
        },
        url: {
          type: String,
          required: true
        }
      }
    ],
    date: {
      type: Date,
      default: Date.now
    }
  },
  { strict: false }
);

module.exports = Link = mongoose.model("links", LinkSchema);
