const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const PaymentMethodSchema = new Schema(
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
    default: {
      type: Boolean,
      required: true,
      default: false
    },
    imageUrl: {
      type: String
    },
    paymentProcessor: {
      type: Schema.Types.Mixed
    },
    date: {
      type: Date,
      default: Date.now
    }
  },
  { strict: false }
);

module.exports = PaymentMethod = mongoose.model(
  "payment-methods",
  PaymentMethodSchema,
  "payment-methods"
);
