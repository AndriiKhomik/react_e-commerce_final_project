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
    imageUrls: [
      {
        type: String,
        required: true
      }
    ],
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
      type: Number,
      required: true,
    },
    genre: {
      type: String,
      required: true,
    },
    date: {
      type: Date,
      default: Date.now
    },
    // Depands on format

    numberOfPages: {
      type: Number
    },
    coverType: {
      type: String,
    },
    duration: {
      type: Number
    },
    // format: {
    //   type: String,
    //   required: true,
    //   default: 'paper'
    // },
    // productUrl: {
    //   type: String
    // },
    // color: {
    //   type: String
    // },
    // sizes: {
    //   type: String
    // },
    // brand: {
    //   type: String
    // },
    // manufacturerCountry: {
    //   type: String
    // },
    // seller: {
    //   type: String
    // },
  },
  { strict: false }
);

ProductSchema.index({ "$**": "text" });

module.exports = Product = mongoose.model("products", ProductSchema);
