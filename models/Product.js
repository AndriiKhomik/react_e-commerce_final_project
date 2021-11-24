const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ProductSchema = new Schema(
  {
    itemNo: {
      type: String,
      required: true
    },
    enabled: {
      type: Boolean,
      required: true,
      default: true
    },
    name: {
      type: String,
      required: true
    },
    author: {
      type: Schema.Types.ObjectId,
      ref: 'authors'
    },
    categories: {
      type: String,
      required: true
    },
    currentPrice: {
      type: Number,
      required: true
    },
    previousPrice: {
      type: Number
    },
    imageUrls: [{
      type: String
    }],
    quantity: {
      type: Number,
      required: true,
      default: 0
    },
    publisher: {
      type: String
    },
    shortDescription: {
      type: String,
      required: true,
    },
    fullDescription: {
      type: String,
      required: true,
    },
    yearOfPublishing: {
      type: Date,
      required: true,
    },
    genre: {
      type: String,
      enum: ['children-literature', 'fiction', 'business-literature', 'adventures', 'non-fiction'],
      required: true,
    },
    date: {
      type: Date,
      default: Date.now
    },
    numberOfPages: {
      type: Number
    },
    coverType: {
      type: String,
      enum: ['soft', 'hard']
    },
    duration: {
      type: Number
    },
  },
  { strict: false }
);

ProductSchema.index({ "$**": "text" });

module.exports = Product = mongoose.model("products", ProductSchema);
