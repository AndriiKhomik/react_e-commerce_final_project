const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const PartnerSchema = new Schema(
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
    enabled: {
      type: Boolean,
      required: true,
      default: true
    },
    imageUrl: {
      type: String
    },
    url: {
      type: String
    },
    date: {
      type: Date,
      default: Date.now
    }
  },
  { strict: false }
);

module.exports = Partner = mongoose.model("partners", PartnerSchema);
