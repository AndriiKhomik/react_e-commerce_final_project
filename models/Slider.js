const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const SliderSchema = new Schema(
  {
    customId: {
      type: String,
      required: true
    },
    title: String,
    subtitle: String,
    imageUrlS: {
      type: String,
      required: true
    },
    imageUrlM: {
      type: String,
      required: true
    },
    imageUrlL: {
      type: String,
      required: true
    },
    description: String,
    terms: String,
    htmlContent: String,
    product: {
      type: Schema.Types.ObjectId,
      ref: "products"
    },
    category: {
      type: Schema.Types.ObjectId,
      ref: "catalogs"
    },
    customer: {
      type: Schema.Types.ObjectId,
      ref: "customers"
    },
    date: {
      type: Date,
      default: Date.now
    }
  },
  { strict: false }
);

module.exports = Slider = mongoose.model("slides", SliderSchema, "slides");
