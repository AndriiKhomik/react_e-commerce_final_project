const express = require("express");
const router = express.Router();
const passport = require("passport"); // multer for parsing multipart form data (files)

//Import controllers
const {
  addPaymentMethod,
  updatePaymentMethod,
  deletePaymentMethod,
  getPaymentMethods,
  getPaymentMethodById
} = require("../controllers/paymentMethods");

// @route   POST /payment-methods
// @desc    Create new payment method
// @access  Private
router.post(
  "/",
  passport.authenticate("jwt-admin", { session: false }),
  addPaymentMethod
);

// @route   PUT /payment-methods/:customId
// @desc    Update existing payment method
// @access  Private
router.put(
  "/:customId",
  passport.authenticate("jwt-admin", { session: false }),
  updatePaymentMethod
);

// @route   DELETE /payment-methods/:customId
// @desc    DELETE existing payment method
// @access  Private
router.delete(
  "/:customId",
  passport.authenticate("jwt-admin", { session: false }),
  deletePaymentMethod
);

// @route   GET /payment-methods
// @desc    GET existing payment methods
// @access  Public
router.get("/", getPaymentMethods);

// @route   GET /payment-methods/:customId
// @desc    GET existing payment methods by customId
// @access  Public
router.get("/:customId", getPaymentMethodById);

module.exports = router;
