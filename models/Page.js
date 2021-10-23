const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const PageSchema = new Schema(
  {
    customId: {
      type: String,
      required: true
    },
    title: {
      type: String,
      required: true
    },
    images: [String],
    htmlContent: {
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

module.exports = Page = mongoose.model("pages", PageSchema);
