const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const CommentSchema = new Schema(
  {
    customer: {
      type: Schema.Types.ObjectId,
      ref: "customers",
      required: true
    },
    product: {
      type: Schema.Types.ObjectId,
      ref: "products",
      required: true
    },
    category: {
      type: Schema.Types.ObjectId,
      ref: "catalogs"
    },
    content: {
      type: String,
      required: true
    }
  },
  { strict: false }
);

module.exports = Comment = mongoose.model("comments", CommentSchema);
