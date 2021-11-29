const express = require("express");
const router = express.Router();
const passport = require("passport"); // multer for parsing multipart form data (files)

//Import controllers
const {
  addSlide,
  updateSlide,
  deleteSlide,
  getSlides
} = require("../controllers/slides");

// @route   POST /slides
// @desc    Create new slide
// @access  Private
router.post(
  "/",
  passport.authenticate("jwt-admin", { session: false }),
  addSlide
);

// @route   PUT /slides/:id
// @desc    Update existing slide
// @access  Private
router.put(
  "/:customId",
  passport.authenticate("jwt-admin", { session: false }),
  updateSlide
);

// @route   DELETE /slides/:id
// @desc    Delete existing slide
// @access  Private
router.delete(
  "/:customId",
  passport.authenticate("jwt-admin", { session: false }),
  deleteSlide
);

// @route   GET /slides
// @desc    GET existing slides
// @access  Public
router.get("/", getSlides);

module.exports = router;
