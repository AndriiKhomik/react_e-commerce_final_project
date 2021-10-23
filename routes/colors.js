const express = require("express");
const router = express.Router();
const passport = require("passport"); // multer for parsing multipart form data (files)

//Import controllers
const {
  addColor,
  updateColor,
  deleteColor,
  getColors
} = require("../controllers/colors");

// @route   POST /colors
// @desc    Create new color
// @access  Private
router.post(
  "/",
  passport.authenticate("jwt-admin", { session: false }),
  addColor
);

// @route   PUT /colors
// @desc    Update existing color
// @access  Private
router.put(
  "/:id",
  passport.authenticate("jwt-admin", { session: false }),
  updateColor
);

// @route   DELETE /colors/:id
// @desc    DELETE existing color
// @access  Private
router.delete(
  "/:id",
  passport.authenticate("jwt-admin", { session: false }),
  deleteColor
);

// @route   GET /colors
// @desc    GET existing colors
// @access  Public
router.get("/", getColors);

module.exports = router;
