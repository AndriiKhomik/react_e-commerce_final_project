const express = require("express");
const router = express.Router();
const passport = require("passport"); // multer for parsing multipart form data (files)

//Import controllers
const {
  addShippingMethod,
  updateShippingMethod,
  deleteShippingMethod,
  getShippingMethods,
  getShippingMethodById
} = require("../controllers/shippingMethods");

// @route   POST /shipping-methods
// @desc    Create new shipping method
// @access  Private
router.post(
  "/",
  passport.authenticate("jwt-admin", { session: false }),
  addShippingMethod
);

// @route   PUT /shipping-methods/:customId
// @desc    Update existing shipping method
// @access  Private
router.put(
  "/:customId",
  passport.authenticate("jwt-admin", { session: false }),
  updateShippingMethod
);

// @route   DELETE /shipping-methods/:customId
// @desc    DELETE existing shipping method
// @access  Private
router.delete(
  "/:customId",
  passport.authenticate("jwt-admin", { session: false }),
  deleteShippingMethod
);

// @route   GET /shipping-methods
// @desc    GET existing shipping methods
// @access  Public
router.get("/", getShippingMethods);

// @route   GET /shipping-methods/:customId
// @desc    GET existing shipping methods by customId
// @access  Public
router.get("/:customId", getShippingMethodById);

module.exports = router;
