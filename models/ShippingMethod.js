const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ShippingMethodSchema = new Schema(
  {
    customId: {
      type: String,
      required: true
    },
    name: {
      type: String,
      required: true
    },
    description: {
      type: String
    },
    locations: {
      type: Schema.Types.Mixed,
      required: true
    },
    enabled: {
      type: Boolean,
      required: true,
      default: true
    },
    default: {
      type: Boolean,
      required: true,
      default: false
    },
    imageUrl: {
      type: String
    },
    costValue: {
      type: Number,
      required: true,
      default: 0
    },
    costType: {
      type: String,
      required: true,
      enum: ["fix", "percent"],
      default: "fix"
    },
    freeShippingOrderSum: {
      type: Number
    },
    period: {
      type: String
    },
    currency: {
      type: String
    },
    date: {
      type: Date,
      default: Date.now
    }
  },
  { strict: false }
);

module.exports = ShippingMethod = mongoose.model(
  "shipping-methods",
  ShippingMethodSchema,
  "shipping-methods"
);
